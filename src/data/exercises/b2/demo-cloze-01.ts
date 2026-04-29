import type { Exercise } from '../types';

export const exercise: Exercise = {
  id: 'b2-demo-cloze-01',
  level: 'b2',
  examName: 'B2 First (FCE)',
  type: 'cloze',
  title: 'The Rise of Remote Work',
  textParts: [
    'Working from anywhere in the world has long been a dream for many professionals, but only in recent years has it ',
    ' a mainstream reality. The COVID-19 pandemic played a ',
    ' role in this transformation, forcing companies to ',
    ' remote-working policies almost overnight. As offices closed, employers discovered that productivity did not necessarily ',
    ' when workers were away from their desks. Many businesses, ',
    ' by these results, made flexible working a permanent feature of their culture. For employees, this shift ',
    ' up new possibilities: free from the need to live near their workplace, some chose to relocate to smaller cities, while others went further, ',
    ' their laptops to beaches and mountain villages around the globe. The trend shows no ',
    ' of slowing down — if anything, the appetite for location freedom is stronger than ever.',
  ],
  questions: [
    {
      id: 1,
      options: [
        { value: 'A', label: 'become' },
        { value: 'B', label: 'reached' },
        { value: 'C', label: 'turned' },
        { value: 'D', label: 'made' },
      ],
      answer: 'A',
      explanation: '"Become a reality" is the fixed collocation. "Turn" needs "into", "reach" and "make" don\'t collocate with "a reality" naturally.',
    },
    {
      id: 2,
      options: [
        { value: 'A', label: 'major' },
        { value: 'B', label: 'key' },
        { value: 'C', label: 'vital' },
        { value: 'D', label: 'central' },
      ],
      answer: 'B',
      explanation: '"Play a key role" is the standard fixed collocation in English. While "major" is also common, "key role" is the most natural partner for "play a role" in formal English.',
    },
    {
      id: 3,
      options: [
        { value: 'A', label: 'bring in' },
        { value: 'B', label: 'adopt' },
        { value: 'C', label: 'apply' },
        { value: 'D', label: 'introduce' },
      ],
      answer: 'B',
      explanation: '"Adopt a policy" is the correct collocation. You adopt policies, not apply or introduce them in this context. "Bring in" is informal.',
    },
    {
      id: 4,
      options: [
        { value: 'A', label: 'fall' },
        { value: 'B', label: 'drop' },
        { value: 'C', label: 'decline' },
        { value: 'D', label: 'reduce' },
      ],
      answer: 'C',
      explanation: '"Productivity declines" is the standard academic/formal collocation. "Reduce" is transitive and needs an object. "Fall" and "drop" are less formal and less precise here.',
    },
    {
      id: 5,
      options: [
        { value: 'A', label: 'persuaded' },
        { value: 'B', label: 'convinced' },
        { value: 'C', label: 'encouraged' },
        { value: 'D', label: 'motivated' },
      ],
      answer: 'C',
      explanation: '"Encouraged by results" is the natural passive construction here. "Persuaded" and "convinced" typically require "that" or a direct object. "Motivated" is less idiomatic in this passive structure.',
    },
    {
      id: 6,
      options: [
        { value: 'A', label: 'gave' },
        { value: 'B', label: 'offered' },
        { value: 'C', label: 'opened' },
        { value: 'D', label: 'brought' },
      ],
      answer: 'C',
      explanation: '"Open up possibilities" is a fixed collocation. The phrasal verb "open up" means to create or reveal new opportunities. The others don\'t collocate naturally with "up" and "possibilities".',
    },
    {
      id: 7,
      options: [
        { value: 'A', label: 'carrying' },
        { value: 'B', label: 'taking' },
        { value: 'C', label: 'bringing' },
        { value: 'D', label: 'moving' },
      ],
      answer: 'B',
      explanation: '"Take something to a place" is the correct directional verb. "Bring" implies movement toward the speaker. "Carry" has no inherent direction. "Move" is intransitive here.',
    },
    {
      id: 8,
      options: [
        { value: 'A', label: 'evidence' },
        { value: 'B', label: 'signals' },
        { value: 'C', label: 'signs' },
        { value: 'D', label: 'marks' },
      ],
      answer: 'C',
      explanation: '"Show no signs of" is a fixed phrase in English. The other nouns do not collocate with "show" in this structure.',
    },
  ],
};
