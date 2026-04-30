import { useState, useEffect } from 'react';
import type {
  Exam,
  ExamPart,
  MCClozePart,
  OpenClozePart,
  WordFormationPart,
  KWTPart,
  ReadingMCQPart,
  CrossTextPart,
  GappedTextPart,
  MultipleMatchingPart,
} from '../../data/exercises/types';

interface Props {
  exam: Exam;
  unlockUrl: string;
}

type PartAnswers = Record<number, string>;

const PART_LABELS: Record<string, string> = {
  'mc-cloze':               'USE OF ENGLISH · PART 1 — Multiple-choice cloze',
  'open-cloze':             'USE OF ENGLISH · PART 2 — Open cloze',
  'word-formation':         'USE OF ENGLISH · PART 3 — Word formation',
  'key-word-transformation':'USE OF ENGLISH · PART 4 — Key word transformations',
  'reading-mcq':            'READING · PART 5 — Multiple choice',
  'cross-text':             'READING · PART 6 — Cross-text multiple matching',
  'gapped-text':            'READING · PART 7 — Gapped text',
  'multiple-matching':      'READING · PART 8 — Multiple matching',
};

function isCorrect(part: ExamPart, qNum: number, userAnswer: string): boolean {
  const ua = (userAnswer || '').toLowerCase().trim();
  if (!ua) return false;
  if (part.type === 'mc-cloze' || part.type === 'reading-mcq' || part.type === 'gapped-text' || part.type === 'multiple-matching') {
    const q = part.questions.find(q => q.number === qNum);
    return q ? ua === q.answer.toLowerCase() : false;
  }
  if (part.type === 'open-cloze') {
    const q = part.questions.find(q => q.number === qNum);
    return q ? q.acceptedAnswers.some(a => a.toLowerCase().trim() === ua) : false;
  }
  if (part.type === 'word-formation' || part.type === 'key-word-transformation') {
    const q = part.questions.find(q => q.number === qNum);
    return q ? q.answer.toLowerCase().trim() === ua : false;
  }
  return false;
}

function getScore(part: ExamPart, answers: PartAnswers): number {
  return part.questions.filter(q => isCorrect(part, q.number, answers[q.number] || '')).length;
}

function blankStyle(correct: boolean | null): string {
  if (correct === null) return 'border-hacker-dim text-hacker-dim';
  return correct ? 'border-hacker-green text-hacker-green' : 'border-hacker-red text-hacker-red';
}

export default function ExamPlayer({ exam, unlockUrl }: Props) {
  const [hasAccess, setHasAccess] = useState(false);
  const [currentPart, setCurrentPart] = useState(0);
  const [answers, setAnswers] = useState<PartAnswers[]>(() => exam.parts.map(() => ({})));
  const [submitted, setSubmitted] = useState<boolean[]>(() => exam.parts.map(() => false));

  useEffect(() => {
    setHasAccess(localStorage.getItem(`teh_unlocked_${exam.level}`) === 'true');
  }, [exam.level]);

  if (!hasAccess) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center space-y-6">
        <div className="text-xs text-hacker-dim">// ACCESS_DENIED</div>
        <h2 className="text-3xl font-bold text-hacker-red">[ LOCKED ]</h2>
        <p className="text-sm text-hacker-dim max-w-sm mx-auto">
          This full exam requires B2 access. Unlock the complete pack for one-time 7€.
        </p>
        <a
          href={unlockUrl}
          className="inline-block bg-hacker-green text-hacker-bg px-8 py-3 font-bold text-sm hover:bg-hacker-green-dim transition-colors"
        >
          &gt;_ UNLOCK B2 FULL ACCESS — 7€
        </a>
      </div>
    );
  }

  const part = exam.parts[currentPart];
  const partAnswers = answers[currentPart];
  const isSubmitted = submitted[currentPart];
  const score = isSubmitted ? getScore(part, partAnswers) : 0;
  const total = part.questions.length;

  function setAnswer(qNum: number, value: string) {
    setAnswers(prev => {
      const next = [...prev];
      next[currentPart] = { ...next[currentPart], [qNum]: value };
      return next;
    });
  }

  function handleSubmit() {
    const allAnswered = part.questions.every(q => (partAnswers[q.number] || '').trim() !== '');
    if (!allAnswered) {
      alert('Answer all questions before submitting.');
      return;
    }
    setSubmitted(prev => { const n = [...prev]; n[currentPart] = true; return n; });
  }

  // ── Passage with inline blanks (mc-cloze shows selected letter; open/word show inputs) ──
  function renderPassage(
    textParts: string[],
    questions: Array<{ number: number }>,
    mode: 'select' | 'text',
  ) {
    return (
      <p className="leading-9 text-sm text-hacker-text">
        {textParts.map((seg, i) => (
          <span key={i}>
            {seg}
            {i < questions.length && (() => {
              const q = questions[i];
              const val = partAnswers[q.number] || '';
              const checked = isSubmitted ? isCorrect(part, q.number, val) : null;
              if (mode === 'select') {
                return (
                  <span className={`inline-block border-b-2 px-2 mx-1 text-xs font-bold min-w-[48px] text-center ${blankStyle(checked)}`}>
                    {val || `(${i + 1})`}
                  </span>
                );
              }
              return (
                <input
                  type="text"
                  value={val}
                  onChange={e => !isSubmitted && setAnswer(q.number, e.target.value)}
                  disabled={isSubmitted}
                  placeholder={`(${i + 1})`}
                  className={`inline-block border-b bg-transparent text-xs font-bold px-1 mx-1 w-28 outline-none disabled:opacity-80 ${
                    isSubmitted ? (checked ? 'border-hacker-green text-hacker-green' : 'border-hacker-red text-hacker-red') : 'border-hacker-green text-hacker-green'
                  }`}
                />
              );
            })()}
          </span>
        ))}
      </p>
    );
  }

  // ── Part renderers ──

  function renderMCCloze(p: MCClozePart) {
    return (
      <div className="space-y-8">
        <div className="border border-hacker-border p-5 space-y-3">
          <div className="text-xs text-hacker-dim">// READ THE TEXT · CHOOSE A, B, C OR D FOR EACH BLANK</div>
          {renderPassage(p.textParts, p.questions, 'select')}
        </div>
        <div className="space-y-3">
          {p.questions.map(q => (
            <div key={q.number} className="border border-hacker-border p-4">
              <div className="text-xs text-hacker-dim mb-3">// Q_{String(q.number).padStart(2, '0')}</div>
              <div className="grid grid-cols-2 gap-2">
                {q.options.map(opt => {
                  const sel = partAnswers[q.number] === opt.value;
                  const correct = opt.value === q.answer;
                  let cls = 'border-hacker-border text-hacker-dim hover:border-hacker-green hover:text-hacker-green';
                  if (isSubmitted) {
                    if (correct) cls = 'border-hacker-green text-hacker-green bg-hacker-green/5';
                    else if (sel) cls = 'border-hacker-red text-hacker-red bg-hacker-red/5';
                    else cls = 'border-hacker-border text-hacker-dim opacity-40';
                  } else if (sel) {
                    cls = 'border-hacker-green text-hacker-green';
                  }
                  return (
                    <button
                      key={opt.value}
                      disabled={isSubmitted}
                      onClick={() => !isSubmitted && setAnswer(q.number, opt.value)}
                      className={`border px-3 py-2 text-left text-xs transition-colors disabled:cursor-default ${cls}`}
                    >
                      <span className="font-bold mr-2">{opt.value}</span>{opt.label}
                    </button>
                  );
                })}
              </div>
              {isSubmitted && (
                <div className="mt-3 pt-3 border-t border-hacker-border text-xs">
                  <span className={partAnswers[q.number] === q.answer ? 'text-hacker-green' : 'text-hacker-red'}>
                    {partAnswers[q.number] === q.answer ? '✓ CORRECT' : `✗ INCORRECT — Answer: ${q.answer}`}
                  </span>
                  {q.explanation && <span className="ml-3 text-hacker-dim">{q.explanation}</span>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  function renderOpenCloze(p: OpenClozePart) {
    return (
      <div className="space-y-8">
        <div className="border border-hacker-border p-5 space-y-3">
          <div className="text-xs text-hacker-dim">// READ THE TEXT · WRITE ONE WORD IN EACH BLANK</div>
          {renderPassage(p.textParts, p.questions, 'text')}
        </div>
        {isSubmitted && (
          <div className="space-y-2">
            {p.questions.map(q => {
              const correct = isCorrect(part, q.number, partAnswers[q.number] || '');
              return (
                <div key={q.number} className="text-xs border border-hacker-border p-3 flex flex-wrap gap-3">
                  <span className={`font-bold w-8 shrink-0 ${correct ? 'text-hacker-green' : 'text-hacker-red'}`}>
                    ({q.number}) {correct ? '✓' : '✗'}
                  </span>
                  {!correct && (
                    <span className="text-hacker-amber">
                      Answer: {q.acceptedAnswers.join(' / ')}
                    </span>
                  )}
                  <span className="text-hacker-dim flex-1">{q.explanation}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  function renderWordFormation(p: WordFormationPart) {
    return (
      <div className="space-y-8">
        <div className="border border-hacker-border p-5 space-y-3">
          <div className="text-xs text-hacker-dim">// READ THE TEXT · FORM A WORD FROM THE CAPITALISED WORD AT THE END OF EACH LINE</div>
          {renderPassage(p.textParts, p.questions, 'text')}
        </div>
        <div className="space-y-2">
          {p.questions.map(q => {
            const correct = isCorrect(part, q.number, partAnswers[q.number] || '');
            return (
              <div key={q.number} className="border border-hacker-border p-3 flex items-start gap-4 text-xs">
                <span className="text-hacker-dim w-6 shrink-0">({q.number})</span>
                <span className="text-hacker-amber font-bold w-24 shrink-0">{q.givenWord}</span>
                {isSubmitted ? (
                  <>
                    <span className={`font-bold mr-3 ${correct ? 'text-hacker-green' : 'text-hacker-red'}`}>
                      {correct ? `✓ ${q.answer}` : `✗ ${partAnswers[q.number] || '—'} → ${q.answer}`}
                    </span>
                    <span className="text-hacker-dim">{q.explanation}</span>
                  </>
                ) : (
                  <input
                    type="text"
                    value={partAnswers[q.number] || ''}
                    onChange={e => setAnswer(q.number, e.target.value)}
                    placeholder="your answer..."
                    className="bg-transparent border-b border-hacker-green text-hacker-green text-xs px-1 outline-none w-36"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  function renderKWT(p: KWTPart) {
    return (
      <div className="space-y-4">
        <div className="text-xs text-hacker-dim mb-2">// COMPLETE THE SECOND SENTENCE USING THE KEYWORD — USE 2 TO 5 WORDS INCLUDING THE KEYWORD</div>
        {p.questions.map(q => {
          const correct = isCorrect(part, q.number, partAnswers[q.number] || '');
          return (
            <div key={q.number} className="border border-hacker-border p-4 space-y-3">
              <div className="text-xs text-hacker-dim">// Q_{String(q.number).padStart(2, '0')}</div>
              <p className="text-sm text-hacker-text">{q.sentence1}</p>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-hacker-green text-hacker-bg px-2 py-0.5 font-bold shrink-0">{q.keyword}</span>
              </div>
              <div className="text-sm text-hacker-dim flex flex-wrap items-center gap-1">
                <span>{q.sentence2Begin}</span>
                {isSubmitted ? (
                  <span className={`font-bold px-1 ${correct ? 'text-hacker-green' : 'text-hacker-red'}`}>
                    {partAnswers[q.number] || '—'}
                  </span>
                ) : (
                  <input
                    type="text"
                    value={partAnswers[q.number] || ''}
                    onChange={e => setAnswer(q.number, e.target.value)}
                    placeholder="2–5 words..."
                    className="bg-transparent border-b border-hacker-green text-hacker-green text-xs px-1 outline-none w-44"
                  />
                )}
                <span>{q.sentence2End}</span>
              </div>
              {isSubmitted && (
                <div className="text-xs pt-2 border-t border-hacker-border">
                  <span className={correct ? 'text-hacker-green' : 'text-hacker-red'}>
                    {correct ? '✓ CORRECT' : `✗ Answer: ${q.answer}`}
                  </span>
                  {q.explanation && <span className="ml-3 text-hacker-dim">{q.explanation}</span>}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  function renderReadingMCQ(p: ReadingMCQPart) {
    return (
      <div className="space-y-8">
        <div className="border border-hacker-border p-5">
          <div className="text-xs text-hacker-dim mb-3">// READ THE ARTICLE</div>
          <p className="text-sm text-hacker-text leading-7 whitespace-pre-wrap">{p.text}</p>
        </div>
        <div className="space-y-4">
          <div className="text-xs text-hacker-dim">// CHOOSE THE ANSWER (A, B, C OR D) WHICH FITS BEST ACCORDING TO THE TEXT</div>
          {p.questions.map(q => (
            <div key={q.number} className="border border-hacker-border p-4 space-y-3">
              <div className="text-xs text-hacker-dim">// Q_{String(q.number).padStart(2, '0')}</div>
              <p className="text-sm text-hacker-text">{q.question}</p>
              <div className="space-y-2">
                {q.options.map(opt => {
                  const sel = partAnswers[q.number] === opt.value;
                  const correct = opt.value === q.answer;
                  let cls = 'border-hacker-border text-hacker-dim hover:border-hacker-green hover:text-hacker-green';
                  if (isSubmitted) {
                    if (correct) cls = 'border-hacker-green text-hacker-green bg-hacker-green/5';
                    else if (sel) cls = 'border-hacker-red text-hacker-red bg-hacker-red/5';
                    else cls = 'border-hacker-border text-hacker-dim opacity-40';
                  } else if (sel) {
                    cls = 'border-hacker-green text-hacker-green';
                  }
                  return (
                    <button
                      key={opt.value}
                      disabled={isSubmitted}
                      onClick={() => !isSubmitted && setAnswer(q.number, opt.value)}
                      className={`border w-full px-3 py-2 text-left text-xs transition-colors disabled:cursor-default ${cls}`}
                    >
                      <span className="font-bold mr-2">{opt.value}</span>{opt.label}
                    </button>
                  );
                })}
              </div>
              {isSubmitted && q.explanation && (
                <div className="pt-2 border-t border-hacker-border text-xs">
                  <span className={partAnswers[q.number] === q.answer ? 'text-hacker-green' : 'text-hacker-red'}>
                    {partAnswers[q.number] === q.answer ? '✓ CORRECT' : `✗ Answer: ${q.answer}`}
                  </span>
                  <span className="ml-3 text-hacker-dim">{q.explanation}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  function renderGappedText(p: GappedTextPart) {
    const gapNums = p.questions.map(q => q.number);
    return (
      <div className="space-y-8">
        <div className="border border-hacker-border p-5">
          <div className="text-xs text-hacker-dim mb-3">// READ THE ARTICLE — SIX SENTENCES HAVE BEEN REMOVED</div>
          <div className="text-sm text-hacker-text leading-8">
            {p.textParts.map((seg, i) => (
              <span key={i}>
                {seg}
                {i < p.questions.length && (() => {
                  const qNum = gapNums[i];
                  const val = partAnswers[qNum] || '';
                  const checked = isSubmitted ? isCorrect(part, qNum, val) : null;
                  return (
                    <span className={`inline-block border-b-2 px-2 mx-1 text-xs font-bold min-w-[52px] text-center ${blankStyle(checked)}`}>
                      {val || `[${qNum}]`}
                    </span>
                  );
                })()}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-xs text-hacker-dim mb-2">// SENTENCES A–G (ONE IS EXTRA)</div>
          {p.sentences.map(s => (
            <div key={s.label} className="text-xs border border-hacker-border p-3 flex gap-3">
              <span className="font-bold text-hacker-green w-6 shrink-0">{s.label}</span>
              <span className="text-hacker-dim">{s.text}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <div className="text-xs text-hacker-dim">// CHOOSE THE SENTENCE THAT FILLS EACH GAP</div>
          {p.questions.map(q => {
            const correct = isCorrect(part, q.number, partAnswers[q.number] || '');
            const usedElsewhere = (lbl: string) =>
              lbl !== partAnswers[q.number] && Object.values(partAnswers).includes(lbl);
            return (
              <div key={q.number} className="border border-hacker-border p-3 space-y-2">
                <div className="text-xs text-hacker-dim">Gap [{q.number}]</div>
                <div className="flex flex-wrap gap-2">
                  {(['A','B','C','D','E','F','G'] as const).map(lbl => {
                    const sel = partAnswers[q.number] === lbl;
                    let cls = 'border-hacker-border text-hacker-dim hover:border-hacker-green hover:text-hacker-green';
                    if (isSubmitted) {
                      if (lbl === q.answer) cls = 'border-hacker-green text-hacker-green bg-hacker-green/5';
                      else if (sel) cls = 'border-hacker-red text-hacker-red bg-hacker-red/5';
                      else cls = 'border-hacker-border text-hacker-dim opacity-30';
                    } else if (sel) {
                      cls = 'border-hacker-green text-hacker-green bg-hacker-green/5';
                    } else if (usedElsewhere(lbl)) {
                      cls = 'border-hacker-amber text-hacker-amber opacity-50';
                    }
                    return (
                      <button
                        key={lbl}
                        disabled={isSubmitted}
                        onClick={() => !isSubmitted && setAnswer(q.number, lbl)}
                        className={`border px-3 py-1.5 text-xs font-bold transition-colors disabled:cursor-default ${cls}`}
                      >
                        {lbl}
                      </button>
                    );
                  })}
                </div>
                {isSubmitted && q.explanation && (
                  <div className="text-xs text-hacker-dim mt-1">
                    <span className={`mr-2 ${correct ? 'text-hacker-green' : 'text-hacker-red'}`}>
                      {correct ? '✓' : `✗ Answer: ${q.answer}`}
                    </span>
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  function renderCrossText(p: CrossTextPart) {
    return (
      <div className="space-y-8">
        <div className="text-xs text-hacker-dim mb-2">{p.intro}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {p.texts.map(t => (
            <div key={t.label} className="border border-hacker-border p-4">
              <div className="text-xs font-bold text-hacker-green mb-2">{t.label}: {t.name}</div>
              <p className="text-xs text-hacker-dim leading-6">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <div className="text-xs text-hacker-dim mb-2">// CHOOSE WHICH EXPERT (A–D) MATCHES EACH QUESTION</div>
          {p.questions.map(q => {
            const correct = isCorrect(part, q.number, partAnswers[q.number] || '');
            return (
              <div key={q.number} className="border border-hacker-border p-3 flex gap-4 items-start">
                <div className="flex gap-1 shrink-0 mt-0.5">
                  {(['A','B','C','D'] as const).map(lbl => {
                    const sel = partAnswers[q.number] === lbl;
                    let cls = 'border-hacker-border text-hacker-dim hover:border-hacker-green hover:text-hacker-green';
                    if (isSubmitted) {
                      if (lbl === q.answer) cls = 'border-hacker-green text-hacker-green bg-hacker-green/5';
                      else if (sel) cls = 'border-hacker-red text-hacker-red bg-hacker-red/5';
                      else cls = 'border-hacker-border text-hacker-dim opacity-30';
                    } else if (sel) {
                      cls = 'border-hacker-green text-hacker-green bg-hacker-green/5';
                    }
                    return (
                      <button key={lbl} disabled={isSubmitted}
                        onClick={() => !isSubmitted && setAnswer(q.number, lbl)}
                        className={`border w-7 h-7 text-xs font-bold transition-colors disabled:cursor-default ${cls}`}
                      >{lbl}</button>
                    );
                  })}
                </div>
                <div className="text-xs text-hacker-text flex-1 leading-6">
                  <span className="text-hacker-dim mr-2">{q.number}.</span>{q.text}
                  {isSubmitted && !correct && <span className="ml-2 text-hacker-red">→ {q.answer}</span>}
                  {isSubmitted && q.explanation && <span className="ml-2 text-hacker-dim">({q.explanation})</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  function renderMultipleMatching(p: MultipleMatchingPart) {
    return (
      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {p.texts.map(t => (
            <div key={t.label} className="border border-hacker-border p-4">
              <div className="text-xs font-bold text-hacker-green mb-2">{t.label}: {t.name}</div>
              <p className="text-xs text-hacker-dim leading-6">{t.text}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <div className="text-xs text-hacker-dim mb-2">// CHOOSE THE PERSON (A–D) — CAN BE CHOSEN MORE THAN ONCE</div>
          {p.questions.map(q => {
            const correct = isCorrect(part, q.number, partAnswers[q.number] || '');
            return (
              <div key={q.number} className="border border-hacker-border p-3 flex gap-4 items-start">
                <div className="flex gap-1 shrink-0 mt-0.5">
                  {(['A','B','C','D'] as const).map(lbl => {
                    const sel = partAnswers[q.number] === lbl;
                    let cls = 'border-hacker-border text-hacker-dim hover:border-hacker-green hover:text-hacker-green';
                    if (isSubmitted) {
                      if (lbl === q.answer) cls = 'border-hacker-green text-hacker-green bg-hacker-green/5';
                      else if (sel) cls = 'border-hacker-red text-hacker-red bg-hacker-red/5';
                      else cls = 'border-hacker-border text-hacker-dim opacity-30';
                    } else if (sel) {
                      cls = 'border-hacker-green text-hacker-green bg-hacker-green/5';
                    }
                    return (
                      <button
                        key={lbl}
                        disabled={isSubmitted}
                        onClick={() => !isSubmitted && setAnswer(q.number, lbl)}
                        className={`border w-7 h-7 text-xs font-bold transition-colors disabled:cursor-default ${cls}`}
                      >
                        {lbl}
                      </button>
                    );
                  })}
                </div>
                <div className="text-xs text-hacker-text flex-1 leading-6">
                  <span className="text-hacker-dim mr-2">{q.number}.</span>
                  {q.text}
                  {isSubmitted && !correct && (
                    <span className="ml-2 text-hacker-red">→ {q.answer}</span>
                  )}
                  {isSubmitted && q.explanation && (
                    <span className="ml-2 text-hacker-dim">({q.explanation})</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  function renderCurrentPart() {
    if (part.type === 'mc-cloze')               return renderMCCloze(part as MCClozePart);
    if (part.type === 'open-cloze')             return renderOpenCloze(part as OpenClozePart);
    if (part.type === 'word-formation')         return renderWordFormation(part as WordFormationPart);
    if (part.type === 'key-word-transformation')return renderKWT(part as KWTPart);
    if (part.type === 'reading-mcq')            return renderReadingMCQ(part as ReadingMCQPart);
    if (part.type === 'cross-text')             return renderCrossText(part as CrossTextPart);
    if (part.type === 'gapped-text')            return renderGappedText(part as GappedTextPart);
    if (part.type === 'multiple-matching')      return renderMultipleMatching(part as MultipleMatchingPart);
    return null;
  }

  const pct = isSubmitted ? Math.round((score / total) * 100) : 0;
  const scoreColor = pct >= 75 ? 'text-hacker-green' : pct >= 50 ? 'text-hacker-amber' : 'text-hacker-red';
  const partTitle = 'title' in part ? (part as MCClozePart | OpenClozePart | WordFormationPart).title
    : 'articleTitle' in part ? (part as ReadingMCQPart | CrossTextPart | GappedTextPart).articleTitle
    : '';

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">

      {/* Part tabs */}
      <div className="flex flex-wrap gap-2 border-b border-hacker-border pb-4">
        {exam.parts.map((p, i) => (
          <button
            key={i}
            onClick={() => setCurrentPart(i)}
            className={`text-xs px-3 py-1.5 border transition-colors ${
              i === currentPart
                ? 'border-hacker-green text-hacker-green bg-hacker-green/10'
                : submitted[i]
                  ? 'border-hacker-dim text-hacker-dim'
                  : 'border-hacker-border text-hacker-dim hover:border-hacker-dim'
            }`}
          >
            PART {i + 1}
            {submitted[i] && <span className="ml-1 text-hacker-green">✓</span>}
          </button>
        ))}
      </div>

      {/* Part header */}
      <div>
        <div className="text-xs text-hacker-dim mb-1">// {PART_LABELS[part.type]}</div>
        {partTitle && <h2 className="text-lg font-bold text-hacker-text">{partTitle}</h2>}
        {'intro' in part && (
          <p className="text-sm text-hacker-dim mt-1">{(part as MultipleMatchingPart).intro}</p>
        )}
      </div>

      {/* Part content */}
      {renderCurrentPart()}

      {/* Submit / score bar */}
      <div className="pt-6 border-t border-hacker-border flex items-center justify-between flex-wrap gap-4">
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            className="bg-hacker-green text-hacker-bg px-8 py-3 font-bold text-sm hover:bg-hacker-green-dim transition-colors"
          >
            &gt;_ SUBMIT PART {currentPart + 1}
          </button>
        ) : (
          <div className="flex items-center gap-4 flex-wrap">
            <span className={`text-3xl font-bold ${scoreColor}`}>{score}/{total}</span>
            <span className="text-xs text-hacker-dim">
              {pct}%
              {pct >= 75 && <span className="ml-2 text-hacker-green font-bold">[ PASS ]</span>}
              {pct < 75 && pct >= 50 && <span className="ml-2 text-hacker-amber font-bold">[ BORDERLINE ]</span>}
              {pct < 50 && <span className="ml-2 text-hacker-red font-bold">[ NEEDS WORK ]</span>}
            </span>
          </div>
        )}
        {isSubmitted && currentPart < exam.parts.length - 1 && (
          <button
            onClick={() => setCurrentPart(p => p + 1)}
            className="border border-hacker-green text-hacker-green px-6 py-2 text-sm hover:bg-hacker-green hover:text-hacker-bg transition-colors"
          >
            NEXT: PART {currentPart + 2} →
          </button>
        )}
      </div>
    </div>
  );
}
