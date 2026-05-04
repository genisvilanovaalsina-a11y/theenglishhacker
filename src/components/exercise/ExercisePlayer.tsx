import { useState, useEffect, useCallback } from 'react';
import type { Exercise } from '../../data/exercises/types';

interface Props {
  exercise: Exercise;
  unlockUrl: string;
}

type Answers = Record<number, string>;

const EMAIL_KEY = 'teh_email_captured';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ExercisePlayer({ exercise, unlockUrl }: Props) {
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [activeQ, setActiveQ] = useState(1);

  // Email gate state
  const [showEmailGate, setShowEmailGate] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [gdprChecked, setGdprChecked] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [emailSending, setEmailSending] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(`teh_unlocked_${exercise.level}`);
    setHasAccess(token === 'true');
  }, [exercise.level]);

  useEffect(() => {
    if (submitted) return;
    const handler = (e: KeyboardEvent) => {
      const num = parseInt(e.key);
      if (num >= 1 && num <= 4) {
        const q = exercise.questions[activeQ - 1];
        if (q) {
          const opt = q.options[num - 1];
          if (opt) setAnswers(prev => ({ ...prev, [q.id]: opt.value }));
        }
      }
      if (e.key === 'ArrowDown' || e.key === 'Tab') {
        e.preventDefault();
        setActiveQ(prev => Math.min(prev + 1, exercise.questions.length));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveQ(prev => Math.max(prev - 1, 1));
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [submitted, activeQ, exercise.questions]);

  const score = submitted
    ? exercise.questions.filter(q => answers[q.id] === q.answer).length
    : 0;
  const pct = submitted ? Math.round((score / exercise.questions.length) * 100) : 0;
  const scoreColor = pct >= 75 ? 'text-hacker-green' : pct >= 50 ? 'text-hacker-amber' : 'text-hacker-red';

  const revealResults = useCallback(() => {
    const s = exercise.questions.filter(q => answers[q.id] === q.answer).length;
    const p = Math.round((s / exercise.questions.length) * 100);
    setSubmitted(true);
    const key = `eh_${exercise.level}_progress`;
    const prev = JSON.parse(localStorage.getItem(key) || '[]') as number[];
    localStorage.setItem(key, JSON.stringify([...prev, p]));
  }, [answers, exercise.questions, exercise.level]);

  const handleSubmit = useCallback(() => {
    if (Object.keys(answers).length < exercise.questions.length) {
      alert('Answer all questions before submitting.');
      return;
    }
    if (localStorage.getItem(EMAIL_KEY) === 'true') {
      revealResults();
    } else {
      setShowEmailGate(true);
    }
  }, [answers, exercise.questions.length, revealResults]);

  const handleEmailSubmit = useCallback(async () => {
    setEmailError('');
    if (!EMAIL_REGEX.test(emailInput.trim())) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    if (!gdprChecked) {
      setEmailError('Please agree to receive learning tips to continue.');
      return;
    }

    setEmailSending(true);

    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbxxABvGCvbcD4Q8FaMUvKGBu4kjZ_lsofumf5uZlNkpmVSKiq3OdhVNufCPxCVxZk3u/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: emailInput.trim(), level: exercise.level.toUpperCase() }),
        },
      );
    } catch {
      // Fail silently — never block the user from seeing results
    }

    localStorage.setItem(EMAIL_KEY, 'true');
    setEmailSending(false);
    setShowEmailGate(false);
    revealResults();
  }, [emailInput, gdprChecked, exercise.level, revealResults]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

      {/* Passage */}
      <div className="border border-hacker-border p-6 space-y-1 text-sm leading-8 text-hacker-text">
        <div className="text-xs text-hacker-dim mb-4">// READ THE TEXT AND CHOOSE THE CORRECT OPTION (A, B, C OR D)</div>
        <p>
          {exercise.textParts.map((part, i) => (
            <span key={i}>
              {part}
              {i < exercise.questions.length && (
                <span className={`inline-block border-b-2 px-3 mx-1 text-xs font-bold min-w-[60px] text-center ${
                  submitted
                    ? answers[i + 1] === exercise.questions[i]?.answer
                      ? 'border-hacker-green text-hacker-green'
                      : 'border-hacker-red text-hacker-red'
                    : answers[i + 1]
                    ? 'border-hacker-green text-hacker-green'
                    : 'border-hacker-dim text-hacker-dim'
                }`}>
                  {submitted
                    ? answers[i + 1] ?? '—'
                    : answers[i + 1]
                    ? answers[i + 1]
                    : `(${i + 1})`}
                </span>
              )}
            </span>
          ))}
        </p>
      </div>

      {/* Questions */}
      <div className="space-y-6">
        {exercise.questions.map((q) => (
          <div
            key={q.id}
            className={`border p-4 transition-colors cursor-pointer ${
              activeQ === q.id && !submitted ? 'border-hacker-green' : 'border-hacker-border'
            }`}
            onClick={() => !submitted && setActiveQ(q.id)}
          >
            <div className="text-xs text-hacker-dim mb-3">
              // QUESTION_{String(q.id).padStart(2, '0')}
              {activeQ === q.id && !submitted && (
                <span className="ml-3 text-hacker-green">[ACTIVE — press 1/2/3/4]</span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {q.options.map((opt, oi) => {
                const isSelected = answers[q.id] === opt.value;
                const isCorrect = opt.value === q.answer;
                let style = 'border-hacker-border text-hacker-dim';
                if (submitted) {
                  if (isCorrect) style = 'border-hacker-green text-hacker-green bg-hacker-green/5';
                  else if (isSelected && !isCorrect) style = 'border-hacker-red text-hacker-red bg-hacker-red/5';
                } else if (isSelected) {
                  style = 'border-hacker-green text-hacker-green';
                }
                return (
                  <button
                    key={opt.value}
                    disabled={submitted}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!submitted) setAnswers(prev => ({ ...prev, [q.id]: opt.value }));
                    }}
                    className={`border px-3 py-2 text-left text-xs transition-colors hover:border-hacker-green hover:text-hacker-green disabled:cursor-default ${style}`}
                  >
                    <span className="font-bold mr-2">{oi + 1}.</span> {opt.value} — {opt.label}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <div className="mt-3 text-xs text-hacker-dim border-t border-hacker-border pt-3">
                <span className={answers[q.id] === q.answer ? 'text-hacker-green' : 'text-hacker-red'}>
                  {answers[q.id] === q.answer ? '✓ CORRECT' : `✗ INCORRECT — Answer: ${q.answer}`}
                </span>
                <span className="ml-4">{q.explanation}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Submit button */}
      {!submitted && !showEmailGate && (
        <div className="flex items-center gap-6">
          <button
            onClick={handleSubmit}
            className="bg-hacker-green text-hacker-bg px-8 py-3 font-bold text-sm hover:bg-hacker-green-dim transition-colors"
          >
            &gt;_ SUBMIT ANSWERS
          </button>
          <span className="text-xs text-hacker-dim">
            {Object.keys(answers).length}/{exercise.questions.length} answered
          </span>
        </div>
      )}

      {/* Email gate */}
      {showEmailGate && !submitted && (
        <div className="border border-hacker-green p-6 space-y-5 animate-fadein">
          <div className="space-y-1">
            <div className="text-xs text-hacker-dim">// RESULT_READY</div>
            <h2 className="text-lg font-bold text-hacker-text">
              Get your detailed result + tips by email
            </h2>
            <p className="text-xs text-hacker-dim">
              One email with your score breakdown and what to study next. No spam.
            </p>
          </div>

          <div className="space-y-3">
            <label className="block text-xs text-hacker-dim">&gt;_ YOUR EMAIL</label>
            <input
              type="email"
              value={emailInput}
              onChange={e => { setEmailInput(e.target.value); setEmailError(''); }}
              onKeyDown={e => e.key === 'Enter' && handleEmailSubmit()}
              placeholder="you@example.com"
              className="w-full bg-transparent border border-hacker-border px-4 py-3 text-sm text-hacker-text placeholder-hacker-muted focus:border-hacker-green focus:outline-none transition-colors"
              autoFocus
            />
          </div>

          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={gdprChecked}
              onChange={e => { setGdprChecked(e.target.checked); setEmailError(''); }}
              className="mt-0.5 accent-hacker-green shrink-0"
            />
            <span className="text-xs text-hacker-dim group-hover:text-hacker-text transition-colors">
              I agree to receive learning tips from TheEnglishHacker. Unsubscribe anytime.
            </span>
          </label>

          {emailError && (
            <p className="text-xs text-hacker-red">{emailError}</p>
          )}

          <button
            onClick={handleEmailSubmit}
            disabled={emailSending}
            className="w-full bg-hacker-green text-hacker-bg px-6 py-3 font-bold text-sm hover:bg-hacker-green-dim transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {emailSending ? '...' : '&gt;_ SHOW MY RESULT'}
          </button>
        </div>
      )}

      {/* Results */}
      {submitted && (
        <div className="border border-hacker-border p-6 space-y-4 animate-fadein">
          <div className="text-xs text-hacker-dim">// RESULTS</div>
          <div className={`text-4xl font-bold ${scoreColor}`}>
            {score}/{exercise.questions.length}
          </div>
          <div className="text-sm text-hacker-dim">
            Score: <span className={`font-bold ${scoreColor}`}>{pct}%</span>
            {pct >= 75 && <span className="ml-4 text-hacker-green">[ PASS ]</span>}
            {pct < 75 && pct >= 50 && <span className="ml-4 text-hacker-amber">[ BORDERLINE ]</span>}
            {pct < 50 && <span className="ml-4 text-hacker-red">[ NEEDS WORK ]</span>}
          </div>

          <div className="mt-8 border-t border-hacker-border pt-8 space-y-4">
            {hasAccess ? (
              <div>
                <div className="text-xs text-hacker-green mb-2">[ FULL_ACCESS: ACTIVE ]</div>
                <p className="text-xs text-hacker-dim">More exercises are being added. Check back soon.</p>
              </div>
            ) : (
              <div>
                <div className="text-xs text-hacker-dim mb-3">// MORE_EXERCISES_AVAILABLE</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="border border-hacker-border p-3 opacity-40">
                      <div className="text-xs text-hacker-dim mb-2">// EXERCISE_0{i + 2}</div>
                      <p className="text-hacker-text text-xs select-none tracking-widest">
                        ████ ███████ ████ ██ ███ ██████ ███████ ██ ██████
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-hacker-dim mb-4">
                  Unlock the full pack — {exercise.level === 'b2' ? '7€' : '9€'} one-time payment. Real exam format. No subscription.
                </p>
                <a
                  href={unlockUrl || '/unlock'}
                  className="inline-block bg-hacker-green text-hacker-bg px-8 py-3 font-bold text-sm hover:bg-hacker-green-dim transition-colors"
                >
                  &gt;_ UNLOCK FULL ACCESS →
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Keyboard hint */}
      {!submitted && !showEmailGate && (
        <div className="text-xs text-hacker-dim border-t border-hacker-border pt-4">
          <span className="text-hacker-green">POWER USER:</span> Press 1/2/3/4 to select options · ↑↓ or Tab to move between questions
        </div>
      )}
    </div>
  );
}
