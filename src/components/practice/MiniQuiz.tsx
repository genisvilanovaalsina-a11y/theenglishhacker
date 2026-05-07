import { useState } from 'react';

export interface QuizQuestion {
  id: number;
  sentence: string;
  options: { key: 'A' | 'B' | 'C' | 'D'; value: string }[];
  answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  gapType: string;
}

interface Props {
  questions: QuizQuestion[];
}

export default function MiniQuiz({ questions }: Props) {
  const [selected, setSelected] = useState<Record<number, 'A' | 'B' | 'C' | 'D'>>({});

  const answered = Object.keys(selected).length;
  const correct = questions.filter(q => selected[q.id] === q.answer).length;

  return (
    <div className="space-y-6">

      {/* Progress bar */}
      <div className="flex items-center gap-4 text-xs text-hacker-dim">
        <span>{answered}/{questions.length} answered</span>
        {answered === questions.length && (
          <span className={`font-bold ${correct >= questions.length * 0.75 ? 'text-hacker-green' : correct >= questions.length * 0.5 ? 'text-hacker-amber' : 'text-hacker-red'}`}>
            Score: {correct}/{questions.length}
          </span>
        )}
      </div>

      {questions.map((q) => {
        const pick = selected[q.id];
        const done = pick !== undefined;

        return (
          <div key={q.id} className="border border-hacker-border p-5 space-y-4">

            {/* Gap type label */}
            <div className="text-xs text-hacker-dim">
              // Q{String(q.id).padStart(2, '0')} · <span className="text-hacker-green">{q.gapType.toUpperCase()}</span>
            </div>

            {/* Sentence */}
            <p className="text-sm text-hacker-text leading-7 font-mono">
              {q.sentence.split('___').map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span className={`inline-block border-b-2 px-4 mx-1 font-bold min-w-[80px] text-center text-xs ${
                      !done
                        ? 'border-hacker-dim text-hacker-dim'
                        : pick === q.answer
                        ? 'border-hacker-green text-hacker-green'
                        : 'border-hacker-red text-hacker-red'
                    }`}>
                      {done ? pick : '___'}
                    </span>
                  )}
                </span>
              ))}
            </p>

            {/* Options */}
            <div className="grid grid-cols-2 gap-2">
              {q.options.map((opt) => {
                const isSelected = pick === opt.key;
                const isCorrect = opt.key === q.answer;
                let style = 'border-hacker-border text-hacker-dim hover:border-hacker-green hover:text-hacker-green';
                if (done) {
                  if (isCorrect) style = 'border-hacker-green text-hacker-green bg-hacker-green/5';
                  else if (isSelected) style = 'border-hacker-red text-hacker-red bg-hacker-red/5';
                  else style = 'border-hacker-border text-hacker-dim opacity-40';
                }
                return (
                  <button
                    key={opt.key}
                    disabled={done}
                    onClick={() => setSelected(prev => ({ ...prev, [q.id]: opt.key }))}
                    className={`border px-3 py-2 text-left text-xs transition-colors disabled:cursor-default ${style}`}
                  >
                    <span className="font-bold mr-2">{opt.key}.</span>{opt.value}
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {done && (
              <div className="border-t border-hacker-border pt-3 text-xs space-y-1">
                <span className={`font-bold ${pick === q.answer ? 'text-hacker-green' : 'text-hacker-red'}`}>
                  {pick === q.answer ? '✓ CORRECT' : `✗ INCORRECT — Answer: ${q.answer}`}
                </span>
                <p className="text-hacker-dim">{q.explanation}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
