import type { Exam } from '../types';

export const exam: Exam = {
  id: 'b2-exam-01',
  number: 1,
  level: 'b2',
  parts: [
    // ─── Part 1: Multiple-choice cloze ────────────────────────────────────────
    {
      partNumber: 1,
      type: 'mc-cloze',
      title: 'The Rise of Smart Cities',
      textParts: [
        'The concept of the \'smart city\' has (0) become increasingly popular in recent years. These urban areas use technology to ',
        ' the quality of life for their residents while reducing their impact on the environment. For instance, sensors ',
        ' in the streets can monitor traffic flow and adjust traffic lights in real-time to prevent congestion. This not only saves time for commuters but also ',
        ' to a significant reduction in air pollution. Moreover, smart buildings are designed to ',
        ' energy more efficiently. They automatically ',
        ' the heating or air conditioning based on whether anyone is in the room. Some critics, however, have ',
        ' concerns about privacy, as these cities ',
        ' on collecting vast amounts of data about people\'s habits. Despite these worries, experts believe that the ',
        ' majority of cities will adopt these technologies by the end of the decade.',
      ],
      questions: [
        {
          number: 1,
          options: [
            { value: 'A', label: 'promote' },
            { value: 'B', label: 'enhance' },
            { value: 'C', label: 'gain' },
            { value: 'D', label: 'lift' },
          ],
          answer: 'B',
          explanation: '"Enhance" collocates with "quality of life". "Promote" implies supporting a cause rather than improving it. "Gain" and "lift" do not fit this context.',
        },
        {
          number: 2,
          options: [
            { value: 'A', label: 'fixed' },
            { value: 'B', label: 'attached' },
            { value: 'C', label: 'installed' },
            { value: 'D', label: 'connected' },
          ],
          answer: 'C',
          explanation: '"Installed" is the correct verb for technical equipment or sensors placed in a fixed location. "Fixed" is too general, "attached" implies a physical connection, "connected" implies networking.',
        },
        {
          number: 3,
          options: [
            { value: 'A', label: 'leads' },
            { value: 'B', label: 'results' },
            { value: 'C', label: 'causes' },
            { value: 'D', label: 'provides' },
          ],
          answer: 'A',
          explanation: 'The preposition "to" after the blank identifies "lead to" as the correct phrasal verb meaning to result in something. "Results" requires "in", "causes" takes a direct object, "provides" doesn\'t collocate with "to".',
        },
        {
          number: 4,
          options: [
            { value: 'A', label: 'keep' },
            { value: 'B', label: 'manage' },
            { value: 'C', label: 'hold' },
            { value: 'D', label: 'reserve' },
          ],
          answer: 'B',
          explanation: '"Manage energy" is the standard collocation meaning to control or use a resource efficiently. The other verbs do not collocate naturally with "energy" in this sense.',
        },
        {
          number: 5,
          options: [
            { value: 'A', label: 'alter' },
            { value: 'B', label: 'adapt' },
            { value: 'C', label: 'transform' },
            { value: 'D', label: 'adjust' },
          ],
          answer: 'D',
          explanation: '"Adjust" is used for making small, precise changes to settings (e.g., temperature, controls). "Alter" and "transform" suggest a more dramatic change. "Adapt" usually refers to living beings changing to new conditions.',
        },
        {
          number: 6,
          options: [
            { value: 'A', label: 'raised' },
            { value: 'B', label: 'risen' },
            { value: 'C', label: 'put' },
            { value: 'D', label: 'given' },
          ],
          answer: 'A',
          explanation: '"Raise concerns" is a fixed collocation meaning to express worries. "Rise" is intransitive and cannot take an object. "Put" and "given" don\'t collocate with "concerns" in this structure.',
        },
        {
          number: 7,
          options: [
            { value: 'A', label: 'trust' },
            { value: 'B', label: 'count' },
            { value: 'C', label: 'rely' },
            { value: 'D', label: 'base' },
          ],
          answer: 'C',
          explanation: '"Rely on" is the correct phrasal verb meaning to depend on something. The preposition "on" that follows the blank makes this the only viable option.',
        },
        {
          number: 8,
          options: [
            { value: 'A', label: 'broad' },
            { value: 'B', label: 'wide' },
            { value: 'C', label: 'vast' },
            { value: 'D', label: 'huge' },
          ],
          answer: 'C',
          explanation: '"The vast majority" is a fixed collocation used to indicate that most of something is included. The other adjectives do not form this fixed phrase.',
        },
      ],
    },

    // ─── Part 2: Open cloze ───────────────────────────────────────────────────
    {
      partNumber: 2,
      type: 'open-cloze',
      title: 'The Secret Life of Bees',
      textParts: [
        'Bees are among the most fascinating insects on the planet, (0) which is why scientists have studied them for centuries. They live in highly organized colonies ',
        ' consist of thousands of individuals working together. Each bee has a specific role to play, ranging ',
        ' the queen, who lays eggs, to the workers who collect nectar. One of the ',
        ' remarkable things about bees is the way they communicate. When a scout bee finds a good source of food, it returns to the hive and performs a \'dance\'. ',
        ' doing so, it tells the other bees exactly how far away the food is and in ',
        ' direction they should fly. Unfortunately, bee populations have been declining ',
        ' to habitat loss and the use of certain chemicals in farming. ',
        ' this trend continues, it could have a serious effect on our food supply, as bees are responsible ',
        ' pollinating many of the crops we eat every day.',
      ],
      questions: [
        { number: 9, acceptedAnswers: ['which', 'that'], explanation: 'A relative pronoun is needed to introduce the relative clause defining the colonies. Both "which" and "that" are acceptable.' },
        { number: 10, acceptedAnswers: ['from'], explanation: '"Ranging from X to Y" is a fixed structure used to indicate the extent of a range.' },
        { number: 11, acceptedAnswers: ['most'], explanation: 'The superlative "most" is required before the adjective "remarkable".' },
        { number: 12, acceptedAnswers: ['By'], explanation: '"By doing so" is a fixed phrase meaning "in this way". The preposition "By" + gerund indicates the method.' },
        { number: 13, acceptedAnswers: ['which'], explanation: '"In which direction" — the relative pronoun "which" is required after "in" to complete this relative clause.' },
        { number: 14, acceptedAnswers: ['due'], explanation: '"Due to" is a prepositional phrase meaning "because of". It introduces the cause of the decline.' },
        { number: 15, acceptedAnswers: ['If'], explanation: '"If" is the conditional conjunction needed to introduce the conditional clause about the trend continuing.' },
        { number: 16, acceptedAnswers: ['for'], explanation: '"Responsible for" is a fixed adjective + preposition collocation. Bees are "responsible for" pollinating crops.' },
      ],
    },

    // ─── Part 3: Word formation ───────────────────────────────────────────────
    {
      partNumber: 3,
      type: 'word-formation',
      title: 'Modern Workplace Wellbeing',
      textParts: [
        'For many people, finding stable (0) employment is only the first step toward a satisfying career. In recent years, companies have begun to realize that the ',
        ' of their staff is directly linked to their ',
        ' . When employees feel valued and supported, they are much more ',
        ' to work hard and stay loyal to the firm. Many businesses now offer ',
        ' benefits, such as flexible working hours or gym memberships. These ',
        ' have proved to be highly ',
        ' in reducing stress levels. ',
        ', not all bosses understand the importance of mental health yet. It is ',
        ' that managers receive proper training to identify signs of burnout in their teams, as a healthy workforce is the key to long-term success.',
      ],
      questions: [
        { number: 17, givenWord: 'HAPPY', answer: 'happiness', explanation: 'The noun form of "happy" is required here as the subject of the clause.' },
        { number: 18, givenWord: 'PRODUCT', answer: 'productivity', explanation: 'The abstract noun "productivity" means the capacity to produce results efficiently.' },
        { number: 19, givenWord: 'LIKE', answer: 'likely', explanation: 'The adjective "likely" means probable. "Much more likely to do something" is the structure.' },
        { number: 20, givenWord: 'ADDITION', answer: 'additional', explanation: 'The adjective "additional" means extra or supplementary, modifying "benefits".' },
        { number: 21, givenWord: 'IMPROVE', answer: 'improvements', explanation: 'The plural noun "improvements" is required after "These" (demonstrative + plural noun).' },
        { number: 22, givenWord: 'EFFECT', answer: 'effective', explanation: 'The adjective "effective" means producing the intended result. "Highly effective" is a common collocation.' },
        { number: 23, givenWord: 'LUCK', answer: 'Unfortunately', explanation: 'The sentence adverb is needed here. The context (not all bosses understand) requires a negative tone, so "Unfortunately" is correct.' },
        { number: 24, givenWord: 'ESSENCE', answer: 'essential', explanation: 'The adjective "essential" means absolutely necessary. "It is essential that" is a fixed structure.' },
      ],
    },

    // ─── Part 4: Key word transformations ─────────────────────────────────────
    {
      partNumber: 4,
      type: 'key-word-transformation',
      questions: [
        {
          number: 25,
          sentence1: "It's a pity I didn't see the documentary about space last night.",
          keyword: 'WISH',
          sentence2Begin: 'I ',
          sentence2End: ' the documentary about space last night.',
          answer: 'wish I had seen',
          explanation: '"Wish + Past Perfect" expresses regret about something that did not happen in the past.',
        },
        {
          number: 26,
          sentence1: '"I\'m sorry I\'m late for the meeting," said David.',
          keyword: 'APOLOGISED',
          sentence2Begin: 'David ',
          sentence2End: ' late for the meeting.',
          answer: 'apologised for being',
          explanation: '"Apologise for" requires the gerund (-ing form). This is a reporting structure: "apologise for being late".',
        },
        {
          number: 27,
          sentence1: 'People think that the new gallery will open next month.',
          keyword: 'THOUGHT',
          sentence2Begin: 'The new gallery ',
          sentence2End: ' opening next month.',
          answer: 'is thought to be',
          explanation: 'Personal passive structure: "It is thought that X will..." becomes "X is thought to be...".',
        },
        {
          number: 28,
          sentence1: "You shouldn't go out without a coat because it's freezing.",
          keyword: 'BETTER',
          sentence2Begin: 'You ',
          sentence2End: ' on a coat because it\'s freezing.',
          answer: 'had better put',
          explanation: '"Had better + bare infinitive" is used to give strong advice. "Put on a coat" means to wear a coat.',
        },
        {
          number: 29,
          sentence1: 'It was such a boring film that I fell asleep.',
          keyword: 'SO',
          sentence2Begin: 'The film ',
          sentence2End: ' that I fell asleep.',
          answer: 'was so boring',
          explanation: '"So + adjective + that" expresses a result. The structure transforms "such a boring film" into "so boring".',
        },
        {
          number: 30,
          sentence1: "I haven't heard from my sister for over three weeks.",
          keyword: 'LAST',
          sentence2Begin: "It's been over three weeks ",
          sentence2End: ' from my sister.',
          answer: 'since I last heard',
          explanation: '"Since I last heard" uses "since" to mark the last point in time an event occurred. "Last" emphasises it was the most recent occasion.',
        },
      ],
    },

    // ─── Part 5: Reading multiple choice ─────────────────────────────────────
    {
      partNumber: 5,
      type: 'reading-mcq',
      articleTitle: 'A Journey to the Edge of the World',
      text: `When Elena Miller told her colleagues at a high-profile London law firm that she was quitting to spend a year in the Mongolian steppe, the reaction was predictable. There were gasps of disbelief, a few envious glances, and one senior partner who asked if she'd simply 'lost her mind'. Elena, however, had never felt more sane. For a decade, her life had been measured in six-minute billable increments and the grey glow of computer screens. She was thirty-four, successful by every traditional metric, yet she felt like a ghost in her own life.

The decision hadn't been sudden. It had started with a book about nomadic cultures she'd picked up at an airport and had grown into an obsession. She didn't just want a holiday; she wanted to understand a way of existence that was the polar opposite of her own. Six months later, she was stepping off a small plane in Ulaanbaatar, the Mongolian capital, with nothing but a sturdy rucksack and a very basic grasp of the local language. From there, it was a long, bumpy journey by jeep to the Altai Mountains, where she would be staying with a family of eagle hunters.

The first few weeks were a brutal shock. The silence was the first thing that hit her—a physical weight that felt heavy after the constant hum of London. Then there was the cold, which seeped into her bones despite the layers of wool and sheepskin. Elena had to learn how to help with the daily chores: milking goats, collecting dried dung for fuel, and preparing traditional meals. There were moments, usually around 4:00 AM when the temperature inside the family's 'ger' (a traditional tent) dropped below freezing, when she questioned her choices. She missed hot showers, reliable Wi-Fi, and the effortless convenience of city life.

However, as the months passed, something shifted. Elena began to appreciate the rhythm of the nomadic life, which was governed by the sun and the needs of the animals rather than a digital calendar. She developed a deep bond with the family, especially the daughter, Altana, who was eager to learn English. In return, Altana taught Elena the art of riding horses across the rugged terrain. Elena discovered a sense of resilience she hadn't known she possessed. She realised that her previous life had been cluttered with 'necessities' that were actually distractions.

One afternoon, while watching the family's golden eagle soar above the peaks, Elena had a moment of profound clarity. She wasn't the same person who had left Heathrow. The anxiety that had been her constant companion in London had vanished, replaced by a quiet confidence. She knew she couldn't stay in Mongolia forever—the harsh winters were approaching, and she had responsibilities back home—but she also knew she couldn't return to her old desk.

When Elena finally returned to London, her friends remarked on how different she looked. It wasn't just the tan or the fact that she'd lost weight; it was the way she carried herself. She eventually set up a consultancy firm that helped people transition into more meaningful careers. Looking back, Elena doesn't see her year in Mongolia as an escape, but as a confrontation with herself. She had gone to the edge of the world to find her own centre.`,
      questions: [
        {
          number: 31,
          question: 'In the first paragraph, what do we learn about Elena\'s colleagues?',
          options: [
            { value: 'A', label: 'They were concerned about her mental health.' },
            { value: 'B', label: 'They were all secretly jealous of her decision.' },
            { value: 'C', label: 'They thought she was making a professional mistake.' },
            { value: 'D', label: 'They had a variety of reactions to her news.' },
          ],
          answer: 'D',
          explanation: 'The text mentions disbelief, envious glances and doubt about her sanity — a variety of different reactions. Option A is too narrow (only one person made the mental health comment). B is an overstatement.',
        },
        {
          number: 32,
          question: 'What prompted Elena to choose Mongolia specifically?',
          options: [
            { value: 'A', label: 'A long-standing interest in eagle hunting.' },
            { value: 'B', label: 'An accidental discovery of a book.' },
            { value: 'C', label: 'A desire to escape the airport environment.' },
            { value: 'D', label: 'A recommendation from a senior partner.' },
          ],
          answer: 'B',
          explanation: 'The text says she "picked up" the book at an airport — an accidental discovery, not a deliberate act. The book grew into an obsession which led to Mongolia.',
        },
        {
          number: 33,
          question: "What was Elena's initial experience of living in the Altai Mountains?",
          options: [
            { value: 'A', label: 'She found the physical tasks easier than expected.' },
            { value: 'B', label: 'She struggled with the lack of modern comforts.' },
            { value: 'C', label: 'She was surprised by the noise of the animals.' },
            { value: 'D', label: 'She regretted not bringing more warm clothing.' },
          ],
          answer: 'B',
          explanation: 'The text explicitly states she missed hot showers, reliable Wi-Fi and convenience. A is contradicted by "brutal shock". C is the opposite — silence was the striking thing.',
        },
        {
          number: 34,
          question: "How did Elena's perspective change during her stay?",
          options: [
            { value: 'A', label: "She decided she wanted to live in a 'ger' permanently." },
            { value: 'B', label: 'She became frustrated with the lack of a digital calendar.' },
            { value: 'C', label: 'She came to value a simpler way of living.' },
            { value: 'D', label: 'She realised she was not as resilient as she thought.' },
          ],
          answer: 'C',
          explanation: 'She learned that her old life was "cluttered with necessities that were actually distractions", showing she came to value simplicity. D is the opposite: she discovered resilience she hadn\'t known she had.',
        },
        {
          number: 35,
          question: 'The phrase \'cluttered with necessities\' suggests that Elena felt her old life was...',
          options: [
            { value: 'A', label: 'Full of things that she didn\'t really need.' },
            { value: 'B', label: 'Organised in a very efficient way.' },
            { value: 'C', label: 'Difficult because she lacked essential items.' },
            { value: 'D', label: 'Messy because she had too many hobbies.' },
          ],
          answer: 'A',
          explanation: '"Cluttered" implies too many things, and "necessities" in quotes implies they were not truly necessary — so her life was full of things she didn\'t actually need.',
        },
        {
          number: 36,
          question: "In the final paragraph, the writer suggests that Elena's trip...",
          options: [
            { value: 'A', label: 'Was a way for her to avoid her problems.' },
            { value: 'B', label: 'Led her to a new and more fulfilling career path.' },
            { value: 'C', label: 'Made it difficult for her to reconnect with her friends.' },
            { value: 'D', label: 'Was the only reason she was able to lose weight.' },
          ],
          answer: 'B',
          explanation: 'She set up a consultancy helping people transition to more meaningful careers. The text says she sees it as a "confrontation with herself", not an escape (A is wrong).',
        },
      ],
    },

    // ─── Part 6: Gapped text ──────────────────────────────────────────────────
    {
      partNumber: 6,
      type: 'gapped-text',
      articleTitle: 'From Vandalism to the Gallery',
      textParts: [
        'Street art has undergone a remarkable transformation over the last few decades. What was once dismissed as simple vandalism, a nuisance to be scrubbed off walls as quickly as possible, is now celebrated as a legitimate and powerful form of artistic expression. Today, cities around the world use street art to revitalise neglected neighbourhoods and attract tourists. ',
        ' In the 1970s and 80s, the movement was primarily associated with the \'graffiti\' scene in New York City. Young artists would spray-paint their \'tags\' or names on subway cars and buildings, often at great personal risk. ',
        ' . They were not looking for fame in the traditional sense, but for recognition within their own community. To the authorities, however, this was a crime that contributed to the urban decay of the era. As the years went by, the style of the work began to evolve. Artists started moving beyond simple lettering to create complex murals that incorporated social and political messages. ',
        ' . One of the most famous figures in this transition is the British artist Banksy. His satirical and often dark-humoured stencils began appearing on walls in Bristol and London in the 1990s, capturing the public\'s imagination. The rise of the internet and social media played a crucial role in the global explosion of street art. ',
        ' . An artist could paint a wall in a remote alleyway in South America, and within hours, it would be seen by millions of people across the globe. This digital exposure turned local artists into international stars and led to street art festivals in cities from Stavanger to Melbourne. Consequently, the art world began to take notice. Art galleries and auction houses, which had previously ignored street art, started selling pieces for hundreds of thousands of pounds. ',
        ' . Some argue that by bringing street art indoors, it loses its rebellious spirit and its connection to the public space. They believe that the ephemeral nature of the work—the fact that it might be painted over tomorrow—is what gives it value. Despite these debates, street art continues to thrive and change our urban landscapes. ',
        ' . Whether it is a small sticker on a lamp post or a ten-storey mural, street art forces us to engage with our surroundings in a new way. It reminds us that the city belongs to the people who live in it, not just the people who build it.',
      ],
      sentences: [
        { label: 'A', text: 'This shift in perception has led to a heated debate among the artists themselves.' },
        { label: 'B', text: 'Previously, a piece of art could only be appreciated by those who happened to walk past it.' },
        { label: 'C', text: 'These early pioneers were often motivated by a desire to reclaim the urban environment.' },
        { label: 'D', text: 'This development made it much harder for city councils to justify the cost of cleaning.' },
        { label: 'E', text: 'It has become a tool for social change, giving a voice to those who are often ignored.' },
        { label: 'F', text: 'However, the journey from the shadows to the spotlight has been a controversial one.' },
        { label: 'G', text: 'These works often required more planning and time, making the artists more vulnerable to being caught.' },
      ],
      questions: [
        { number: 37, answer: 'F', explanation: '"However, the journey from the shadows to the spotlight has been a controversial one" introduces the contrast between the positive framing of the previous sentence and the difficult history that follows.' },
        { number: 38, answer: 'C', explanation: '"These early pioneers" refers back to the young artists of the 1970s/80s described in the previous sentence, and explains their motivation.' },
        { number: 39, answer: 'G', explanation: 'The sentence explains why creating complex murals (mentioned just before) made artists more vulnerable to being caught — requiring more time and planning.' },
        { number: 40, answer: 'B', explanation: '"Previously, a piece of art could only be appreciated by those who happened to walk past it" sets up the contrast with what the internet changed (now seen by millions).' },
        { number: 41, answer: 'A', explanation: '"This shift in perception" refers to the art world taking notice and selling street art in galleries — leading to the debate among artists themselves described next.' },
        { number: 42, answer: 'E', explanation: '"It has become a tool for social change, giving a voice to those who are often ignored" summarises the current positive impact of street art, fitting the concluding tone.' },
      ],
    },

    // ─── Part 7: Multiple matching ────────────────────────────────────────────
    {
      partNumber: 7,
      type: 'multiple-matching',
      intro: 'You are going to read an article about four people\'s views on the future of food.',
      texts: [
        {
          label: 'A',
          name: 'Mark – The Tech-Foodie',
          text: "I'm a huge believer in lab-grown meat. Critics say it's 'unnatural', but think about the environmental footprint of traditional livestock—it's massive. Currently, the technology is still in its infancy and producing a single burger is incredibly expensive, but I'm convinced the price will plummet as the process is scaled up. Imagine being able to eat a steak without a single cow being involved. It's cleaner, more ethical, and eventually, it'll be the only way to feed a growing global population. Some fear we'll lose the texture of real meat, but the science is catching up fast.",
        },
        {
          label: 'B',
          name: 'Sarah – The Insect Advocate',
          text: "I know, I know—the 'ick' factor is real. Most people in the West find the idea of eating crickets or mealworms repulsive. But in many parts of the world, they're a delicacy. Insects are an incredible source of high-quality protein and minerals, and they require a fraction of the water and land that cattle do. I've started using cricket flour in my baking, and honestly, you can't taste the difference. It's about shifting our cultural mindset. Once people realise it's a healthy, sustainable alternative to our current diet, it'll go mainstream.",
        },
        {
          label: 'C',
          name: 'David – The Vertical Farmer',
          text: "For me, the future isn't about what we eat, but where it grows. I'm involved in a vertical farming project in London. We use abandoned underground tunnels to grow leafy greens using LED lights and hydroponics. There's something incredibly satisfying about knowing exactly where your food comes from. We don't need pesticides, and because we're in the heart of the city, there are zero 'food miles'. I think we'll see more urban spaces—car parks, rooftops, basements—repurposed for food production. It's about making cities self-sufficient and resilient.",
        },
        {
          label: 'D',
          name: 'Elena – The Traditionalist',
          text: "I think we're overcomplicating things with all this tech. Our relationship with food has become too clinical. Thanks to social media, food is now more about how it looks on a screen than how it tastes or the community it builds. We've become too reliant on convenience and 'engineered' solutions. Nothing can replace the natural, complex flavours of a vegetable grown in real soil or a loaf of bread made by hand. The future of food shouldn't be a lab; it should be a return to the basics: seasonal eating, supporting local farmers, and taking the time to cook from scratch.",
        },
      ],
      questions: [
        { number: 43, text: 'mentions a specific health benefit of a new food source?', answer: 'B', explanation: 'Sarah mentions insects are "an incredible source of high-quality protein and minerals" — a specific health benefit.' },
        { number: 44, text: 'expresses concern about the current cost of production?', answer: 'A', explanation: 'Mark says "producing a single burger is incredibly expensive" — a current cost concern.' },
        { number: 45, text: 'prefers to have full knowledge of the origin of their food?', answer: 'C', explanation: 'David says "knowing exactly where your food comes from" is satisfying.' },
        { number: 46, text: 'expresses doubt that technology can replicate authentic flavours?', answer: 'D', explanation: 'Elena says "Nothing can replace the natural, complex flavours" of real food.' },
        { number: 47, text: 'refers to the environmental impact of traditional farming?', answer: 'A', explanation: 'Mark mentions "the environmental footprint of traditional livestock—it\'s massive".' },
        { number: 48, text: 'thinks social media has negatively influenced how we see food?', answer: 'D', explanation: 'Elena says food is "now more about how it looks on a screen" thanks to social media.' },
        { number: 49, text: 'acknowledges that their preferred food is seen as unappealing by many?', answer: 'B', explanation: 'Sarah admits the "\'ick\' factor is real" and most Westerners find insects "repulsive".' },
        { number: 50, text: 'suggests that cities could use empty spaces for growing food?', answer: 'C', explanation: 'David suggests "car parks, rooftops, basements" could be repurposed for food production.' },
        { number: 51, text: 'believes that people nowadays depend too much on easy options?', answer: 'D', explanation: 'Elena says "We\'ve become too reliant on convenience".' },
        { number: 52, text: 'predicts that a certain product will become much cheaper in the future?', answer: 'A', explanation: 'Mark says "the price will plummet as the process is scaled up".' },
      ],
    },
  ],
};
