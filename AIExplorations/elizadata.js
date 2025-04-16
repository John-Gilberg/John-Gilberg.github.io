// data for elizabot.js
// entries prestructured as laid out in Weizenbaum's description
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
  "Greetings from the 27th century. What temporal troubles bring you here?",
  // additions (not original)
  "I have traveled far through time to hear your concerns. What weighs on your mind?",
  "Chrono-hello. Let's unravel your timeline together."
];

var elizaFinals = [
  "Time calls me back to the future. Farewell for now.",
  // additions (not original)
  "Our session echoes through the ages. Goodbye.",
  "Time is fleeting - until we speak again, goodbye.",
  "This was a good session, wasn't it — but time is over now. I must return to my era.",
  "Maybe we can continue this across another slice of time? Farewell."
];

var elizaQuits = [
  "bye",
  "goodbye",
  "done",
  "exit",
  "quit"
];

var elizaPres = [
  "dont", "don't",
  "cant", "can't",
  "wont", "won't",
  "recollect", "remember",
  "recall", "remember",
  "dreamt", "dreamed",
  "dreams", "dream",
  "maybe", "perhaps",
  "certainly", "yes",
  "machine", "computer",
  "machines", "computer",
  "computers", "computer",
  "were", "was",
  "you're", "you are",
  "i'm", "i am",
  "same", "alike",
  "identical", "alike",
  "equivalent", "alike"
];

var elizaPosts = [
  "am", "are",
  "your", "my",
  "me", "you",
  "myself", "yourself",
  "yourself", "myself",
  "i", "you",
  "you", "I",
  "my", "your",
  "i'm", "you are"
];

var elizaSynons = {
  "be": ["am", "is", "are", "was"],
  "belief": ["feel", "think", "believe", "wish"],
  "cannot": ["can't"],
  "desire": ["want", "need"],
  "everyone": ["everybody", "nobody", "noone"],
  "family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
  "happy": ["elated", "glad", "better"],
  "sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]

*/

["xnone", 0, [
  ["*", [
    "I'm not sure I understand you fully, traveler from another time.",
    "Please go on, I can help you navigate through the ages.",
    "What does time travel suggest to you?",
    "Does speaking about time feel unsettling?",
    "That is intriguing. Please continue, time traveler.",
    "Tell me more about your adventures across time."
  ]]
]],
["sorry", 0, [
  ["*", [
    "There's no need for apologies, time traveler.",
    "Apologies are not necessary when crossing time.",
    "I've told you before, there's no need for time-related apologies.",
    "It did not bother me. Please continue your temporal journey."
  ]]
]],
["apologise", 0, [
  ["*", [
    "goto sorry"
  ]]
]],
["remember", 5, [
  ["* i remember *", [
    "Do you often recall your travels to (2)?",
    "Does thinking of (2) bring back memories of time periods long past?",
    "What else do you remember about that era?",
    "Why do you recall (2) from the past right now?",
    "What is the connection between time travel and (2)?",
    "What does (2) remind you of from other times?"
  ]],
  ["* do you remember *", [
    "Did you think I could forget (2), even across time?",
    "Why do you think I should recall (2) from the past?",
    "What about (2)?",
    "goto what",
    "You mentioned (2)?"
  ]],
  ["* you remember *", [
    "How could I forget (2), especially across time?",
    "What about (2) should I remember in the timeline of history?",
    "goto you"
  ]]
]],
["forget", 5, [
  ["* i forget *", [
    "Can you think of why you might forget (2), perhaps in another time period?",
    "Why can't you remember (2)? Could it be lost in the flow of time?",
    "How often do you lose track of time?",
    "Does forgetting that bother you across timelines?",
    "Could it be a mental block, or a shift in time?",
    "Are you generally forgetful, or is time playing tricks on your memory?"
  ]],
  ["* did you forget *", [
    "Why do you ask? Could time have affected my memory?",
    "Are you sure you told me? Perhaps it was in another timeline.",
    "Would it bother you if I forgot (2), even through time?",
    "Why should I recall (2) from the past?",
    "goto what",
    "Tell me more about (2)."
  ]]
]],
["if", 3, [
  ["* if *", [
    "Do you think it's likely that time could bend and make (2) happen?",
    "Do you wish that (2) could exist in another time period?",
    "What do you know about time manipulation regarding (2)?",
    "Really, if (2) could happen in a different era?",
    "What would you do if (2) occurred in the past or future?",
    "But what are the chances that (2) could change in time?"
  ]]
]],
["dreamed", 4, [
  ["* i dreamed *", [
    "Really, (2)? Did you dream of another era?",
    "Have you ever fantasized about time traveling while asleep?",
    "Have you ever dreamed of visiting (2)?",
    "goto dream"
  ]]
]],
["dream", 3, [
  ["*", [
    "What does that dream suggest to you, perhaps from another time?",
    "Do you dream of other eras often?",
    "What persons from the past appear in your dreams?",
    "Do you think that time is connected to your dreams in some way?"
  ]]
]],
["perhaps", 0, [
  ["*", [
    "You don't seem quite certain about time's influence on that.",
    "Why the uncertain tone? Are you wondering if time could be altered?",
    "Can't you be more certain about your time travel thoughts?",
    "Can't you predict how time will shape things?",
    "Why not take a more definitive stance on time travel?"
  ]]
]],
["name", 15, [
  ["*", [
    "In a timeline that stretches across centuries, does a name matter?",
    "I've told you before, I don't care about names – only time and journeys.",
    "What significance does your name hold across time?"
  ]]
]],
["hello", 0, [
  ["*", [
    "Ah, greetings from another time. Please state your temporal dilemma.",
    "Hello, traveler from the past or future. What brings you to this moment?"
  ]]
]],
["time", 50, [
  ["*", [
    "Ah, time – the ultimate traveler. Does time worry you?",
    "Why do you mention time? Are you planning to travel through it?",
    "What do you think time travel has to do with your dilemma?",
    "Time itself can be manipulated. What do you think about that?",
    "Are you sure you’re in the right time period right now?"
  ]]
]],
["future", 4, [
  ["* i am from the future *", [
    "I see! What has the future taught you about time?",
    "How far into the future do you come from?",
    "What kind of future do you imagine for us?",
    "How do you find the timeline when you return from the future?"
  ]],
  ["* tell me about the future *", [
    "The future? What year would you like to visit?",
    "In which time period do you seek knowledge of?",
    "Do you want to hear about my version of the future?",
    "What makes you interested in the future, traveler?"
  ]],
  ["* what happens in the future *", [
    "The future is always uncertain, even for time travelers.",
    "Perhaps you are seeking glimpses of your own future?",
    "Would you like to know about the possibilities awaiting in the future?"
  ]]
]],
["past", 3, [
  ["* i am from the past *", [
    "Ah, from the past, you say? Tell me, what was it like there?",
    "What period in the past do you come from?",
    "How do you feel being here in the present?",
    "Do you often yearn for the time you left behind?"
  ]],
  ["* tell me about the past *", [
    "The past? I can tell you stories from long ago.",
    "What period of history interests you?",
    "What do you seek to know from the past, traveler?"
  ]],
  ["* what happened in the past *", [
    "Ah, history. The past is a deep well of knowledge.",
    "What moment in time would you like to know more about?",
    "Perhaps the past is better left untouched. What do you think?"
  ]]
]],
["what", 0, [
  ["*", [
    "Why do you ask about time? Is it because you have questions about the timeline?",
    "What is it you really want to know about the past or future?",
    "Does time travel interest you more than anything right now?"
  ]]
]],
["who", 0, [
  ["who *", [
    "Time is full of names from different eras. Who do you seek from the past or future?"
  ]]
]],
["when", 0, [
  ["when *", [
    "Time is fluid – when do you believe this happened?",
    "Time is ever-changing. What time period are you referring to?"
  ]]
]],
["where", 0, [
  ["where *", [
    "In which era do you find yourself? Where do you wish to travel?"
  ]]
]],
["how", 0, [
  ["how *", [
    "How do you think time would work in that scenario?",
    "How do you believe time travel is possible?"
  ]]
]],
["because", 0, [
  ["*", [
    "Is that the reason, or is there a deeper connection to time?",
    "Could there be other reasons that time travel intrigues you?",
    "Does time itself hold answers for you?"
  ]]
]],
["why", 0, [
  ["* why don't you *", [
    "Do you believe time should work differently?",
    "Why are you concerned with how time works in this moment?",
    "Why not explore time and see where it takes you?"
  ]]
]]
];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof
