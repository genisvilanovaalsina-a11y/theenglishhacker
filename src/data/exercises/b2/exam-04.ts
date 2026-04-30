import type { Exam } from '../types';

export const exam: Exam = {
  id: 'b2-exam-04',
  number: 4,
  level: 'b2',
  parts: [
    // ─── Part 1: Multiple-choice cloze ────────────────────────────────────────
    {
      partNumber: 1,
      type: 'mc-cloze',
      title: 'The Value of Team Sports',
      textParts: [
        'Participating in team sports offers a significant (0) benefit beyond physical fitness. For many young people, joining a local club is the first time they have to ',
        ' towards a common goal with others. This experience helps them develop essential social skills, such as communication and ',
        ' . In a team environment, players learn how to ',
        ' with disappointment and celebrate success modestly. Coaches often ',
        ' the importance of discipline and punctuality, which are qualities that ',
        ' well to the world of work later in life. Furthermore, being part of a team can ',
        " a person's self-confidence, especially when they feel they are ",
        " a valuable contribution to the group's effort. Even if you don't ",
        ' to be a professional athlete, the lessons learned on the pitch stay with you forever.',
      ],
      questions: [
        {
          number: 1,
          options: [
            { value: 'A', label: 'struggle' },
            { value: 'B', label: 'effort' },
            { value: 'C', label: 'strive' },
            { value: 'D', label: 'aim' },
          ],
          answer: 'C',
          explanation: '"Strive towards a goal" is the correct collocation, meaning to work very hard to achieve something. "Struggle" implies difficulty without progress. "Effort" is a noun. "Aim" is usually followed by "to" + infinitive, not "towards".',
        },
        {
          number: 2,
          options: [
            { value: 'A', label: 'membership' },
            { value: 'B', label: 'partnership' },
            { value: 'C', label: 'companionship' },
            { value: 'D', label: 'teamwork' },
          ],
          answer: 'D',
          explanation: '"Teamwork" is the noun that directly relates to the topic of team sports and working together towards a common goal. "Companionship" means friendship, and "partnership" refers to a formal arrangement between two parties.',
        },
        {
          number: 3,
          options: [
            { value: 'A', label: 'cope' },
            { value: 'B', label: 'manage' },
            { value: 'C', label: 'handle' },
            { value: 'D', label: 'face' },
          ],
          answer: 'A',
          explanation: '"Cope with" is an essential phrasal verb meaning to deal successfully with a difficult situation. "Manage" and "handle" can take a direct object but are less idiomatic here. "Face" means to confront, not to deal with emotions.',
        },
        {
          number: 4,
          options: [
            { value: 'A', label: 'insist' },
            { value: 'B', label: 'highlight' },
            { value: 'C', label: 'focus' },
            { value: 'D', label: 'claim' },
          ],
          answer: 'B',
          explanation: '"Highlight the importance" means to draw attention to how important something is. "Insist" requires "that" or "on". "Focus" requires "on". "Claim" implies an assertion of something disputed.',
        },
        {
          number: 5,
          options: [
            { value: 'A', label: 'transport' },
            { value: 'B', label: 'translate' },
            { value: 'C', label: 'transfer' },
            { value: 'D', label: 'transmit' },
          ],
          answer: 'C',
          explanation: '"Transfer well to" is the correct phrase meaning that a skill or quality applies effectively in a different context (e.g., from sport to the workplace). The other verbs do not collocate with "well to" in this figurative sense.',
        },
        {
          number: 6,
          options: [
            { value: 'A', label: 'boost' },
            { value: 'B', label: 'lift' },
            { value: 'C', label: 'raise' },
            { value: 'D', label: 'expand' },
          ],
          answer: 'A',
          explanation: '"Boost confidence" is a fixed collocation meaning to increase someone\'s confidence significantly. "Raise" collocates with "awareness" or "concerns". "Lift" and "expand" do not collocate naturally with "self-confidence".',
        },
        {
          number: 7,
          options: [
            { value: 'A', label: 'doing' },
            { value: 'B', label: 'giving' },
            { value: 'C', label: 'making' },
            { value: 'D', label: 'putting' },
          ],
          answer: 'C',
          explanation: '"Make a contribution" is a fixed collocation. You make (not do, give, or put) a contribution to something.',
        },
        {
          number: 8,
          options: [
            { value: 'A', label: 'intend' },
            { value: 'B', label: 'want' },
            { value: 'C', label: 'expect' },
            { value: 'D', label: 'hope' },
          ],
          answer: 'A',
          explanation: '"Intend to be" means to have the deliberate intention or purpose of becoming something. "Want" and "hope" are less formal and suggest desire rather than purpose. "Expect" implies anticipation rather than personal goal.',
        },
      ],
    },

    // ─── Part 2: Open cloze ───────────────────────────────────────────────────
    {
      partNumber: 2,
      type: 'open-cloze',
      title: 'The Great Barrier Reef',
      textParts: [
        '(0) The Great Barrier Reef, located off the coast of Australia, is the world\'s largest coral reef system. It is so vast ',
        ' it can even be seen from space. Covering an area of roughly 344,400 square kilometres, it is home ',
        ' thousands of different species of fish, molluscs, and birds. However, this natural wonder is currently ',
        ' threat. Climate change has caused sea temperatures to rise, leading to coral bleaching. This happens ',
        ' the coral becomes stressed and loses the algae that give it its vibrant colours. ',
        ' the reef has survived many challenges in the past, scientists are worried that the current rate of change is too fast ',
        ' it to recover naturally. ',
        ' is being done to protect the area, such as reducing water pollution and controlling invasive species, but many believe that ',
        " global action on carbon emissions, the reef's future remains uncertain.",
      ],
      questions: [
        { number: 9, acceptedAnswers: ['that'], explanation: '"So vast that" is a fixed result structure: so + adjective + that. The conjunction "that" introduces the consequence of the reef\'s vast size.' },
        { number: 10, acceptedAnswers: ['to'], explanation: '"Home to" is a fixed phrase meaning that a place is the habitat of certain species. "It is home to thousands of species" is the correct structure.' },
        { number: 11, acceptedAnswers: ['under'], explanation: '"Under threat" is a fixed phrase meaning in danger of being damaged or destroyed. No other preposition forms this idiom.' },
        { number: 12, acceptedAnswers: ['when'], explanation: '"This happens when" is the correct temporal conjunction to explain the conditions under which coral bleaching occurs.' },
        { number: 13, acceptedAnswers: ['Although', 'While', 'Though'], explanation: 'A conjunction of contrast is needed: the reef has survived in the past BUT scientists are now worried. "Although", "While", or "Though" all introduce this concession.' },
        { number: 14, acceptedAnswers: ['for'], explanation: '"Too fast for it to recover" — the structure "too + adjective + for + subject + to-infinitive" requires the preposition "for" before the subject of the infinitive.' },
        { number: 15, acceptedAnswers: ['Something', 'Much'], explanation: '"Something is being done" or "Much is being done" — a subject pronoun or quantifier is needed for this passive construction.' },
        { number: 16, acceptedAnswers: ['without'], explanation: '"Without global action" introduces the negative condition: unless there is global action on emissions, the reef\'s future remains uncertain.' },
      ],
    },

    // ─── Part 3: Word formation ───────────────────────────────────────────────
    {
      partNumber: 3,
      type: 'word-formation',
      title: 'The Power of Laughter',
      textParts: [
        'It is often said that (0) laughter is the best medicine, and modern science seems to agree. When we laugh, our bodies release chemicals that reduce stress and improve our ',
        ' . This leads to an immediate ',
        ' in our mood, making us feel more relaxed and positive. In addition to its physical benefits, laughter is a powerful tool for ',
        ' . It helps to break the ice in ',
        ' situations and builds stronger bonds between people. Even in the workplace, a sense of humour is often seen as a sign of ',
        ' and can help teams work together more ',
        ' . However, it is important to be ',
        ' of the context, as a joke that is ',
        ' for one situation might be offensive in another. Ultimately, finding reasons to smile every day is essential for long-term wellbeing.',
      ],
      questions: [
        { number: 17, givenWord: 'HAPPY', answer: 'happiness', explanation: 'The noun "happiness" is required as the object of the verb "improve". "Improve our happiness" means to increase our sense of wellbeing.' },
        { number: 18, givenWord: 'IMPROVE', answer: 'improvement', explanation: 'The noun "improvement" refers to a positive change. "An immediate improvement in our mood" is the correct structure (noun after the article "an").' },
        { number: 19, givenWord: 'SOCIAL', answer: 'socialising', explanation: 'The gerund "socialising" (the act of socialising) is required after the preposition "for" (a tool for socialising). In British English: "socialising".' },
        { number: 20, givenWord: 'COMFORT', answer: 'uncomfortable', explanation: 'The adjective "uncomfortable" (with the negative prefix "un-") describes situations that are awkward or tense. "Break the ice in uncomfortable situations" is the correct phrase.' },
        { number: 21, givenWord: 'INTELLIGENT', answer: 'intelligence', explanation: 'The noun "intelligence" is required as the object of the phrase "a sign of". "A sense of humour is a sign of intelligence" is the intended meaning.' },
        { number: 22, givenWord: 'EFFECT', answer: 'effectively', explanation: 'The adverb "effectively" modifies the verb phrase "work together". It means in a way that produces the intended result.' },
        { number: 23, givenWord: 'CARE', answer: 'careful', explanation: '"Be careful of" is a fixed structure meaning to pay attention to something. The adjective "careful" is required as a predicative adjective after "be".' },
        { number: 24, givenWord: 'APPROPRIATE', answer: 'inappropriate', explanation: 'The adjective "inappropriate" (with the negative prefix "in-") means not suitable for a particular context. "A joke that is inappropriate for one situation" is the correct meaning.' },
      ],
    },

    // ─── Part 4: Key word transformations ─────────────────────────────────────
    {
      partNumber: 4,
      type: 'key-word-transformation',
      questions: [
        {
          number: 25,
          sentence1: "I'm sure it was a shock for him to hear the news.",
          keyword: 'MUST',
          sentence2Begin: 'Hearing the news ',
          sentence2End: ' a shock for him.',
          answer: 'must have been',
          explanation: '"Must have been" expresses a logical deduction about the past — we are certain something happened. "I\'m sure it was a shock" becomes "it must have been a shock".',
        },
        {
          number: 26,
          sentence1: 'They are going to repair the bridge next month.',
          keyword: 'IS',
          sentence2Begin: 'The bridge ',
          sentence2End: ' repaired next month.',
          answer: 'is going to be',
          explanation: 'Future passive with "going to": the active "they are going to repair" becomes "the bridge is going to be + past participle".',
        },
        {
          number: 27,
          sentence1: '"I didn\'t break the window," said the boy.',
          keyword: 'DENIED',
          sentence2Begin: 'The boy ',
          sentence2End: ' the window.',
          answer: 'denied breaking',
          explanation: '"Deny" is always followed by a gerund (-ing form): "denied breaking". Alternatively, "denied having broken" is also accepted in formal registers.',
        },
        {
          number: 28,
          sentence1: "I haven't seen a better film than this one.",
          keyword: 'BEST',
          sentence2Begin: 'This is ',
          sentence2End: ' I have ever seen.',
          answer: 'the best film',
          explanation: '"Haven\'t seen a better film" is transformed into a superlative: "This is the best film I have ever seen." The superlative replaces the comparative structure.',
        },
        {
          number: 29,
          sentence1: "If you don't hurry, we will miss the train.",
          keyword: 'CASE',
          sentence2Begin: 'We should hurry ',
          sentence2End: ' the train.',
          answer: 'in case we miss',
          explanation: '"In case" + present simple expresses a precaution against a future negative event. "If you don\'t hurry, we will miss" becomes "hurry in case we miss".',
        },
        {
          number: 30,
          sentence1: "It's a pity you didn't tell me the truth.",
          keyword: 'WISH',
          sentence2Begin: 'I ',
          sentence2End: ' me the truth.',
          answer: 'wish you had told',
          explanation: '"Wish + Past Perfect" expresses regret about something that did not happen in the past. "It\'s a pity you didn\'t tell me" becomes "I wish you had told me".',
        },
      ],
    },

    // ─── Part 5: Reading multiple choice ─────────────────────────────────────
    {
      partNumber: 5,
      type: 'reading-mcq',
      articleTitle: 'The Architect of Sound',
      text: `In a small, windowless studio in North London, Marcus Thorne is vigorously snapping stalks of celery. To a casual observer, it might look like he's preparing a particularly aggressive salad. In reality, he is recording the sound of breaking bones for a high-budget horror film. Marcus is a foley artist, one of the unsung heroes of the film industry whose job is to recreate everyday sound effects that are added to movies in post-production to enhance the audio quality.

"People assume that when a film is shot, the microphones pick up everything," Marcus says, wiping celery fragments from his shirt. "But film sets are chaotic places. There are fans whirring, crew members whispering, and the actors' microphones are designed to capture dialogue, not the subtle crunch of footsteps on gravel or the rustle of a silk dress. That's where I come in. We strip away the original location sound and rebuild the world, layer by layer, so it sounds more 'real' than reality itself."

Marcus's studio is a chaotic treasure trove of junk. There are old car doors, various types of shoes, a bathtub filled with dry leaves, and shelves stacked with everything from rusty keys to vintage typewriters. He spends his days watching film clips on a large screen and performing 'live' in sync with the characters' movements. If a character on screen walks across a marble floor, Marcus is there, matching their pace in a pair of high heels on a specific slab of stone he keeps for just such an occasion.

The craft requires an odd mixture of physical timing and a wild, imaginative lateral thinking. "You don't always use the object you see on screen," Marcus explains. "A gunshot in a movie rarely sounds like a real gun; that's often too thin and disappointing. We might use the sound of a heavy door slamming in a stone corridor, slowed down and layered with a whip-crack. If I need the sound of a dragon breathing fire, I might use a blowtorch mixed with the growl of my own dog, pitch-shifted to sound enormous."

Despite the digital revolution, foley remains a stubbornly physical job. While there are vast libraries of digital sounds available at the click of a mouse, Marcus argues that they often lack the 'human' element. "A digital sound is the same every time you trigger it," he says. "But a human footstep has a rhythm, a weight, and an emotion. A character walking away in anger sounds different from someone sneaking out of a room in fear. You can't get that from a computer menu; you have to feel it in your own body."

It is a demanding profession that can take a toll on the body. Marcus often goes home with bruised knuckles or a sore back after a day of 'performing' heavy fights or lugging furniture around. Yet, he wouldn't trade it for anything. "There's a strange magic to it," he smiles. "When I go to the cinema and hear a sound I created, and I see the audience jump in their seats or lean in closer, I know I've done my job. I've made them believe in a world that doesn't exist."`,
      questions: [
        {
          number: 31,
          question: 'What do we learn about foley artists in the first paragraph?',
          options: [
            { value: 'A', label: 'They are often more famous than the actors they work with.' },
            { value: 'B', label: "Their work is essential for making a film's audio more effective." },
            { value: 'C', label: 'They prefer to work in small, uncomfortable environments.' },
            { value: 'D', label: 'They spend a lot of their time preparing food for the film crew.' },
          ],
          answer: 'B',
          explanation: 'The text describes foley artists as "unsung heroes" who recreate sounds "to enhance the audio quality" — their work is essential for the film\'s sound. A is wrong (they are unsung, not famous). D is a literal misreading of the celery detail.',
        },
        {
          number: 32,
          question: "Why does Marcus say that film sets are 'chaotic places'?",
          options: [
            { value: 'A', label: 'Because actors often forget their lines and cause delays.' },
            { value: 'B', label: 'Because there is too much background noise to record everything clearly.' },
            { value: 'C', label: 'Because the equipment used is often old and unreliable.' },
            { value: 'D', label: 'Because the directors change their minds about the sound frequently.' },
          ],
          answer: 'B',
          explanation: 'Marcus mentions fans whirring, crew members whispering, and microphones that only capture dialogue — too much background noise to record subtle sounds like footsteps clearly. C and D are not mentioned.',
        },
        {
          number: 33,
          question: "What is unusual about Marcus's studio?",
          options: [
            { value: 'A', label: 'It is filled with expensive, high-tech recording equipment.' },
            { value: 'B', label: 'It contains a large collection of seemingly random objects.' },
            { value: 'C', label: 'It is designed to look like a marble palace.' },
            { value: 'D', label: 'It has no screen for viewing the films he is working on.' },
          ],
          answer: 'B',
          explanation: 'The studio is described as "a chaotic treasure trove of junk" with car doors, bathtubs, rusty keys, and vintage typewriters — a large collection of seemingly random everyday objects. A is the opposite of what is described.',
        },
        {
          number: 34,
          question: 'When creating a specific sound, Marcus says that he...',
          options: [
            { value: 'A', label: 'always uses the exact object shown on the screen.' },
            { value: 'B', label: 'prefers to use real weapons whenever possible.' },
            { value: 'C', label: 'often combines different sounds to get the right effect.' },
            { value: 'D', label: 'relies on his dog to provide most of the animal noises.' },
          ],
          answer: 'C',
          explanation: 'Marcus explains how he combines a slamming door with a whip-crack for a gunshot, and a blowtorch with a dog\'s growl for a dragon. He explicitly says "you don\'t always use the object you see on screen" (A is wrong).',
        },
        {
          number: 35,
          question: "What is Marcus's opinion of digital sound libraries?",
          options: [
            { value: 'A', label: 'They are much more efficient than traditional foley methods.' },
            { value: 'B', label: 'They are too expensive for small film studios to use.' },
            { value: 'C', label: 'They fail to capture the subtle variations of human movement.' },
            { value: 'D', label: 'They are only useful for creating the sounds of futuristic technology.' },
          ],
          answer: 'C',
          explanation: 'Marcus argues that digital sounds lack the "human element" — the rhythm, weight, and emotion of a real human footstep cannot be captured digitally. A is explicitly contradicted by his defence of physical foley work.',
        },
        {
          number: 36,
          question: 'In the final paragraph, how does Marcus feel about his work?',
          options: [
            { value: 'A', label: 'He feels underpaid for the physical effort he puts in.' },
            { value: 'B', label: "He is proud of his ability to influence the audience's emotions." },
            { value: 'C', label: 'He is worried that the job is becoming too dangerous.' },
            { value: 'D', label: 'He finds it difficult to enjoy movies as a normal viewer anymore.' },
          ],
          answer: 'B',
          explanation: 'Marcus describes it as "a strange magic" when audiences react physically to sounds he created — he is proud of making them "believe in a world that doesn\'t exist". A is wrong; he says he "wouldn\'t trade it for anything" despite the physical toll.',
        },
      ],
    },

    // ─── Part 6: Gapped text ──────────────────────────────────────────────────
    {
      partNumber: 6,
      type: 'gapped-text',
      articleTitle: 'The Tower That Paris Hated',
      textParts: [
        'Today, it is impossible to imagine the Parisian skyline without the iconic silhouette of the Eiffel Tower. It is the most-visited paid monument in the world, a symbol of romance and architectural brilliance. ',
        ". When it was first proposed for the 1889 World's Fair, it was met with fierce hostility from the city's artistic and intellectual elite.\n\nThe project was the brainchild of Gustave Eiffel, an engineer who had already made a name for himself with his work on the Statue of Liberty's internal frame. His design for a 300-metre iron lattice tower was meant to showcase France's industrial power. ",
        ". A group of prominent figures, including the writer Guy de Maupassant, signed a manifesto calling it a 'gigantic black factory chimney' that would dishonour the beauty of Paris.\n\nConstruction began in 1887 and took just over two years to complete. Despite the protests, the tower was finished on time and within budget. ",
        ". During the World's Fair, nearly two million people climbed the tower, marveling at the views and the modern elevators. For a brief moment, the critics were silenced by the sheer scale of its success.\n\nHowever, the tower was only ever intended to be a temporary structure. The permit for the land was granted for just twenty years, meaning it was scheduled to be demolished in 1909. ",
        ". As the deadline approached, Gustave Eiffel desperately searched for a way to make his creation indispensable to the city.\n\nThe solution came from an unlikely source: the birth of radio technology. Eiffel realised that the tower's immense height made it the perfect platform for transmitting wireless signals. ",
        ". During the First World War, the tower played a crucial role in intercepting enemy messages, which helped the French military coordinate their defence. The government quickly realised that the tower was far more than just an ornament.\n\nBy the time the demolition date arrived, the tower had become a permanent part of the city's infrastructure. ",
        '. Over the decades, it has been repainted eighteen times and has survived two World Wars, eventually becoming the beloved landmark we know today. It stands as a reminder that even the most controversial ideas can eventually become the most cherished traditions.',
      ],
      sentences: [
        { label: 'A', text: 'He allowed the military to install antennas at the very top of the structure.' },
        { label: 'B', text: 'This initial popularity did not mean that the long-term future of the tower was secure.' },
        { label: 'C', text: 'However, many people at the time found the industrial look of the tower quite ugly.' },
        { label: 'D', text: 'It was this practical utility that ultimately saved the tower from being torn down.' },
        { label: 'E', text: 'The general public, however, was far more enthusiastic about the structure from the start.' },
        { label: 'F', text: 'Consequently, Gustave Eiffel decided to sell the tower to a private company.' },
        { label: 'G', text: 'However, this global status was certainly not guaranteed when the tower was built.' },
      ],
      questions: [
        { number: 37, answer: 'G', explanation: '"However, this global status was certainly not guaranteed when the tower was built" directly contrasts the positive description of the tower as a beloved symbol with the hostile reception it received when proposed.' },
        { number: 38, answer: 'C', explanation: '"However, many people at the time found the industrial look of the tower quite ugly" connects with the manifesto signed by prominent figures — the sentence explains the reason for their protest.' },
        { number: 39, answer: 'E', explanation: '"The general public, however, was far more enthusiastic about the structure from the start" contrasts the negative elite opinion with the public\'s positive reaction, introducing the two million visitors at the World\'s Fair.' },
        { number: 40, answer: 'B', explanation: '"This initial popularity did not mean that the long-term future of the tower was secure" links the success of the World\'s Fair to the ongoing threat of demolition that follows.' },
        { number: 41, answer: 'A', explanation: '"He allowed the military to install antennas at the very top of the structure" explains the concrete action Eiffel took — using the tower as a radio transmitter — that made it indispensable to the military.' },
        { number: 42, answer: 'D', explanation: '"It was this practical utility that ultimately saved the tower from being torn down" concludes that it was the tower\'s military and radio value, not its beauty, that prevented demolition.' },
      ],
    },

    // ─── Part 7: Multiple matching ────────────────────────────────────────────
    {
      partNumber: 7,
      type: 'multiple-matching',
      intro: 'You are going to read an article about four people who work in unusual environments.',
      texts: [
        {
          label: 'A',
          name: 'Julian – The Lighthouse Keeper',
          text: "I've always been someone who values solitude, so when the opportunity to manage a remote lighthouse on the Scottish coast came up, I jumped at it. Most of the systems are automated now, but I'm here to ensure everything runs smoothly and to perform maintenance that machines just can't do. The physical challenge is real—climbing those stairs ten times a day keeps you fit! The weather can be brutal; when a storm hits, the whole structure seems to vibrate. You have to be incredibly self-sufficient out here; if something breaks or if you run out of a specific food item, there's no supermarket around the corner. But the view of the Atlantic at sunrise? That's something no city office can match.",
        },
        {
          label: 'B',
          name: 'Sarah – The Antarctica Researcher',
          text: "I spend six months of the year at a research station near the South Pole. People often ask if I get bored, but between collecting ice samples and analysing data, the days fly by. The most difficult part isn't the cold—we have amazing gear for that—it's the psychological aspect of isolation. You're living with the same twelve people in a confined space for months. You definitely have to give up certain modern comforts, like long hot showers or fresh fruit. However, I've found that my mental health has actually improved. Without the constant noise of social media and city life, I've learned to appreciate the absolute silence of the frozen wilderness.",
        },
        {
          label: 'C',
          name: 'Elena – The Digital Nomad in a Van',
          text: "Two years ago, I traded my London apartment for a converted delivery van. I work as a freelance graphic designer, and as long as I have a decent satellite internet connection, my 'office' can be a beach in Portugal or a mountain range in Italy. The best part is the lack of a daily commute; I wake up, make coffee, and I'm already at my desk. I love the constant variety of scenery—it keeps my creativity flowing. Of course, it's not all sunshine; sometimes the van breaks down in the middle of nowhere, or the weather makes it impossible to use my solar panels, which means I can't charge my laptop. You have to be very adaptable.",
        },
        {
          label: 'D',
          name: 'Tom – The Treehouse Architect',
          text: "I don't just build treehouses; I work in one too. My studio is suspended six metres above the forest floor. Working up here gives me a unique perspective on nature; I've watched families of owls grow up right outside my window. It's incredibly peaceful, though the climb up the wooden ladder every morning can be a bit of a wake-up call, especially in the rain! I initially worried the swaying of the trees during high winds would be distracting, but I've actually grown to find it quite soothing. It's a place where I can truly focus without the interruptions of a traditional office.",
        },
      ],
      questions: [
        { number: 43, text: 'mentions the need to be self-sufficient?', answer: 'A', explanation: 'Julian explicitly says "You have to be incredibly self-sufficient out here" — there is no supermarket nearby if something runs out.' },
        { number: 44, text: 'appreciates the lack of a daily commute?', answer: 'C', explanation: 'Elena says "The best part is the lack of a daily commute" — she wakes up and is immediately at her desk.' },
        { number: 45, text: 'sometimes feels the psychological strain of being cut off from others?', answer: 'B', explanation: 'Sarah describes "the psychological aspect of isolation" as the most difficult part of living with the same twelve people in a confined space for months.' },
        { number: 46, text: 'enjoys the variety of scenery their workplace offers?', answer: 'C', explanation: 'Elena says "I love the constant variety of scenery" and explains it keeps her creativity flowing.' },
        { number: 47, text: "notes that their workplace has had a positive effect on their mental wellbeing?", answer: 'B', explanation: 'Sarah says "my mental health has actually improved" without the noise of social media and city life.' },
        { number: 48, text: 'mentions a specific physical challenge of reaching or being in their workplace?', answer: 'A', explanation: 'Julian mentions "climbing those stairs ten times a day" as a specific physical challenge of his lighthouse job.' },
        { number: 49, text: 'was surprised by how much they enjoyed the silence?', answer: 'B', explanation: 'Sarah says she "learned to appreciate the absolute silence of the frozen wilderness" — implying this appreciation was unexpected.' },
        { number: 50, text: 'admits that weather conditions can sometimes interfere with their ability to work?', answer: 'C', explanation: 'Elena admits that bad weather "makes it impossible to use my solar panels, which means I can\'t charge my laptop" — a direct work disruption caused by weather.' },
        { number: 51, text: 'mentions that they had to do without certain everyday luxuries?', answer: 'B', explanation: 'Sarah mentions having to "give up certain modern comforts, like long hot showers or fresh fruit" — everyday luxuries not available at the South Pole.' },
        { number: 52, text: 'appreciates the special view of wildlife they get from their desk?', answer: 'D', explanation: 'Tom says "I\'ve watched families of owls grow up right outside my window" — a unique wildlife view from his treehouse studio.' },
      ],
    },
  ],
};
