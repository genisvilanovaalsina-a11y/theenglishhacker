import type { Exercise } from '../types';

export const exercise: Exercise = {
  id: 'c1-demo-cloze-01',
  level: 'c1',
  examName: 'C1 Advanced (CAE)',
  type: 'cloze',
  title: 'Urban Rewilding',
  textParts: [
    'Cities have long been considered hostile environments for wildlife, yet a growing number of urban planners are now working to ',
    ' this assumption. The concept of "urban rewilding" involves deliberately ',
    ' natural processes back into densely populated areas — not by converting cities into parks, but by creating green corridors that ',
    ' wildlife to move freely between habitats. In cities like Amsterdam and Berlin, wild meadows have been ',
    ' along disused railways and waterways, providing vital nesting sites for birds and insects that had all but disappeared. ',
    ' by such early successes, other European capitals are now introducing similar programmes at considerable ',
    '. Critics, however, argue that urban rewilding is largely cosmetic unless it is ',
    ' by a serious reduction in pesticide use. The data, nonetheless, seems to ',
    ' their concerns: cities with comprehensive rewilding strategies have recorded a marked improvement in urban biodiversity within just a few years.',
  ],
  questions: [
    {
      id: 1,
      options: [
        { value: 'A', label: 'challenge' },
        { value: 'B', label: 'question' },
        { value: 'C', label: 'dispute' },
        { value: 'D', label: 'contest' },
      ],
      answer: 'A',
      explanation: '"Challenge an assumption" is the standard academic collocation. "Challenge" implies active opposition, which fits the context of planners working against a prevailing view. "Question" is softer and less precise here.',
    },
    {
      id: 2,
      options: [
        { value: 'A', label: 'bringing' },
        { value: 'B', label: 'drawing' },
        { value: 'C', label: 'pulling' },
        { value: 'D', label: 'inviting' },
      ],
      answer: 'A',
      explanation: '"Bring back" means to restore or reintroduce something. It is the only option that carries this specific meaning of reintroduction. The other phrasal verbs don\'t express this sense of restoration.',
    },
    {
      id: 3,
      options: [
        { value: 'A', label: 'help' },
        { value: 'B', label: 'let' },
        { value: 'C', label: 'enable' },
        { value: 'D', label: 'allow' },
      ],
      answer: 'C',
      explanation: '"Enable" is the formal/C1 register choice here. It specifically means "to create the conditions for something to happen", which precisely describes the function of green corridors. "Allow" is also grammatically correct but less precise.',
    },
    {
      id: 4,
      options: [
        { value: 'A', label: 'created' },
        { value: 'B', label: 'built' },
        { value: 'C', label: 'established' },
        { value: 'D', label: 'developed' },
      ],
      answer: 'C',
      explanation: '"Established" implies formally setting something up in an official, planned capacity. It is the most appropriate verb for deliberately planned urban greening projects with institutional backing.',
    },
    {
      id: 5,
      options: [
        { value: 'A', label: 'Inspired' },
        { value: 'B', label: 'Motivated' },
        { value: 'C', label: 'Encouraged' },
        { value: 'D', label: 'Spurred' },
      ],
      answer: 'C',
      explanation: '"Encouraged by" + noun is the most natural passive construction in this academic register. "Spurred" requires "on". "Inspired" and "motivated" are more emotional and less typical in policy/ecology writing.',
    },
    {
      id: 6,
      options: [
        { value: 'A', label: 'scale' },
        { value: 'B', label: 'extent' },
        { value: 'C', label: 'scope' },
        { value: 'D', label: 'range' },
      ],
      answer: 'A',
      explanation: '"At considerable scale" is the modern, precise term for the size of an implementation. The phrase "at scale" is a fixed expression meaning implementing something broadly. The other nouns don\'t collocate naturally with "at considerable".',
    },
    {
      id: 7,
      options: [
        { value: 'A', label: 'supported' },
        { value: 'B', label: 'accompanied' },
        { value: 'C', label: 'followed' },
        { value: 'D', label: 'backed' },
      ],
      answer: 'D',
      explanation: '"Backed by" means underpinned or given substance by. "Accompanied by" suggests events happening simultaneously without one being a prerequisite of the other, which doesn\'t fit the critics\' argument here.',
    },
    {
      id: 8,
      options: [
        { value: 'A', label: 'allay' },
        { value: 'B', label: 'dismiss' },
        { value: 'C', label: 'dispel' },
        { value: 'D', label: 'counter' },
      ],
      answer: 'A',
      explanation: '"Allay concerns" is the precise idiomatic expression meaning to reduce or eliminate worries by providing reassurance. It is the standard collocation for this meaning. "Dispel" (C) is close but typically collocates with "fears" or "myths", not "concerns".',
    },
  ],
};
