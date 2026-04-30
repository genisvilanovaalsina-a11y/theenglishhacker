import type { Exam } from '../types';

export const exam: Exam = {
  id: 'b2-exam-05',
  number: 5,
  level: 'b2',
  parts: [
    // ─── Part 1: Multiple-choice cloze ────────────────────────────────────────
    {
      partNumber: 1,
      type: 'mc-cloze',
      title: 'The Future of Space Tourism',
      textParts: [
        'It is no longer a matter of science fiction to imagine that humans will one day (0) reach the stars. In recent years, several private companies have ',
        ' significant progress in developing spacecraft designed to carry paying passengers into orbit. While the ',
        " majority of people still view space travel as an impossible dream, the first commercial flights have already ",
        " place.\n\nHowever, the experience does not come cheap. At present, a single ticket can ",
        ' a fortune, meaning that only the extremely wealthy can afford to go. Critics also point ',
        ' the environmental impact of rocket launches, which release large amounts of carbon into the atmosphere. Despite these concerns, supporters ',
        ' that space tourism will eventually become more accessible. They believe that as technology improves, costs will ',
        ' down, allowing ordinary people to experience the ',
        ' of seeing Earth from above.',
      ],
      questions: [
        {
          number: 1,
          options: [
            { value: 'A', label: 'done' },
            { value: 'B', label: 'made' },
            { value: 'C', label: 'given' },
            { value: 'D', label: 'taken' },
          ],
          answer: 'B',
          explanation: '"Make progress" is a fixed collocation. You make (not do, give, or take) progress in a field. "Made significant progress" is the standard formal phrase.',
        },
        {
          number: 2,
          options: [
            { value: 'A', label: 'vast' },
            { value: 'B', label: 'wide' },
            { value: 'C', label: 'high' },
            { value: 'D', label: 'deep' },
          ],
          answer: 'A',
          explanation: '"The vast majority" is a fixed collocation meaning most of something. "Wide" collocates with "range" or "variety", not "majority". "High" and "deep" do not collocate with "majority".',
        },
        {
          number: 3,
          options: [
            { value: 'A', label: 'held' },
            { value: 'B', label: 'occurred' },
            { value: 'C', label: 'taken' },
            { value: 'D', label: 'happened' },
          ],
          answer: 'C',
          explanation: '"Take place" is the fixed phrase meaning to happen or occur. The present perfect "have already taken place" is the correct tense. "Occurred" and "happened" do not collocate with "place".',
        },
        {
          number: 4,
          options: [
            { value: 'A', label: 'pay' },
            { value: 'B', label: 'spend' },
            { value: 'C', label: 'charge' },
            { value: 'D', label: 'cost' },
          ],
          answer: 'D',
          explanation: '"Cost a fortune" is a fixed collocation meaning to be extremely expensive. "Pay" and "spend" are used from the buyer\'s perspective. "Charge" requires a direct object (you charge someone).',
        },
        {
          number: 5,
          options: [
            { value: 'A', label: 'out' },
            { value: 'B', label: 'off' },
            { value: 'C', label: 'up' },
            { value: 'D', label: 'at' },
          ],
          answer: 'A',
          explanation: '"Point out" is the correct phrasal verb meaning to draw attention to something or indicate it to others. "Point at" means to indicate physically with a finger, not to highlight an issue.',
        },
        {
          number: 6,
          options: [
            { value: 'A', label: 'insist' },
            { value: 'B', label: 'suggest' },
            { value: 'C', label: 'inform' },
            { value: 'D', label: 'convince' },
          ],
          answer: 'A',
          explanation: '"Insist that" means to state something firmly and repeatedly. It reflects the strong, confident position of supporters. "Inform" requires a direct object (you inform someone). "Convince" also needs a direct object.',
        },
        {
          number: 7,
          options: [
            { value: 'A', label: 'fall' },
            { value: 'B', label: 'drop' },
            { value: 'C', label: 'sink' },
            { value: 'D', label: 'lower' },
          ],
          answer: 'B',
          explanation: '"Costs will drop down" — "drop" collocates naturally with prices and costs to indicate a significant decrease. "Lower" is typically transitive (you lower costs). "Sink" is more commonly used for ships or spirits.',
        },
        {
          number: 8,
          options: [
            { value: 'A', label: 'view' },
            { value: 'B', label: 'sight' },
            { value: 'C', label: 'look' },
            { value: 'D', label: 'scene' },
          ],
          answer: 'B',
          explanation: '"The sight of" is a fixed phrase referring to the experience or impression of seeing something awe-inspiring. "The sight of seeing Earth from above" captures the emotional impact. "View" is more neutral and geographical.',
        },
      ],
    },

    // ─── Part 2: Open cloze ───────────────────────────────────────────────────
    {
      partNumber: 2,
      type: 'open-cloze',
      title: 'The Power of Habits',
      textParts: [
        'According (0) to psychologists, nearly 40% of the actions we perform every day are not the result of conscious decisions, but habits. These are routines that our brains have developed ',
        " order to save energy. When we repeat a behaviour often ",
        ', it becomes automatic, allowing us to focus ',
        " more complex tasks.\n\nThe process of forming a habit begins with a 'cue'—a trigger that tells your brain to go into automatic mode. This is followed ",
        ' the routine itself, and finally, a reward. For example, the smell of coffee might be the cue ',
        " starts your morning routine. ",
        ' the fact that habits are hard to break, it is possible to change them if you understand how they work. By identifying the cues and rewards that drive your behaviour, you can slowly replace an old habit ',
        ' a new, healthier one. This requires patience, as it usually takes ',
        ' least 21 days for a new routine to feel natural.',
      ],
      questions: [
        { number: 9, acceptedAnswers: ['in'], explanation: '"In order to" is a fixed phrase used to express purpose. The brain develops routines "in order to save energy".' },
        { number: 10, acceptedAnswers: ['enough'], explanation: '"Often enough" means with sufficient frequency for the brain to automate the behaviour. Without "enough", the sentence would be incomplete.' },
        { number: 11, acceptedAnswers: ['on'], explanation: '"Focus on" is a fixed phrasal verb meaning to give full attention to something. It is always followed by the preposition "on".' },
        { number: 12, acceptedAnswers: ['by'], explanation: '"Followed by" is a passive structure meaning that one thing comes after another. "This is followed by the routine" = the routine comes next.' },
        { number: 13, acceptedAnswers: ['that', 'which'], explanation: 'The relative pronoun "that" or "which" introduces the relative clause defining the cue. Both are acceptable in this defining relative clause.' },
        { number: 14, acceptedAnswers: ['Despite'], explanation: '"Despite the fact that" introduces a concession — habits are hard to break, BUT it is possible to change them. "Despite" is followed by a noun phrase.' },
        { number: 15, acceptedAnswers: ['with'], explanation: '"Replace X with Y" is the fixed structure meaning to substitute one thing for another. You replace an old habit with a new one.' },
        { number: 16, acceptedAnswers: ['at'], explanation: '"At least" is a fixed phrase meaning a minimum of. "It takes at least 21 days" means 21 days is the minimum.' },
      ],
    },

    // ─── Part 3: Word formation ───────────────────────────────────────────────
    {
      partNumber: 3,
      type: 'word-formation',
      title: 'Green Energy Revolution',
      textParts: [
        'The (0) environmental impact of fossil fuels has led to an ',
        ' search for cleaner alternatives. In the past decade, there has been a ',
        ' increase in the use of renewable energy sources such as wind and solar power. These technologies are ',
        ' becoming more efficient and affordable.\n\nOne of the biggest ',
        ' in the field of green energy is the development of better batteries. This is ',
        ' because it allows us to store energy for use when the sun isn\'t shining or the wind isn\'t blowing. ',
        ', many countries still rely on coal and gas for their ',
        ' needs. However, experts are ',
        ' that a complete transition to sustainable energy is possible within our lifetime if we continue to invest in innovation.',
      ],
      questions: [
        { number: 17, givenWord: 'INTENSE', answer: 'intensive', explanation: 'The adjective "intensive" means thorough, systematic, and concentrated. "An intensive search" is the correct collocation, meaning a very thorough and focused effort.' },
        { number: 18, givenWord: 'DRAMA', answer: 'dramatic', explanation: 'The adjective "dramatic" means very significant or striking. "A dramatic increase" is a fixed collocation describing a large and sudden rise.' },
        { number: 19, givenWord: 'STEADY', answer: 'steadily', explanation: 'The adverb "steadily" modifies the verb phrase "becoming more efficient", meaning the improvement is gradual and consistent over time.' },
        { number: 20, givenWord: 'ACHIEVE', answer: 'achievements', explanation: 'The plural noun "achievements" refers to significant accomplishments or breakthroughs. "The biggest achievements in the field" is the correct structure.' },
        { number: 21, givenWord: 'ESSENCE', answer: 'essential', explanation: 'The adjective "essential" means absolutely necessary or crucial. "This is essential because" is a formal structure introducing an important reason.' },
        { number: 22, givenWord: 'FORTUNATE', answer: 'Unfortunately', explanation: 'The sentence adverb "Unfortunately" introduces a negative or contrasting point. The context (many countries still rely on fossil fuels) requires a negative tone.' },
        { number: 23, givenWord: 'ELECTRIC', answer: 'electrical', explanation: 'The adjective "electrical" relates to electricity as a system or technology. "Electrical needs" means energy requirements. "Electricity" (noun) is also accepted.' },
        { number: 24, givenWord: 'HOPE', answer: 'hopeful', explanation: 'The adjective "hopeful" means having or giving cause for hope. "Experts are hopeful that" means they have positive and confident expectations.' },
      ],
    },

    // ─── Part 4: Key word transformations ─────────────────────────────────────
    {
      partNumber: 4,
      type: 'key-word-transformation',
      questions: [
        {
          number: 25,
          sentence1: 'I last went to the cinema three months ago.',
          keyword: 'BEEN',
          sentence2Begin: 'I ',
          sentence2End: ' the cinema for three months.',
          answer: "haven't been to",
          explanation: '"Haven\'t been to" + place + "for" + time period expresses how long something has not happened. The present perfect is required to connect a past point with the present.',
        },
        {
          number: 26,
          sentence1: '"I\'ll call you as soon as I arrive," Sarah told me.',
          keyword: 'PROMISED',
          sentence2Begin: 'Sarah ',
          sentence2End: ' as soon as she arrived.',
          answer: 'promised to call',
          explanation: '"Promise + to-infinitive" is the reporting structure for a promise about future action. The time reference shifts from "I arrive" to "she arrived" in reported speech.',
        },
        {
          number: 27,
          sentence1: 'The heavy snow made it impossible for us to drive home.',
          keyword: 'PREVENTED',
          sentence2Begin: 'The heavy snow ',
          sentence2End: ' home.',
          answer: 'prevented us from driving',
          explanation: '"Prevent + object + from + gerund" is the fixed structure. "Made it impossible for us to drive" becomes "prevented us from driving".',
        },
        {
          number: 28,
          sentence1: 'They are repairing my car at the moment.',
          keyword: 'BEING',
          sentence2Begin: 'My car ',
          sentence2End: ' at the moment.',
          answer: 'is being repaired',
          explanation: 'Present continuous passive: "is being + past participle" describes an action in progress right now. The active "they are repairing" becomes "my car is being repaired".',
        },
        {
          number: 29,
          sentence1: "If you don't leave now, you'll be late for the meeting.",
          keyword: 'UNLESS',
          sentence2Begin: "You'll be late for the meeting ",
          sentence2End: ' now.',
          answer: 'unless you leave',
          explanation: '"Unless" means "if not". "If you don\'t leave now" becomes "unless you leave now". The present simple is used in the unless-clause, not the future.',
        },
        {
          number: 30,
          sentence1: 'It was such a loud noise that everyone woke up.',
          keyword: 'SO',
          sentence2Begin: 'The noise ',
          sentence2End: ' that everyone woke up.',
          answer: 'was so loud',
          explanation: '"So + adjective + that" expresses a result. "Such a loud noise" (such + noun phrase) transforms into "so loud" (so + adjective).',
        },
      ],
    },

    // ─── Part 5: Reading multiple choice ─────────────────────────────────────
    {
      partNumber: 5,
      type: 'reading-mcq',
      articleTitle: 'The Quiet Art of Storytelling',
      text: `For Julian Barnes, the process of writing a novel is less like a lightning bolt of inspiration and more like the slow, methodical construction of a stone wall. He spends his mornings in a small shed at the end of his garden, a space he refers to as his 'word factory'. There is no internet connection, no telephone, and certainly no distractions. "The silence is the most important tool I own," he says, leaning back in a chair that has seen better days. "In the city, your thoughts are constantly interrupted by the noise of other people's lives. Here, I can finally hear the voices of my characters."

Julian didn't set out to be a writer. After university, he worked as a librarian, a job he describes as 'heavenly' because it allowed him to surround himself with books without the pressure of having to produce one. It was only in his early thirties, after a chance conversation with an editor at a party, that he decided to try his hand at a short story. To his surprise, it was accepted for publication immediately. "It was a terrifying moment," he recalls. "Suddenly, I wasn't just a reader anymore; I was someone who had to have something to say."

His first novel, The Glass Horizon, was a modest success, but it was his third book that truly established his reputation. It dealt with the complex relationship between memory and history, a theme that has stayed with him throughout his career. Julian is famous for his research. For his latest book, which is set in 19th-century France, he spent two years reading diaries and police reports from the era. "I want the reader to feel the mud on their boots," he explains. "If the details aren't right, the magic disappears. You have to earn the reader's trust."

Despite his fame, Julian remains deeply suspicious of the modern literary world. He rarely attends award ceremonies and avoids social media entirely. He believes that the current obsession with an author's 'brand' is damaging to the work itself. "A book should stand on its own feet," he argues. "It shouldn't matter who the author is, what they eat for breakfast, or what their political opinions are. The only thing that matters is the words on the page."

His writing routine is disciplined. He writes from 9:00 AM to 1:00 PM, regardless of whether he feels 'inspired' or not. He compares it to physical exercise—something that might be difficult to start, but feels essential once you are doing it. On a good day, he might produce five hundred words. On a bad day, he might delete everything he wrote the day before. "Deleting is just as important as writing," he says with a smile. "Sometimes you have to clear away the weeds to let the flowers grow."

Now seventy-two, Julian shows no signs of slowing down. He is currently halfway through a new project, though he refuses to divulge any details. He remains convinced that the novel, as a form, is still the best way to explore the 'messy, beautiful contradiction' of being human. As I leave his garden, I see him walking back toward his shed, a man who has found his place in the world, one word at a time.`,
      questions: [
        {
          number: 31,
          question: "What do we learn about Julian's writing space in the first paragraph?",
          options: [
            { value: 'A', label: 'He finds it too quiet for creative work.' },
            { value: 'B', label: 'It was designed to look like a factory.' },
            { value: 'C', label: 'It is intentionally kept free of modern technology.' },
            { value: 'D', label: 'He shares it with other writers to save money.' },
          ],
          answer: 'C',
          explanation: 'The text explicitly states "no internet connection, no telephone, and certainly no distractions". This is intentional, as Julian values silence. A is wrong — he calls the silence "the most important tool I own".',
        },
        {
          number: 32,
          question: 'How did Julian feel when his first story was published?',
          options: [
            { value: 'A', label: 'He was confident that he would become famous.' },
            { value: 'B', label: 'He felt a sense of pressure and responsibility.' },
            { value: 'C', label: 'He was annoyed that he had to give up his job as a librarian.' },
            { value: 'D', label: 'He was disappointed by the editor\'s reaction.' },
          ],
          answer: 'B',
          explanation: 'Julian calls it "a terrifying moment" — suddenly he was "someone who had to have something to say", implying pressure and responsibility. A is the opposite of "terrifying". C is not mentioned.',
        },
        {
          number: 33,
          question: "What is Julian's attitude toward research for his books?",
          options: [
            { value: 'A', label: 'He thinks it is less important than imagination.' },
            { value: 'B', label: 'He finds it a tedious but necessary part of the job.' },
            { value: 'C', label: 'He believes accurate details are vital for maintaining the story\'s impact.' },
            { value: 'D', label: 'He only does it when his editor insists on it.' },
          ],
          answer: 'C',
          explanation: 'Julian says "If the details aren\'t right, the magic disappears. You have to earn the reader\'s trust." — accurate research is essential for credibility. He spent two years researching, suggesting enthusiasm, not tedium (B).',
        },
        {
          number: 34,
          question: 'Why does Julian avoid social media and award ceremonies?',
          options: [
            { value: 'A', label: 'He is too busy working on his new projects.' },
            { value: 'B', label: 'He believes the focus should be on the book rather than the writer.' },
            { value: 'C', label: 'He is worried about getting negative reviews from critics.' },
            { value: 'D', label: 'He feels that he is too old to understand modern technology.' },
          ],
          answer: 'B',
          explanation: 'Julian argues that "a book should stand on its own feet" and "the only thing that matters is the words on the page" — the author\'s public persona is irrelevant. C and D are not mentioned in the text.',
        },
        {
          number: 35,
          question: "The phrase 'clear away the weeds' in the fifth paragraph refers to...",
          options: [
            { value: 'A', label: "Julian's hobby of gardening in his spare time." },
            { value: 'B', label: 'The process of removing poor-quality writing from a draft.' },
            { value: 'C', label: 'The need to ignore distractions from the outside world.' },
            { value: 'D', label: 'The difficulty of coming up with new ideas every morning.' },
          ],
          answer: 'B',
          explanation: 'The phrase is a metaphor: "weeds" = poor or unnecessary writing, "flowers" = good writing. Julian is saying that deleting bad drafts allows the quality writing to emerge. A is a literal misreading.',
        },
        {
          number: 36,
          question: 'In the final paragraph, the writer suggests that Julian...',
          options: [
            { value: 'A', label: 'is planning to retire after his current project.' },
            { value: 'B', label: 'believes that novels are becoming less popular.' },
            { value: 'C', label: 'finds the human condition difficult to understand.' },
            { value: 'D', label: 'remains dedicated to his craft and the power of fiction.' },
          ],
          answer: 'D',
          explanation: 'At seventy-two, Julian "shows no signs of slowing down" and "remains convinced that the novel is still the best way to explore being human" — clearly dedicated to his work. A is contradicted ("no signs of slowing down").',
        },
      ],
    },

    // ─── Part 6: Gapped text ──────────────────────────────────────────────────
    {
      partNumber: 6,
      type: 'gapped-text',
      articleTitle: 'The Long Journey of the Letter',
      textParts: [
        'The ability to send a message across long distances has been a fundamental part of human civilisation for thousands of years. Long before the invention of the telephone or the internet, people relied on physical letters to stay connected. ',
        '. In ancient Egypt and Babylon, messengers would travel for days on foot or by horse to deliver royal decrees and official documents.\n\nHowever, these early systems were usually reserved for the ruling classes. It wasn\'t until much later that the postal service became a tool for the general public. In 1635, King Charles I of England opened the Royal Mail to his subjects for the first time. ',
        '. Initially, the person receiving the letter had to pay for the delivery, and the cost was determined by the distance the letter had travelled and the number of pages it contained.\n\nThis system was often complicated and expensive, leading to many letters being refused by people who simply couldn\'t afford them. ',
        ". In 1840, the 'Penny Black' was introduced—the world's first adhesive postage stamp. This meant that the sender now paid a flat rate of one penny, regardless of the distance. This revolutionised communication, making it affordable for almost everyone.\n\nAs the British Empire expanded, so did the reach of the postal service. Steamships and later trains replaced horses, significantly reducing the time it took for a letter to reach its destination. ",
        '. During the Victorian era, it was common for people in London to receive several deliveries a day, allowing them to carry on \'near-instant\' conversations by post.\n\nThe 20th century brought even more changes with the arrival of airmail. Suddenly, a letter could travel from London to New York in a matter of days rather than weeks. ',
        '. Despite the rise of telegrams and eventually the telephone, the written letter remained the most personal and cherished way to communicate. People would wait weeks for news from loved ones overseas, saving every envelope as a precious keepsake.\n\nToday, the traditional postal service faces its greatest challenge yet: the digital age. Emails and messaging apps have made the physical letter seem almost obsolete for many people. ',
        '. There is still something uniquely special about receiving a handwritten note in the mail, a physical object that has travelled across the world to reach you. While the volume of personal letters has declined, the postal service remains vital for the delivery of packages in our era of online shopping.',
      ],
      sentences: [
        { label: 'A', text: 'This development led to a massive increase in the volume of mail being sent.' },
        { label: 'B', text: 'Nevertheless, many argue that technology can never truly replace the feeling of a real letter.' },
        { label: 'C', text: 'These ancient networks laid the foundations for the organised systems we use today.' },
        { label: 'D', text: 'Consequently, the postal service decided to stop delivering letters on Sundays.' },
        { label: 'E', text: 'This made the service much more reliable, though it was still quite slow by modern standards.' },
        { label: 'F', text: 'However, this new accessibility came with its own set of problems and costs.' },
        { label: 'G', text: 'This made it possible for people to maintain relationships over vast distances like never before.' },
      ],
      questions: [
        { number: 37, answer: 'C', explanation: '"These ancient networks laid the foundations for the organised systems we use today" summarises the significance of the ancient Egyptian and Babylonian messenger systems described just before.' },
        { number: 38, answer: 'F', explanation: '"However, this new accessibility came with its own set of problems and costs" introduces the complications of the Royal Mail system (recipient paid, cost by distance), which are described in the following sentence.' },
        { number: 39, answer: 'A', explanation: '"This development led to a massive increase in the volume of mail being sent" refers to the introduction of the Penny Black stamp — affordable flat-rate postage led directly to a surge in correspondence.' },
        { number: 40, answer: 'G', explanation: '"This made it possible for people to maintain relationships over vast distances like never before" explains the consequence of faster delivery by steamship and train, and leads naturally into the example of multiple daily deliveries in London.' },
        { number: 41, answer: 'E', explanation: '"This made the service much more reliable, though it was still quite slow by modern standards" describes airmail — faster and more reliable than sea mail, but still not as fast as today\'s communication.' },
        { number: 42, answer: 'B', explanation: '"Nevertheless, many argue that technology can never truly replace the feeling of a real letter" directly introduces the counter-argument to digital dominance, supported by the following sentence about the special nature of handwritten notes.' },
      ],
    },

    // ─── Part 7: Multiple matching ────────────────────────────────────────────
    {
      partNumber: 7,
      type: 'multiple-matching',
      intro: 'You are going to read a review of four different travel apps.',
      texts: [
        {
          label: 'A',
          name: 'Wayfarer',
          text: "Wayfarer is designed for the adventurous traveller who wants to get off the beaten track. Unlike other apps that focus on famous landmarks, Wayfarer uses a community-driven database to suggest hidden gems—tiny restaurants, quiet parks, and local markets that you won't find in any guidebook. The offline maps are incredibly detailed, which is a lifesaver when you're in a remote area without a signal. However, the interface can be a bit cluttered, and it takes some time to learn how to filter out suggestions that don't match your interests. It's perfect for those who have a bit of patience and a desire to explore.",
        },
        {
          label: 'B',
          name: 'CitySnap',
          text: "If you're someone who only has 48 hours to explore a major city, CitySnap is the app for you. It specialises in 'curated paths'—pre-designed walking tours that hit all the major sites in the most efficient order. You can choose tours based on themes, such as 'History', 'Food', or 'Architecture'. The app includes high-quality audio commentary, making it feel like you have a professional guide in your pocket. My only complaint is that the app is quite heavy on battery usage; you'll definitely need to carry a portable charger if you plan to use it all day.",
        },
        {
          label: 'C',
          name: 'BudgetBuddy',
          text: "As the name suggests, BudgetBuddy is all about helping you see the world without breaking the bank. Its strongest feature is the real-time currency converter and a tracker that helps you stay within your daily spending limit. It also has a great section for finding free activities in various cities. While it doesn't offer much in the way of maps or sightseeing info, it links perfectly with other transit apps to help you find the cheapest way to get around. It's an essential tool for students or backpackers who need to keep a close eye on their finances.",
        },
        {
          label: 'D',
          name: 'GlobeTrotter',
          text: "GlobeTrotter is the ultimate all-in-one travel assistant. It handles everything from flight bookings and hotel reservations to restaurant at-the-door check-ins. What sets it apart is the 'Live Help' feature, which connects you with a real person if your flight is cancelled or if you run into a problem with your accommodation. This level of service comes at a price, however, as the app requires a monthly subscription. It's probably too expensive for the occasional holidaymaker, but for frequent business travellers, the peace of mind it provides is well worth the investment.",
        },
      ],
      questions: [
        { number: 43, text: 'is recommended for people visiting a city for a very short time?', answer: 'B', explanation: 'CitySnap is explicitly described as ideal "for someone who only has 48 hours to explore a major city".' },
        { number: 44, text: 'might be difficult to navigate at first?', answer: 'A', explanation: 'Wayfarer\'s "interface can be a bit cluttered, and it takes some time to learn how to filter" — suggesting initial difficulty navigating it.' },
        { number: 45, text: 'requires a regular payment for its premium services?', answer: 'D', explanation: 'GlobeTrotter "requires a monthly subscription" for its services, including the Live Help feature.' },
        { number: 46, text: 'provides helpful information when there is no internet connection?', answer: 'A', explanation: 'Wayfarer\'s "offline maps are incredibly detailed, which is a lifesaver when you\'re in a remote area without a signal".' },
        { number: 47, text: 'includes spoken information about the places you visit?', answer: 'B', explanation: 'CitySnap "includes high-quality audio commentary, making it feel like you have a professional guide in your pocket" — spoken information.' },
        { number: 48, text: 'is specifically designed to help users manage their money?', answer: 'C', explanation: 'BudgetBuddy\'s "strongest feature is the real-time currency converter and a tracker that helps you stay within your daily spending limit" — specifically designed for financial management.' },
        { number: 49, text: 'offers the chance to speak with a human assistant in an emergency?', answer: 'D', explanation: 'GlobeTrotter\'s "Live Help" feature "connects you with a real person if your flight is cancelled or if you run into a problem" — a human assistant.' },
        { number: 50, text: 'might cause your phone to run out of power quickly?', answer: 'B', explanation: 'CitySnap is "quite heavy on battery usage" — the review warns users to "carry a portable charger if you plan to use it all day".' },
        { number: 51, text: 'focuses on places that are not typically visited by tourists?', answer: 'A', explanation: 'Wayfarer suggests "hidden gems—tiny restaurants, quiet parks, and local markets that you won\'t find in any guidebook" — not typical tourist destinations.' },
        { number: 52, text: "helps you find transportation that doesn't cost much?", answer: 'C', explanation: 'BudgetBuddy "links perfectly with other transit apps to help you find the cheapest way to get around".' },
      ],
    },
  ],
};
