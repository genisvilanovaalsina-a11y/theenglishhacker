import type { Exam } from '../types';

export const exam: Exam = {
  id: 'b2-exam-03',
  number: 3,
  level: 'b2',
  parts: [
    // ─── Part 1: Multiple-choice cloze ────────────────────────────────────────
    {
      partNumber: 1,
      type: 'mc-cloze',
      title: 'The Mystery of Sleep',
      textParts: [
        'We spend a great (0) deal of our lives asleep, yet scientists are still trying to ',
        " exactly why we do it. For a long time, it was thought that sleep was simply a way for the body to rest and ",
        " its energy levels. However, research has shown that the brain is remarkably active during the night. One theory is that sleep ",
        " a vital role in the way we process information. During the night, the brain ",
        " through the day's experiences, deciding which memories to keep and which to ",
        ". This is why a good night's sleep is often the best ",
        " for someone studying for an exam. Without enough rest, the brain struggles to ",
        ' new information. Furthermore, long-term sleep deprivation can ',
        ' to serious health problems, including a weakened immune system.',
      ],
      questions: [
        {
          number: 1,
          options: [
            { value: 'A', label: 'figure out' },
            { value: 'B', label: 'look into' },
            { value: 'C', label: 'find up' },
            { value: 'D', label: 'clear off' },
          ],
          answer: 'A',
          explanation: '"Figure out" is the correct phrasal verb meaning to understand or solve a mystery. "Look into" means to investigate, "find up" does not exist, and "clear off" means to leave.',
        },
        {
          number: 2,
          options: [
            { value: 'A', label: 'replace' },
            { value: 'B', label: 'recover' },
            { value: 'C', label: 'restore' },
            { value: 'D', label: 'return' },
          ],
          answer: 'C',
          explanation: '"Restore energy levels" is the standard collocation meaning to bring energy back to its normal state. "Recover" would need to be intransitive here.',
        },
        {
          number: 3,
          options: [
            { value: 'A', label: 'does' },
            { value: 'B', label: 'plays' },
            { value: 'C', label: 'makes' },
            { value: 'D', label: 'gives' },
          ],
          answer: 'B',
          explanation: '"Play a role" is a fixed collocation meaning to have a function. "Play a vital role in" is the complete phrase.',
        },
        {
          number: 4,
          options: [
            { value: 'A', label: 'sorts' },
            { value: 'B', label: 'picks' },
            { value: 'C', label: 'chooses' },
            { value: 'D', label: 'selects' },
          ],
          answer: 'A',
          explanation: '"Sorts through" means to go through things one by one, organising or categorising them. The phrasal verb is essential — the others do not take "through" in this meaning.',
        },
        {
          number: 5,
          options: [
            { value: 'A', label: 'lose' },
            { value: 'B', label: 'discard' },
            { value: 'C', label: 'forget' },
            { value: 'D', label: 'dismiss' },
          ],
          answer: 'B',
          explanation: '"Discard" means to get rid of something deliberately — the brain actively discards unnecessary memories. "Forget" is involuntary, "lose" is accidental.',
        },
        {
          number: 6,
          options: [
            { value: 'A', label: 'advice' },
            { value: 'B', label: 'tip' },
            { value: 'C', label: 'remedy' },
            { value: 'D', label: 'solution' },
          ],
          answer: 'C',
          explanation: '"Remedy" is used for a cure or treatment for a problem. In this context, sleep as a "remedy" for exam preparation fits the health/cognitive register. "Solution" typically refers to problems, not treatments.',
        },
        {
          number: 7,
          options: [
            { value: 'A', label: 'hold' },
            { value: 'B', label: 'catch' },
            { value: 'C', label: 'gain' },
            { value: 'D', label: 'retain' },
          ],
          answer: 'D',
          explanation: '"Retain information" is a formal verb meaning to keep or remember information. It is the precise academic term for memory storage.',
        },
        {
          number: 8,
          options: [
            { value: 'A', label: 'cause' },
            { value: 'B', label: 'result' },
            { value: 'C', label: 'lead' },
            { value: 'D', label: 'bring' },
          ],
          answer: 'C',
          explanation: '"Lead to" is the fixed phrasal verb indicating a direct consequence. "Result" requires "in", "cause" takes a direct object, "bring" needs "about".',
        },
      ],
    },

    // ─── Part 2: Open cloze ───────────────────────────────────────────────────
    {
      partNumber: 2,
      type: 'open-cloze',
      title: 'The History of Chocolate',
      textParts: [
        'Chocolate is enjoyed by millions of people today, but its history began thousands of years ago in Central America. It was first consumed (0) as a bitter drink by the Mayans, ',
        " believed that the cacao bean was a gift from the gods. To them, it was far ",
        " than just a food; it was used in sacred ceremonies and even served as a form of currency. When the Spanish explorers arrived in the 16th century, they ",
        " the drink back to Europe. Initially, it was not very popular ",
        " of its bitter taste. However, once sugar and vanilla were added to the recipe, it became a luxury item that ",
        " the wealthy could afford. It wasn't ",
        " the Industrial Revolution that chocolate started to be produced in solid bars and became accessible ",
        " everyone. Today, chocolate is a multi-billion dollar industry, and ",
        " it is still seen as a treat, many scientists claim that dark chocolate can actually be good for your heart.",
      ],
      questions: [
        { number: 9, acceptedAnswers: ['who'], explanation: 'The relative pronoun "who" refers to people (the Mayans) and introduces the relative clause.' },
        { number: 10, acceptedAnswers: ['more'], explanation: '"Far more than just a food" — the comparative "more" is required in this structure.' },
        { number: 11, acceptedAnswers: ['brought'], explanation: '"Bring back" means to carry something toward the origin point. The past tense "brought" is needed for the historical narrative.' },
        { number: 12, acceptedAnswers: ['because'], explanation: '"Not popular because of its taste" — "because of" (+ noun) gives the reason for its unpopularity.' },
        { number: 13, acceptedAnswers: ['only'], explanation: '"Only the wealthy could afford it" — "only" is an adverb restricting who could buy it.' },
        { number: 14, acceptedAnswers: ['until'], explanation: '"It wasn\'t until the Industrial Revolution that..." is a fixed emphatic structure used to pinpoint when something finally happened.' },
        { number: 15, acceptedAnswers: ['to'], explanation: '"Accessible to everyone" — the preposition "to" follows the adjective "accessible".' },
        { number: 16, acceptedAnswers: ['although', 'though'], explanation: 'A conjunction of contrast is needed: chocolate is seen as a treat BUT it can be healthy. "Although" or "though" both work.' },
      ],
    },

    // ─── Part 3: Word formation ───────────────────────────────────────────────
    {
      partNumber: 3,
      type: 'word-formation',
      title: 'The Digital Reading Habit',
      textParts: [
        'In the modern world, the way we read has changed (0) attention dramatically. With the ',
        ' of smartphones and tablets, most of us now consume information in short bursts. While this is ',
        ' for checking news or social media, some experts worry about the long-term impact on our ',
        ' to concentrate on longer texts. Deep reading requires ',
        ' and a quiet environment, both of which are ',
        ' rare in our busy lives. When we read on a screen, we are often ',
        ' by notifications or the temptation to click on links. This leads to a ',
        ' of understanding, as we tend to skim through the words rather than absorbing their meaning. It is ',
        ' that we make time to read physical books, as this helps to keep our minds sharp and focused.',
      ],
      questions: [
        { number: 17, givenWord: 'GROW', answer: 'growth', explanation: 'The noun "growth" (meaning development or increase) is needed after "the".' },
        { number: 18, givenWord: 'CONVENIENCE', answer: 'convenient', explanation: 'The adjective "convenient" is needed as a predicative adjective ("this is convenient for...").' },
        { number: 19, givenWord: 'ABLE', answer: 'ability', explanation: 'The noun "ability" means the capacity to do something. "Our ability to concentrate" is the correct structure.' },
        { number: 20, givenWord: 'PATIENT', answer: 'patience', explanation: 'The abstract noun "patience" is required after "requires".' },
        { number: 21, givenWord: 'INCREASE', answer: 'increasingly', explanation: 'The adverb "increasingly" modifies the adjective "rare" (increasingly rare = becoming rarer over time).' },
        { number: 22, givenWord: 'DISTRACT', answer: 'distracted', explanation: 'The past participle used as an adjective: "we are often distracted by notifications".' },
        { number: 23, givenWord: 'WEAK', answer: 'weakness', explanation: 'The noun "weakness" means a lack of strength or depth. "A weakness of understanding" = a lack of deep comprehension.' },
        { number: 24, givenWord: 'ADVISE', answer: 'advisable', explanation: '"Advisable" is the adjective meaning recommended or sensible. "It is advisable that" is a formal structure.' },
      ],
    },

    // ─── Part 4: Key word transformations ─────────────────────────────────────
    {
      partNumber: 4,
      type: 'key-word-transformation',
      questions: [
        {
          number: 25,
          sentence1: "I'm sure it was a mistake to sell the car.",
          keyword: 'SHOULD',
          sentence2Begin: 'I ',
          sentence2End: ' the car.',
          answer: 'should not have sold',
          explanation: '"Should not have + past participle" expresses regret about a past action that was wrong.',
        },
        {
          number: 26,
          sentence1: '"Did you remember to lock the door?" my mother asked me.',
          keyword: 'WHETHER',
          sentence2Begin: 'My mother asked me ',
          sentence2End: ' to lock the door.',
          answer: 'whether I had remembered',
          explanation: 'Indirect question with "whether" for yes/no questions. Past perfect "had remembered" reflects the shift back in time in reported speech.',
        },
        {
          number: 27,
          sentence1: 'It was the most boring book I have ever read.',
          keyword: 'NEVER',
          sentence2Begin: 'I ',
          sentence2End: ' such a boring book.',
          answer: 'have never read',
          explanation: '"Never + present perfect" expresses that something has not been experienced before. "I have never read" = the superlative "most boring I have ever read".',
        },
        {
          number: 28,
          sentence1: 'The heavy rain prevented the match from starting on time.',
          keyword: 'STOPPED',
          sentence2Begin: 'The match ',
          sentence2End: ' on time because of the heavy rain.',
          answer: 'was stopped from starting',
          explanation: 'Passive structure: "stop + object + from + gerund" becomes passive "was stopped from starting".',
        },
        {
          number: 29,
          sentence1: "You won't pass the exam if you don't start studying now.",
          keyword: 'UNLESS',
          sentence2Begin: "You won't pass the exam ",
          sentence2End: ' studying now.',
          answer: 'unless you start',
          explanation: '"Unless" means "if not". "If you don\'t start" becomes "unless you start".',
        },
        {
          number: 30,
          sentence1: 'They say that the company is losing a lot of money.',
          keyword: 'SAID',
          sentence2Begin: 'The company ',
          sentence2End: ' a lot of money.',
          answer: 'is said to be losing',
          explanation: 'Personal passive: "They say that X is doing Y" becomes "X is said to be doing Y".',
        },
      ],
    },

    // ─── Part 5: Reading multiple choice ─────────────────────────────────────
    {
      partNumber: 5,
      type: 'reading-mcq',
      articleTitle: 'Chasing the Stars',
      text: `I stood on a remote hillside in the Brecon Beacons, wrapped in three layers of wool and clutching a thermos of lukewarm tea. It was nearly midnight, and the temperature was dropping rapidly. In London, where I live, midnight usually means the orange glow of streetlights and the distant hum of traffic. Here, however, I was surrounded by a darkness so profound that I could barely see my own boots. I was in one of the world's few 'International Dark Sky Reserves', areas protected from light pollution so that the wonders of the universe remain visible to the naked eye.

I had travelled here with a mixture of curiosity and scepticism. As a city dweller, I'd always thought of the sky as a flat, dark grey ceiling with perhaps three or four lonely stars struggling to be seen. But as my eyes adjusted to the gloom, the sky above me began to transform. It wasn't just a few dots of light; it was a chaotic, brilliant explosion of silver. For the first time in my life, I saw the Milky Way—a thick, cloudy ribbon of stars stretching from one horizon to the other. It was, quite literally, breathtaking.

"Most people don't realise what they're missing," whispered Thomas, a local astronomer who had agreed to be my guide. He explained that over 80% of the world's population lives under light-polluted skies. In many cities, children are growing up without ever seeing the true night sky. According to Thomas, this isn't just a loss for amateur stargazers; it has serious biological consequences. Artificial light at night disrupts the migration patterns of birds, confuses sea turtles, and even affects human sleep cycles by interfering with the production of melatonin.

As we looked through Thomas's professional-grade telescope, the experience became even more surreal. I saw the rings of Saturn, looking like a tiny, perfect piece of jewellery suspended in the void. I saw distant nebulae—vast clouds of gas where new stars are being born. Thomas spoke about the 'Awe Factor'. He argued that when humans look at the vastness of the universe, our own problems start to feel smaller and more manageable. It provides a perspective that is hard to find in the frantic pace of modern life.

However, maintaining these reserves is a constant battle. As nearby towns expand, the pressure to install more powerful streetlighting increases. Thomas and his team work with local councils to promote 'dark-sky friendly' lighting—lamps that point downwards and use warmer tones that don't scatter as much in the atmosphere. "It's not about living in the dark," Thomas clarified. "It's about being smarter with how we use light. We can have safe streets and a clear view of the stars; we just need to choose to have both."

As I drove back toward the city the next morning, the sun began to wash out the stars I had seen just hours before. I felt a strange sense of loss. I realised that for most of my life, I had been living under a veil, unaware of the spectacular show happening every night above my head. I returned to London with a new-found appreciation for the darkness and a commitment to turn off my own lights a little more often.`,
      questions: [
        {
          number: 31,
          question: "What is the writer's main point in the first paragraph?",
          options: [
            { value: 'A', label: 'She was surprised by how cold it gets in Wales.' },
            { value: 'B', label: 'She found the silence of the reserve quite frightening.' },
            { value: 'C', label: 'The darkness in the reserve was much more intense than in London.' },
            { value: 'D', label: 'She regretted not bringing a better thermos for her tea.' },
          ],
          answer: 'C',
          explanation: 'The contrast is between London\'s orange glow and the darkness "so profound that I could barely see my own boots". The main point is the intensity of the darkness.',
        },
        {
          number: 32,
          question: 'In the second paragraph, how does the writer describe her reaction to the night sky?',
          options: [
            { value: 'A', label: 'She felt that her previous expectations had been correct.' },
            { value: 'B', label: 'She was overwhelmed by the beauty and complexity of what she saw.' },
            { value: 'C', label: "She found it difficult to see anything because her eyes wouldn't adjust." },
            { value: 'D', label: 'She was disappointed that the Milky Way looked like a cloud.' },
          ],
          answer: 'B',
          explanation: 'She describes it as "a chaotic, brilliant explosion of silver" and "breathtaking" — language of being overwhelmed. A is wrong because she was previously sceptical.',
        },
        {
          number: 33,
          question: 'What does Thomas suggest about light pollution in the third paragraph?',
          options: [
            { value: 'A', label: 'It is mainly a problem for people who want to study astronomy.' },
            { value: 'B', label: "It is a relatively new problem that scientists don't fully understand." },
            { value: 'C', label: 'It has a negative impact on various forms of life, including humans.' },
            { value: 'D', label: 'It is impossible for children in cities to grow up healthy without seeing stars.' },
          ],
          answer: 'C',
          explanation: 'Thomas mentions birds, sea turtles and human sleep cycles — multiple forms of life affected. D is an overstatement; the text says children grow up "without ever seeing" the night sky, not that they cannot be healthy.',
        },
        {
          number: 34,
          question: "The 'Awe Factor' mentioned in the fourth paragraph refers to the idea that...",
          options: [
            { value: 'A', label: 'telescopes make stars look more impressive than they really are.' },
            { value: 'B', label: 'looking at the universe can help people feel less stressed about their lives.' },
            { value: 'C', label: 'modern life is too fast for people to appreciate nature.' },
            { value: 'D', label: 'humans are naturally afraid of things that are very large.' },
          ],
          answer: 'B',
          explanation: 'Thomas says looking at the universe makes "our own problems start to feel smaller and more manageable" — a reduction of stress and perspective shift.',
        },
        {
          number: 35,
          question: "According to the fifth paragraph, what is the goal of 'dark-sky friendly' lighting?",
          options: [
            { value: 'A', label: 'To eliminate the use of all artificial lights in nearby towns.' },
            { value: 'B', label: 'To ensure that streetlights are only turned on when someone is nearby.' },
            { value: 'C', label: 'To balance the need for public safety with the protection of the night sky.' },
            { value: 'D', label: 'To make the streets of Wales look more traditional and old-fashioned.' },
          ],
          answer: 'C',
          explanation: 'Thomas says "We can have safe streets and a clear view of the stars" — balancing safety with sky protection. A is explicitly contradicted ("It\'s not about living in the dark").',
        },
        {
          number: 36,
          question: "How did the writer's perspective change by the end of her trip?",
          options: [
            { value: 'A', label: 'She decided to move from London to a more remote area.' },
            { value: 'B', label: 'She realised she had been missing out on a significant natural experience.' },
            { value: 'C', label: 'She became interested in becoming a professional astronomer herself.' },
            { value: 'D', label: "She felt that the city's lights were more beautiful than the stars." },
          ],
          answer: 'B',
          explanation: 'She says she had been "living under a veil, unaware of the spectacular show" — realising she had been missing out. She commits to "turn off my own lights more often", not to move away.',
        },
      ],
    },

    // ─── Part 6: Gapped text ──────────────────────────────────────────────────
    {
      partNumber: 6,
      type: 'gapped-text',
      articleTitle: 'The Library of the Future',
      textParts: [
        "For centuries, the image of the public library remained largely unchanged: a quiet, dusty building where people went to borrow books or conduct research in silence. Librarians were seen as the 'gatekeepers' of knowledge, ensuring that rules were followed and books were returned on time. ",
        ". In the age of the internet, where almost any piece of information can be accessed with a few clicks, libraries have had to reinvent themselves to stay relevant. Today, many modern libraries look more like community hubs or high-tech laboratories than traditional reading rooms. Instead of just rows of shelves, you are likely to find makerspaces equipped with 3D printers, recording studios for podcasters, and coding workshops for teenagers. ",
        ". They are no longer just places to consume information; they are places where people come together to create it. This shift has also changed the role of the librarian. No longer just focused on organising physical books, modern librarians act as digital navigators. They help people distinguish between reliable information and 'fake news' in an increasingly confusing online world. ",
        ". For many, the librarian is the only person who can help them access essential government services or apply for jobs. Despite the rise of e-books, the physical space of the library remains vital. In many cities, libraries are the only remaining public spaces where you can stay for hours without being expected to spend money. ",
        ". For students from low-income families, the library provides a quiet, well-lit place to study that they might not have at home. For the elderly, it can be a crucial defence against social isolation. Furthermore, libraries are increasingly becoming 'libraries of things'. This means you can borrow more than just books or DVDs. ",
        ". You might find a library that lends out power tools, musical instruments, or even seeds for gardening. This promotes a more sustainable way of living, encouraging people to share resources rather than buying things they may only use once. The future of the library, it seems, is not about the death of the book, but about the growth of the community. ",
        ". As long as they continue to adapt to the needs of the people they serve, libraries will remain a cornerstone of a healthy society. They prove that in a world that is becoming more digital, the need for physical connection and shared learning is stronger than ever.",
      ],
      sentences: [
        { label: 'A', text: 'However, this traditional model has undergone a radical transformation in recent years.' },
        { label: 'B', text: 'This democratic access to space is one of the most important functions they serve today.' },
        { label: 'C', text: 'Many people predicted that the internet would make libraries completely unnecessary.' },
        { label: 'D', text: 'In some areas, they also provide a vital link for those who do not have internet access at home.' },
        { label: 'E', text: 'These facilities allow users to develop new skills that are essential for the modern economy.' },
        { label: 'F', text: 'This trend has expanded the definition of what a public collection can actually contain.' },
        { label: 'G', text: 'As a result, city councils are deciding to close many smaller branches to save money.' },
      ],
      questions: [
        { number: 37, answer: 'A', explanation: '"However, this traditional model has undergone a radical transformation" directly contrasts the static image described before and introduces the change that follows.' },
        { number: 38, answer: 'E', explanation: '"These facilities allow users to develop new skills that are essential for the modern economy" explains why makerspaces, studios and coding workshops are valuable.' },
        { number: 39, answer: 'D', explanation: '"They also provide a vital link for those who do not have internet access at home" explains why librarians are vital — the practical help they offer beyond just book organisation.' },
        { number: 40, answer: 'B', explanation: '"This democratic access to space is one of the most important functions" refers back to libraries being the only free public space, and links to the examples of students and elderly that follow.' },
        { number: 41, answer: 'F', explanation: '"This trend has expanded the definition of what a public collection can actually contain" introduces the "libraries of things" concept and leads to the examples (tools, instruments, seeds).' },
        { number: 42, answer: 'C', explanation: '"Many people predicted that the internet would make libraries completely unnecessary" sets up the contrast with the conclusion that libraries have survived and adapted.' },
      ],
    },

    // ─── Part 7: Multiple matching ────────────────────────────────────────────
    {
      partNumber: 7,
      type: 'multiple-matching',
      intro: 'You are going to read an article about four unique museums around the world.',
      texts: [
        {
          label: 'A',
          name: 'The Museum of Broken Relationships (Zagreb, Croatia)',
          text: "This museum began as a travelling collection of items donated by former couples, but it eventually found a permanent home. Each object, from a simple clock to a garden tool, is accompanied by a short story written by the person who gave it. The exhibits are not grouped by the type of object, but by the emotion they represent—sadness, anger, or even hope. It's an anonymous project that allows people from all over the world to contribute. Visitors often find the experience deeply moving, as it shows that despite our different cultures, the way we experience love and loss is universal.",
        },
        {
          label: 'B',
          name: 'The Sulabh International Museum of Toilets (New Delhi, India)',
          text: "While the name might make some people smile, this museum has a very serious mission. It was founded by Dr. Bindeshwar Pathak to highlight the history of hygiene and the ongoing challenges of sanitation in developing nations. The collection includes items from ancient civilisations right up to the modern day, including elaborate decorated pieces from the Victorian era. Beyond the historical displays, the museum is part of a larger social project that builds clean facilities for people in need. It aims to educate the public on how a simple household object can significantly improve health and dignity.",
        },
        {
          label: 'C',
          name: 'The Museum of Bad Art (Boston, USA)',
          text: "Located in a basement, this museum's motto is 'art too bad to be ignored'. It all started when the founder rescued a painting from a pile of rubbish and decided it was so uniquely terrible that it deserved to be seen. Since then, the collection has grown to hundreds of pieces. However, the curators have strict standards: they only accept work that was created with a sincere, serious intention. They are not interested in things that are deliberately ugly or ironic. It celebrates the courage of the amateur artist who tries to create something beautiful but fails in a spectacular or amusing way.",
        },
        {
          label: 'D',
          name: 'MUSA: Underwater Museum of Art (Cancun, Mexico)',
          text: "To visit this museum, you'll need a swimsuit and a pair of goggles. Located on the seabed, the collection consists of over 500 life-sized sculptures. The primary goal of the museum is to protect the local environment; the statues are made from pH-neutral cement that encourages the growth of coral reefs. This draws tourists away from the fragile natural reefs that were being damaged by too many visitors. Over time, the ocean's wildlife has claimed the statues, with fish and plants transforming the art into a living, breathing ecosystem. It's a perfect example of how art and science can work together.",
        },
      ],
      questions: [
        { number: 43, text: 'has a collection consisting of objects people no longer wanted?', answer: 'A', explanation: 'The Zagreb museum features items "donated by former couples" — objects given away from broken relationships.' },
        { number: 44, text: 'was created to draw attention to a significant social issue?', answer: 'B', explanation: 'The Toilet Museum was founded to highlight "the history of hygiene and the ongoing challenges of sanitation in developing nations".' },
        { number: 45, text: 'requires visitors to go beneath the surface of the water?', answer: 'D', explanation: 'MUSA is "located on the seabed" — you need a swimsuit and goggles to visit.' },
        { number: 46, text: 'grew out of a single item found by its founder?', answer: 'C', explanation: 'The Museum of Bad Art started when the founder "rescued a painting from a pile of rubbish".' },
        { number: 47, text: 'is organised according to the feelings the exhibits evoke?', answer: 'A', explanation: 'The Zagreb museum groups exhibits "by the emotion they represent—sadness, anger, or even hope".' },
        { number: 48, text: 'provides historical information about a common domestic item?', answer: 'B', explanation: 'The Toilet Museum traces the history of the toilet "from ancient civilisations right up to the modern day".' },
        { number: 49, text: 'only takes pieces that were not intended to be funny?', answer: 'C', explanation: 'The Museum of Bad Art "only accepts work that was created with a sincere, serious intention" — not deliberately ironic.' },
        { number: 50, text: 'has exhibits that are being changed by the natural world?', answer: 'D', explanation: '"The ocean\'s wildlife has claimed the statues, with fish and plants transforming the art into a living, breathing ecosystem".' },
        { number: 51, text: 'contains contributions from people who remain unidentified?', answer: 'A', explanation: 'The Zagreb museum is described as "an anonymous project" — contributors are not named.' },
        { number: 52, text: 'helps to prevent damage to a nearby natural site?', answer: 'D', explanation: 'MUSA "draws tourists away from the fragile natural reefs that were being damaged by too many visitors".' },
      ],
    },
  ],
};
