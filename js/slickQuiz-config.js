// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        //"name":    "'Canes Challenge",
        "main":    "<p>Are you a <strong>true</strong> Miami Hurricane? Think you know all there is to being a 'Cane?</p> <div class ='frontpage'>Complete the 'Canes Challenge to find out!</div>",
        "results": "<h5 id ='thankyou'>Thank you for accepting the 'Canes Challenge!</h5 id ='share'><p>Be sure to share the challenge with your friends and family to determine if they are truly <strong>'Canes!</strong></p><p id='tryagain'><em>If you would like to try again, simply refresh this page.</em></p><p id='credits'><strong>Created By:</strong> Briana N. Scott</p><p id='purpose'>&copy; Brilieve, 2015. For educational purposes only.</p>",
        "level1":  "A <strong>true</strong> Miami Hurricane!",
        "level2":  "UM Expert! You know your stuff.",
        "level3":  "Average UM Fan.",
        "level4":  "Gator in the Swamp",
        "level5":  "Seminole in Disguise" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "The UM Baseball Team has won how many championships?",
            "a": [
                {"option": "2",      "correct": false},
                {"option": "3",     "correct": false},
                {"option": "4",      "correct": true},
                {"option": "5",     "correct": false} // no comma here
            ],
            "correct": "<p><span id='correctspan'>That's right!</span> The University of Miami Baseball Team has won 4 championships, with the last win in 2005.</p>",
            "incorrect": "<p><span id='incorrectspan'>That is Incorrect.</span> The University of Miami's Baseball Team has won 4 championships, with the last win in 2005. Looks like you're <em>not</em> a UM Baseball Fan.</p>" // no comma here
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
            "correct": "<p><span id='correctspan'>Oh the joy of the Freshmen Dorms!</span> Hecht and Stanford Residential Colleges were built in 1968. I bet you were a proud freshman.</p>",
            "incorrect": "<p><span id='incorrectspan'>That is incorrect.</span> Did you not live in Hecht or Stanford? Is Sportsfest ringing a bell? No. Probably not. Hecht and Stanford Residential Colleges were built in <strong>1968</strong>.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Where can you find the University of Miami Seal on the Coral Gables Campus? Check all that apply.",
            "a": [
                {"option": "In front of the Bookstore",           "correct": true},
                {"option": "In front of the Library", "correct": false},
                {"option": "The Rock",                "correct": false},
                {"option": "Ashe Building",          "correct": true} // no comma here
            ],
            "correct": "<p><span id='correctspan'>Brilliant!</span> You are one observant cookie. Keep it up, champ.</p>",
            "incorrect": "<p><span id='incorrectspan'>Not Quite.</span>The University of Miami Seal can be found <strong>in front the Bookstore and in the Ashe Building.</strong> Next time you're on campus, be sure to pay more attention and <em> don't</em> step on the seal!</p>" // no comma here
        },
        { // Question 4
            "q": "The UM Football Team has won how many championships?",
            "a": [
                {"option": "7",    "correct": false},
                {"option": "9",     "correct": false},
                {"option": "5",      "correct": true},
                {"option": "6",   "correct": false} // no comma here
            ],
            "correct": "<p><span id='correctspan'>There is a Hurricane in the building!</span> Go 'Canes! You are Correct! The University of Miami Football team has won five championships (1983, 1987, 1989, 1991, and 2001).</p>",
            "incorrect": "<p><span id='incorrectspan'>Fail. Absolute Fail.</span>End the challenge now. I can't. Seriously? The University of Miami Football team has won <strong>five championships</strong> (1983, 1987, 1989, 1991, and 2001).</p>" // no comma here
        },
        { // Question 5
            "q": "Is FSU the <em>worst</em> school in the nation?",
            "a": [
                {"option": "Yes",    "correct": true},
                {"option": "No",     "correct": false} // no comma here
            ],
            "correct": "<p><span id='correctspan'>Why, yes. Of course, they are. </span> Scientific evidence has proven that Florida State University is, <strong>without a doubt</strong>, the worst school in the nation.</p>",
            "incorrect": "<p><span id='incorrectspan'>...you need to go. Just go.</span>Contrary to your beliefs, scientific evidence has proven that Florida State University is, <strong>without a doubt</strong>, the worst school in the nation.</p>" // no comma here
        },
        { // Question 6
            "q": "How many volumes of books/media are stored in Richter Library?",
            "a": [
                {"option": "5.1 Million",    "correct": false},
                {"option": "7.3 Million",    "correct": false},
                {"option": "3.5 Million",    "correct": true},
                {"option": "4.8 Million",    "correct": false} // no comma here
            ],
            "correct": "<p><span id='correctspan'>That's Right! </span>The University of Miami Library ranks among the top research libraries in North America with a combined collection of over 3.5 million volumes of books/media and has access to more than 90,000 electronic and print serials.</p>",
            "incorrect": "<p><span id='incorrectspan'>Sorry, you are incorrect.</span> I can tell you didn't spend much time in the library, did you? The University of Miami Library holds <strong>3.5 million</strong> volumes of books/media and has access to more than 90,000 electronic and print serials.</p>" // no comma here
        },
        { // Question 7
            "q": "The University of Miami has how many <em>total</em> Schools and Colleges?",
            "a": [
                {"option": "11",    "correct": true},
                {"option": "10",    "correct": false},
                {"option": "9",    "correct": false},
                {"option": "8",    "correct": false} // no comma here
            ],
            "correct": "<p><span id='correctspan'>Right on the Money!</span>The University of Miami has <strong>eleven</strong> total Schools and Colleges located on all three campuses in Coral Gables, Virginia Key, and downtown Miami.</p>",
            "incorrect": "<p><span id='incorrectspan'>Uh-Oh. Looks like you forgot a few.</span>The University of Miami has <strong>eleven</strong> total Schools and Colleges located on all three campuses in Coral Gables, Virginia Key, and downtown Miami. </p>" // no comma here
        },
        { // Question 8
            "q": "What year was the University of Miami founded?",
            "a": [
                {"option": "1928",    "correct": false},
                {"option": "1927",    "correct": false},
                {"option": "1926",    "correct": false},
                {"option": "1925",    "correct": true} // no comma here
            ],
            "correct": "<p><span id='correctspan'>Someone who knows their History!</span>The University of Miami was chartered in 1925 by a group of citizens who felt an institution of higher learning was needed for the development of their young and growing community.</p>",
            "incorrect": "<p><span id='incorrectspan'>Shalala is not happy with you.</span>The University of Miami was chartered in <strong>1925</strong>.</p>" // no comma here
        },
        { // Question 9
            "q": "What are the names of the University of Miami's first and second Presidents, respectively?",
            "a": [
                {"option": "Stanford & Foote",    "correct": false},
                {"option": "Foote & Shalala",    "correct": false},
                {"option": "Ashe & Pearson",    "correct": true},
                {"option": "Foote & Pearson",    "correct": false} // no comma here
            ],
            "correct": "<p><span id='correctspan'>Fantastic! You're a Quick Thinker!</span>The University of Miami's first president was <strong>Dr. Bowman F. Ashe</strong> followed by <strong>Dr. Jay F. W. Pearson</strong>.</p>",
            "incorrect": "<p><span id='incorrectspan'>That is incorrect. Tsk-tsk.</span>The University of Miami's first president was <strong>Dr. Bowman F. Ashe</strong> followed by <strong>Dr. Jay F. W. Pearson</strong>.</p>" // no comma here
        } // no comma here
    ]
};
