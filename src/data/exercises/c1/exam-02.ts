import type { Exam } from '../types';

export const exam: Exam = {
  id: 'c1-exam-02',
  number: 2,
  level: 'c1',
  parts: [
    // ─── Part 1: Multiple-choice cloze ────────────────────────────────────────
    {
      partNumber: 1,
      type: 'mc-cloze',
      title: 'The Concept of Biomimicry',
      textParts: [
        'To a large (0) extent, the history of human invention has been a story of trial and error. However, a growing field known as biomimicry suggests that the most elegant solutions to our engineering problems have already been ',
        ' by nature. By ',
        ' the structures and processes of the natural world, scientists are developing technologies that are both more efficient and more sustainable. Take, for instance, the Eastgate Centre in Zimbabwe. The building\'s ventilation system ',
        ' the way termites regulate the temperature in their mounds. Despite the ',
        ' heat outside, the interior remains remarkably cool without the need for conventional air conditioning. This ',
        ' of biological wisdom into human design is not merely a ',
        ' of aesthetics; it is a fundamental shift in how we ',
        ' the relationship between technology and the environment. As we continue to ',
        ' the secrets of the natural world, the potential for innovation seems limitless.',
      ],
      questions: [
        {
          number: 1,
          options: [
            { value: 'A', label: 'devised' },
            { value: 'B', label: 'forged' },
            { value: 'C', label: 'constructed' },
            { value: 'D', label: 'rendered' },
          ],
          answer: 'A',
          explanation: '"Devised" is the standard collocation for creating a complex plan or system. Nature "devises" solutions over millions of years — this is the central metaphor of biomimicry.',
        },
        {
          number: 2,
          options: [
            { value: 'A', label: 'mimicking' },
            { value: 'B', label: 'depicting' },
            { value: 'C', label: 'mirroring' },
            { value: 'D', label: 'simulating' },
          ],
          answer: 'A',
          explanation: '"Mimicking" directly relates to "biomimicry" (the theme of the text). To mimic means to copy closely. "Mirroring" is too literal, "simulating" suggests a digital model, and "depicting" means to represent artistically.',
        },
        {
          number: 3,
          options: [
            { value: 'A', label: 'equates' },
            { value: 'B', label: 'replicates' },
            { value: 'C', label: 'resembles' },
            { value: 'D', label: 'parallels' },
          ],
          answer: 'B',
          explanation: '"Replicates" means to make an exact copy of a process. The building\'s system replicates (copies exactly) the termite thermoregulation mechanism. "Resembles" merely looks similar; "replicates" implies functional copying.',
        },
        {
          number: 4,
          options: [
            { value: 'A', label: 'sheer' },
            { value: 'B', label: 'fierce' },
            { value: 'C', label: 'blistering' },
            { value: 'D', label: 'extreme' },
          ],
          answer: 'C',
          explanation: '"Blistering" is the C1-level adjective specifically used to describe intense, burning heat. "Sheer" refers to something absolute or vertical. "Fierce" and "extreme" can describe heat but lack the precise register of "blistering".',
        },
        {
          number: 5,
          options: [
            { value: 'A', label: 'fusion' },
            { value: 'B', label: 'coalition' },
            { value: 'C', label: 'blend' },
            { value: 'D', label: 'integration' },
          ],
          answer: 'D',
          explanation: '"Integration" means the act of combining two things into a unified whole. "Fusion" implies a merging where identities are lost; "integration" suggests a structured, purposeful incorporation — exactly what biomimicry achieves.',
        },
        {
          number: 6,
          options: [
            { value: 'A', label: 'factor' },
            { value: 'B', label: 'point' },
            { value: 'C', label: 'matter' },
            { value: 'D', label: 'piece' },
          ],
          answer: 'C',
          explanation: '"A matter of aesthetics" is a fixed expression meaning something related to aesthetic concerns. "A matter of X" is a high-register phrase indicating the relevant domain of a question or concern.',
        },
        {
          number: 7,
          options: [
            { value: 'A', label: 'envision' },
            { value: 'B', label: 'ponder' },
            { value: 'C', label: 'contemplate' },
            { value: 'D', label: 'apprehend' },
          ],
          answer: 'A',
          explanation: '"Envision" means to imagine or conceive of a future possibility. The sentence describes a fundamental shift in how we imagine/conceptualise the technology-environment relationship. "Ponder" and "contemplate" mean to think carefully, but lack the forward-looking sense needed here.',
        },
        {
          number: 8,
          options: [
            { value: 'A', label: 'unlock' },
            { value: 'B', label: 'unleash' },
            { value: 'C', label: 'unearth' },
            { value: 'D', label: 'unravel' },
          ],
          answer: 'A',
          explanation: '"Unlock the secrets" is a fixed collocation meaning to discover or reveal something hidden. "Unravel" can work for mysteries but collocates more with problems. "Unearth" and "unleash" do not form natural collocations with "secrets" in this context.',
        },
      ],
    },

    // ─── Part 2: Open cloze ───────────────────────────────────────────────────
    {
      partNumber: 2,
      type: 'open-cloze',
      title: 'The Nature of Empathy',
      textParts: [
        'Empathy is (0) what allows us to understand and share the feelings of others, yet its origins remain a subject of intense scientific debate. ',
        ' it is often described as a uniquely human trait, research has shown that many animals exhibit similar emotional responses. The biological basis for empathy is thought to lie in \'mirror neurons\'—cells in the brain ',
        ' fire both when we perform an action and when we observe someone else doing ',
        ' same. This suggests that our brains are, in a sense, hardwired to connect with those around ',
        ' . However, empathy is not ',
        ' simple as a reflex. It is heavily influenced by our upbringing and the social context ',
        ' we find ourselves. ',
        ' lack of empathy is often associated with psychological disorders, but for the majority of people, it is a skill that can be developed over time. In a world that is becoming increasingly polarized, the ability to see things from another person\'s perspective has ',
        ' been more important.',
      ],
      questions: [
        { number: 9, acceptedAnswers: ['Although', 'While', 'Though'], explanation: 'A conjunction of contrast is needed: empathy is described as human-only, BUT animals also show it. "Although", "While", or "Though" all introduce this concession.' },
        { number: 10, acceptedAnswers: ['that', 'which'], explanation: 'A relative pronoun is needed to introduce the relative clause defining mirror neurons. Both "that" and "which" are acceptable.' },
        { number: 11, acceptedAnswers: ['the'], explanation: '"The same" — the definite article refers back to the specific action already mentioned ("the same" action as the one performed).' },
        { number: 12, acceptedAnswers: ['us'], explanation: '"Those around us" is a common fixed phrase meaning the people in our immediate social world. The object pronoun "us" is required.' },
        { number: 13, acceptedAnswers: ['as', 'so'], explanation: '"Not as/so simple as a reflex" — the comparative structure "not as/so + adjective + as" requires "as" or "so".' },
        { number: 14, acceptedAnswers: ['where', 'in which'], explanation: '"The social context where/in which we find ourselves" — a relative pronoun of place is needed. "Where" or "in which" both work.' },
        { number: 15, acceptedAnswers: ['A'], explanation: '"A lack of empathy" — the indefinite article is required before the noun phrase "lack of empathy", which introduces a general concept.' },
        { number: 16, acceptedAnswers: ['never'], explanation: '"Has never been more important" — the emphatic structure with "never" + present perfect + comparative creates a superlative-like emphasis.' },
      ],
    },

    // ─── Part 3: Word formation ───────────────────────────────────────────────
    {
      partNumber: 3,
      type: 'word-formation',
      title: 'The Psychology of Procrastination',
      textParts: [
        'There is a common (0) perception that procrastination is simply a result of laziness or poor time management. However, psychologists have found that the issue is far more ',
        ' . At its core, procrastination is an emotional regulation problem, not a ',
        ' flaw. When we face a task that makes us feel anxious or ',
        ', our brains prioritize immediate mood repair over long-term goals. This leads to the ',
        ' of the task in favor of more ',
        ' activities, such as scrolling through social media. While this provides temporary relief, the ',
        ' guilt and stress often make the original task even harder to start. Overcoming this cycle requires self-compassion and the ',
        ' of \'micro-goals\'. By breaking a large project into smaller, more ',
        ' steps, we can reduce the emotional friction that causes us to stall.',
      ],
      questions: [
        { number: 17, givenWord: 'COMPLICATE', answer: 'complicated', explanation: 'The adjective "complicated" (past participle used as adjective) is required as a predicative adjective after "more". The issue is "far more complicated" than assumed.' },
        { number: 18, givenWord: 'CHARACTER', answer: 'character', explanation: '"Character flaw" is a fixed compound noun meaning a fault in someone\'s personality. The base noun "character" is used directly — no derivation needed.' },
        { number: 19, givenWord: 'SECURE', answer: 'insecure', explanation: 'The adjective "insecure" (negative prefix in-) describes a feeling of self-doubt or lack of confidence. "Anxious or insecure" are paired emotional states.' },
        { number: 20, givenWord: 'AVOID', answer: 'avoidance', explanation: 'The noun "avoidance" means the act of avoiding something. "The avoidance of the task" = the deliberate act of putting it off.' },
        { number: 21, givenWord: 'ENJOY', answer: 'enjoyable', explanation: 'The adjective "enjoyable" means giving pleasure. "More enjoyable activities" describes the pleasurable distractions that replace the avoided task.' },
        { number: 22, givenWord: 'SUBSEQUENT', answer: 'subsequent', explanation: '"Subsequent guilt" means the guilt that follows afterwards. "Subsequent" is used directly as an adjective; no derivation required.' },
        { number: 23, givenWord: 'ESTABLISH', answer: 'establishment', explanation: 'The noun "establishment" means the act of creating or setting up something. "The establishment of micro-goals" = creating small targets.' },
        { number: 24, givenWord: 'MANAGE', answer: 'manageable', explanation: 'The adjective "manageable" means able to be dealt with or controlled. "More manageable steps" = smaller steps that are easier to handle.' },
      ],
    },

    // ─── Part 4: Key word transformations ─────────────────────────────────────
    {
      partNumber: 4,
      type: 'key-word-transformation',
      questions: [
        {
          number: 25,
          sentence1: "It's highly probable that the company will go bankrupt by the end of the year.",
          keyword: 'EVERY',
          sentence2Begin: 'There is ',
          sentence2End: ' the company going bankrupt by the end of the year.',
          answer: 'every likelihood of',
          explanation: '"There is every likelihood of + gerund" is a formal phrase meaning it is very probable. The structure "every likelihood of" replaces "highly probable that".',
        },
        {
          number: 26,
          sentence1: 'I only realized how much I missed my family when I moved abroad.',
          keyword: 'UNTIL',
          sentence2Begin: 'Not ',
          sentence2End: ' how much I missed my family.',
          answer: 'until I moved abroad did I realize',
          explanation: '"Not until... did + subject + verb" is a negative inversion structure used for emphasis. The time clause comes first, followed by inverted auxiliary + subject.',
        },
        {
          number: 27,
          sentence1: 'Experts say that the new law will have a significant impact on the economy.',
          keyword: 'BELIEVED',
          sentence2Begin: 'The new law ',
          sentence2End: ' a significant impact on the economy.',
          answer: 'is believed to have',
          explanation: 'Passive reporting structure: "Subject + is believed + to-infinitive". "Experts say that X will have Y" becomes "X is believed to have Y".',
        },
        {
          number: 28,
          sentence1: '"I\'m sorry I forgot to call you on your birthday," said Thomas to his mother.',
          keyword: 'APOLOGISED',
          sentence2Begin: 'Thomas ',
          sentence2End: " to call her on her birthday.",
          answer: 'apologised for forgetting',
          explanation: '"Apologise for + gerund" is the fixed reporting structure. "I\'m sorry I forgot" becomes "apologised for forgetting". The infinitive shifts to gerund after "for".',
        },
        {
          number: 29,
          sentence1: "You must not leave the office under any circumstances without telling your manager.",
          keyword: 'ACCOUNT',
          sentence2Begin: 'On ',
          sentence2End: ' leave the office without telling your manager.',
          answer: 'no account must/should you',
          explanation: '"On no account + modal + subject" is a negative inversion expressing absolute prohibition. "Must not under any circumstances" becomes "On no account must/should you".',
        },
        {
          number: 30,
          sentence1: 'Although he was exhausted, he managed to finish the marathon.',
          keyword: 'DESPITE',
          sentence2Begin: 'He finished the marathon ',
          sentence2End: ' of exhaustion.',
          answer: 'despite being in a state',
          explanation: '"Despite + gerund/noun phrase" expresses contrast. "Although he was exhausted" becomes "despite being in a state of exhaustion".',
        },
      ],
    },

    // ─── Part 5: Reading multiple choice ─────────────────────────────────────
    {
      partNumber: 5,
      type: 'reading-mcq',
      articleTitle: 'The Invisible Boss',
      text: `In the traditional corporate hierarchy, the manager was a visible, often fallible figure—a person who could be reasoned with, complained about, or even inspired by. Today, for a rapidly growing segment of the global workforce, that human supervisor is being replaced by an algorithm. This shift toward 'algorithmic management'—the use of data-driven software to track, evaluate, and direct employees—was once confined to the gig economy, but it is now permeating white-collar sectors. While proponents argue that it removes human bias from the equation, critics suggest it replaces it with a cold, inflexible logic that ignores the nuances of human effort.

The appeal for employers is obvious. Algorithms can process vast amounts of data in real-time, identifying inefficiencies that would be invisible to the human eye. In logistics warehouses, software can calculate the precise route a worker should take to pick an item, down to the second. In call centers, AI monitors the tone of a worker's voice, flagging any signs of frustration or fatigue. The goal is total optimization—the elimination of 'slack' from the system. However, this level of scrutiny comes with a psychological cost. Workers often report a sense of 'digital exhaustion,' a feeling that they are being treated as mere components in a machine rather than autonomous individuals.

One of the most insidious aspects of algorithmic management is the 'information asymmetry' it creates. The software knows everything about the worker—their speed, their location, their break patterns—but the worker knows almost nothing about how the software is evaluating them. Decisions regarding shifts, bonuses, or even termination are made inside a 'black box.' When a human manager makes a mistake, there is a clear path for appeal. When an algorithm makes a mistake, the worker is often met with an automated response, leaving them in a state of perpetual uncertainty. This lack of transparency undermines the fundamental trust that is necessary for a healthy workplace.

Furthermore, the belief that algorithms are inherently 'neutral' is a dangerous fallacy. An algorithm is only as fair as the data it is trained on and the priorities of the person who wrote the code. If a software package is programmed to prioritize speed above all else, it will naturally penalize workers who take the time to be thorough or helpful to colleagues. In this way, algorithmic management doesn't just measure work; it fundamentally reshapes it, encouraging a 'race to the bottom' where quality is sacrificed at the altar of raw metrics.

There is also the issue of what sociologists call 'context collapse.' A human manager understands that an employee might be having a difficult week due to personal circumstances, or that a technical glitch outside the worker's control caused a delay. An algorithm, by contrast, sees only the data point. It lacks the capacity for empathy or the ability to consider the broader context of a human life. This rigid adherence to data can lead to 'automated cruelty,' where workers are penalized for situations that any reasonable person would find excusable.

As we move further into this era of digital supervision, the challenge will be to find a balance between efficiency and humanity. Legislation is starting to catch up, with some jurisdictions demanding that workers be given an 'explanation' for automated decisions. However, the real shift must be cultural. We must ask ourselves whether the marginal gains in productivity offered by algorithmic management are worth the erosion of dignity and autonomy. Efficiency is a virtue, but it should not be the only metric by which we measure the value of a day's work.`,
      questions: [
        {
          number: 31,
          question: 'In the first paragraph, the writer suggests that algorithmic management...',
          options: [
            { value: 'A', label: 'is primarily used to inspire workers in the gig economy.' },
            { value: 'B', label: 'was initially developed to help white-collar workers manage their time.' },
            { value: 'C', label: 'is moving beyond its original application into more traditional industries.' },
            { value: 'D', label: 'has successfully eliminated the biases associated with human supervisors.' },
          ],
          answer: 'C',
          explanation: 'The text states it was "once confined to the gig economy, but it is now permeating white-collar sectors." D is contradicted — critics say it replaces human bias with a different inflexibility.',
        },
        {
          number: 32,
          question: "What is the 'psychological cost' mentioned in the second paragraph?",
          options: [
            { value: 'A', label: 'The inability of workers to find their way around large warehouses.' },
            { value: 'B', label: 'A loss of a sense of agency and individual value among employees.' },
            { value: 'C', label: 'The physical exhaustion caused by working longer hours than before.' },
            { value: 'D', label: 'The frustration of having to listen to AI-generated voices all day.' },
          ],
          answer: 'B',
          explanation: '"Digital exhaustion" is a "feeling that they are being treated as mere components... rather than autonomous individuals" — a loss of agency and individual worth.',
        },
        {
          number: 33,
          question: "The writer uses the term 'black box' in the third paragraph to emphasize...",
          options: [
            { value: 'A', label: 'the secure way in which worker data is stored.' },
            { value: 'B', label: 'the physical isolation of workers in modern offices.' },
            { value: 'C', label: 'the secretive nature of the decision-making process.' },
            { value: 'D', label: 'the speed at which algorithms can process information.' },
          ],
          answer: 'C',
          explanation: '"Black box" refers to the opaque, non-transparent process inside which decisions are made. Workers cannot see or challenge the logic used against them.',
        },
        {
          number: 34,
          question: 'What point is made about the neutrality of algorithms in the fourth paragraph?',
          options: [
            { value: 'A', label: 'They are more objective than human managers because they only look at data.' },
            { value: 'B', label: 'Their design reflects the specific values and goals of their creators.' },
            { value: 'C', label: 'They have been proven to encourage better teamwork in the workplace.' },
            { value: 'D', label: 'They are constantly evolving to become fairer as they collect more data.' },
          ],
          answer: 'B',
          explanation: '"An algorithm is only as fair as the data it is trained on and the priorities of the person who wrote the code." The creator\'s values are encoded into the system.',
        },
        {
          number: 35,
          question: "The term 'context collapse' refers to the algorithm's inability to...",
          options: [
            { value: 'A', label: 'process multiple data points at the same time.' },
            { value: 'B', label: 'distinguish between different types of technical errors.' },
            { value: 'C', label: 'take into account the personal circumstances behind a worker\'s performance.' },
            { value: 'D', label: 'communicate effectively with workers from different cultural backgrounds.' },
          ],
          answer: 'C',
          explanation: '"Context collapse" describes the algorithm\'s failure to understand that "an employee might be having a difficult week" — it cannot consider the human context behind data points.',
        },
        {
          number: 36,
          question: "What is the writer's conclusion regarding the future of work?",
          options: [
            { value: 'A', label: 'Productivity gains will eventually make human managers completely unnecessary.' },
            { value: 'B', label: 'Technology should be used to eliminate the need for human labor entirely.' },
            { value: 'C', label: 'Societies must decide if productivity is more important than worker dignity.' },
            { value: 'D', label: 'Legislation is the only way to ensure that algorithms work correctly.' },
          ],
          answer: 'C',
          explanation: 'The writer asks if "marginal gains in productivity... are worth the erosion of dignity and autonomy." D is too narrow — the writer says the "real shift must be cultural", not just legislative.',
        },
      ],
    },

    // ─── Part 6: Cross-text multiple matching ─────────────────────────────────
    {
      partNumber: 6,
      type: 'cross-text',
      articleTitle: 'The Value of a Liberal Arts Education',
      intro: 'You are going to read four extracts from articles in which experts discuss the value of Liberal Arts degrees (humanities, arts, social sciences). For questions 37 – 40, choose from the experts A – D. The experts may be chosen more than once.',
      texts: [
        {
          label: 'A',
          name: 'Dr. Helena Vance',
          text: "In an era dominated by the rapid advancement of STEM (science, technology, engineering, and math), the liberal arts are often unfairly dismissed as a luxury. However, this view is shortsighted. A liberal arts education equips students with the ability to think critically, communicate clearly, and synthesize complex information—skills that are increasingly sought after by tech giants. As AI takes over technical tasks, the 'human' skills of empathy and ethical reasoning will become the ultimate competitive advantage. Far from being obsolete, a degree in philosophy or history is perhaps the most future-proof qualification one can obtain.",
        },
        {
          label: 'B',
          name: 'Marcus Sterling',
          text: "The rising cost of higher education means that students and parents are understandably looking for a clear 'Return on Investment' (ROI). From a purely economic perspective, degrees in engineering or computer science offer a much more predictable and lucrative career path. While the intellectual growth provided by the humanities is undeniable, we must be honest about the limitations of the current job market. The skills mentioned by proponents of the liberal arts—critical thinking and communication—are not exclusive to those disciplines. An engineer who can write well is far more valuable than a literature graduate with no technical literacy.",
        },
        {
          label: 'C',
          name: 'Prof. Ian Chen',
          text: "The debate over liberal arts versus STEM is a false dichotomy. The most successful innovators of the 21st century are those who can bridge the gap between the two. However, we are currently seeing a dangerous decline in funding for the humanities. This is a mistake. Science can tell us how to build something, but the liberal arts tell us why we should build it and what the societal consequences might be. Without a foundation in the humanities, we risk creating a generation of technically brilliant individuals who lack the historical and ethical perspective to manage the powerful tools they are developing.",
        },
        {
          label: 'D',
          name: 'Sarah Thompson',
          text: "There is a pervasive myth that liberal arts graduates struggle to find employment. On the contrary, data suggests that while they may start with lower salaries, their earning potential often catches up to or exceeds that of their STEM counterparts by mid-career. This is because a broad education fosters adaptability. In a world where the 'job for life' is dead, the ability to learn new concepts and navigate different cultural and social contexts is vital. A rigid focus on vocational training—teaching students how to perform a specific job that might not exist in ten years—is the real risk to our future economy.",
        },
      ],
      questions: [
        {
          number: 37,
          text: 'shares Dr. Vance\'s view regarding the long-term career prospects for liberal arts graduates?',
          answer: 'D',
          explanation: 'Thompson (D) argues liberal arts graduates\' "earning potential often catches up to or exceeds STEM counterparts by mid-career" — a positive long-term view matching Vance\'s optimism about future-proofing.',
        },
        {
          number: 38,
          text: 'has a different opinion from the others about the exclusivity of \'soft skills\' to the liberal arts?',
          answer: 'B',
          explanation: 'Sterling (B) argues that critical thinking and communication "are not exclusive to those disciplines" — unlike the other three, who implicitly or explicitly link these skills primarily to a humanities education.',
        },
        {
          number: 39,
          text: 'expresses a similar concern to Dr. Vance about the impact of automation on the job market?',
          answer: 'C',
          explanation: 'Prof. Chen (C) shares Vance\'s concern about AI and automation. Chen warns that without the humanities, technically brilliant individuals will "lack the historical and ethical perspective to manage" powerful technology — mirroring Vance\'s point about AI taking over technical tasks.',
        },
        {
          number: 40,
          text: 'emphasizes the importance of the liberal arts in guiding the ethical use of technology, similar to Prof. Chen?',
          answer: 'A',
          explanation: 'Vance (A) emphasises that "ethical reasoning" will become the "ultimate competitive advantage" as AI takes over, directly paralleling Chen\'s argument that the liberal arts tell us "why we should build" something and its "societal consequences".',
        },
      ],
    },

    // ─── Part 7: Gapped text ──────────────────────────────────────────────────
    {
      partNumber: 7,
      type: 'gapped-text',
      articleTitle: 'The Renaissance of the Urban Canal',
      textParts: [
        'For much of the 20th century, the canals that threaded through Europe\'s industrial cities were viewed as little more than open sewers—relics of a bygone era of barge transport that had been rendered obsolete by the combustion engine. In city after city, these waterways were filled in to make room for multi-lane highways and parking lots. The logic was simple: the car was the future, and stagnant water was a health hazard.',
        '\n\nIn cities like Utrecht and Seoul, what were once concrete arteries choked with traffic are being transformed back into blue and green corridors. The Cheonggyecheon project in South Korea is perhaps the most famous example. An elevated highway that once carried 160,000 cars a day was demolished to uncover a stream that had been buried for decades.',
        '\n\nCritics initially scoffed at the astronomical costs and the potential for city-wide gridlock. However, the results have been transformative. Not only did the project create a five-mile-long park in the heart of the city, but it also lowered local temperatures by several degrees—a phenomenon known as the \'urban heat island\' effect—and brought a surge in biodiversity.',
        '\n\nThis shift in urban planning reflects a deeper change in how we perceive the \'livability\' of a city. It is no longer enough for a city to be a machine for commerce; it must also provide psychological relief. Water has a unique ability to act as a \'blue space,\' which research suggests is even more effective than green space in reducing cortisol levels and improving mental wellbeing.',
        '\n\nHowever, these projects are not without their complexities. Reopening a canal often involves navigating a labyrinth of subterranean infrastructure, from centuries-old sewers to modern fiber-optic cables. In some cases, the original path of the water has been so built over that restoration is physically impossible.',
        '\n\nThen there is the issue of \'green gentrification.\' While the restoration of a waterway undoubtedly improves the quality of life for residents, it also drives up property values. There is a risk that the very people who lived through the \'highway years\' are priced out of their neighborhoods just as the water returns.',
        '\n\nDespite these hurdles, the momentum for \'daylighting\'—the practice of bringing buried streams back to the surface—shows no sign of slowing. As we face a century of increasing urban heat and climate instability, the ancient wisdom of the canal may prove to be our most modern solution.',
      ],
      sentences: [
        { label: 'A', text: 'This environmental success story has sparked a global trend. Planners are realizing that water is not just an aesthetic choice, but a functional tool for climate adaptation.' },
        { label: 'B', text: 'Beyond the technical difficulties, there is also a significant political hurdle. Removing a major road requires a level of political courage that many city councils lack, fearing a backlash from angry commuters.' },
        { label: 'C', text: "However, in the last decade, a remarkable reversal has taken place. The 'concrete-over-everything' philosophy is being discarded in favor of a more holistic approach to urban ecology." },
        { label: 'D', text: 'The economic impact of such a move is equally undeniable. New businesses, from cafes to tech startups, tend to cluster around these reclaimed spaces, revitalizing neglected districts.' },
        { label: 'E', text: 'This social impact must be carefully managed. Planners must ensure that the benefits of urban nature are accessible to all, not just a wealthy elite who can afford the new view.' },
        { label: 'F', text: "These physical barriers often lead to compromises, where 'simulated' canals are built above the original path, using recirculated water to provide the visual and cooling benefits without the structural risks." },
        { label: 'G', text: 'The water itself, once considered a source of disease, has been purified through advanced filtration systems, allowing citizens to once again engage with the natural history of their landscape.' },
      ],
      questions: [
        { number: 41, answer: 'C', explanation: '"However, in the last decade, a remarkable reversal has taken place" directly contrasts with the 20th-century history of burying canals, signalling the shift to the restoration era described next.' },
        { number: 42, answer: 'G', explanation: '"The water itself... has been purified" explains how the stream uncovered in Seoul was made safe for citizens — directly following the mention of demolishing the highway to uncover the buried stream.' },
        { number: 43, answer: 'A', explanation: '"This environmental success story has sparked a global trend" refers back to the Cheonggyecheon project\'s success (biodiversity, heat island reduction) and introduces the global movement described next.' },
        { number: 44, answer: 'D', explanation: '"The economic impact of such a move is equally undeniable" connects the psychological benefits of blue space (mentioned before) to the economic revitalization that follows restoration.' },
        { number: 45, answer: 'F', explanation: '"These physical barriers often lead to compromises" — "simulated canals" built above the original path — directly addresses the problem of waterways being so buried that restoration is impossible.' },
        { number: 46, answer: 'E', explanation: '"This social impact must be carefully managed" addresses the gentrification problem raised just before (residents priced out), calling for planning that ensures benefits are accessible to all.' },
      ],
    },

    // ─── Part 8: Multiple matching ────────────────────────────────────────────
    {
      partNumber: 8,
      type: 'multiple-matching',
      intro: 'You are going to read a review of four different biographies. For questions 47 – 52, choose from the books (A – D). The books may be chosen more than once.',
      texts: [
        {
          label: 'A',
          name: 'The Silent Architect — Sarah Miller',
          text: "In this meticulously researched account of the life of Arthur Vance, Miller attempts to rescue her subject from the shadow of his more famous contemporaries. Vance, a man whose designs defined the mid-century skyline, was notoriously private, often destroying his personal correspondence. Miller's triumph lies in her ability to piece together his character through the testimonies of his disgruntled subordinates and the cold, geometric logic of his buildings. The result is a portrait of a man who was as structurally rigid in his personal life as he was in his professional one. It is a dense read, occasionally bogged down by technical architectural jargon, but ultimately rewarding for those interested in the price of perfectionism.",
        },
        {
          label: 'B',
          name: 'Beyond the Frame — David Ross',
          text: "Ross's biography of the avant-garde painter Elena Petrova is less a chronological record and more a series of vivid, impressionistic vignettes. Petrova was known for her flamboyant public persona, which Ross argues was a carefully constructed mask to protect an intensely fragile ego. The book excels in its description of the 1920s Parisian art scene, bringing the era's hedonism to life with almost cinematic detail. However, Ross is occasionally guilty of over-speculation, attributing complex psychological motives to Petrova's every brushstroke without sufficient documentary evidence. Nevertheless, it is an evocative read that captures the spirit, if not always the literal facts, of a turbulent life.",
        },
        {
          label: 'C',
          name: 'The Iron Ledger — Marcus Thorne',
          text: "This biography of the industrialist Silas Vane is a stark reminder that history is often written by the winners. Vane, who built a shipping empire through sheer ruthlessness, has long been portrayed as a visionary. Thorne, however, has spent years digging through the archives of Vane's defunct companies to reveal the human cost of his success. The book is an unflinching look at the exploitation that fueled the Industrial Revolution. While Vane himself remains a somewhat one-dimensional villain in this telling, the voices of the workers he stepped on are given a powerful and long-overdue platform. It is a sobering, necessary correction to the 'Great Man' theory of history.",
        },
        {
          label: 'D',
          name: 'The Unfinished Symphony — Elena Rossi',
          text: "Rossi's biography of the composer Leo Stern focuses on his final, uncompleted year. Unlike many biographers who try to cover every year from birth to death, Rossi understands that a person's essence can often be found in their failures rather than their triumphs. Stern was a man plagued by self-doubt and creative blocks, and Rossi uses his messy, abandoned musical scores to illustrate his deteriorating mental state. The prose is lyrical and deeply empathetic, making the reader feel the tragedy of a genius who could no longer hear his own music. It is a brief but profound book that avoids the dry academic tone that often plagues the genre.",
        },
      ],
      questions: [
        { number: 47, text: 'uses physical evidence of the subject\'s work to explain their personality?', answer: 'A', explanation: 'Miller uses Vance\'s buildings — their "cold, geometric logic" — as a window into his personality, showing he was "as structurally rigid in his personal life as... his professional one".' },
        { number: 48, text: 'focuses on a specific period of the subject\'s life rather than the whole of it?', answer: 'D', explanation: 'Rossi focuses on Stern\'s "final, uncompleted year," explicitly contrasting her approach with biographers who "try to cover every year from birth to death".' },
        { number: 49, text: 'challenges a previously accepted positive image of the subject?', answer: 'C', explanation: 'Thorne challenges the view of Vane as a "visionary," revealing instead "the human cost of his success" through years of archival research.' },
        { number: 50, text: "is criticized for including the author's own guesses about the subject's thoughts?", answer: 'B', explanation: 'Ross is "occasionally guilty of over-speculation, attributing complex psychological motives to Petrova\'s every brushstroke without sufficient documentary evidence."' },
        { number: 51, text: 'aims to bring recognition to a person who has been largely forgotten?', answer: 'A', explanation: 'Miller attempts to "rescue her subject from the shadow of his more famous contemporaries" — explicitly trying to reclaim recognition for a forgotten figure.' },
        { number: 52, text: 'highlights the voices of people who were negatively affected by the subject?', answer: 'C', explanation: 'Thorne gives the "voices of the workers he stepped on... a powerful and long-overdue platform" — centering those harmed by Vane\'s ruthless business practices.' },
      ],
    },
  ],
};
