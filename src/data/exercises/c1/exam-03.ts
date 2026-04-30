import type { Exam } from '../types';

export const exam: Exam = {
  id: 'c1-exam-03',
  number: 3,
  level: 'c1',
  parts: [
    // ─── Part 1: Multiple-choice cloze ────────────────────────────────────────
    {
      partNumber: 1,
      type: 'mc-cloze',
      title: 'The Art of Resilience',
      textParts: [
        "The secret of success often (0) lies not in talent alone, but in resilience—the ability to bounce back from adversity. In today's high-pressure world, psychologists are (1) ",
        ' more attention to how individuals handle setbacks. While some people seem to be (2) ',
        ' with an innate ability to stay calm under pressure, research suggests that resilience is a quality that can be (3) ',
        ' through practice and mindset shifts.\nA key factor in developing resilience is how one (4) ',
        ' failure. Those who view a mistake as a learning opportunity, rather than a definitive (5) ',
        ', are far more likely to persist. Furthermore, having a strong support network is (6) ',
        ' ; knowing that you have people to (7) ',
        ' on during difficult times can make a significant difference. Ultimately, resilience is about maintaining a sense of perspective, even when things are (8) ',
        ' odds with your expectations.',
      ],
      questions: [
        {
          number: 1,
          options: [
            { value: 'A', label: 'paying' },
            { value: 'B', label: 'devoting' },
            { value: 'C', label: 'lending' },
            { value: 'D', label: 'directing' },
          ],
          answer: 'A',
          explanation: 'Fixed collocation: "to pay attention to something."',
        },
        {
          number: 2,
          options: [
            { value: 'A', label: 'gifted' },
            { value: 'B', label: 'presented' },
            { value: 'C', label: 'endowed' },
            { value: 'D', label: 'granted' },
          ],
          answer: 'C',
          explanation: '"Endowed with" is a C1-level verb meaning naturally gifted with a quality.',
        },
        {
          number: 3,
          options: [
            { value: 'A', label: 'cultivated' },
            { value: 'B', label: 'bred' },
            { value: 'C', label: 'harvested' },
            { value: 'D', label: 'gathered' },
          ],
          answer: 'A',
          explanation: 'Used when a skill or quality is developed through effort over time.',
        },
        {
          number: 4,
          options: [
            { value: 'A', label: 'interprets' },
            { value: 'B', label: 'translates' },
            { value: 'C', label: 'clarifies' },
            { value: 'D', label: 'explains' },
          ],
          answer: 'A',
          explanation: 'Refers to the way a person mentally processes or understands an event.',
        },
        {
          number: 5,
          options: [
            { value: 'A', label: 'downfall' },
            { value: 'B', label: 'blow' },
            { value: 'C', label: 'collapse' },
            { value: 'D', label: 'defeat' },
          ],
          answer: 'D',
          explanation: 'In this context, it contrasts with "opportunity," referring to failure.',
        },
        {
          number: 6,
          options: [
            { value: 'A', label: 'quintessential' },
            { value: 'B', label: 'paramount' },
            { value: 'C', label: 'fundamental' },
            { value: 'D', label: 'sovereign' },
          ],
          answer: 'B',
          explanation: 'C1 synonym for "of the highest importance."',
        },
        {
          number: 7,
          options: [
            { value: 'A', label: 'bank' },
            { value: 'B', label: 'trust' },
            { value: 'C', label: 'lean' },
            { value: 'D', label: 'rest' },
          ],
          answer: 'C',
          explanation: '"Lean on someone" means to rely on them for emotional support.',
        },
        {
          number: 8,
          options: [
            { value: 'A', label: 'at' },
            { value: 'B', label: 'in' },
            { value: 'C', label: 'with' },
            { value: 'D', label: 'by' },
          ],
          answer: 'A',
          explanation: 'Fixed prepositional phrase: "to be at odds with" (to disagree or conflict with).',
        },
      ],
    },

    // ─── Part 2: Open cloze ───────────────────────────────────────────────────
    {
      partNumber: 2,
      type: 'open-cloze',
      title: 'The Evolution of Language',
      textParts: [
        'Language is (0) such a fundamental part of human identity that we often take its complexity for granted. (9) ',
        ' is only when we attempt to learn a second language as adults that we realize just how intricate the rules of grammar and syntax actually are. Scientists have long debated (10) ',
        ' language is a biological instinct or a cultural invention.\nAccording to Noam Chomsky, humans are born with a \'universal grammar\'—a set of structural rules hardwired (11) ',
        ' our brains. This would explain (12) ',
        ' children are able to acquire language so rapidly without formal instruction. On the (13) ',
        ' hand, some linguists argue that language is a tool (14) ',
        ' has evolved over thousands of years to meet the social needs of early humans. (15) ',
        ' the theory you subscribe to, it is undeniable that language (16) ',
        ' allowed our species to share complex ideas and cooperate on a scale that is unique in the animal kingdom.',
      ],
      questions: [
        {
          number: 9,
          acceptedAnswers: ['It'],
          explanation: 'Part of the cleft sentence structure "It is only when... that...".',
        },
        {
          number: 10,
          acceptedAnswers: ['whether'],
          explanation: 'Used to introduce two alternatives (instinct or invention).',
        },
        {
          number: 11,
          acceptedAnswers: ['into'],
          explanation: 'Fixed preposition with "hardwired into the brain."',
        },
        {
          number: 12,
          acceptedAnswers: ['why'],
          explanation: "Relative adverb introducing the reason for children's success.",
        },
        {
          number: 13,
          acceptedAnswers: ['other'],
          explanation: 'Part of the contrastive marker "On the other hand."',
        },
        {
          number: 14,
          acceptedAnswers: ['that', 'which'],
          explanation: 'Relative pronoun referring to "tool."',
        },
        {
          number: 15,
          acceptedAnswers: ['Whichever'],
          explanation: "Determiner meaning \"it doesn't matter which theory.\"",
        },
        {
          number: 16,
          acceptedAnswers: ['has'],
          explanation: 'Auxiliary verb for the present perfect "has allowed."',
        },
      ],
    },

    // ─── Part 3: Word formation ───────────────────────────────────────────────
    {
      partNumber: 3,
      type: 'word-formation',
      title: 'The Impact of Artificial Light',
      textParts: [
        'In the modern world, the (0) unprecedented proliferation of artificial light has fundamentally altered our relationship with the night. While streetlights and neon signs have made our cities safer and more (17) ',
        ', they have also led to a phenomenon known as light pollution. This (18) ',
        ' of the night sky has significant ecological and biological consequences.\nMany nocturnal animals find the presence of artificial light (19) ',
        ', as it disrupts their hunting and migration patterns. Furthermore, for humans, constant exposure to bright light at night can lead to (20) ',
        ' and other health issues. There is also a (21) ',
        ' loss of our connection to the stars. In many urban areas, the Milky Way is no longer (22) ',
        ' to the naked eye. To combat this, many communities are now (23) ',
        " 'dark sky' initiatives, aiming to reduce (24) ",
        ' lighting and preserve the natural beauty of the night.',
      ],
      questions: [
        {
          number: 17,
          givenWord: 'VIBRATE',
          answer: 'vibrant',
          explanation: 'Adjective meaning full of life and energy.',
        },
        {
          number: 18,
          givenWord: 'BRIGHT',
          answer: 'brightening',
          explanation: 'Noun/Gerund referring to the process of making the sky light.',
        },
        {
          number: 19,
          givenWord: 'ORIENTATE',
          answer: 'disorientating',
          explanation: 'Adjective describing something that makes you lose your sense of direction.',
        },
        {
          number: 20,
          givenWord: 'SLEEP',
          answer: 'sleeplessness',
          explanation: 'Noun derived from "sleep" referring to the condition of being unable to sleep.',
        },
        {
          number: 21,
          givenWord: 'PSYCHOLOGY',
          answer: 'psychological',
          explanation: 'Adjective form of "psychology."',
        },
        {
          number: 22,
          givenWord: 'VISION',
          answer: 'visible',
          explanation: 'Adjective meaning able to be seen.',
        },
        {
          number: 23,
          givenWord: 'FORCE',
          answer: 'enforcing',
          explanation: 'The act of making sure a law or initiative is followed.',
        },
        {
          number: 24,
          givenWord: 'NECESSARY',
          answer: 'unnecessary',
          explanation: 'Adjective with a negative prefix meaning "not needed."',
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
          sentence1: 'I am absolutely certain that the manager will resign if the project fails.',
          keyword: 'BOUND',
          sentence2Begin: 'The manager ',
          sentence2End: ' if the project fails.',
          answer: 'is bound to resign',
          explanation: '"Bound to" expresses strong certainty about a future event.',
        },
        {
          number: 26,
          sentence1: 'It was only when I saw the photos that I realized how much the city had changed.',
          keyword: 'DID',
          sentence2Begin: 'Not until I saw the photos ',
          sentence2End: ' much the city had changed.',
          answer: 'did I realize how',
          explanation: 'Negative inversion (Not until... did + subject + verb).',
        },
        {
          number: 27,
          sentence1: 'People say that the ancient ruins were built by a lost civilization.',
          keyword: 'SAID',
          sentence2Begin: 'The ancient ruins ',
          sentence2End: ' by a lost civilization.',
          answer: 'are said to have been built',
          explanation: 'Passive reporting structure (Subject + are said + to have been + past participle).',
        },
        {
          number: 28,
          sentence1: "\"I'm sorry I didn't help you with the decorations,\" said Paul to his wife.",
          keyword: 'APOLOGISED',
          sentence2Begin: 'Paul ',
          sentence2End: ' her with the decorations.',
          answer: 'apologised for not helping',
          explanation: '"Apologise for [negative gerund]."',
        },
        {
          number: 29,
          sentence1: "If you hadn't intervened, the situation would have become much worse.",
          keyword: 'BUT',
          sentence2Begin: 'The situation would have become much worse ',
          sentence2End: ' intervention.',
          answer: 'but for your',
          explanation: '"But for" is a formal conditional meaning "if it hadn\'t been for."',
        },
        {
          number: 30,
          sentence1: "It's very unlikely that the flight will be on time given the current weather.",
          keyword: 'CHANCE',
          sentence2Begin: 'There is ',
          sentence2End: ' the flight being on time given the current weather.',
          answer: 'little/no chance of',
          explanation: 'Expression used to indicate very low probability.',
        },
      ],
    },

    // ─── Part 5: Reading multiple choice ──────────────────────────────────────
    {
      partNumber: 5,
      type: 'reading-mcq',
      articleTitle: 'The Buildings That Shape Us',
      text: "We tend to think of architecture as a backdrop to our lives—something we pass through on our way to somewhere else. However, a growing body of research in the field of 'neuro-architecture' suggests that the structures we inhabit do far more than just provide shelter. They actively sculpt our moods, our cognitive performance, and even our social interactions. For decades, urban planning was governed by a cold, functionalist logic that prioritized efficiency and cost-effectiveness. But as we move further into the 21st century, we are beginning to realize that the 'grey' philosophy of the mid-20th century may have had a devastating impact on our collective mental wellbeing.\n\nThe problem often begins with the 'visual boredom' of the modern city. Human beings are biologically wired to seek out complexity and patterns. In nature, we find fractal geometry—the repeating patterns found in trees, clouds, and coastlines. When we are exposed to these shapes, our brains enter a state of 'effortless attention,' which reduces stress. By contrast, the flat, monochromatic glass and concrete surfaces that dominate many modern business districts provide no such relief. Studies using skin-conductance sensors have shown that people walking past dull, featureless buildings experience an increase in heart rate and cortisol levels. It is not just an aesthetic preference; it is a physiological stress response.\n\nFurthermore, the internal layout of buildings can fundamentally alter how we relate to one another. The infamous 'corridor-and-cubicle' design of the late 20th-century office was intended to maximize focus and minimize distraction. In reality, it fostered a sense of isolation and hindered the spontaneous collaboration that is vital for innovation. Conversely, modern 'agora' style offices, with wide-open communal spaces and clear lines of sight, are designed to trigger our ancestral preference for 'prospect and refuge'—the ability to see a wide area while feeling protected from behind. However, even these can fail if the balance is wrong; an office that is too open can leave employees feeling constantly exposed, leading to 'social inhibition.'\n\nThe impact of architecture is perhaps most visible in healthcare. For years, hospitals were designed to be sterile, windowless environments, largely for the convenience of medical staff and equipment maintenance. Yet, research has consistently shown that patients in rooms with views of nature recover significantly faster and require less pain medication than those staring at a brick wall. This phenomenon, known as 'biophilia,' suggests that our connection to the natural world is not a luxury, but a biological necessity. Even a small change, such as the introduction of natural light or the use of organic materials like wood, can have a measurable impact on patient outcomes.\n\nCritics of neuro-architecture often argue that the data is too subjective and that 'good' design is a matter of personal taste. They fear that a data-driven approach to architecture will lead to a new kind of sterile uniformity, where every building is designed by an algorithm to maximize happiness. However, proponents argue that we are not looking for a single 'perfect' style, but rather a set of guiding principles that respect human biology. It is about moving away from the idea of a building as a 'machine for living' and toward a more empathetic, human-centric approach.\n\nUltimately, we must recognize that we do not just live in cities; we are part of them. The environments we build today will determine the mental health of generations to come. If we continue to prioritize the bottom line over the human experience, we risk creating a world that is functionally perfect but emotionally uninhabitable. Architecture is not just about the strength of the steel or the quality of the glass; it is about the silent conversation between the walls and the people within them.",
      questions: [
        {
          number: 31,
          question: 'In the first paragraph, the writer suggests that mid-20th century urban planning...',
          options: [
            { value: 'A', label: 'was more effective at promoting social interaction than modern designs.' },
            { value: 'B', label: 'failed to account for the psychological needs of city residents.' },
            { value: 'C', label: 'was primarily focused on aesthetic beauty rather than functionality.' },
            { value: 'D', label: 'is currently undergoing a revival among young architects.' },
          ],
          answer: 'B',
          explanation: 'The text says the "cold, functionalist logic... may have had a devastating impact on our collective mental wellbeing."',
        },
        {
          number: 32,
          question: "What point is made about 'visual boredom' in the second paragraph?",
          options: [
            { value: 'A', label: 'It is a necessary trade-off for the convenience of city life.' },
            { value: 'B', label: 'It can lead to measurable physical signs of stress in humans.' },
            { value: 'C', label: 'It is caused by the over-complication of modern architectural patterns.' },
            { value: 'D', label: 'It only affects people who have grown up in rural environments.' },
          ],
          answer: 'B',
          explanation: 'It mentions studies showing people experience an increase in heart rate and cortisol (physical stress).',
        },
        {
          number: 33,
          question: "The writer uses the term 'social inhibition' in the third paragraph to describe...",
          options: [
            { value: 'A', label: 'the reluctance of employees to work in traditional cubicles.' },
            { value: 'B', label: 'the tendency for people to become more productive when they are alone.' },
            { value: 'C', label: 'the discomfort caused by a lack of privacy in open-plan offices.' },
            { value: 'D', label: 'the way in which modern corridors discourage spontaneous meetings.' },
          ],
          answer: 'C',
          explanation: 'Refers to how too much openness leaves employees feeling "exposed," inhibiting social interaction.',
        },
        {
          number: 34,
          question: "What is the writer's main point about healthcare design in the fourth paragraph?",
          options: [
            { value: 'A', label: 'Modern hospitals are too focused on the convenience of the medical staff.' },
            { value: 'B', label: 'Sterile environments are essential for preventing the spread of disease.' },
            { value: 'C', label: 'Physical surroundings can play a direct role in the healing process.' },
            { value: 'D', label: 'Patients prefer high-tech equipment to natural views.' },
          ],
          answer: 'C',
          explanation: 'Discusses "biophilia" and how natural views have a "measurable impact on patient outcomes."',
        },
        {
          number: 35,
          question: "The writer's response to critics of neuro-architecture is that...",
          options: [
            { value: 'A', label: 'their fears about algorithmic design are completely justified.' },
            { value: 'B', label: 'subjective taste is the only thing that should matter in design.' },
            { value: 'C', label: 'the goal is to create a set of human-centric guidelines, not a single style.' },
            { value: 'D', label: 'data is more important than the artistic vision of the architect.' },
          ],
          answer: 'C',
          explanation: 'The author states proponents are not looking for a "single perfect style" but "guiding principles."',
        },
        {
          number: 36,
          question: 'In the final paragraph, the writer concludes that architecture should...',
          options: [
            { value: 'A', label: 'focus more on the durability of building materials.' },
            { value: 'B', label: 'prioritize emotional inhabitability over financial profit.' },
            { value: 'C', label: 'be left entirely to the discretion of city councils.' },
            { value: 'D', label: 'aim to make every city in the world look the same.' },
          ],
          answer: 'B',
          explanation: 'Concludes we should stop prioritizing "the bottom line" (profit) over the "human experience."',
        },
      ],
    },

    // ─── Part 6: Cross-text multiple matching ─────────────────────────────────
    {
      partNumber: 6,
      type: 'cross-text',
      articleTitle: 'Remote Work: The Productivity Debate',
      intro: 'You are going to read four extracts from articles in which experts discuss the impact of remote work on professional productivity. For questions 37 – 40, choose from the experts A – D. The experts may be chosen more than once.',
      texts: [
        {
          label: 'A',
          name: 'Dr. Sarah Bennett',
          text: "The widespread shift to remote work has been a double-edged sword. While many employees report a better work-life balance, the long-term impact on 'deep' productivity remains questionable. The lack of spontaneous, face-to-face interaction leads to a 'silo effect,' where departments become increasingly disconnected. Innovation is rarely the result of a scheduled Zoom call; it happens in the 'in-between' moments—the coffee machine chats and the quick desk-side questions. Without these, the intellectual capital of a company slowly erodes, replaced by a rigid, task-oriented output that lacks creative spark.",
        },
        {
          label: 'B',
          name: 'Marcus Vane',
          text: "Contrary to the fears of traditional managers, remote work has actually unlocked a new level of efficiency. By removing the daily commute and the constant interruptions of the open-plan office, workers are able to enter 'flow states' more easily. Data from several Fortune 500 companies suggests that project completion times have decreased significantly since 2020. The key is autonomy; when you trust people to manage their own time, they generally work harder and more effectively. The 'in-person requirement' is often less about productivity and more about a managerial desire for control.",
        },
        {
          label: 'C',
          name: 'Prof. Julian Hart',
          text: "We must distinguish between 'output' and 'innovation.' Remote work is excellent for the former; if you have a list of clear tasks, you will likely get them done faster at home. However, the latter relies on social friction. Research into organizational behavior suggests that complex problem-solving requires the non-verbal cues and high-bandwidth communication that only physical presence provides. Furthermore, the blurring of boundaries between home and office is leading to 'digital burnout,' where workers feel they can never truly switch off. This long-term exhaustion will eventually cancel out any short-term gains in efficiency.",
        },
        {
          label: 'D',
          name: 'Elena Rodriguez',
          text: "The debate over remote work often misses the point about diversity and inclusion. For many workers, particularly those with caregiving responsibilities or disabilities, remote work is not a 'perk' but a necessity for their professional participation. When these individuals are given the flexibility to work from home, their loyalty and productivity levels soar. While it is true that team cohesion requires effort, this can be achieved through intentional, high-quality in-person retreats rather than daily office attendance. The future of work is not 'all or nothing'; it is a hybrid model that respects individual needs while maintaining strategic connection.",
        },
      ],
      questions: [
        {
          number: 37,
          text: "shares Bennett's view regarding the negative impact of remote work on creative innovation?",
          answer: 'C',
          explanation: 'Both Bennett (A) and Hart (C) argue that remote work harms innovation/complex problem-solving.',
        },
        {
          number: 38,
          text: 'has a different opinion from the others regarding the primary motivation behind requiring office attendance?',
          answer: 'B',
          explanation: 'Vane (B) suggests the requirement to be in-person is about "managerial desire for control," while others focus on innovation or team cohesion.',
        },
        {
          number: 39,
          text: 'expresses a similar concern to Hart about the potential for remote work to cause long-term employee fatigue?',
          answer: 'C',
          explanation: 'Hart (C) explicitly mentions "digital burnout," which aligns with the "long-term exhaustion" mentioned by both.',
        },
        {
          number: 40,
          text: 'takes a more positive view than Bennett on the possibility of maintaining team connection without daily office presence?',
          answer: 'D',
          explanation: 'Rodriguez (D) argues cohesion can be maintained through "intentional retreats," whereas Bennett (A) is more skeptical.',
        },
      ],
    },

    // ─── Part 7: Gapped text ──────────────────────────────────────────────────
    {
      partNumber: 7,
      type: 'gapped-text',
      articleTitle: 'The Last of the Clockmakers',
      textParts: [
        'In a small workshop tucked away in the Jura Mountains of Switzerland, Jean-Pierre sits hunched over a workbench that has been in his family for three generations. The air is thick with the smell of machine oil and the rhythmic, polyphonic ticking of dozens of timepieces. Jean-Pierre is one of the few remaining practitioners of high-mechanical watchmaking, an art form that many predicted would be wiped out by the digital revolution.',
        "This resilience is not merely a matter of nostalgia. While a smartphone can tell the time with atomic precision, it lacks what Jean-Pierre calls the 'soul' of a mechanical movement. A watch powered by a mainspring and regulated by a balance wheel is a living thing, a miniature universe of gears and levers that operates independently of any external power source.",
        'The process of creating a single bespoke watch can take over a year. It begins with the design of the movement, followed by the painstaking fabrication of hundreds of tiny components. Some of these parts are so small they can only be seen through a microscope, yet each must be polished to a mirror finish. This is not for aesthetic reasons alone; friction is the enemy of accuracy, and a perfectly smooth surface ensures the longevity of the mechanism.',
        "However, the industry faces a significant hurdle: the 'skills gap.' For decades, young people were discouraged from entering the trades, steered instead toward careers in technology and finance. Consequently, the average age of a master watchmaker is now in the late fifties. If the knowledge of these veterans is not passed down soon, centuries of technical expertise could vanish.",
        'To address this, several high-end brands have established their own academies. These schools offer intensive four-year programmes where students learn everything from basic metallurgy to the complex mathematics of horology. The competition for a place is fierce, drawing applicants from across the globe who are eager to escape the ephemeral nature of the digital world.',
        "What these students find is a career that offers a rare form of psychological satisfaction. In an age of 'planned obsolescence,' where most consumer goods are designed to be thrown away within a few years, a mechanical watch is built to last centuries. There is a profound sense of purpose in creating something that will be handed down as a family heirloom.",
        'As the sun sets over the mountains, Jean-Pierre carefully places a tiny screw into a gold plate. He knows that his work will likely still be ticking long after the latest smartphone has become a piece of e-waste. It is a quiet victory for the physical over the virtual, a reminder that some things are worth doing the slow way.',
      ],
      sentences: [
        {
          label: 'A',
          text: "This dedication to precision is what separates a mass-produced item from a masterpiece. It requires a level of patience and hand-eye coordination that can only be acquired through thousands of hours of practice.",
        },
        {
          label: 'B',
          text: 'The transition from apprentice to master is a long one, requiring not just technical ability but also a deep understanding of the history of the craft. It is a commitment that few are willing to make in our fast-paced society.',
        },
        {
          label: 'C',
          text: "Despite this grim outlook, there has been a surprising surge of interest from the younger generation. There is a growing movement of 'new traditionalists' who value the tactile and the permanent over the digital and the disposable.",
        },
        {
          label: 'D',
          text: "In the 1970s, the arrival of cheap, battery-powered quartz watches led to the 'Quartz Crisis,' which saw thousands of traditional watchmakers go out of business. It seemed that the mechanical watch was destined for the museum.",
        },
        {
          label: 'E',
          text: 'This newfound popularity has also been bolstered by a booming secondary market. Collectors are now willing to pay millions for rare, vintage mechanical pieces, viewing them as both art and a stable investment.',
        },
        {
          label: 'F',
          text: 'However, the revival of the industry was led by a handful of visionaries who realized that the more digital our lives became, the more we would crave the mechanical. They repositioned the mechanical watch not as a tool, but as a luxury status symbol.',
        },
        {
          label: 'G',
          text: 'It is this connection to the past and the future that provides the ultimate motivation. The watchmaker acts as a bridge between the artisan who lived three hundred years ago and the person who will wear the watch three hundred years from now.',
        },
      ],
      questions: [
        {
          number: 41,
          answer: 'D',
          explanation: '"Quartz Crisis" and the decline of the industry in the 70s follow the intro about predictions of the craft\'s death.',
        },
        {
          number: 42,
          answer: 'F',
          explanation: '"However, the revival..." explains how the industry came back as a luxury status symbol.',
        },
        {
          number: 43,
          answer: 'A',
          explanation: 'Explains that precision is what separates a masterpiece and follows the paragraph about microscope work.',
        },
        {
          number: 44,
          answer: 'C',
          explanation: '"Despite this grim outlook..." (regarding the skills gap) introduces the "new traditionalists."',
        },
        {
          number: 45,
          answer: 'B',
          explanation: 'Connects the fierce competition for places in academies with the long commitment required.',
        },
        {
          number: 46,
          answer: 'G',
          explanation: 'Summarizes the "bridge between the past and future" before the concluding scene at sunset.',
        },
      ],
    },

    // ─── Part 8: Multiple matching ────────────────────────────────────────────
    {
      partNumber: 8,
      type: 'multiple-matching',
      intro: 'You are going to read an article in which four people discuss their experiences with Mentorship in their professional lives. For questions 43 – 52, choose from the people (A – D). The people may be chosen more than once.',
      texts: [
        {
          label: 'A',
          name: 'Sarah – The Corporate Executive',
          text: "When I started in the finance sector, it was a very male-dominated environment. I was lucky to find a mentor, Eleanor, who had navigated those waters decades before me. She didn't just give me career advice; she taught me the 'unwritten rules' of the office—how to handle internal politics and when to speak up in meetings. I think many people make the mistake of looking for a mentor who is exactly like them. Eleanor and I were quite different in terms of personality, but her perspective was invaluable precisely because it challenged my own. She pushed me out of my comfort zone, forcing me to apply for roles I thought were beyond my reach. Without that push, I'd likely still be in a mid-level management position.",
        },
        {
          label: 'B',
          name: 'David – The Tech Entrepreneur',
          text: "I've had several mentors throughout my journey, and what I've learned is that the relationship must be reciprocal. A lot of young founders think a mentor is a 'free consultant' who will solve all their problems. In reality, a good mentor is there to ask the difficult questions that you're avoiding. My most impactful mentor was a retired CEO who was brutally honest with me about my leadership flaws. It was painful to hear at first, but it was exactly what I needed to grow. I also made sure to offer him something in return—I kept him updated on emerging tech trends that he was no longer exposed to. It became a genuine friendship rather than just a professional arrangement.",
        },
        {
          label: 'C',
          name: 'Chloe – The Freelance Designer',
          text: "As a freelancer, you don't have the natural structure of an office, so finding a mentor was a deliberate choice I made to avoid professional stagnation. I found my mentor through an online community. What I appreciated most was her focus on the 'business' of design—how to price my work and negotiate with difficult clients. These are things they don't teach you in art school. She helped me realize that being a good artist isn't enough; you have to be a good businessperson too. The most important lesson I learned was to value my own time. Before the mentorship, I was constantly overworking for very little pay. She helped me break that cycle and build a sustainable career.",
        },
        {
          label: 'D',
          name: 'Marcus – The Researcher',
          text: 'My mentorship experience was somewhat unconventional because it was a \'reverse mentorship.\' I was paired with a very senior academic who wanted to understand how social media was changing the landscape of scientific communication. Even though I was technically the one \'teaching\' him about digital tools, I learned an enormous amount about the rigour and ethics of research from our conversations. It broke down the traditional hierarchy that often exists in universities. It made me realize that mentorship isn\'t about age or status; it\'s about a shared curiosity and a willingness to learn from anyone, regardless of their position. It gave me the confidence to present my own ideas more boldly.',
        },
      ],
      questions: [
        {
          number: 43,
          text: 'mentions that the relationship provided benefits for both parties?',
          answer: 'B',
          explanation: 'David mentions he kept his mentor updated on tech trends (reciprocal).',
        },
        {
          number: 44,
          text: "found that a mentor's differing personality was a positive factor?",
          answer: 'A',
          explanation: 'Sarah says their "different personality... challenged my own."',
        },
        {
          number: 45,
          text: 'was encouraged to pursue opportunities they initially felt unqualified for?',
          answer: 'A',
          explanation: 'Sarah was forced to "apply for roles I thought were beyond my reach."',
        },
        {
          number: 46,
          text: 'mentions that their mentor helped them with practical skills not covered in their formal education?',
          answer: 'C',
          explanation: 'Chloe mentions learning to "price work and negotiate," which "they don\'t teach you in art school."',
        },
        {
          number: 47,
          text: 'participated in a mentorship where the traditional roles were somewhat flipped?',
          answer: 'D',
          explanation: 'Marcus mentions "reverse mentorship" where he taught the senior academic.',
        },
        {
          number: 48,
          text: 'emphasizes that a mentor should not be expected to provide easy solutions?',
          answer: 'B',
          explanation: 'David says a mentor is not a "free consultant" to "solve all your problems."',
        },
        {
          number: 49,
          text: 'sought a mentor specifically to prevent their career from stalling?',
          answer: 'C',
          explanation: 'Chloe chose a mentor to "avoid professional stagnation."',
        },
        {
          number: 50,
          text: 'highlights the importance of understanding the informal social dynamics of a workplace?',
          answer: 'A',
          explanation: 'Sarah mentions learning the "unwritten rules" and "internal politics."',
        },
        {
          number: 51,
          text: 'explains how a mentor helped them change their perception of their own professional worth?',
          answer: 'C',
          explanation: 'Chloe mentions her mentor helped her "value my own time" and stop overworking for low pay.',
        },
        {
          number: 52,
          text: 'suggests that mentorship is primarily based on mutual interest rather than seniority?',
          answer: 'D',
          explanation: 'Marcus concludes that it\'s about "shared curiosity" regardless of "age or status."',
        },
      ],
    },
  ],
};
