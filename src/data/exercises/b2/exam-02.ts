import type { Exam } from '../types';

export const exam: Exam = {
  id: 'b2-exam-02',
  number: 2,
  level: 'b2',
  parts: [
    // ─── Part 1: Multiple-choice cloze ────────────────────────────────────────
    {
      partNumber: 1,
      type: 'mc-cloze',
      title: "The Allure of 'Slow Travel'",
      textParts: [
        "Italy has always been a popular (0) destination for tourists, but a new trend called 'slow travel' is ",
        " the way people experience the country. Instead of ",
        " from one famous landmark to another in a crowded tour bus, slow travellers prefer to stay in one place for longer. This allows them to ",
        " themselves in the local culture and discover hidden gems that are often ",
        " by the average tourist. By choosing to travel by train or bicycle, they not only reduce their carbon ",
        ", but also get the chance to see the stunning countryside at a more relaxed pace. Many find that this approach ",
        " them with a much deeper connection to the people they meet. ",
        " for granted that you need to see ten cities in ten days is a mistake. As many are now discovering, the best travel memories are often ",
        " when you simply take the time to stop and look around.",
      ],
      questions: [
        {
          number: 1,
          options: [
            { value: 'A', label: 'shifting' },
            { value: 'B', label: 'altering' },
            { value: 'C', label: 'replacing' },
            { value: 'D', label: 'adapting' },
          ],
          answer: 'B',
          explanation: '"Altering" means changing something (the way people travel). "Shifting" needs "from/to", "replacing" implies substitution, and "adapting" means adjusting to conditions rather than changing them.',
        },
        {
          number: 2,
          options: [
            { value: 'A', label: 'rushing' },
            { value: 'B', label: 'racing' },
            { value: 'C', label: 'dashing' },
            { value: 'D', label: 'tearing' },
          ],
          answer: 'A',
          explanation: '"Rushing from place to place" is the standard collocation for moving quickly between locations. The others are less idiomatic in this context.',
        },
        {
          number: 3,
          options: [
            { value: 'A', label: 'engage' },
            { value: 'B', label: 'involve' },
            { value: 'C', label: 'immerse' },
            { value: 'D', label: 'absorb' },
          ],
          answer: 'C',
          explanation: '"Immerse yourself in" is a fixed collocation meaning to become completely involved in something (a culture, activity, etc.). The others do not form this reflexive structure.',
        },
        {
          number: 4,
          options: [
            { value: 'A', label: 'disregarded' },
            { value: 'B', label: 'overlooked' },
            { value: 'C', label: 'avoided' },
            { value: 'D', label: 'forgotten' },
          ],
          answer: 'B',
          explanation: '"Overlooked" means not noticed or ignored, which fits the idea of hidden gems that average tourists pass by without seeing. "Disregarded" implies intentional dismissal.',
        },
        {
          number: 5,
          options: [
            { value: 'A', label: 'impact' },
            { value: 'B', label: 'effect' },
            { value: 'C', label: 'footprint' },
            { value: 'D', label: 'mark' },
          ],
          answer: 'C',
          explanation: '"Carbon footprint" is a fixed compound noun referring to the amount of CO₂ produced. It is the only option that forms this established environmental term.',
        },
        {
          number: 6,
          options: [
            { value: 'A', label: 'offers' },
            { value: 'B', label: 'provides' },
            { value: 'C', label: 'gives' },
            { value: 'D', label: 'presents' },
          ],
          answer: 'B',
          explanation: '"Provide someone with something" is the correct grammatical structure here. "Offer", "give" and "present" do not take "with" in this pattern.',
        },
        {
          number: 7,
          options: [
            { value: 'A', label: 'Taking' },
            { value: 'B', label: 'Having' },
            { value: 'C', label: 'Holding' },
            { value: 'D', label: 'Keeping' },
          ],
          answer: 'A',
          explanation: '"Taking for granted" is a fixed idiom meaning assuming something without appreciating it. Only "taking" forms this expression.',
        },
        {
          number: 8,
          options: [
            { value: 'A', label: 'made' },
            { value: 'B', label: 'done' },
            { value: 'C', label: 'caught' },
            { value: 'D', label: 'gained' },
          ],
          answer: 'A',
          explanation: 'Memories are "made", not "done", "caught" or "gained". This is a fixed verb-noun collocation.',
        },
      ],
    },

    // ─── Part 2: Open cloze ───────────────────────────────────────────────────
    {
      partNumber: 2,
      type: 'open-cloze',
      title: 'The Search for Life',
      textParts: [
        'For decades, the question of whether we are alone in the universe (0) has fascinated both scientists and the general public. While there is ',
        " yet no definitive proof of alien life, recent discoveries have made the possibility seem more likely ",
        ' ever before. Astronomers have identified thousands of planets orbiting other stars, some of ',
        " are located in the 'habitable zone'. This zone is the area around a star ",
        " temperatures are just right for liquid water to exist on a planet's surface. Water is essential for life ",
        " we know it, so finding it elsewhere is a top priority. Space agencies like NASA have sent advanced rovers to Mars to search ",
        ' signs of ancient microscopic life. ',
        ' these missions are incredibly expensive, the potential knowledge to be gained is considered well worth the cost. It may only be a matter of time ',
        ' we finally get an answer to this age-old mystery.',
      ],
      questions: [
        { number: 9, acceptedAnswers: ['as'], explanation: '"As yet" is a fixed phrase meaning "up to this point" or "so far". It indicates that no proof exists so far.' },
        { number: 10, acceptedAnswers: ['than'], explanation: '"More likely than ever before" — "than" is required to form the comparative structure.' },
        { number: 11, acceptedAnswers: ['which'], explanation: '"Some of which" — the relative pronoun "which" refers back to "planets" in the previous clause.' },
        { number: 12, acceptedAnswers: ['where'], explanation: '"The area around a star where temperatures are just right" — "where" is the relative pronoun of place.' },
        { number: 13, acceptedAnswers: ['as'], explanation: '"Life as we know it" is a fixed phrase meaning life in the form we are familiar with.' },
        { number: 14, acceptedAnswers: ['for'], explanation: '"Search for" is the fixed phrasal verb meaning to look for something.' },
        { number: 15, acceptedAnswers: ['Although', 'While', 'Though'], explanation: 'A conjunction of contrast is needed (these missions are expensive BUT the knowledge is worth it). "Although", "While" or "Though" all work.' },
        { number: 16, acceptedAnswers: ['before'], explanation: '"A matter of time before" is a fixed phrase meaning it will happen eventually.' },
      ],
    },

    // ─── Part 3: Word formation ───────────────────────────────────────────────
    {
      partNumber: 3,
      type: 'word-formation',
      title: 'The Evolution of the Selfie',
      textParts: [
        'Long before the invention of smartphones, (0) photographers were experimenting with self-portraits. However, the ',
        ' of the digital camera and social media has transformed this into a global phenomenon. Today, millions of \'selfies\' are uploaded every day, leading to much ',
        ' about their impact on society. Some psychologists argue that the ',
        ' of self-portraits is a sign of increasing ',
        ' in younger generations. They claim that people are becoming too obsessed with their ',
        ' and seeking constant approval from others. On the other hand, many see selfies as a form of self-expression and ',
        ' . It allows individuals to control how they are perceived by the world. Regardless of your ',
        ', it is ',
        ' that the selfie is now a permanent part of modern visual culture.',
      ],
      questions: [
        { number: 17, givenWord: 'APPEAR', answer: 'appearance', explanation: 'The noun "appearance" (meaning arrival or emergence) is needed as the subject of the verb "has transformed".' },
        { number: 18, givenWord: 'DISCUSS', answer: 'discussion', explanation: 'The noun "discussion" is required after "much" (much discussion = a lot of debate).' },
        { number: 19, givenWord: 'POPULAR', answer: 'popularity', explanation: 'The abstract noun "popularity" refers to how widespread or well-liked something has become.' },
        { number: 20, givenWord: 'SELFISH', answer: 'selfishness', explanation: 'The abstract noun "selfishness" is formed by adding "-ness" to the adjective "selfish".' },
        { number: 21, givenWord: 'APPEAR', answer: 'appearance', explanation: 'Here "appearance" refers to physical looks — how someone looks to others.' },
        { number: 22, givenWord: 'CREATE', answer: 'creativity', explanation: 'The abstract noun "creativity" refers to the ability or act of creating. "Creation" would also grammatically fit, but "creativity" matches the context of self-expression.' },
        { number: 23, givenWord: 'BELIEVE', answer: 'belief', explanation: 'The noun "belief" or "beliefs" (plural accepted) refers to an opinion or conviction. "Regardless of your belief" means whatever your view is.' },
        { number: 24, givenWord: 'DENY', answer: 'undeniable', explanation: 'The adjective "undeniable" (prefix un- + deny → denial → undeniable) means impossible to dispute. "It is undeniable that" is a fixed structure.' },
      ],
    },

    // ─── Part 4: Key word transformations ─────────────────────────────────────
    {
      partNumber: 4,
      type: 'key-word-transformation',
      questions: [
        {
          number: 25,
          sentence1: "I'm sure it wasn't Mark you saw because he's in Paris.",
          keyword: 'HAVE',
          sentence2Begin: 'It ',
          sentence2End: " Mark you saw because he's in Paris.",
          answer: "can't have been",
          explanation: '"Can\'t have been" expresses a logical deduction about the past that something was impossible.',
        },
        {
          number: 26,
          sentence1: 'They are going to build a new sports centre in the town.',
          keyword: 'BUILT',
          sentence2Begin: 'A new sports centre ',
          sentence2End: ' in the town.',
          answer: 'is going to be built',
          explanation: 'Future passive with "going to": "is going to be + past participle".',
        },
        {
          number: 27,
          sentence1: '"I\'ll help you with your homework after dinner," said my brother.',
          keyword: 'PROMISED',
          sentence2Begin: 'My brother ',
          sentence2End: ' me with my homework after dinner.',
          answer: 'promised to help',
          explanation: '"Promise + to-infinitive" is the reporting structure for a promise about future action.',
        },
        {
          number: 28,
          sentence1: 'I regret not studying harder for the final exam.',
          keyword: 'ONLY',
          sentence2Begin: 'If ',
          sentence2End: ' harder for the final exam.',
          answer: 'only I had studied',
          explanation: '"If only + Past Perfect" expresses regret about a past action that did not happen.',
        },
        {
          number: 29,
          sentence1: 'The tea was too hot for me to drink.',
          keyword: 'ENOUGH',
          sentence2Begin: 'The tea was ',
          sentence2End: ' for me to drink.',
          answer: 'not cool enough',
          explanation: '"Not + adjective + enough" is the opposite of "too + adjective". "Too hot" becomes "not cool enough".',
        },
        {
          number: 30,
          sentence1: 'Although he was injured, he finished the marathon.',
          keyword: 'SPITE',
          sentence2Begin: 'He finished the marathon ',
          sentence2End: ' injury.',
          answer: 'in spite of his',
          explanation: '"In spite of + noun/gerund" expresses contrast. "Although he was injured" becomes "in spite of his injury".',
        },
      ],
    },

    // ─── Part 5: Reading multiple choice ─────────────────────────────────────
    {
      partNumber: 5,
      type: 'reading-mcq',
      articleTitle: 'The Return of the Apex Predator',
      text: `When the decision was made to reintroduce wolves to Yellowstone National Park in the mid-1990s, it was met with a mixture of excitement and fierce opposition. For seventy years, the grey wolf had been absent from the landscape, having been hunted to extinction in the area by the 1920s. Without their natural predator, the elk population had exploded, leading to overgrazing that had stripped the valleys of young willow and aspen trees. Scientists hoped that bringing the wolves back would restore a natural balance, but many local ranchers feared for their livestock and their livelihoods.

The first few years of the project were closely monitored. The wolves didn't just survive; they thrived. As they began to hunt the elk, something remarkable happened—a phenomenon known as a 'trophic cascade'. The elk, now wary of being caught in the open, began to avoid certain areas of the park, particularly the valleys where they were most vulnerable. This allowed the vegetation to recover. Trees that had been stunted for decades suddenly shot up, some growing to four times their height in just a few years.

This regrowth of trees had a surprising knock-on effect: the return of the beavers. Beavers need willow trees to build their dams and survive the winter. As the willows returned, so did these 'ecosystem engineers'. Their dams created ponds and slow-moving water, which in turn provided habitats for fish, amphibians, and various water birds. The wolves, it seemed, were not just changing the animal populations; they were physically reshaping the landscape. Even the rivers began to change course less frequently as the new vegetation stabilised the banks, reducing erosion.

Despite these ecological success stories, the human element of the story remains complex. For the communities living on the borders of the park, the presence of wolves is a constant source of tension. While the wolves attract thousands of tourists every year, bringing a significant boost to the local economy, they also occasionally wander onto private land. For a small-scale farmer, the loss of even a few sheep to a wolf pack can be a devastating financial blow.

Government compensation programmes exist to pay farmers for lost livestock, but many feel these don't go far enough. They argue that the presence of wolves causes 'chronic stress' to their herds, leading to lower weight gain and fewer births. Some also feel that their traditional way of life is being ignored by urban-based environmentalists who don't have to live with the consequences of rewilding.

However, many experts argue that we are only just beginning to understand the profound importance of apex predators. They believe that the Yellowstone experiment proves that nature is far more interconnected than we once thought. The challenge for the future is finding a way for humans and large predators to coexist. This might involve using technology, such as satellite tracking, to warn farmers when wolves are near, or promoting 'predator-friendly' labels for meat products. Whatever the solution, the wolves of Yellowstone have shown that while it is easy to remove a species from an ecosystem, bringing it back requires patience, science, and, above all, a willingness to listen to all sides of the debate.`,
      questions: [
        {
          number: 31,
          question: 'What was the primary reason for reintroducing wolves to the park?',
          options: [
            { value: 'A', label: 'To satisfy the demands of excited environmentalists.' },
            { value: 'B', label: 'To reduce the number of elk and protect the vegetation.' },
            { value: 'C', label: 'To provide a new attraction for international tourists.' },
            { value: 'D', label: "To prove that ranchers' fears were unjustified." },
          ],
          answer: 'B',
          explanation: 'The text states that the elk population had "exploded" and destroyed vegetation. Scientists hoped wolves would "restore a natural balance" by controlling the elk.',
        },
        {
          number: 32,
          question: "What does the writer mean by 'trophic cascade' in the second paragraph?",
          options: [
            { value: 'A', label: 'A sudden increase in the number of predators in an area.' },
            { value: 'B', label: 'The physical movement of animals from the valleys to the mountains.' },
            { value: 'C', label: 'A chain reaction where one change affects multiple levels of an ecosystem.' },
            { value: 'D', label: 'The way trees grow taller when they are near water.' },
          ],
          answer: 'C',
          explanation: 'The text describes how the wolves changed elk behaviour, which allowed trees to grow, which brought back beavers, which changed the rivers — a chain reaction across multiple ecosystem levels.',
        },
        {
          number: 33,
          question: 'According to the third paragraph, beavers returned to the park because...',
          options: [
            { value: 'A', label: 'the wolves had stopped hunting them.' },
            { value: 'B', label: 'the rivers had become more stable and easier to dam.' },
            { value: 'C', label: 'there was an increase in the food and materials they needed.' },
            { value: 'D', label: 'they were reintroduced by scientists at the same time as the wolves.' },
          ],
          answer: 'C',
          explanation: 'The text says beavers need willow trees to survive. As willows returned (more food and materials), so did the beavers.',
        },
        {
          number: 34,
          question: "What is the 'tension' mentioned in the fourth paragraph?",
          options: [
            { value: 'A', label: 'The conflict between the economic benefits and the risks of having wolves.' },
            { value: 'B', label: 'The difficulty of tracking wolves when they leave the park.' },
            { value: 'C', label: 'The disagreement between different groups of tourists.' },
            { value: 'D', label: 'The competition for land between farmers and park authorities.' },
          ],
          answer: 'A',
          explanation: 'The paragraph contrasts wolves bringing tourist income (economic benefit) with the financial loss when wolves kill livestock (risk).',
        },
        {
          number: 35,
          question: "What is the main complaint of the farmers mentioned in the fifth paragraph?",
          options: [
            { value: 'A', label: 'They are not being paid enough for the animals that are killed.' },
            { value: 'B', label: "The wolves are causing hidden problems for their livestock's health." },
            { value: 'C', label: "They don't have enough technology to protect their farms." },
            { value: 'D', label: 'Environmentalists are moving from cities to live near the park.' },
          ],
          answer: 'B',
          explanation: "The farmers' main complaint is \"chronic stress\" causing lower weight gain and fewer births — problems that don't involve direct killing but still affect productivity.",
        },
        {
          number: 36,
          question: "In the final paragraph, the writer's attitude toward the future of rewilding is...",
          options: [
            { value: 'A', label: 'pessimistic, because humans and predators will never coexist.' },
            { value: 'B', label: 'critical, because he thinks the Yellowstone experiment was too expensive.' },
            { value: 'C', label: 'cautious, emphasizing the need for compromise and cooperation.' },
            { value: 'D', label: 'enthusiastic, suggesting that all extinct species should be brought back.' },
          ],
          answer: 'C',
          explanation: 'The writer says success requires "patience, science, and a willingness to listen to all sides" — a cautious, balanced view emphasising cooperation.',
        },
      ],
    },

    // ─── Part 6: Gapped text ──────────────────────────────────────────────────
    {
      partNumber: 6,
      type: 'gapped-text',
      articleTitle: 'The AI Revolution: Friend or Foe?',
      textParts: [
        "The idea that machines might one day take over our jobs is not a new one. Since the Industrial Revolution, workers have worried that automation would make their skills obsolete. However, the current wave of Artificial Intelligence is different. ",
        ". While previous machines replaced physical labour, AI is now capable of performing tasks that require cognitive skills, such as writing, coding, and even making medical diagnoses. Many economists argue that AI will lead to a significant increase in productivity. By automating repetitive and time-consuming tasks, it allows humans to focus on more creative and strategic work. ",
        ". For example, in the legal profession, AI can scan thousands of documents in seconds to find relevant information, a task that used to take junior lawyers weeks to complete. Despite these advantages, the fear of widespread job losses remains. Some studies suggest that up to 40% of current jobs could be at risk over the next two decades. ",
        ". History shows that while technology destroys some roles, it almost always creates new ones that we couldn't have imagined before. Think of jobs like 'social media manager' or 'app developer', which didn't exist twenty years ago. The real challenge, therefore, may not be a lack of work, but a 'skills gap'. ",
        ". Governments and educational institutions will need to rethink how they prepare people for this new landscape. Lifelong learning will become a necessity rather than an option. Workers will need to be adaptable, constantly updating their knowledge to stay relevant. Moreover, there are ethical concerns about the use of AI in decision-making. AI systems are only as good as the data they are trained on. ",
        ". This is particularly worrying in areas like hiring or law enforcement, where fairness is essential. Human oversight will always be necessary to ensure that these tools are used responsibly. In conclusion, the AI revolution is likely to be a double-edged sword. It offers incredible opportunities for innovation and efficiency, but it also demands a fundamental shift in how we think about work. ",
        ". If we manage it correctly, AI could free us from drudgery and allow us to lead more fulfilling lives. If we ignore the risks, however, we may face a future of increased inequality.",
      ],
      sentences: [
        { label: 'A', text: 'This transition will require a massive effort in retraining the global workforce.' },
        { label: 'B', text: 'Instead, it is the speed and the nature of the change that is unprecedented.' },
        { label: 'C', text: 'However, this does not necessarily mean there will be a future with no employment at all.' },
        { label: 'D', text: 'If that data contains biases, the AI will simply repeat and even amplify those prejudices.' },
        { label: 'E', text: 'This shift in focus is already being felt in a variety of professional sectors.' },
        { label: 'F', text: 'Consequently, many people are choosing to leave their jobs to pursue more traditional crafts.' },
        { label: 'G', text: 'Ultimately, our success will depend on how we choose to integrate this technology into our lives.' },
      ],
      questions: [
        { number: 37, answer: 'B', explanation: '"Instead, it is the speed and the nature of the change that is unprecedented" contrasts the current AI wave with previous automation, explaining what makes it different.' },
        { number: 38, answer: 'E', explanation: '"This shift in focus is already being felt in a variety of professional sectors" introduces the concrete examples (legal profession) that follow.' },
        { number: 39, answer: 'C', explanation: '"However, this does not necessarily mean there will be a future with no employment" directly counters the fear of 40% job losses mentioned just before.' },
        { number: 40, answer: 'A', explanation: '"This transition will require a massive effort in retraining the global workforce" links the "skills gap" problem to the solution of retraining.' },
        { number: 41, answer: 'D', explanation: '"If that data contains biases, the AI will simply repeat and even amplify those prejudices" directly follows from "AI systems are only as good as the data they are trained on".' },
        { number: 42, answer: 'G', explanation: '"Ultimately, our success will depend on how we choose to integrate this technology into our lives" is a concluding sentence that sets up the two contrasting scenarios (manage well vs. ignore risks) that follow.' },
      ],
    },

    // ─── Part 7: Multiple matching ────────────────────────────────────────────
    {
      partNumber: 7,
      type: 'multiple-matching',
      intro: 'You are going to read an article about four people who have unusual hobbies.',
      texts: [
        {
          label: 'A',
          name: 'Liam – The Free Soloist',
          text: "I've been climbing since I was a teenager, but free soloing—climbing without ropes or harnesses—is a different beast altogether. People think I'm a thrill-seeker, but it's actually the opposite. It requires a state of total calm and absolute focus. You need incredible upper-body power and technical skill, but the mental challenge is even greater. When I'm on the rock, the worries of everyday life—the bills, the deadlines, the stress—completely disappear. There is only the next handhold. Of course, I'm aware that the risks are undeniably high; one mistake can be fatal, which is why I only attempt routes that I have practiced dozens of times with safety gear first.",
        },
        {
          label: 'B',
          name: 'Maya – The Urban Explorer',
          text: "My hobby involves visiting abandoned buildings—factories, hospitals, and even old theme parks. There's something hauntingly beautiful about spaces that time has left behind. I love the silence of these places and the chance to document the decay through my photography. It can be risky, of course; you have to be careful about the structural integrity of the floors and, occasionally, the legality of being there. I never break in or steal anything; my motto is 'take only pictures, leave only footprints'. It's about the thrill of stepping into a world that most people have forgotten exists.",
        },
        {
          label: 'C',
          name: 'Sam – The Sand Architect',
          text: "Most people build sandcastles as children, but for me, it's a serious art form. I travel to competitive sand-sculpting festivals all over the world. It's the community that keeps me coming back; even though we are competing, we often work in teams and share tips. I've even taken home a few trophies from international competitions recently. It's physically demanding work, spending ten hours a day on your knees in the sun, but seeing a three-metre-high tower made of nothing but sand and water is incredibly rewarding. It teaches you that nothing lasts forever, as the tide will eventually wash it all away.",
        },
        {
          label: 'D',
          name: 'Chloe – The Treasure Hunter',
          text: "I spend my weekends with a metal detector in fields and on beaches. My grandfather was the one who first took me out when I was ten, and I've been hooked ever since. It requires a great deal of patience; you can spend hours scanning the ground and find nothing but old soda cans. But then, the machine makes a specific beep, and the thrill of the unexpected hits you. Over the years, I've found everything from Victorian coins to a gold wedding ring that I was actually able to return to its owner. You have to invest in a high-quality metal detector if you're serious about it, but the hobby pays for itself in the end.",
        },
      ],
      questions: [
        { number: 43, text: 'mentions the importance of patience for their hobby?', answer: 'D', explanation: 'Chloe says her hobby "requires a great deal of patience".' },
        { number: 44, text: 'admits their hobby can sometimes be dangerous?', answer: 'A', explanation: 'Liam says "the risks are undeniably high; one mistake can be fatal".' },
        { number: 45, text: 'was inspired by a family member to start?', answer: 'D', explanation: "Chloe's grandfather first took her out when she was ten." },
        { number: 46, text: 'values the social aspect of their activity?', answer: 'C', explanation: 'Sam says "it\'s the community that keeps me coming back".' },
        { number: 47, text: 'enjoys the element of surprise their hobby provides?', answer: 'D', explanation: 'Chloe mentions "the thrill of the unexpected" when the detector beeps.' },
        { number: 48, text: 'mentions the need for specialized equipment?', answer: 'D', explanation: 'Chloe says "you have to invest in a high-quality metal detector".' },
        { number: 49, text: 'likes the fact that their hobby takes them to forgotten places?', answer: 'B', explanation: 'Maya visits places that "most people have forgotten exists".' },
        { number: 50, text: 'has won awards or recognition for their skill?', answer: 'C', explanation: 'Sam has "taken home a few trophies from international competitions".' },
        { number: 51, text: 'describes their hobby as a way to escape daily stress?', answer: 'A', explanation: 'Liam says "the worries of everyday life—the bills, the deadlines, the stress—completely disappear".' },
        { number: 52, text: 'explains that their hobby requires significant physical strength?', answer: 'A', explanation: 'Liam says "You need incredible upper-body power".' },
      ],
    },
  ],
};
