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
