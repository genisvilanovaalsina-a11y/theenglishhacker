import type { Exam } from '../types';

export const exam: Exam = {
  id: 'c1-exam-04',
  number: 4,
  level: 'c1',
  parts: [
    // ─── Part 1: Multiple-choice cloze ────────────────────────────────────────
    {
      partNumber: 1,
      type: 'mc-cloze',
      title: 'The Allure of Minimalism',
      textParts: [
        'In the (0) light of modern consumerism, a counter-movement known as minimalism has gained significant ',
        ' . Far from being a mere aesthetic choice, minimalism is a philosophy that encourages individuals to ',
        " their lives of physical and mental clutter. Proponents argue that by reducing one's possessions, one can ",
        ' a greater sense of freedom and focus. However, the transition to a minimalist lifestyle is not without its ',
        ' . It requires a radical shift in mindset, moving away from the belief that material wealth is ',
        ' to happiness. Many people find it difficult to ',
        " with sentimental items, even those that no longer serve a practical purpose. Nevertheless, those who successfully ",
        ' this lifestyle often report a profound increase in their overall wellbeing, suggesting that sometimes, less truly is ',
        ' .',
      ],
      questions: [
        {
          number: 1,
          options: [
            { value: 'A', label: 'traction' },
            { value: 'B', label: 'friction' },
            { value: 'C', label: 'suction' },
            { value: 'D', label: 'tension' },
          ],
          answer: 'A',
          explanation: '"Gain traction" is a fixed collocation meaning to become widely accepted or to make progress. A movement "gains traction" as it becomes more popular. "Friction" and "tension" have negative connotations incompatible with a growing movement.',
        },
        {
          number: 2,
          options: [
            { value: 'A', label: 'strip' },
            { value: 'B', label: 'rid' },
            { value: 'C', label: 'void' },
            { value: 'D', label: 'purge' },
          ],
          answer: 'D',
          explanation: '"Purge" means to rid of whatever is impure, undesirable, or superfluous. It carries the sense of a thorough, intentional removal — appropriate for the minimalist philosophy of removing clutter. "Strip" and "rid" typically need different prepositions in this structure.',
        },
        {
          number: 3,
          options: [
            { value: 'A', label: 'foster' },
            { value: 'B', label: 'nurture' },
            { value: 'C', label: 'cultivate' },
            { value: 'D', label: 'harvest' },
          ],
          answer: 'C',
          explanation: '"Cultivate a sense of" means to develop or build up a quality over time. It suggests deliberate effort and gradual growth. "Foster" implies encouraging from outside; "cultivate" implies developing from within.',
        },
        {
          number: 4,
          options: [
            { value: 'A', label: 'pitfalls' },
            { value: 'B', label: 'snares' },
            { value: 'C', label: 'hurdles' },
            { value: 'D', label: 'hitches' },
          ],
          answer: 'A',
          explanation: '"Pitfalls" are hidden or unsuspected dangers or difficulties. At C1 level, "not without its pitfalls" is the standard idiom for hidden risks. "Hurdles" are obstacles to overcome; "pitfalls" are traps to avoid.',
        },
        {
          number: 5,
          options: [
            { value: 'A', label: 'synonymous' },
            { value: 'B', label: 'equivalent' },
            { value: 'C', label: 'identical' },
            { value: 'D', label: 'uniform' },
          ],
          answer: 'A',
          explanation: '"Synonymous with" means closely associated with or representative of. "Material wealth is synonymous with happiness" means they are considered the same thing. "Equivalent" is used for objects of equal value, not abstract associations.',
        },
        {
          number: 6,
          options: [
            { value: 'A', label: 'part' },
            { value: 'B', label: 'divide' },
            { value: 'C', label: 'separate' },
            { value: 'D', label: 'detach' },
          ],
          answer: 'A',
          explanation: '"Part with something" is a fixed phrasal verb meaning to give up possession of something, often reluctantly. "Difficult to part with sentimental items" is a standard collocation.',
        },
        {
          number: 7,
          options: [
            { value: 'A', label: 'embrace' },
            { value: 'B', label: 'enfold' },
            { value: 'C', label: 'encompass' },
            { value: 'D', label: 'embody' },
          ],
          answer: 'A',
          explanation: '"Embrace a lifestyle/philosophy" means to accept or support it willingly and enthusiastically. It implies a wholehearted adoption. "Embody" means to personify, "encompass" means to include everything.',
        },
        {
          number: 8,
          options: [
            { value: 'A', label: 'enough' },
            { value: 'B', label: 'more' },
            { value: 'C', label: 'plenty' },
            { value: 'D', label: 'sufficient' },
          ],
          answer: 'B',
          explanation: '"Less is more" is the famous maxim of minimalist philosophy, attributed to the architect Mies van der Rohe. This is a fixed cultural reference that only "more" can complete.',
        },
      ],
    },

    // ─── Part 2: Open cloze ───────────────────────────────────────────────────
    {
      partNumber: 2,
      type: 'open-cloze',
      title: 'The Mystery of the Voynich Manuscript',
      textParts: [
        'The Voynich Manuscript is (0) one of the most baffling mysteries in the history of linguistics. Dated to the early 15th century, the book consists ',
        ' hundreds of pages filled with strange illustrations of plants, astronomical diagrams, and a script that has ',
        ' to be deciphered. For centuries, cryptographers and linguists ',
        ' have attempted to break the code, yet the meaning of the text remains as elusive as ever. Some researchers believe the manuscript is a sophisticated hoax, created ',
        ' the purpose of tricking wealthy book collectors. Others argue that it represents a lost language or a highly complex cipher ',
        ' is simply beyond our current understanding. ',
        " the case may be, the manuscript continues to exert a powerful fascination. It serves ",
        ' a reminder that despite our modern technology, there are still secrets from the past that we are unable ',
        ' uncover.',
      ],
      questions: [
        { number: 9, acceptedAnswers: ['of'], explanation: '"Consists of" is the fixed prepositional verb meaning to be made up of or composed of. No other preposition is grammatically possible here.' },
        { number: 10, acceptedAnswers: ['yet'], explanation: '"Has yet to be deciphered" is a formal structure meaning something has not happened so far. "Yet" in this position (between auxiliary and infinitive) expresses an unfulfilled expectation.' },
        { number: 11, acceptedAnswers: ['alike'], explanation: '"Cryptographers and linguists alike" uses "alike" as an adverb meaning "both" or "in the same way". It emphasizes that multiple groups share the same characteristic.' },
        { number: 12, acceptedAnswers: ['for'], explanation: '"Created for the purpose of" — the preposition "for" follows "created" to introduce the purpose or intended goal.' },
        { number: 13, acceptedAnswers: ['that', 'which'], explanation: 'A relative pronoun is needed to introduce the relative clause defining the cipher. Both "that" and "which" are acceptable in this defining relative clause.' },
        { number: 14, acceptedAnswers: ['Whatever'], explanation: '"Whatever the case may be" is a fixed concessive phrase meaning "regardless of the circumstances". It introduces a fact that holds true in all situations.' },
        { number: 15, acceptedAnswers: ['as'], explanation: '"Serve as a reminder" is a fixed phrase meaning to act or function as something. "To serve as" requires the preposition "as".' },
        { number: 16, acceptedAnswers: ['to'], explanation: '"Unable to + infinitive" is the fixed structure. "We are unable to uncover" = we cannot uncover. The preposition "to" introduces the infinitive.' },
      ],
    },

    // ─── Part 3: Word formation ───────────────────────────────────────────────
    {
      partNumber: 3,
      type: 'word-formation',
      title: 'The Rise of Vertical Farming',
      textParts: [
        'As the global population continues to grow, the (0) sustainability of traditional agriculture is being called into question. With limited arable land and an ',
        ' demand for food, researchers are exploring innovative solutions. One such ',
        ' is vertical farming—the practice of growing crops in stacked layers, often within controlled indoor environments. This method offers several ',
        ' advantages. Firstly, it allows for year-round production, ',
        ' of weather conditions. Secondly, it significantly reduces the need for pesticides and water, making it a more ',
        ' friendly option. However, the ',
        ' of these systems is currently limited by high energy costs. Despite these ',
        ', many experts believe that vertical farming will play a ',
        ' role in the future of urban food security.',
      ],
      questions: [
        { number: 17, givenWord: 'INCREASE', answer: 'increasing', explanation: 'The adjective "increasing" (present participle as adjective) modifies "demand", meaning a demand that is growing over time. "An increasing demand" = a demand that keeps growing.' },
        { number: 18, givenWord: 'DEVELOP', answer: 'development', explanation: 'The noun "development" refers to a specific new advancement or solution. "One such development" = one such newly developed solution.' },
        { number: 19, givenWord: 'STRIKE', answer: 'striking', explanation: 'The adjective "striking" means remarkable or notable. "Several striking advantages" = several advantages that are particularly impressive or obvious.' },
        { number: 20, givenWord: 'REGARD', answer: 'regardless', explanation: '"Regardless of weather conditions" means without being affected by weather. "Regardless" is a fixed adverb used before "of" to introduce the irrelevant factor.' },
        { number: 21, givenWord: 'ENVIRONMENT', answer: 'environmentally', explanation: 'The adverb "environmentally" modifies the compound adjective "-friendly". "Environmentally friendly" is a fixed collocation meaning not harmful to the environment.' },
        { number: 22, givenWord: 'VIABLE', answer: 'viability', explanation: 'The noun "viability" means the ability to work successfully or to be commercially sustainable. "The viability of these systems" = their ability to function successfully.' },
        { number: 23, givenWord: 'SHORT', answer: 'shortcomings', explanation: 'The noun "shortcomings" (always plural in this usage) means faults or failures to reach a required standard. "Despite these shortcomings" introduces the counterargument.' },
        { number: 24, givenWord: 'DECIDE', answer: 'decisive', explanation: 'The adjective "decisive" means settling an issue conclusively, or critically important. "Play a decisive role" means to have a crucial, determining influence.' },
      ],
    },

    // ─── Part 4: Key word transformations ─────────────────────────────────────
    {
      partNumber: 4,
      type: 'key-word-transformation',
      questions: [
        {
          number: 25,
          sentence1: "I'm sure it wasn't easy for her to admit she was wrong.",
          keyword: "CAN'T",
          sentence2Begin: 'It ',
          sentence2End: ' easy for her to admit she was wrong.',
          answer: "can't have been",
          explanation: '"Can\'t have been" expresses a confident negative deduction about the past. "I\'m sure it wasn\'t" becomes "it can\'t have been" — the modal perfect structure for logical impossibility.',
        },
        {
          number: 26,
          sentence1: 'We only realized the danger when the alarm went off.',
          keyword: 'DID',
          sentence2Begin: 'Not until the alarm went off ',
          sentence2End: ' the danger.',
          answer: 'did we realize',
          explanation: '"Not until... did + subject + verb" is a negative fronting inversion for emphasis. Moving "not until" to the front inverts the subject and auxiliary: "did we realize".',
        },
        {
          number: 27,
          sentence1: 'Experts believe that the painting is worth millions of dollars.',
          keyword: 'ESTIMATED',
          sentence2Begin: 'The painting ',
          sentence2End: ' worth millions of dollars.',
          answer: 'is estimated to be',
          explanation: 'Passive reporting with "estimate": "Subject + is estimated + to be". "Experts believe that X is worth Y" becomes "X is estimated to be worth Y".',
        },
        {
          number: 28,
          sentence1: '"I really should have studied harder for the exam," said Mark.',
          keyword: 'REGRETTED',
          sentence2Begin: 'Mark ',
          sentence2End: ' harder for the exam.',
          answer: 'regretted not studying',
          explanation: '"Regret + (not) + gerund" is the structure for expressing regret about a past action. "Should have studied harder" becomes "regretted not studying harder". "Having studied" is also accepted.',
        },
        {
          number: 29,
          sentence1: "You won't be able to solve the puzzle if you don't look at it from a different angle.",
          keyword: 'UNLESS',
          sentence2Begin: "You won't be able to solve the puzzle ",
          sentence2End: ' from a different angle.',
          answer: 'unless you look at it',
          explanation: '"Unless" replaces "if... not". "If you don\'t look at it from a different angle" becomes "unless you look at it from a different angle". Present simple after "unless".',
        },
        {
          number: 30,
          sentence1: "The company's success is due to the hard work of its employees.",
          keyword: 'PUT',
          sentence2Begin: "The company's success ",
          sentence2End: ' the hard work of its employees.',
          answer: 'is put down to',
          explanation: '"Put something down to something" is a phrasal verb meaning to attribute something to a cause. "Is due to" becomes "is put down to". The passive "is put down to" is required.',
        },
      ],
    },

    // ─── Part 5: Reading multiple choice ─────────────────────────────────────
    {
      partNumber: 5,
      type: 'reading-mcq',
      articleTitle: 'The Vanishing Threshold of Silence',
      text: `In the 19th century, the philosopher Arthur Schopenhauer argued that the amount of noise a person can bear is in inverse proportion to their mental capacity. While this may be an elitist overstatement, it points to a profound shift in our relationship with the acoustic environment. In the pre-industrial era, silence was the default—a canvas upon which sounds were painted. Today, the situation has been entirely inverted; noise is the constant background, and silence is a rare, expensive commodity, often sought in sound-proofed pods or remote retreats. This transition has not only altered our urban landscapes but has fundamentally rewired our neurological responses to the world around us.

The problem is not merely the volume of noise, but its inescapable nature. We live in an era of 'ambient intrusion,' where the hum of data centers, the whir of air conditioning, and the distant throb of traffic form a persistent wall of sound. Ecologists have noted that this has led to a 'narrowing of the acoustic horizon.' In nature, an animal's survival depends on its ability to hear a snap of a twig at a distance. In the modern city, our acoustic horizon has shrunk to just a few metres. We are effectively living in a state of sensory claustrophobia, unaware of the rich tapestry of sound that our ancestors once took for granted.

Psychologists have coined the term 'internal noise' to describe the mental equivalent of this external cacophony. The constant stream of digital notifications and the expectation of instant connectivity mean that our brains are rarely in a state of repose. This lack of 'acoustic downtime' prevents the brain from entering the Default Mode Network—the state associated with creativity, self-reflection, and the consolidation of memory. When we are denied silence, we are denied the opportunity to process our own lives. We become reactive rather than reflective, constantly ping-ponging between external stimuli without ever finding a steady internal centre.

Furthermore, the commercialization of silence has created a new social divide. Silence is becoming a luxury good. High-end real estate is marketed not just on square footage or location, but on 'acoustic isolation.' Meanwhile, those in lower-income brackets are disproportionately affected by noise pollution, living closer to airports, busy motorways, or industrial zones. This 'sonic inequality' has real health consequences, with chronic noise exposure linked to increased rates of hypertension and cognitive impairment in children. It is a stark reminder that the quality of our environment is often a reflection of our economic status.

However, there is a growing movement to reclaim silence as a human right. Some cities are experimenting with 'quiet zones'—public parks or libraries where digital devices are banned and loud conversations are discouraged. Architects are also rethinking building design, moving away from the hard, reflective surfaces of minimalist glass and steel toward materials that absorb and diffuse sound. It is a recognition that a city is not just a place to work and consume, but a place to exist as a biological entity with specific sensory needs.

Ultimately, silence is not merely the absence of noise; it is a presence in its own right. It is the space in which thoughts can grow and empathy can flourish. In a world that is becoming increasingly loud, the ability to cultivate an internal silence is perhaps the most important survival skill of the 21st century. We must learn to defend our quiet spaces, both physical and mental, with the same vigour with which we defend our time and our privacy. For without silence, we lose the ability to hear not just the world, but ourselves.`,
      questions: [
        {
          number: 31,
          question: 'In the first paragraph, the writer mentions Schopenhauer to highlight...',
          options: [
            { value: 'A', label: 'the intellectual superiority of people who prefer quiet environments.' },
            { value: 'B', label: 'the historical change in how silence is perceived by society.' },
            { value: 'C', label: 'the physical damage that noise can cause to the human brain.' },
            { value: 'D', label: 'the necessity of silence for the development of scientific theories.' },
          ],
          answer: 'B',
          explanation: 'Schopenhauer is used as a historical starting point to contrast how silence was once the default (pre-industrial) and is now a "rare, expensive commodity". The reference establishes the historical shift. A misreads the writer\'s purpose — the writer calls the quote "elitist."',
        },
        {
          number: 32,
          question: "The term 'narrowing of the acoustic horizon' refers to...",
          options: [
            { value: 'A', label: 'the inability of modern people to focus on a single sound.' },
            { value: 'B', label: 'the reduction in the distance over which we can perceive sounds.' },
            { value: 'C', label: 'the physical shrinking of our ears due to lack of use.' },
            { value: 'D', label: 'the loss of interest in listening to natural soundscapes.' },
          ],
          answer: 'B',
          explanation: 'The text explains this metaphor directly: "our acoustic horizon has shrunk to just a few metres" — the distance over which we can hear has been reduced by urban noise. C is literally impossible, D is not mentioned.',
        },
        {
          number: 33,
          question: "What is the writer's concern regarding 'internal noise' in the third paragraph?",
          options: [
            { value: 'A', label: 'It makes people more likely to suffer from hearing loss later in life.' },
            { value: 'B', label: 'It prevents the brain from performing vital cognitive and emotional tasks.' },
            { value: 'C', label: 'It encourages people to spend too much money on digital devices.' },
            { value: 'D', label: 'It leads to a breakdown in communication between different generations.' },
          ],
          answer: 'B',
          explanation: '"Internal noise" prevents the brain from "entering the Default Mode Network—the state associated with creativity, self-reflection, and the consolidation of memory." These are vital cognitive and emotional tasks.',
        },
        {
          number: 34,
          question: "What point is made about 'sonic inequality' in the fourth paragraph?",
          options: [
            { value: 'A', label: 'Silence is becoming a resource that only the wealthy can easily access.' },
            { value: 'B', label: 'Noise pollution is the primary cause of global economic instability.' },
            { value: 'C', label: 'People in high-end real estate are often bored by the lack of noise.' },
            { value: 'D', label: 'Children in noisy areas are more likely to become successful musicians.' },
          ],
          answer: 'A',
          explanation: '"Acoustic isolation" is marketed as a luxury in high-end real estate, while lower-income residents live near airports and motorways — silence is a resource distributed by wealth.',
        },
        {
          number: 35,
          question: "The writer's attitude toward 'quiet zones' in cities is that they...",
          options: [
            { value: 'A', label: 'are a well-meaning but ultimately futile attempt to control noise.' },
            { value: 'B', label: 'should be made mandatory in every residential neighbourhood.' },
            { value: 'C', label: 'represent a necessary acknowledgement of our biological requirements.' },
            { value: 'D', label: 'are too expensive for most city councils to implement effectively.' },
          ],
          answer: 'C',
          explanation: 'Quiet zones are described as "a recognition that a city... is a place to exist as a biological entity with specific sensory needs." This is a positive, approving attitude. A is not supported; B is an overstatement.',
        },
        {
          number: 36,
          question: 'In the final paragraph, the writer concludes that silence is...',
          options: [
            { value: 'A', label: 'an empty space that needs to be filled with productive activity.' },
            { value: 'B', label: 'a skill that can be taught in schools to improve academic results.' },
            { value: 'C', label: 'a vital environment for personal growth and understanding.' },
            { value: 'D', label: 'something that will eventually disappear entirely from the world.' },
          ],
          answer: 'C',
          explanation: 'Silence is "the space in which thoughts can grow and empathy can flourish" and "the most important survival skill of the 21st century." A contradicts the writer\'s view that silence is NOT empty; D is too pessimistic.',
        },
      ],
    },

    // ─── Part 6: Cross-text multiple matching ─────────────────────────────────
    {
      partNumber: 6,
      type: 'cross-text',
      articleTitle: 'The Universal Basic Income Debate',
      intro: 'You are going to read four extracts from articles in which experts discuss the concept of Universal Basic Income (UBI). For questions 37 – 40, choose from the experts A – D. The experts may be chosen more than once.',
      texts: [
        {
          label: 'A',
          name: 'Dr. Julian Sterling',
          text: "The implementation of a Universal Basic Income (UBI) is often touted as the panacea for the looming crisis of automation. However, this perspective is dangerously simplistic. While a guaranteed income might provide a temporary safety net, it fails to address the psychological importance of work. Employment provides structure, social connection, and a sense of purpose that money alone cannot replace. Furthermore, the fiscal burden of such a scheme would be catastrophic, likely leading to the gutting of other essential public services like healthcare and education. We should be focusing on reskilling the workforce, not paying them to be idle.",
        },
        {
          label: 'B',
          name: 'Prof. Anita Desai',
          text: "Critics of UBI often rely on an outdated 'work ethic' that equates human value with economic productivity. In an age where AI can outperform humans in many sectors, we must decouple survival from employment. UBI is not about encouraging idleness; it is about providing the security necessary for individuals to pursue creative, entrepreneurial, or caregiving roles that are currently undervalued by the market. Regarding the cost, many studies suggest that the administrative savings from replacing complex welfare systems, combined with a progressive tax on automation, would make UBI surprisingly sustainable.",
        },
        {
          label: 'C',
          name: 'Marcus Holloway',
          text: "The real strength of UBI lies in its potential to eliminate the 'poverty trap' created by current means-tested benefits. At present, many individuals are discouraged from taking low-paid work because the loss of benefits makes them financially worse off. A flat, unconditional payment removes this disincentive. However, I share the concerns of those who fear that UBI could be used as a 'Trojan horse' by governments looking to abdicate their responsibility for social housing and disability support. If UBI is used to replace the entire social safety net, the most vulnerable in society will undoubtedly suffer.",
        },
        {
          label: 'D',
          name: 'Sarah Jenkins',
          text: "While the economic arguments for UBI are compelling, we must consider the societal impact. There is significant evidence to suggest that a guaranteed income leads to improved health outcomes and higher levels of education, as people are no longer living in a state of constant financial anxiety. Unlike Dr. Sterling, I believe that the 'meaning' people find in work is often a result of necessity rather than choice; given the freedom, most people would find far more meaningful ways to contribute to their communities. The challenge is ensuring that the payment is high enough to be transformative, but not so high that it triggers rampant inflation.",
        },
      ],
      questions: [
        {
          number: 37,
          text: "shares Dr. Sterling's view regarding the potential negative impact of UBI on public finances?",
          answer: 'C',
          explanation: 'Holloway (C) shares Sterling\'s concern: he fears UBI could be used as a "Trojan horse" to make governments "abdicate their responsibility for social housing and disability support" — a parallel concern to Sterling\'s worry about "gutting essential public services".',
        },
        {
          number: 38,
          text: "has a different opinion from Dr. Sterling about the source of meaning in people's lives?",
          answer: 'D',
          explanation: 'Jenkins (D) explicitly disagrees with Dr. Sterling: "Unlike Dr. Sterling, I believe that the meaning people find in work is often a result of necessity rather than choice." Sterling argues employment gives structure and purpose; Jenkins argues people would find better meaning if freed from necessity.',
        },
        {
          number: 39,
          text: 'expresses a similar concern to Holloway about the possibility of UBI harming the most vulnerable if implemented incorrectly?',
          answer: 'A',
          explanation: 'Sterling (A) shares Holloway\'s fear about harm to the vulnerable: Sterling warns UBI would lead to "gutting of essential public services like healthcare and education," directly threatening the most vulnerable — the same concern as Holloway\'s "Trojan horse" for social housing and disability support.',
        },
        {
          number: 40,
          text: "shares Prof. Desai's belief that UBI could actually encourage more productive or creative activities?",
          answer: 'D',
          explanation: 'Jenkins (D) shares Desai\'s optimism: "given the freedom, most people would find far more meaningful ways to contribute to their communities." Desai similarly argues UBI enables "creative, entrepreneurial, or caregiving roles currently undervalued by the market".',
        },
      ],
    },

    // ─── Part 7: Gapped text ──────────────────────────────────────────────────
    {
      partNumber: 7,
      type: 'gapped-text',
      articleTitle: 'The Cathedral of Books',
      textParts: [
        "For over a century, the Central Reading Room had served as the quiet heart of the city's intellectual life. With its soaring vaulted ceilings and walls lined from floor to ceiling with leather-bound volumes, it was a space that commanded a hushed, reverent awe. However, decades of neglect and a leaking roof had taken their toll. By 2022, the plaster was crumbling, and the once-vibrant frescoes were obscured by a thick layer of grime.",
        "\n\nThe primary challenge was not just the structural repair, but the delicate task of conservation. The library's collection included manuscripts dating back to the 14th century, many of which were highly sensitive to changes in humidity and light. Any construction work had to be carried out with the precision of a surgical operation.",
        "\n\nThis involved the installation of a state-of-the-art climate control system, hidden discreetly behind the original oak panelling. It was a masterpiece of modern engineering, designed to maintain a constant temperature without the intrusive hum of traditional air conditioning. But as the workers peeled back the wood, they made an unexpected discovery.",
        "\n\nTucked behind a false wall was a series of hidden alcoves containing correspondence that had been lost for eighty years. These letters provided a fascinating glimpse into the lives of the librarians who had worked there during the war. It was a reminder that a library is not just a repository of books, but a witness to history.",
        "\n\nTo balance these historical finds with modern requirements, the architects had to be creative. The goal was to transform the library into a 'third space'—somewhere that was neither home nor work, but a communal area for collaboration. This meant introducing high-speed digital infrastructure and flexible workspaces without compromising the room's hallowed atmosphere.",
        '\n\nThe response from the public has been overwhelmingly positive. On the day of the grand reopening, a queue stretched twice around the block. Students, researchers, and curious locals poured in, not just to consult the archives, but to sit in the presence of history. In a world that is increasingly digital and ephemeral, the library offers something tangible and enduring.',
        '\n\nThe success of the project has now become a blueprint for other heritage sites. It proves that with enough investment and vision, the past can be successfully integrated into the present. The Cathedral of Books is once again open, and its silence is no longer one of neglect, but of profound concentration.',
      ],
      sentences: [
        { label: 'A', text: "This integration of the new and the old was achieved through the use of 'smart glass' partitions. These allow for private study areas that remain visually connected to the main hall, maintaining the sense of scale that makes the room so special." },
        { label: 'B', text: 'However, some critics argued that the money spent on the restoration would have been better used on digital initiatives. They claimed that physical libraries are becoming obsolete in the age of the e-reader.' },
        { label: 'C', text: 'It was this duality that defined the project from the start. Every decision, from the choice of lightbulbs to the type of floor wax, was debated by a committee of historians and technologists.' },
        { label: 'D', text: "Despite these fascinating diversions, the project had to stay on schedule. The roof was eventually replaced with slate tiles sourced from the original quarry, ensuring that the building's exterior remained identical to its 19th-century appearance." },
        { label: 'E', text: 'This led to the launch of a multi-million-dollar restoration project. It was a massive undertaking that required the expertise of stonemasons, electricians, and art historians, all working in tandem to return the space to its former glory.' },
        { label: 'F', text: 'To prevent any damage, the most valuable items were temporarily moved to a secure, underground facility. This left the main hall eerily empty, allowing the restorers to see the true extent of the damage to the masonry.' },
        { label: 'G', text: 'This hidden cache caused a sensation in the local press. It delayed the restoration for months as archivists meticulously catalogued every scrap of paper, fearing that any careless movement might destroy the fragile ink.' },
      ],
      questions: [
        { number: 41, answer: 'E', explanation: '"This led to the launch of a multi-million-dollar restoration project" directly follows the description of the library\'s crumbling state, explaining the consequence of the neglect and introducing the restoration effort.' },
        { number: 42, answer: 'F', explanation: '"To prevent any damage, the most valuable items were temporarily moved to a secure, underground facility" explains the precautions needed before the construction work on the climate control system could begin.' },
        { number: 43, answer: 'G', explanation: '"This hidden cache caused a sensation in the local press" — "this hidden cache" refers directly to the hidden alcoves and correspondence mentioned in the previous paragraph, and explains what happened next.' },
        { number: 44, answer: 'D', explanation: '"Despite these fascinating diversions, the project had to stay on schedule" — "these fascinating diversions" refers to the letters and archival discoveries, before the narrative returns to the practical restoration work.' },
        { number: 45, answer: 'A', explanation: '"This integration of the new and the old was achieved through smart glass partitions" explains how the architects balanced the need for modern digital workspaces (mentioned before) with the historic atmosphere of the room.' },
        { number: 46, answer: 'C', explanation: '"It was this duality that defined the project from the start" summarizes the overall balance between history and technology that has characterized the entire restoration — a fitting concluding observation before the final paragraph.' },
      ],
    },

    // ─── Part 8: Multiple matching ────────────────────────────────────────────
    {
      partNumber: 8,
      type: 'multiple-matching',
      intro: 'You are going to read an article in which four architects discuss sustainable urban design. For questions 47 – 52, choose from the architects (A – D). The architects may be chosen more than once.',
      texts: [
        {
          label: 'A',
          name: 'Elena Rossi',
          text: "My focus is on 'upcycling' the existing urban fabric. We spend too much time and energy tearing down old buildings and replacing them with 'green' glass towers. The most sustainable building is the one that already exists. In my latest project, we converted a disused textile factory into a mixed-use residential block. By retaining the original brickwork and high ceilings, we saved thousands of tonnes of carbon that would have been released during demolition. The challenge is convincing developers that 'old' doesn't mean 'inefficient'. With the right insulation and smart windows, a 19th-century warehouse can be just as energy-efficient as a modern skyscraper.",
        },
        {
          label: 'B',
          name: 'Marcus Thorne',
          text: "I believe the future of sustainability lies in 'biophilic' design—incorporating nature directly into the structure of our buildings. My firm designs 'vertical forests,' where every balcony is a garden. This isn't just about aesthetics; the plants act as a natural filtration system for the city's air and help to regulate the building's temperature. It reduces the 'urban heat island' effect significantly. However, it requires a complete rethink of how we manage water and structural weight. You can't just slap a few trees on a balcony; you have to design the entire building around the needs of the ecosystem it supports.",
        },
        {
          label: 'C',
          name: 'Sarah Jenkins',
          text: "For me, sustainability is less about the buildings themselves and more about the spaces between them. We need to design '15-minute cities' where everything a resident needs—work, school, healthcare, and groceries—is within a 15-minute walk or bike ride. This effectively eliminates the need for cars, which are the primary source of urban pollution. My work focuses on pedestrianizing entire districts and creating multi-functional public spaces. It's a social shift as much as an architectural one. If we make our cities more walkable, we don't just save the planet; we improve the physical and mental health of every citizen.",
        },
        {
          label: 'D',
          name: 'David Wu',
          text: "I'm interested in the concept of 'responsive' architecture. We use sensors and AI to allow buildings to adapt to their environment in real-time. For example, the windows of our latest office block adjust their tint based on the angle of the sun to minimize the need for air conditioning. We also use kinetic floors that harvest energy from the footsteps of people walking through the lobby. Some argue that this high-tech approach is too expensive, but the long-term energy savings are immense. We are moving toward a world where buildings are not static objects, but 'living' entities that interact with their inhabitants.",
        },
      ],
      questions: [
        { number: 47, text: 'argues that new construction is not always the best environmental choice?', answer: 'A', explanation: 'Rossi says "The most sustainable building is the one that already exists" — explicitly arguing against demolition and new construction in favour of upcycling existing structures.' },
        { number: 48, text: 'mentions a specific social benefit of their architectural philosophy?', answer: 'C', explanation: 'Jenkins highlights specific social benefits: "we improve the physical and mental health of every citizen" and describes a "social shift" through walkable city design.' },
        { number: 49, text: 'acknowledges that their approach requires a fundamental change in engineering logic?', answer: 'B', explanation: 'Thorne says biophilic design "requires a complete rethink of how we manage water and structural weight" — a fundamental engineering change required to support living ecosystems on buildings.' },
        { number: 50, text: 'highlights the importance of reducing the reliance on a specific type of transport?', answer: 'C', explanation: 'Jenkins explicitly focuses on "eliminating the need for cars, which are the primary source of urban pollution" — identifying private cars as the specific transport to be reduced.' },
        { number: 51, text: 'suggests that technology can make buildings behave like living organisms?', answer: 'D', explanation: 'Wu says buildings are moving toward being "not static objects, but \'living\' entities that interact with their inhabitants" — directly describing technology-enabled buildings as living organisms.' },
        { number: 52, text: 'mentions the financial arguments used to criticize their methods?', answer: 'D', explanation: 'Wu acknowledges that "some argue that this high-tech approach is too expensive" — directly citing the financial criticism of his approach before countering it with long-term savings.' },
      ],
    },
  ],
};
