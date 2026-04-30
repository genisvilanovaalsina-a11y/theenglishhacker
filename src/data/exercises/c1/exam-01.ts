import type { Exam } from '../types';

export const exam: Exam = {
  id: 'c1-exam-01',
  number: 1,
  level: 'c1',
  parts: [
    // ─── Part 1: Multiple-choice cloze ──────────────────────────────────────────
    {
      partNumber: 1,
      type: 'mc-cloze',
      title: 'The Psychology of Colour',
      textParts: [
        'The belief that colours can influence our mood is (0) derived from ancient practices, yet modern science is only now beginning to ',
        ' the surface of how this phenomenon works. While many people ',
        ' certain shades with specific emotions—blue for calmness or red for energy—the reality is often more ',
        ' .\nFor instance, the effect of a colour can vary ',
        ' depending on the context. While red might ',
        ' feelings of excitement in a sporting arena, it can also signify danger or failure in an academic setting. Furthermore, cultural backgrounds play a ',
        ' role; in some societies, white is synonymous with purity, whereas in others, it is the ',
        ' of mourning. Therefore, businesses must be ',
        ' of these subtle differences when designing global marketing campaigns to avoid sending the wrong message.',
      ],
      questions: [
        {
          number: 1,
          options: [
            { value: 'A', label: 'graze' },
            { value: 'B', label: 'scratch' },
            { value: 'C', label: 'rub' },
            { value: 'D', label: 'shave' },
          ],
          answer: 'B',
          explanation: 'Collocation: "to scratch the surface" (to deal with only a small part of a subject).',
        },
        {
          number: 2,
          options: [
            { value: 'A', label: 'relate' },
            { value: 'B', label: 'join' },
            { value: 'C', label: 'associate' },
            { value: 'D', label: 'couple' },
          ],
          answer: 'C',
          explanation: '"Associate X with Y" is the correct prepositional usage.',
        },
        {
          number: 3,
          options: [
            { value: 'A', label: 'intricate' },
            { value: 'B', label: 'knotted' },
            { value: 'C', label: 'convoluted' },
            { value: 'D', label: 'elaborate' },
          ],
          answer: 'A',
          explanation: 'Means very complicated or detailed; fits the context of complex reality.',
        },
        {
          number: 4,
          options: [
            { value: 'A', label: 'vastly' },
            { value: 'B', label: 'broadly' },
            { value: 'C', label: 'immensely' },
            { value: 'D', label: 'significantly' },
          ],
          answer: 'A',
          explanation: 'Used to emphasize a significant difference (vastly different).',
        },
        {
          number: 5,
          options: [
            { value: 'A', label: 'provoke' },
            { value: 'B', label: 'evoke' },
            { value: 'C', label: 'induce' },
            { value: 'D', label: 'instigate' },
          ],
          answer: 'B',
          explanation: 'Used for memories or feelings (red evokes excitement).',
        },
        {
          number: 6,
          options: [
            { value: 'A', label: 'pivotal' },
            { value: 'B', label: 'central' },
            { value: 'C', label: 'focal' },
            { value: 'D', label: 'crucial' },
          ],
          answer: 'A',
          explanation: 'A C1-level synonym for "essential" or "crucial" in the context of influence.',
        },
        {
          number: 7,
          options: [
            { value: 'A', label: 'harbinger' },
            { value: 'B', label: 'precursor' },
            { value: 'C', label: 'omen' },
            { value: 'D', label: 'symbol' },
          ],
          answer: 'D',
          explanation: 'White acts as a symbol of mourning in some cultures.',
        },
        {
          number: 8,
          options: [
            { value: 'A', label: 'wary' },
            { value: 'B', label: 'heedful' },
            { value: 'C', label: 'alert' },
            { value: 'D', label: 'mindful' },
          ],
          answer: 'D',
          explanation: '"Mindful of" means being aware of or taking something into account.',
        },
      ],
    },

    // ─── Part 2: Open cloze ──────────────────────────────────────────────────────
    {
      partNumber: 2,
      type: 'open-cloze',
      title: 'The Longevity of Paper',
      textParts: [
        'In an increasingly digital age, (0) which often prioritises speed and convenience, the enduring appeal of paper remains something ',
        ' a mystery. Despite decades of predictions that the \'paperless office\' was just ',
        ' the corner, global paper consumption has continued to rise.\nPart of the reason lies in the tactile nature of the medium. Research suggests that we retain information more effectively when reading from a physical page ',
        ' opposed to a screen. The act of turning a page provides a spatial anchor ',
        ' helps the brain map out the narrative. Moreover, paper requires ',
        ' power source nor software updates, making it a remarkably resilient method for storing knowledge. ',
        ' some may argue that digital files are more secure, the risk of data corruption or hardware obsolescence is a constant concern. For now, it seems that paper is far ',
        ' being a relic of the past; it remains an essential tool ',
        ' of our heavy reliance on technology.',
      ],
      questions: [
        {
          number: 9,
          acceptedAnswers: ['of'],
          explanation: 'Part of the phrase "something of a mystery" (meaning \'to some extent\').',
        },
        {
          number: 10,
          acceptedAnswers: ['around'],
          explanation: '"Just around the corner" (imminent/soon).',
        },
        {
          number: 11,
          acceptedAnswers: ['as'],
          explanation: '"As opposed to" (in contrast with).',
        },
        {
          number: 12,
          acceptedAnswers: ['which', 'that'],
          explanation: 'Relative pronoun referring to the "anchor."',
        },
        {
          number: 13,
          acceptedAnswers: ['neither'],
          explanation: 'Used with "nor" later in the sentence.',
        },
        {
          number: 14,
          acceptedAnswers: ['While', 'Although'],
          explanation: 'Conjunctions used to show contrast between security and corruption.',
        },
        {
          number: 15,
          acceptedAnswers: ['from'],
          explanation: '"Far from being" is a fixed expression meaning \'not at all\'.',
        },
        {
          number: 16,
          acceptedAnswers: ['despite'],
          explanation: 'Preposition meaning \'in spite of\', followed by the noun phrase.',
        },
      ],
    },

    // ─── Part 3: Word formation ──────────────────────────────────────────────────
    {
      partNumber: 3,
      type: 'word-formation',
      title: 'Urban Rethink: The Green City',
      textParts: [
        'The 21st century has seen (0) unprecedented levels of urbanisation, leading to a radical ',
        ' of how our cities should function. As traditional urban models become ',
        ' unsustainable, architects are turning to \'biophilic design\'—an approach that seeks to integrate nature into the built environment.\nThe ',
        ' of plants and water features into skyscrapers is no longer seen as a mere ',
        ' ; it is now considered essential for the mental wellbeing of residents. Studies have shown that access to green spaces can lead to a ',
        ' reduction in stress levels. However, the ',
        ' of such projects often faces significant ',
        ' hurdles. Critics argue that the costs are ',
        ' high, though supporters maintain that the long-term environmental benefits far outweigh the initial investment.',
      ],
      questions: [
        {
          number: 17,
          givenWord: 'EVALUATE',
          answer: 'evaluation',
          explanation: 'Noun derived from "evaluate".',
        },
        {
          number: 18,
          givenWord: 'INCREASE',
          answer: 'increasingly',
          explanation: 'Adverb modifying "unsustainable".',
        },
        {
          number: 19,
          givenWord: 'INCORPORATE',
          answer: 'incorporation',
          explanation: 'Noun meaning the act of including something as part of a whole.',
        },
        {
          number: 20,
          givenWord: 'ADORN',
          answer: 'adornment',
          explanation: 'Noun meaning a decoration (something that adds beauty).',
        },
        {
          number: 21,
          givenWord: 'MEASURE',
          answer: 'measurable',
          explanation: 'Adjective meaning able to be measured (significant).',
        },
        {
          number: 22,
          givenWord: 'IMPLEMENT',
          answer: 'implementation',
          explanation: 'Noun meaning the process of putting a decision or plan into effect.',
        },
        {
          number: 23,
          givenWord: 'FINANCE',
          answer: 'financial',
          explanation: 'Adjective form of "finance".',
        },
        {
          number: 24,
          givenWord: 'PROHIBIT',
          answer: 'prohibitively',
          explanation: 'Adverb used with "high" to mean the price is so high it prevents action.',
        },
      ],
    },

    // ─── Part 4: Key word transformations ───────────────────────────────────────
    {
      partNumber: 4,
      type: 'key-word-transformation',
      questions: [
        {
          number: 25,
          sentence1: 'I only managed to buy the house because my parents lent me some money.',
          keyword: 'LENT',
          sentence2Begin: 'If my parents',
          sentence2End: 'me the money, I wouldn\'t have been able to buy the house.',
          answer: 'had not lent',
          explanation: 'Conditional Type 3 (If + past perfect).',
        },
        {
          number: 26,
          sentence1: 'It was a mistake for the company to ignore the customer\'s complaints.',
          keyword: 'SHOULD',
          sentence2Begin: 'The company',
          sentence2End: 'the customer\'s complaints.',
          answer: 'should not have ignored',
          explanation: 'Modal of criticism for a past action.',
        },
        {
          number: 27,
          sentence1: 'Experts believe that the landslides were caused by the recent heavy rains.',
          keyword: 'RESULTED',
          sentence2Begin: 'The landslides are',
          sentence2End: 'the recent heavy rains.',
          answer: 'thought to have resulted from',
          explanation: 'Passive reporting structure (Subject + is thought + to have + past participle).',
        },
        {
          number: 28,
          sentence1: '"I\'m sorry I didn\'t tell you the truth earlier," said Mark to his sister.',
          keyword: 'APOLOGISED',
          sentence2Begin: 'Mark',
          sentence2End: 'her the truth earlier.',
          answer: 'apologised for not telling',
          explanation: '"Apologise for (not) doing something."',
        },
        {
          number: 29,
          sentence1: 'You must not, under any circumstances, press this red button.',
          keyword: 'ACCOUNT',
          sentence2Begin: 'On',
          sentence2End: 'you press this red button.',
          answer: 'no account must / should',
          explanation: 'Negative inversion: "On no account" + auxiliary + subject.',
        },
        {
          number: 30,
          sentence1: 'It\'s very unlikely that the concert will be cancelled at such short notice.',
          keyword: 'LITTLE',
          sentence2Begin: 'There is',
          sentence2End: 'the concert being cancelled at such short notice.',
          answer: 'little / very little likelihood of',
          explanation: '"Likelihood" + of + gerund.',
        },
      ],
    },

    // ─── Part 5: Reading multiple choice ────────────────────────────────────────
    {
      partNumber: 5,
      type: 'reading-mcq',
      articleTitle: 'The Architect of Concentration',
      text: `In the contemporary workplace, the ability to focus without distraction on a cognitively demanding task—a state computer scientist Cal Newport terms 'deep work'—is becoming increasingly rare. At the same time, it is becoming arguably more valuable. We live in an era of 'shallow work', characterized by logistical-style tasks like answering emails, attending unnecessary meetings, and the constant, low-level hum of social media. While these activities provide a sense of busy-ness, they rarely create new value or are difficult to replicate. Deep work, by contrast, is the superpower of the 21st century.

The problem is that our brains are no longer wired for this kind of sustained effort. The constant pings of notifications have trained us to be 'cognitive switchers'. Every time we glance at an incoming message, even if we don't fully engage with it, our attention remains partially fractured. This 'attention residue' means that even when we return to our primary task, a part of our mind is still processing the interruption. Over time, this erodes our capacity for the high-level critical thinking required in fields as diverse as programming, law, and creative writing.

Many corporations have unwittingly exacerbated this issue by designing offices that prioritize 'serendipitous collaboration'. The open-plan office was supposed to be a hotbed of innovation, where ideas would collide in hallways and communal kitchens. In reality, it has become a source of perpetual interruption. For the knowledge worker, the trade-off is lopsided: the potential for a breakthrough conversation is far outweighed by the certain loss of three hours of deep concentration. It is a fundamental misunderstanding of how complex work is actually performed.

Furthermore, there is a pervasive cultural myth that being 'always on' is a badge of honour. We equate responsiveness with productivity. A worker who replies to an email within five minutes is seen as efficient, regardless of whether that interruption broke a flow state that could have produced something of genuine substance. This cult of connectivity creates a 'hollow' productivity—a flurry of activity that leaves the individual exhausted but with little to show for their day other than a cleared inbox.

To master the art of deep work, one must treat focus like a muscle. It requires a radical restructuring of the workday. This might involve 'bimodality'—dedicating specific days or weeks to intense focus while leaving the rest for shallow tasks—or 'rhythmic' scheduling, where deep work happens in fixed blocks every morning before the digital world is allowed to intrude. It is not about working more hours; it is about the intensity of the hours worked. High-quality work produced is a function of time spent multiplied by the intensity of focus. If the intensity is zero, the output is zero, regardless of the time invested.

Ultimately, the shift toward deep work is not just a productivity hack; it is a quest for meaning. Shallow work is inherently unsatisfying. It is the deep, immersive struggle with a difficult problem that leads to the 'flow' state—that magical zone where time disappears and we perform at our peak. In a world that is increasingly automated, the tasks that cannot be handled by an algorithm are precisely those that require deep work. To remain relevant, and to find fulfillment in our careers, we must learn to close the door, turn off the notifications, and rediscover the lost art of thinking.`,
      questions: [
        {
          number: 31,
          question: 'In the first paragraph, the writer suggests that \'shallow work\'...',
          options: [
            { value: 'A', label: 'is a necessary foundation for achieving deep work.' },
            { value: 'B', label: 'provides a deceptive impression of meaningful output.' },
            { value: 'C', label: 'is more difficult to master than people generally assume.' },
            { value: 'D', label: 'will eventually be replaced entirely by automated systems.' },
          ],
          answer: 'B',
          explanation: 'The text says shallow work provides a "sense of busy-ness" but rarely creates value.',
        },
        {
          number: 32,
          question: 'What does the writer mean by the term \'attention residue\'?',
          options: [
            { value: 'A', label: 'The physical exhaustion caused by multitasking.' },
            { value: 'B', label: 'The inability to remember information after an interruption.' },
            { value: 'C', label: 'The lingering mental distraction that follows a change in task.' },
            { value: 'D', label: 'The total loss of focus caused by loud office environments.' },
          ],
          answer: 'C',
          explanation: 'It describes the part of the mind still "processing the interruption" after switching tasks.',
        },
        {
          number: 33,
          question: 'The writer\'s attitude toward open-plan offices is that they...',
          options: [
            { value: 'A', label: 'are highly effective for certain types of creative brainstorming.' },
            { value: 'B', label: 'are based on a flawed premise regarding how innovation occurs.' },
            { value: 'C', label: 'fail because workers are naturally reluctant to collaborate.' },
            { value: 'D', label: 'could be improved if employees were given better headphones.' },
          ],
          answer: 'B',
          explanation: 'The writer calls it a "fundamental misunderstanding" of how complex work is performed.',
        },
        {
          number: 34,
          question: 'What point is made about responsiveness in the fourth paragraph?',
          options: [
            { value: 'A', label: 'It is a vital skill for maintaining client relationships.' },
            { value: 'B', label: 'It is often mistaken for genuine professional effectiveness.' },
            { value: 'C', label: 'It is becoming easier to achieve thanks to new technologies.' },
            { value: 'D', label: 'It helps to reduce the overall stress levels of a workforce.' },
          ],
          answer: 'B',
          explanation: 'We "equate responsiveness with productivity," which the author calls "hollow."',
        },
        {
          number: 35,
          question: 'The formula mentioned in the fifth paragraph emphasizes that...',
          options: [
            { value: 'A', label: 'the number of hours worked is the most important metric.' },
            { value: 'B', label: 'focus is a fixed trait that cannot be improved.' },
            { value: 'C', label: 'without total concentration, time spent working is wasted.' },
            { value: 'D', label: 'deep work should only be attempted by highly skilled professionals.' },
          ],
          answer: 'C',
          explanation: '"If the intensity is zero, the output is zero," regardless of the time invested.',
        },
        {
          number: 36,
          question: 'In the final paragraph, the writer concludes that deep work is essential because...',
          options: [
            { value: 'A', label: 'it is the only way to compete with artificial intelligence.' },
            { value: 'B', label: 'it allows people to work shorter hours for the same pay.' },
            { value: 'C', label: 'it is the primary source of professional and personal satisfaction.' },
            { value: 'D', label: 'most people are naturally bored by shallow, logistical tasks.' },
          ],
          answer: 'C',
          explanation: 'He calls it a "quest for meaning" and says it leads to the "flow state" which is satisfying.',
        },
      ],
    },

    // ─── Part 6: Cross-text multiple matching ────────────────────────────────────
    {
      partNumber: 6,
      type: 'cross-text',
      articleTitle: 'The Digital Agora: Social Media and Democracy',
      intro: 'You are going to read four extracts from articles in which experts discuss the impact of social media on political engagement. For questions 37 – 40, choose from the experts A – D. The experts may be chosen more than once.',
      texts: [
        {
          label: 'A',
          name: 'Dr. Aris Thorne',
          text: 'Social media was once hailed as a revolutionary tool for democratization, a platform where the marginalized could find a voice. However, the reality has proven far more somber. The algorithms governing these platforms are designed to maximize engagement, which inevitably leads to the creation of \'echo chambers.\' Users are fed information that reinforces their existing biases, effectively insulating them from opposing viewpoints. This has not only stifled healthy debate but has also fueled a level of polarization that threatens the very fabric of democratic discourse. Rather than engaging in nuanced discussion, citizens are increasingly retreating into tribalism.',
        },
        {
          label: 'B',
          name: 'Prof. Elena Vargas',
          text: 'It is easy to blame social media for the current state of political friction, but this overlooks the agency of the users themselves. While it is true that algorithms suggest content, individuals still have the capacity to seek out diverse perspectives. In fact, social media has mobilized younger generations in ways traditional media never could. We see grassroots movements gaining global traction overnight. The issue is not the technology itself, but a lack of digital literacy. If we educate citizens on how to navigate these platforms critically, the potential for social media to act as a force for positive political change remains immense.',
        },
        {
          label: 'C',
          name: 'Marcus Holloway',
          text: 'The primary concern with digital political engagement is the illusion of participation, often referred to as \'slactivism.\' Clicking \'like\' or sharing a hashtag provides a sense of moral satisfaction without requiring any real-world effort or sacrifice. This dilutes the impact of traditional activism, such as protesting or voting. Furthermore, the speed at which information—and misinformation—spreads on these platforms makes it nearly impossible for the average user to discern truth from fabrication. The democratic process relies on a shared set of facts, and without that foundation, the digital agora becomes a breeding ground for manipulation.',
        },
        {
          label: 'D',
          name: 'Sarah Jenkins',
          text: 'While I acknowledge the risks of polarization mentioned by others, I believe the benefits of social media for political transparency are often understated. These platforms have broken the monopoly that traditional media conglomerates once held over the news cycle. Politicians can now be held accountable in real-time by the public. Regarding the \'echo chamber\' effect, research suggests that users are actually exposed to a wider variety of views online than they are in their physical social circles. The conflict we see online is not necessarily a sign of a broken democracy, but rather the sound of voices that were previously silenced finally being heard.',
        },
      ],
      questions: [
        {
          number: 37,
          text: 'shares Dr. Thorne\'s concern about the negative impact of algorithms on the quality of political debate?',
          answer: 'B',
          explanation: 'Expert B agrees with Thorne (A) about the algorithms, stating "While it is true that algorithms suggest content..."',
        },
        {
          number: 38,
          text: 'has a different opinion from the others regarding the extent to which social media exposes users to diverse viewpoints?',
          answer: 'D',
          explanation: 'Expert D says research suggests users are exposed to a "wider variety of views online," contradicting A, B, and C\'s focus on echo chambers/bias.',
        },
        {
          number: 39,
          text: 'expresses a similar view to Holloway regarding the difficulty of verifying information online?',
          answer: 'A',
          explanation: 'Expert A mentions citizens being "insulated from opposing viewpoints," which relates to Holloway\'s (C) point about the difficulty of discerning truth from fabrication.',
        },
        {
          number: 40,
          text: 'takes a more optimistic view than Dr. Thorne regarding the potential of social media to empower citizens?',
          answer: 'B',
          explanation: 'Expert B sees "immense" potential for positive change, contrasting with Thorne\'s (A) "somber" reality.',
        },
      ],
    },

    // ─── Part 7: Gapped text ─────────────────────────────────────────────────────
    {
      partNumber: 7,
      type: 'gapped-text',
      articleTitle: 'The City Beneath the Canopy',
      textParts: [
        'Deep within the Honduran rainforest lies the Mosquitia region, a place so dense and inhospitable that for centuries it was known only through the whispers of local legends. Tales of a \'White City\' or the \'City of the Monkey God\' had circulated among explorers since the time of Hernán Cortés. However, the sheer impenetrable nature of the jungle meant that these stories remained firmly in the realm of folklore.',
        'This cutting-edge technology allowed researchers to \'see\' through the thick canopy by pulsing laser beams at the ground from an aircraft. The data revealed not just a few isolated buildings, but a vast, organized sprawling metropolis. It was clear that this was no mere myth; a sophisticated civilization had once thrived here, modifying the landscape on a massive scale.',
        'The team, led by archaeologist Chris Fisher, found itself in an environment where the wildlife had seemingly never encountered humans before. Monkeys peered down curiously from the trees, and a venomous snake even slithered through their camp at night. The sense of being the first outsiders to set foot in this sacred space in half a millennium was palpable.',
        'Among the most striking finds was a cache of stone sculptures at the base of a pyramid. These objects, left as an offering when the city was abandoned, remained exactly where they had been placed centuries ago. One particularly haunting piece depicted a \'were-jaguar\', a shaman in a half-human, half-animal state.',
        'Evidence suggests that the city was abandoned in the early 16th century. Surprisingly, this was not due to warfare or environmental collapse, but likely because of the arrival of European diseases. Even though the Spanish never reached this far into the interior, the invisible killers—smallpox and measles—travelled along trade routes, devastating the population long before a single foreign soldier arrived.',
        'This raises difficult questions about how to protect such sites. Should they be excavated and turned into tourist destinations, or are they better left in the hands of the forest? The Honduran government has moved quickly to secure the area, but the threat from illegal logging and cattle ranching is ever-present.',
        'For now, the city remains a silent witness to a lost chapter of human history. The discovery reminds us that even in the age of satellites and global connectivity, the Earth still hides secrets that challenge our understanding of the past.',
      ],
      sentences: [
        {
          label: 'A',
          text: 'This preservation was largely due to the geographical isolation of the site. Unlike other Mayan cities that were looted over the centuries, the Mosquitia ruins remained shielded by the very environment that made them so difficult to find.',
        },
        {
          label: 'B',
          text: 'Despite these successes, the expedition was not without its critics. Some local indigenous groups argued that the \'discovery\' was an insult to their heritage, as they had always known of the ruins\' existence through their oral traditions.',
        },
        {
          label: 'C',
          text: 'To confirm these aerial findings, a ground expedition was launched in 2015. This was an undertaking of significant risk, involving former SAS soldiers to navigate the dangers of the terrain and scientists to document the archaeological wealth hidden beneath the vines.',
        },
        {
          label: 'D',
          text: 'However, the transition from aerial mapping to physical exploration proved to be a logistical nightmare. The sheer density of the vegetation meant that the team could only move a few hundred yards a day, hacking through the brush with machetes.',
        },
        {
          label: 'E',
          text: 'That situation changed in 2012, when a team of scientists decided to bypass the traditional methods of trekking and instead employed LiDAR (Light Detection and Ranging).',
        },
        {
          label: 'F',
          text: 'Beyond the historical significance, the site is also a biological treasure. Many of the species found during the expedition are rare or were thought to be extinct, highlighting the need for a holistic approach to conservation that protects both the ruins and the surrounding ecosystem.',
        },
        {
          label: 'G',
          text: 'This tragic end is a recurring theme in the history of the Americas. The \'White City\' became a ghost town, its plazas and temples slowly reclaimed by the creeping roots and the humid breath of the jungle, until it disappeared from memory altogether.',
        },
      ],
      questions: [
        {
          number: 41,
          answer: 'E',
          explanation: '"That situation changed..." connects the legend mention in the first paragraph to the LiDAR technology.',
        },
        {
          number: 42,
          answer: 'C',
          explanation: '"To confirm these aerial findings..." follows the mention of LiDAR data in the previous paragraph.',
        },
        {
          number: 43,
          answer: 'A',
          explanation: '"This preservation..." explains why the site mentioned in the ground expedition paragraph was so intact.',
        },
        {
          number: 44,
          answer: 'G',
          explanation: '"This tragic end..." refers to the abandonment and were-jaguar cache mentioned in the previous paragraph.',
        },
        {
          number: 45,
          answer: 'F',
          explanation: '"Beyond the historical significance..." shifts the focus from history to the biological aspects of the site.',
        },
        {
          number: 46,
          answer: 'B',
          explanation: '"Despite these successes..." introduces the human/indigenous perspective as a contrast to the scientific protection.',
        },
      ],
    },

    // ─── Part 8: Multiple matching ───────────────────────────────────────────────
    {
      partNumber: 8,
      type: 'multiple-matching',
      intro: 'You are going to read an article in which four people discuss their experiences with \'Micro-adventures\' (short, local outdoor trips). For questions 47 – 56, choose from the people (A – D). The people may be chosen more than once.',
      texts: [
        {
          label: 'A',
          name: 'Clara',
          text: 'I used to think that for an adventure to \'count\', it had to involve a long-haul flight and a significant dent in my savings. That changed last summer when a friend suggested we take a train to a coastal town just two hours away and sleep on the beach. I was sceptical; I\'m a fan of my Egyptian cotton sheets. But there was something incredibly liberating about carrying everything I needed on my back. We watched the sunset, cooked over a small fire, and woke up with the tide. I returned to my office on Monday feeling more refreshed than I usually do after a two-week holiday in a luxury resort. It taught me that the psychological break from routine is more important than the distance travelled.',
        },
        {
          label: 'B',
          name: 'David',
          text: 'As a father of three, the idea of a traditional expedition is a distant memory. However, I\'ve started \'wild swimming\' in a river near our house. We head out at 6:00 AM on Sundays. It\'s freezing, and my kids complain the whole way there, but once we\'re in the water, the sense of vitality is unmatched. It\'s about reclaiming the \'dead time\' in our week. People often complain they don\'t have time for nature, but we spend hours scrolling through our phones. A micro-adventure is a way to prove that you can find wonder in your own postcode. You just have to be willing to be a bit uncomfortable for a while.',
        },
        {
          label: 'C',
          name: 'Simon',
          text: 'I\'m a bit of a gear-obsessive. I have the latest lightweight tents and high-tech stoves, but for years, they just sat in my garage. I was waiting for the \'perfect\' trip. Then I realized that if I waited for a month-long window in my schedule, I\'d be eighty before I used them. Now, I do \'S2S\' trips—Subway to Summit. I finish work on a Friday, take the tube to the edge of the city, and hike into the hills. I\'m back by Saturday night. The time constraint actually adds to the excitement. You don\'t have time to overthink it; you just go. It has transformed my relationship with the city; I no longer see it as a cage, but as a gateway.',
        },
        {
          label: 'D',
          name: 'Maya',
          text: 'My micro-adventures are usually solo. There\'s a specific kind of confidence that comes from navigating a forest or setting up a tarp in the rain by yourself. I think we\'ve become too reliant on GPS and pre-packaged experiences. On my last trip, I got hopelessly lost in a local nature reserve. In the past, I would have panicked, but instead, I used it as an opportunity to actually look at the landscape rather than a screen. I eventually found my way back, but those hours of uncertainty were the most rewarding. It\'s not about the destination; it\'s about the shift in your own internal compass.',
        },
      ],
      questions: [
        {
          number: 47,
          text: 'mentions a change in their perception of where they live?',
          answer: 'C',
          explanation: 'Simon says it "transformed my relationship with the city... no longer a cage."',
        },
        {
          number: 48,
          text: 'was initially doubtful about the appeal of a low-budget trip?',
          answer: 'A',
          explanation: 'Clara says "I was sceptical" about the beach trip as she likes luxury sheets.',
        },
        {
          number: 49,
          text: 'points out that modern habits are often used as an excuse for not being outdoors?',
          answer: 'B',
          explanation: 'David mentions people spend "hours scrolling through our phones" instead of being in nature.',
        },
        {
          number: 50,
          text: 'suggests that limited time can actually enhance the experience?',
          answer: 'C',
          explanation: 'Simon says the "time constraint actually adds to the excitement."',
        },
        {
          number: 51,
          text: 'explains that the mental benefits of a trip are not proportional to its length?',
          answer: 'A',
          explanation: 'Clara realized the "psychological break... is more important than the distance travelled."',
        },
        {
          number: 52,
          text: 'describes a situation where a potential problem led to a positive outcome?',
          answer: 'D',
          explanation: 'Maya got "hopelessly lost," which she found "rewarding" as it made her look at the landscape.',
        },
        {
          number: 53,
          text: 'admits that they used to prioritize the wrong aspects of an adventure?',
          answer: 'A',
          explanation: 'Clara "used to think" an adventure had to involve "long-haul flight and significant savings."',
        },
        {
          number: 54,
          text: 'mentions the physical discomfort that is part of the experience?',
          answer: 'B',
          explanation: 'David mentions it\'s "freezing" and you have to be "willing to be uncomfortable."',
        },
        {
          number: 55,
          text: 'feels that solo trips have improved their self-reliance?',
          answer: 'D',
          explanation: 'Maya mentions the "confidence that comes from... setting up a tarp... by yourself."',
        },
        {
          number: 56,
          text: 'realized that waiting for the ideal circumstances was a mistake?',
          answer: 'C',
          explanation: 'Simon realized if he waited for a "month-long window," he\'d be eighty before he went.',
        },
      ],
    },
  ],
};
