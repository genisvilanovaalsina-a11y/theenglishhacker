import type { Exam } from '../types';

export const exam: Exam = {
  id: 'c1-exam-05',
  number: 5,
  level: 'c1',
  parts: [
    // ─── Part 1: Multiple-choice cloze ────────────────────────────────────────
    {
      partNumber: 1,
      type: 'mc-cloze',
      title: 'The Psychology of Flow',
      textParts: [
        'Have you ever been so absorbed in a task that you lost all sense of time? Psychologists refer to this (0) state as \'flow\'. When an individual is in flow, they are completely ',
        ' in an activity, and their sense of self-consciousness disappears. This phenomenon is often ',
        ' with peak performance in sports, the arts, and even complex problem-solving in the workplace.\nTo achieve flow, there must be a perfect ',
        ' between the challenge of the task and the skills of the individual. If the task is too easy, boredom ',
        ' in; if it is too difficult, anxiety prevents the flow state from emerging. Flow is not just about productivity; it is also ',
        ' linked to overall life satisfaction. People who ',
        ' engage in activities that trigger flow report higher levels of happiness and a greater sense of ',
        ' . While the modern world is full of distractions, learning to ',
        ' the power of flow can be a transformative experience for anyone seeking to reach their full potential.',
      ],
      questions: [
        {
          number: 1,
          options: [
            { value: 'A', label: 'occupied' },
            { value: 'B', label: 'immersed' },
            { value: 'C', label: 'engaged' },
            { value: 'D', label: 'involved' },
          ],
          answer: 'B',
          explanation: 'Collocation: "to be immersed in an activity" (totally involved).',
        },
        {
          number: 2,
          options: [
            { value: 'A', label: 'aligned' },
            { value: 'B', label: 'related' },
            { value: 'C', label: 'associated' },
            { value: 'D', label: 'matched' },
          ],
          answer: 'C',
          explanation: '"Associated with" is the standard prepositional use for connection.',
        },
        {
          number: 3,
          options: [
            { value: 'A', label: 'balance' },
            { value: 'B', label: 'proportion' },
            { value: 'C', label: 'scale' },
            { value: 'D', label: 'ratio' },
          ],
          answer: 'A',
          explanation: 'Refers to the "perfect match" between challenge and skill.',
        },
        {
          number: 4,
          options: [
            { value: 'A', label: 'sets' },
            { value: 'B', label: 'puts' },
            { value: 'C', label: 'falls' },
            { value: 'D', label: 'comes' },
          ],
          answer: 'A',
          explanation: 'Phrasal verb: "boredom sets in" (begins to happen).',
        },
        {
          number: 5,
          options: [
            { value: 'A', label: 'strictly' },
            { value: 'B', label: 'tightly' },
            { value: 'C', label: 'intricately' },
            { value: 'D', label: 'closely' },
          ],
          answer: 'D',
          explanation: '"Closely linked" is a common adverb-verb collocation.',
        },
        {
          number: 6,
          options: [
            { value: 'A', label: 'habitually' },
            { value: 'B', label: 'routinely' },
            { value: 'C', label: 'traditionally' },
            { value: 'D', label: 'customarily' },
          ],
          answer: 'B',
          explanation: 'Means doing something as part of a regular procedure.',
        },
        {
          number: 7,
          options: [
            { value: 'A', label: 'fulfillment' },
            { value: 'B', label: 'achievement' },
            { value: 'C', label: 'completion' },
            { value: 'D', label: 'execution' },
          ],
          answer: 'A',
          explanation: 'Noun meaning the achievement of something desired or promised.',
        },
        {
          number: 8,
          options: [
            { value: 'A', label: 'harness' },
            { value: 'B', label: 'govern' },
            { value: 'C', label: 'master' },
            { value: 'D', label: 'handle' },
          ],
          answer: 'A',
          explanation: 'Means to control and make use of (e.g., harness a power/source).',
        },
      ],
    },

    // ─── Part 2: Open cloze ───────────────────────────────────────────────────
    {
      partNumber: 2,
      type: 'open-cloze',
      title: 'The History of Maps',
      textParts: [
        'Long before the invention of satellite navigation, humans (0) had to rely on hand-drawn maps to find their way across the globe. These early maps were often far ',
        ' accurate, frequently featuring mythical creatures and non-existent lands ',
        ' place of unexplored territories. However, they were more than just navigational tools; they were expressions of power and cultural identity.\nIn the Middle Ages, many European maps were designed ',
        ' the religious world in mind, placing Jerusalem at the absolute centre. It was not ',
        ' the Age of Discovery in the 15th century that cartography began to take on a more scientific character. Explorers returning from the Americas and Asia provided new data ',
        ' allowed mapmakers to create increasingly detailed representations of the Earth. ',
        ' the digital revolution has made physical maps seem obsolete to some, the underlying principles of cartography remain ',
        ' important as ever. Today, we continue to use maps to organize vast amounts of data, proving that our need to visualize the world shows no sign ',
        ' diminishing.',
      ],
      questions: [
        {
          number: 9,
          acceptedAnswers: ['from'],
          explanation: 'Fixed phrase: "far from [adjective]" (not at all).',
        },
        {
          number: 10,
          acceptedAnswers: ['in'],
          explanation: 'Fixed phrase: "in place of" (instead of).',
        },
        {
          number: 11,
          acceptedAnswers: ['with'],
          explanation: 'Fixed phrase: "with [something] in mind" (considering something).',
        },
        {
          number: 12,
          acceptedAnswers: ['until'],
          explanation: 'Part of the "It was not until... that..." structure.',
        },
        {
          number: 13,
          acceptedAnswers: ['which', 'that'],
          explanation: 'Relative pronoun referring to "new data."',
        },
        {
          number: 14,
          acceptedAnswers: ['While', 'Although'],
          explanation: 'Conjunction showing contrast between the past and digital revolution.',
        },
        {
          number: 15,
          acceptedAnswers: ['as'],
          explanation: '"As [adjective] as" (comparison of equality).',
        },
        {
          number: 16,
          acceptedAnswers: ['of'],
          explanation: 'Fixed phrase: "no sign of [gerund/noun]."',
        },
      ],
    },

    // ─── Part 3: Word formation ───────────────────────────────────────────────
    {
      partNumber: 3,
      type: 'word-formation',
      title: 'The Benefits of Music',
      textParts: [
        'It is (0) scientifically proven that listening to music can have a profound effect on the human brain. From a young age, music plays a ',
        ' role in our emotional and cognitive development. Research has shown that children who are exposed to musical training often demonstrate ',
        ' skills in areas such as mathematics and language ',
        ' .\nFor adults, music serves as a powerful ',
        ' tool. A fast-tempo track can increase motivation during a workout, while slow, classical music is ',
        ' for reducing stress and improving sleep quality. Furthermore, music has the ',
        ' to bring people together, creating a sense of ',
        ' that transcends cultural boundaries. Despite the ',
        ' of different musical genres, the fundamental human response to rhythm and melody remains a universal experience.',
      ],
      questions: [
        {
          number: 17,
          givenWord: 'SIGNIFY',
          answer: 'significant',
          explanation: 'Adjective meaning important or noticeable.',
        },
        {
          number: 18,
          givenWord: 'EXCEPTION',
          answer: 'exceptional',
          explanation: 'Adjective meaning much better than average.',
        },
        {
          number: 19,
          givenWord: 'ACQUIRE',
          answer: 'acquisition',
          explanation: 'Noun meaning the act of learning or developing a skill (language acquisition).',
        },
        {
          number: 20,
          givenWord: 'THERAPY',
          answer: 'therapeutic',
          explanation: 'Adjective meaning having a good effect on the body or mind.',
        },
        {
          number: 21,
          givenWord: 'EFFECT',
          answer: 'effective',
          explanation: 'Adjective meaning successful in producing a desired result.',
        },
        {
          number: 22,
          givenWord: 'CAPABLE',
          answer: 'capability',
          explanation: 'Noun meaning the power or ability to do something.',
        },
        {
          number: 23,
          givenWord: 'SOLID',
          answer: 'solidarity',
          explanation: 'Noun meaning unity or agreement of feeling/action (social solidarity).',
        },
        {
          number: 24,
          givenWord: 'DIVERSE',
          answer: 'diversity',
          explanation: 'Noun meaning the state of being diverse; variety.',
        },
      ],
    },

    // ─── Part 4: Key word transformations ─────────────────────────────────────
    {
      partNumber: 4,
      type: 'key-word-transformation',
      questions: [
        {
          number: 25,
          sentence1: 'We will only give you a refund if you have the original receipt.',
          keyword: 'CONDITION',
          sentence2Begin: 'We will give you a refund',
          sentence2End: 'the original receipt.',
          answer: 'on condition (that) you have',
          explanation: '"On condition that" is a formal alternative to "if."',
        },
        {
          number: 26,
          sentence1: "I'm sure it was a great surprise to him when he won the award.",
          keyword: 'MUST',
          sentence2Begin: 'He',
          sentence2End: 'surprised when he won the award.',
          answer: 'must have been very/greatly',
          explanation: 'Modal of deduction for the past (He must have been...).',
        },
        {
          number: 27,
          sentence1: 'It is believed that the criminal escaped through the back window.',
          keyword: 'HAVE',
          sentence2Begin: 'The criminal is',
          sentence2End: 'through the back window.',
          answer: 'believed to have escaped',
          explanation: 'Passive reporting structure (Subject + is believed + to have + past participle).',
        },
        {
          number: 28,
          sentence1: "\"I'm sorry I didn't tell you about the change in plans,\" said Sarah to her boss.",
          keyword: 'APOLOGISED',
          sentence2Begin: 'Sarah',
          sentence2End: 'her boss about the change in plans.',
          answer: 'apologised for not telling',
          explanation: '"Apologise for (not) doing something."',
        },
        {
          number: 29,
          sentence1: 'As soon as I sat down, the phone started ringing.',
          keyword: 'SOONER',
          sentence2Begin: 'No',
          sentence2End: 'the phone started ringing.',
          answer: 'sooner had I sat down than',
          explanation: 'Negative inversion (No sooner + had + subject + past participle + than).',
        },
        {
          number: 30,
          sentence1: "If it hadn't been for the captain's quick thinking, the ship would have crashed.",
          keyword: 'BUT',
          sentence2Begin: 'The ship would have crashed',
          sentence2End: "quick thinking.",
          answer: "but for the captain's",
          explanation: '"But for" means "if it hadn\'t been for."',
        },
      ],
    },

    // ─── Part 5: Reading multiple choice ──────────────────────────────────────
    {
      partNumber: 5,
      type: 'reading-mcq',
      articleTitle: 'Resurrecting the Past: The Dilemma of De-extinction',
      text: `In the frosty laboratories of the 21st century, the boundaries between science and science fiction are becoming increasingly blurred. The concept of 'de-extinction'—using advanced genetic engineering to bring back species like the woolly mammoth or the passenger pigeon—is no longer a theoretical curiosity. It is a burgeoning field of research that promises to undo the biological damage caused by human activity. However, beneath the surface of this technological marvel lies a dense thicket of ethical and ecological questions that we have only just begun to untangle.

Proponents of de-extinction argue that it represents the ultimate form of environmental reparations. If humans were responsible for the extinction of a species, do we not have a moral obligation to rectify that mistake if the technology exists? They envision a world where 'keystone' species are returned to their original habitats, restoring broken ecosystems and increasing biodiversity. The return of the mammoth to the Siberian tundra, for instance, could theoretically help slow the melting of permafrost by trampling snow and encouraging the growth of grasslands. In this light, de-extinction is not just a feat of vanity; it is a tool for climate mitigation.

However, many conservationists view this optimism with profound skepticism. They argue that the focus on 'charismatic megafauna'—the famous, impressive animals—diverts attention and funding away from the thousands of living species that are currently on the brink of extinction. It is a zero-sum game; every dollar spent on a lab-grown mammoth is a dollar taken away from protecting a living elephant. Furthermore, the 'habitat' to which these animals would return often no longer exists in its original state. A resurrected species might find itself a biological stranger in a world that has moved on, potentially becoming an invasive species that disrupts the very ecosystem it was meant to save.

There is also the question of what we are actually creating. A mammoth brought back through cloning or gene editing is not simply a 'copy' of the original. It would be gestated in the womb of an Asian elephant and raised without the social structures and ancestral knowledge that its predecessors possessed. We risk creating 'plastic' versions of nature—animals that look like their ancestors but lack the behavioral depth that defined them. Are we bringing back a species, or are we simply creating a high-tech curiosity for the sake of scientific prestige?

The philosophical implications are equally unsettling. De-extinction could undermine the very concept of 'permanence' that underpins conservation efforts. If the public believes that extinction is no longer forever, the urgency to protect endangered species might dwindle. We risk developing a 'techno-fix' mentality, where we assume that any environmental damage can simply be reversed later through a clever algorithm or a DNA sequencer. This hubris ignores the reality that ecosystems are fragile, interconnected webs that cannot be repaired as easily as a piece of machinery.

Ultimately, the debate over de-extinction forces us to ask what kind of relationship we want to have with the natural world. Is nature something to be curated and 'managed' like a museum gallery, or is it an autonomous force that we should respect, even in its tragedies? Science has given us the power of gods, but it has not yet granted us the wisdom to use it. As we stand on the threshold of this new era, we must decide whether we are trying to save the planet, or simply trying to play the hero in a story of our own making.`,
      questions: [
        {
          number: 31,
          question: 'In the first paragraph, the writer suggests that de-extinction...',
          options: [
            { value: 'A', label: 'is a project that is largely driven by scientific vanity.' },
            { value: 'B', label: 'has moved from being a purely imaginative idea to a practical reality.' },
            { value: 'C', label: 'will eventually be the primary method for saving endangered species.' },
            { value: 'D', label: 'is a field that has already solved most of its ethical challenges.' },
          ],
          answer: 'B',
          explanation: 'The text says it is "no longer a theoretical curiosity" but a "burgeoning field."',
        },
        {
          number: 32,
          question: 'According to proponents, the reintroduction of the mammoth could...',
          options: [
            { value: 'A', label: 'provide a new source of food for local Siberian communities.' },
            { value: 'B', label: 'act as a physical deterrent to illegal logging in the tundra.' },
            { value: 'C', label: 'play a functional role in slowing down global warming.' },
            { value: 'D', label: 'encourage tourists to visit remote parts of the world.' },
          ],
          answer: 'C',
          explanation: 'Mentions it could "theoretically help slow the melting of permafrost" (climate mitigation).',
        },
        {
          number: 33,
          question: 'The writer uses the term \'zero-sum game\' in the third paragraph to highlight...',
          options: [
            { value: 'A', label: 'the financial competition between different conservation strategies.' },
            { value: 'B', label: 'the lack of cooperation between geneticists and ecologists.' },
            { value: 'C', label: 'the difficulty of calculating the success rate of cloning experiments.' },
            { value: 'D', label: 'the way in which resurrected species compete with living ones for food.' },
          ],
          answer: 'A',
          explanation: 'Highlights the competition for funding between resurrected and living species.',
        },
        {
          number: 34,
          question: "What is the writer's concern regarding the behavior of resurrected animals?",
          options: [
            { value: 'A', label: 'They might be more aggressive than their original ancestors.' },
            { value: 'B', label: 'They will lack the essential social learning required to thrive.' },
            { value: 'C', label: 'They will be unable to communicate with other similar species.' },
            { value: 'D', label: 'They will require constant human supervision to survive.' },
          ],
          answer: 'B',
          explanation: 'Worries they will lack "social structures and ancestral knowledge" (behavioral depth).',
        },
        {
          number: 35,
          question: 'The writer fears that de-extinction might affect conservation efforts by...',
          options: [
            { value: 'A', label: 'making it more expensive to buy land for nature reserves.' },
            { value: 'B', label: 'encouraging people to think that environmental damage is not final.' },
            { value: 'C', label: 'proving that traditional methods of protection are completely useless.' },
            { value: 'D', label: 'leading to a shortage of qualified conservationists in the future.' },
          ],
          answer: 'B',
          explanation: 'Fears that if extinction is seen as reversible, the "urgency to protect endangered species might dwindle."',
        },
        {
          number: 36,
          question: 'In the final paragraph, the writer concludes that we should...',
          options: [
            { value: 'A', label: 'focus on managing nature more efficiently through technology.' },
            { value: 'B', label: 'allow science to proceed without being hindered by philosophy.' },
            { value: 'C', label: 'consider the deeper motivations behind our desire to resurrect species.' },
            { value: 'D', label: "accept that extinction is a natural part of the planet's history." },
          ],
          answer: 'C',
          explanation: 'Suggests we must ask "what kind of relationship we want to have" and our "deeper motivations."',
        },
      ],
    },

    // ─── Part 6: Cross-text multiple matching ─────────────────────────────────
    {
      partNumber: 6,
      type: 'cross-text',
      articleTitle: 'The Smart City: Urban Utopia or Digital Dystopia?',
      intro: 'You are going to read four extracts from articles in which experts discuss the impact of \'Smart Cities\'. For questions 37 – 40, choose from the experts A – D. The experts may be chosen more than once.',
      texts: [
        {
          label: 'A',
          name: 'Dr. Leonard Shaw',
          text: "The primary appeal of the 'smart city' lies in its promise of total efficiency. By integrating the Internet of Things (IoT) into every facet of urban infrastructure, we can optimize energy use, streamline traffic flow, and reduce waste on an unprecedented scale. However, this data-driven approach is not without its risks. The 'surveillance' aspect of smart technology often goes unexamined. When every movement of a citizen is tracked and analyzed, the city stops being a place of spontaneous interaction and becomes a controlled environment. We must ensure that the 'intelligence' of our cities does not come at the expense of the privacy and civil liberties of their inhabitants.",
        },
        {
          label: 'B',
          name: 'Marcus Thorne',
          text: "The critique that smart cities are inherently anti-democratic is a common one, yet it misses the potential for radical inclusion. Smart platforms allow for 'hyper-local' governance, where residents can provide real-time feedback on everything from broken streetlights to the design of new parks. This is a far more direct form of democracy than the traditional four-year election cycle. Regarding the issue of privacy, it is a trade-off that many urban dwellers are already making in exchange for convenience. The challenge for urban planners is not to stop the collection of data, but to ensure that the benefits of that data are shared equitably across all socioeconomic groups.",
        },
        {
          label: 'C',
          name: 'Prof. Hannah Klein',
          text: "We should be cautious about the 'techno-optimism' that surrounds the smart city. The idea that we can solve complex social issues like poverty or homelessness through an algorithm is a dangerous fallacy. Most smart city initiatives are currently driven by large tech conglomerates whose primary goal is data extraction for profit, not public welfare. This leads to a 'privatization' of the public sphere, where the needs of the corporation take precedence over the needs of the citizen. Furthermore, the reliance on high-tech infrastructure makes cities more vulnerable to cyberattacks and systemic failures, potentially leading to chaos if the power goes out.",
        },
        {
          label: 'D',
          name: 'Elena Rodriguez',
          text: "While Dr. Klein is right to point out the commercial interests at play, I believe the environmental benefits of smart technology are too significant to ignore. Smart grids and intelligent water management systems are essential if we are to meet our climate goals. However, I share Dr. Shaw's concern regarding the psychological impact of constant monitoring. A city should be a place where one can be anonymous. The 'predictive' nature of smart algorithms—suggesting where you should go or what you should buy—threatens to erode the serendipity that makes urban life so vibrant. A truly smart city should use technology to enhance human agency, not to automate it.",
        },
      ],
      questions: [
        {
          number: 37,
          text: "shares Dr. Shaw's concern about the negative effect of constant monitoring on the quality of urban life?",
          answer: 'D',
          explanation: 'Both Shaw (A) and Rodriguez (D) are concerned about the "psychological impact of constant monitoring."',
        },
        {
          number: 38,
          text: 'has a different opinion from Prof. Klein regarding the primary value of smart technology for future cities?',
          answer: 'C',
          explanation: 'Shaw (A), Thorne (B), and Rodriguez (D) focus on urban logistics or democracy, while Klein (C) emphasizes that "large tech conglomerates" are driving it for profit.',
        },
        {
          number: 39,
          text: 'expresses a similar view to Dr. Shaw regarding the potential for smart technology to threaten personal privacy?',
          answer: 'A',
          explanation: 'Both Shaw (A) and Klein (C) worry about the loss of privacy or the privatization of public spheres.',
        },
        {
          number: 40,
          text: 'takes a more positive view than Prof. Klein on the potential for smart technology to engage citizens in the democratic process?',
          answer: 'B',
          explanation: 'Thorne (B) argues it allows for "hyper-local governance," a more direct form of democracy than traditional cycles.',
        },
      ],
    },

    // ─── Part 7: Gapped text ──────────────────────────────────────────────────
    {
      partNumber: 7,
      type: 'gapped-text',
      articleTitle: 'The Hydraulic Marvels of the Namara Valley',
      textParts: [
        'High in the arid peaks of the Namara Valley, archaeologists have recently uncovered a feat of engineering that has forced a complete radical rethink of pre-modern agricultural capabilities. What was once thought to be a collection of naturally occurring rock formations has been identified as a highly complex network of subterranean aqueducts and gravity-fed cisterns, dating back over fifteen hundred years.',
        'The sheer scale of the project is staggering. The network stretches for over thirty miles, snaking through the base of the mountains to capture glacial meltwater. Unlike the open-air canals found in other civilizations of the era, these channels were built deep underground. This was a deliberate design choice intended to minimize evaporation in the blistering mountain heat.',
        'To confirm these theories, researchers utilized ground-penetrating radar and 3D mapping. The results revealed a series of sophisticated pressure-regulating valves and sediment traps. These features ensured that the water arriving at the valley floor was not only consistent in flow but also remarkably clear, despite the turbulent journey from the peaks.',
        'This technical prowess suggests a degree of social organization that was previously unimagined for the Namara people. Building such a system would have required a centralized authority capable of coordinating thousands of laborers, as well as a specialized class of engineers with an advanced understanding of fluid dynamics.',
        'However, the discovery also presents a haunting mystery. Despite the efficiency of the system, evidence suggests that the Namara civilization collapsed abruptly within a single generation. Excavations of the valley\'s main settlement show no signs of warfare or external invasion. Instead, the aqueducts themselves seem to hold the key to the society\'s downfall.',
        'Analyses of the mineral deposits within the pipes indicate a sudden change in the water\'s chemistry. It appears that a tectonic shift deeper in the mountain range released toxic levels of arsenic into the glacial source. The very lifelines that had allowed the Namara to thrive in the desert became the silent carriers of their destruction.',
        'Today, the Namara Valley remains a silent witness to this tragic irony. The aqueducts are being studied not just for their historical value, but for the lessons they offer modern engineers. In an age of increasing water scarcity, the Namara\'s ability to manage a limited resource remains a testament to human ingenuity—and a reminder of our vulnerability to the natural world.',
      ],
      sentences: [
        {
          label: 'A',
          text: "This level of complexity is what truly sets the Namara system apart. It wasn't just about moving water from point A to point B; it was about the meticulous management of quality and velocity, a concept we often associate with much later industrial revolutions.",
        },
        {
          label: 'B',
          text: "However, this scientific precision was not enough to save them. The system's perfection was ultimately its greatest flaw, as it left the population entirely dependent on a single, fragile source of life.",
        },
        {
          label: 'C',
          text: 'Evidence of this sophisticated planning can be found in the precise angles of the tunnels. They descend at a constant gradient of exactly one percent, a margin of error so small it would be difficult to achieve even with modern laser-leveling equipment.',
        },
        {
          label: 'D',
          text: 'This revelation has sparked intense debate among historians. For decades, the Namara were dismissed as a simple nomadic culture, but the existence of such a permanent and resource-intensive infrastructure suggests a settled, prosperous empire.',
        },
        {
          label: 'E',
          text: 'This foresight allowed the Namara to transform a barren desert into a lush agricultural hub, capable of supporting a population of tens of thousands. The valley once exported surplus grain to neighboring regions, a fact supported by the discovery of massive stone granaries near the aqueduct exits.',
        },
        {
          label: 'F',
          text: "These physical remains, however, provide only half the story. The true genius lies in the mathematical principles that governed the water's descent, ensuring that the pressure never became high enough to burst the stone linings.",
        },
        {
          label: 'G',
          text: 'Consequently, the population would have been slowly poisoned over several years. Without the knowledge of chemistry required to identify the invisible threat, they would have watched in confusion as their crops withered and their health failed, unaware of the source of the catastrophe.',
        },
      ],
      questions: [
        {
          number: 41,
          answer: 'D',
          explanation: 'Connects the "rethink of agricultural capabilities" in the intro to the debate among historians about nomadic vs. imperial culture.',
        },
        {
          number: 42,
          answer: 'E',
          explanation: 'Explains how the underground design allowed the valley to become a "lush agricultural hub."',
        },
        {
          number: 43,
          answer: 'C',
          explanation: 'Refers to the "ground-penetrating radar" results by giving the specific detail of the "one percent" gradient.',
        },
        {
          number: 44,
          answer: 'F',
          explanation: '"These physical remains" connects the valves and traps mentioned before to the "mathematical principles" of water descent.',
        },
        {
          number: 45,
          answer: 'B',
          explanation: 'Introduces the "Downfall" section by explaining that the system\'s "perfection" was its "greatest flaw."',
        },
        {
          number: 46,
          answer: 'G',
          explanation: 'Explains the result of the "toxic levels of arsenic"—slow poisoning and withered crops.',
        },
      ],
    },

    // ─── Part 8: Multiple matching ────────────────────────────────────────────
    {
      partNumber: 8,
      type: 'multiple-matching',
      intro: 'You are going to read an article in which four people discuss their experiences with traditional handicrafts. For questions 47 – 52, choose from the people (A – D). The people may be chosen more than once.',
      texts: [
        {
          label: 'A',
          name: 'Julian – The Woodworker',
          text: "I spent fifteen years in software development before I finally burnt out. I was tired of spending my days creating things that were essentially invisible and ephemeral. Switching to woodturning was a shock to the system, both physically and mentally. There's a brutal honesty in working with timber; if you make a mistake, you can't just hit 'undo'. You have to respect the grain and the history of the tree. What I appreciate most is the sensory engagement—the smell of the shavings, the vibration of the lathe. It grounds me in a way that code never could. It's not just about the finished bowl; it's about the dialogue between the tool and the material.",
        },
        {
          label: 'B',
          name: 'Sarah – The Potter',
          text: "People often describe pottery as 'therapeutic', which I find a bit of a cliché, even if it's true. For me, the fascination lies in the chemistry of the glazes and the unpredictability of the kiln. You can spend weeks meticulously painting a piece, only for the fire to transform it into something completely unexpected. It's a lesson in letting go of control. I've had to learn that perfection is often the enemy of character. My best work usually features some kind of 'happy accident' that occurred during the firing process. It's a humbling craft that reminds you that nature always has the final word.",
        },
        {
          label: 'C',
          name: 'Liam – The Glassblower',
          text: "Glassblowing is a high-stakes performance. You're working with a material that is constantly trying to change its state, and you have to move with a speed and fluidity that leaves no room for hesitation. It's incredibly demanding physically—the heat from the furnace is intense, and you're constantly on the move. But there's a moment of pure magic when the molten glass starts to take shape. I think we've lost a sense of 'physical intelligence' in the modern world. We're so used to using our thumbs on screens that we've forgotten what it feels like to use our whole bodies to create something beautiful.",
        },
        {
          label: 'D',
          name: 'Maya – The Blacksmith',
          text: "There's a common misconception that blacksmithing is just about raw strength and hitting things with hammers. In reality, it's about the precise manipulation of temperature. You have to learn to read the color of the metal—from a dull red to a brilliant white—to know exactly when it's ready to be shaped. I specialize in traditional joinery, avoiding modern welding wherever possible. It's a slow process, but there's a massive sense of satisfaction in knowing that a gate or a tool I've made will likely last for two hundred years. It's about building a tangible link to the past while creating something for the future.",
        },
      ],
      questions: [
        {
          number: 47,
          text: 'mentions a specific physical sensation they enjoy during their work?',
          answer: 'A',
          explanation: 'Julian mentions "the smell of the shavings, the vibration of the lathe."',
        },
        {
          number: 48,
          text: 'appreciates the fact that their work results in a very long-lasting product?',
          answer: 'D',
          explanation: 'Maya says her work will "likely last for two hundred years."',
        },
        {
          number: 49,
          text: 'highlights the need for quick decision-making while working?',
          answer: 'C',
          explanation: 'Liam says there is "no room for hesitation" and you must move with speed.',
        },
        {
          number: 50,
          text: 'contrasts their current occupation with a previous digital career?',
          answer: 'A',
          explanation: 'Julian contrasts woodturning with his "fifteen years in software development."',
        },
        {
          number: 51,
          text: 'suggests that they have learned to value flaws in their creations?',
          answer: 'B',
          explanation: 'Sarah says "perfection is often the enemy of character" and values "happy accidents."',
        },
        {
          number: 52,
          text: 'explains that their craft requires a high degree of visual sensitivity?',
          answer: 'D',
          explanation: 'Maya says you must "learn to read the color of the metal."',
        },
      ],
    },
  ],
};
