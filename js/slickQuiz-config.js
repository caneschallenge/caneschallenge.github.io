// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        //"name":    "'Canes Challenge",
        "main":    "<p>Are you a true Miami Hurricane? Think you know all there is to being a 'Cane? Complete the 'Canes Challenge to find out!</p>",
        "results": "<h5>Thank you for accepting the 'Canes Challenge!</h5><p>Be sure to share the challenge with your friends and family to determine if they are truly a <strong>'Cane!</strong>.</p><p><em>If you would like to try again, simply refresh this page.</em></p><p>Whew...College went by fast didn't it?</p>",
        "level1":  "Perfect Score! You are a true Hurricane!",
        "level2":  "Pratically a UM expert. Great job.",
        "level3":  "Hmm...Not too shabby. You know the basics about the University of Miami",
        "level4":  "You must be a Gator",
        "level5":  "Are a really a Seminole in disguise?" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "How many championships have the UM Baseball Team won?",
            "a": [
                {"option": "2",      "correct": false},
                {"option": "3",     "correct": false},
                {"option": "4",      "correct": true},
                {"option": "5",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> University of Miami's Baseball Team has won 4 champsionships, with the last win in 2005.</p>",
            "incorrect": "<p><span>That is Incorrect.</span> The University of Miami's Baseball Team has won 4 champsionships, with the last win in 2005. Looks like you're <em>not</em> a UM Baseball Fan.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What year were Stanford and Hecht Residential Colleges constructed?",
            "a": [
                {"option": "1957",               "correct": false},
                {"option": "1968",               "correct": true},
                {"option": "1959",               "correct": false},
                {"option": "1963",               "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Hmm...You just may know your stuff after all.</span> Hecht and Stanford Residential Colleges were built in 1955. I bet you were a proud freshman.</p>",
            "incorrect": "<p><span>That is incorrect</span> Did you not live in Hecht or Stanford? Is Sportsfest ringing a bell? No. Probably not.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Where can you find the University of Miami Seal on the Coral Gables Campus? Check all that apply.",
            "a": [
                {"option": "The Bookstore",           "correct": true},
                {"option": "In front of the Library", "correct": false},
                {"option": "The Rock",                "correct": false},
                {"option": "Ashe Building",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You are one observant cookie. Keep it up champ.</p>",
            "incorrect": "<p><span>Not Quite.</span> Next time you're on campus, be sure to pay more attention. And <strong> don't</strong> step on the seal!</p>" // no comma here
        },
        { // Question 4
            "q": "How many championships have the UM Football Team won?",
            "a": [
                {"option": "7",    "correct": false},
                {"option": "9",     "correct": false},
                {"option": "5",      "correct": true},
                {"option": "6",   "correct": false} // no comma here
            ],
            "correct": "<p><span>There is a Hurricane in the building!</span> Go Canes! You are Correct!</p>",
            "incorrect": "<p><span>Fail. Absolute Fail.</span> Sorry. End the challenge now. I can't.</p>" // no comma here
        },
        { // Question 5
            "q": "This is a very serious question. Your answer to this question is <em>absolutely</em> critical to determining if you are truly a Miami Hurricane.<strong> Is FSU the worst school in the nation</stong>?",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Yes!!!</span> A true Hurricane!!!</p>",
            "incorrect": "<p><span>...you need to go. Just go.</span> Why are you still here?! Undercover Seminole Fan!</p>" // no comma here
        } // no comma here
    ]
};
