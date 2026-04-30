// ─── Shared ───────────────────────────────────────────────────────────────────

export type ABCDOption = 'A' | 'B' | 'C' | 'D';
export type AGOption = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

// ─── Part 1: Multiple-choice cloze ────────────────────────────────────────────

export interface MCClozeQuestion {
  number: number;
  options: { value: ABCDOption; label: string }[];
  answer: ABCDOption;
  explanation?: string;
}

export interface MCClozePart {
  partNumber: 1;
  type: 'mc-cloze';
  title: string;
  textParts: string[];
  questions: MCClozeQuestion[];
}

// ─── Part 2: Open cloze ───────────────────────────────────────────────────────

export interface OpenClozeQuestion {
  number: number;
  acceptedAnswers: string[];
  explanation?: string;
}

export interface OpenClozePart {
  partNumber: 2;
  type: 'open-cloze';
  title: string;
  textParts: string[];
  questions: OpenClozeQuestion[];
}

// ─── Part 3: Word formation ───────────────────────────────────────────────────

export interface WordFormationQuestion {
  number: number;
  givenWord: string;
  answer: string;
  explanation?: string;
}

export interface WordFormationPart {
  partNumber: 3;
  type: 'word-formation';
  title: string;
  textParts: string[];
  questions: WordFormationQuestion[];
}

// ─── Part 4: Key word transformations ─────────────────────────────────────────

export interface KWTQuestion {
  number: number;
  sentence1: string;
  keyword: string;
  sentence2Begin: string;
  sentence2End: string;
  answer: string;
  explanation?: string;
}

export interface KWTPart {
  partNumber: 4;
  type: 'key-word-transformation';
  questions: KWTQuestion[];
}

// ─── Part 5: Reading multiple choice ─────────────────────────────────────────

export interface ReadingMCQQuestion {
  number: number;
  question: string;
  options: { value: ABCDOption; label: string }[];
  answer: ABCDOption;
  explanation?: string;
}

export interface ReadingMCQPart {
  partNumber: 5;
  type: 'reading-mcq';
  articleTitle: string;
  text: string;
  questions: ReadingMCQQuestion[];
}

// ─── Part 6: Cross-text multiple matching (C1 only) ──────────────────────────

export interface CrossTextQuestion {
  number: number;
  text: string;
  answer: ABCDOption;
  explanation?: string;
}

export interface CrossTextPart {
  partNumber: 6;
  type: 'cross-text';
  articleTitle: string;
  intro: string;
  texts: MMText[];
  questions: CrossTextQuestion[];
}

// ─── Part 6/7: Gapped text ───────────────────────────────────────────────────

export interface GappedTextSentence {
  label: AGOption;
  text: string;
}

export interface GappedTextQuestion {
  number: number;
  answer: AGOption;
  explanation?: string;
}

export interface GappedTextPart {
  partNumber: 6 | 7;
  type: 'gapped-text';
  articleTitle: string;
  textParts: string[];
  sentences: GappedTextSentence[];
  questions: GappedTextQuestion[];
}

// ─── Part 7: Multiple matching ────────────────────────────────────────────────

export interface MMText {
  label: ABCDOption;
  name: string;
  text: string;
}

export interface MMQuestion {
  number: number;
  text: string;
  answer: ABCDOption;
  explanation?: string;
}

export interface MultipleMatchingPart {
  partNumber: 7 | 8;
  type: 'multiple-matching';
  intro: string;
  texts: MMText[];
  questions: MMQuestion[];
}

// ─── Full Exam ────────────────────────────────────────────────────────────────

export type ExamPart =
  | MCClozePart
  | OpenClozePart
  | WordFormationPart
  | KWTPart
  | ReadingMCQPart
  | CrossTextPart
  | GappedTextPart
  | MultipleMatchingPart;

export interface Exam {
  id: string;
  number: number;
  level: 'b2' | 'c1';
  parts: ExamPart[];
}

// ─── Legacy (demo exercises) ─────────────────────────────────────────────────

export interface ExerciseOption {
  value: string;
  label: string;
}

export interface ExerciseQuestion {
  id: number;
  options: ExerciseOption[];
  answer: string;
  explanation: string;
}

export interface Exercise {
  id: string;
  level: 'b2' | 'c1';
  examName: string;
  type: 'cloze';
  title: string;
  source?: string;
  textParts: string[];
  questions: ExerciseQuestion[];
}
