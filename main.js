const OPTIONS_FUNNY = [
    "One-Winged Angel",
    "To Zanarkand",
    "I Want It That Way",
    "Let It Go",
    "Into the Unknown",
    "Gangnam Style",
    "Unchained Melody",
    "Hakuna Matata",
    "A Whole New World",
    "Can You Feel the Love Tonight",
    "We Don't Talk About Bruno",
    "You've Got a Friend in Me",
    "Under the Sea",
    "Macarena",
    "Arabian Nights",
    "The Bare Necessities",
    "Beauty and the Beast",
    "Humpty Dumpty",
    "Another One Bites the Dust",
    "Billie Jean",
    "Baby One More Time",
    "Never Gonna Give You Up",
    "Take My Breath Away",
    "Take On Me",
    "Wake Me Up Before You Go-Go",
    "Every Breath You Take",
    "How Am I Supposed to Live Without You",
    "Gangsta's Paradise",
    "Truly Madly Deeply",
    "My Heart Will Go On",
    "I Don't Want to Miss a Thing",
    "Livin' la Vida Loca",
    "Hips Don't Lie",
    "Viva la Vida",
    "Ain't No Mountain High Enough",
    "Dancing Queen",
    "Stayin' Alive",
    "Saturday Night Fever"
];

/*
    Remember that song names are CASE SENSITIVE on the server!
    All songs are Camel Case except
    Balamb GARDEN
    Galbadia GARDEN
    ODEKA de Chocobo
    FITHOS LUSEC WECOS VINOSEC
    SUCCESSION OF WITCHES

    Also don't put (Featuring N's Telecaster) after Mods De Chocobo
*/
const QUESTIONS_EASY = [
    { question: "What music is played in Balamb Garden?", options: [ "Balamb GARDEN" ], answer: "Balamb GARDEN", loadMusic: "easy" },
    { question: "What music is played in Galbadia Garden?", options: [ "Galbadia GARDEN" ], answer: "Galbadia GARDEN", loadMusic: "easy" },
    { question: "What music is played in Fishermans Horizon?", options: [ "Fisherman's Horizon" ], answer: "Fisherman's Horizon", loadMusic: "easy" },
    { question: "What music is played in the Lunatic Pandora?", options: [ "Lunatic Pandora" ], answer: "Lunatic Pandora", loadMusic: "easy" },
    { question: "What music is played during Time Compression?", options: [ "Compression Of Time" ], answer: "Compression Of Time", loadMusic: "easy" },
    { question: "Which is the only track with vocals in Final Fantasy VIII?", options: [ "Eyes On Me" ], answer: "Eyes On Me", loadMusic: "easy" },
    { question: "What music is played in Ultimecia's Castle?", options: [ "The Castle" ], answer: "The Castle", loadMusic: "easy" },
];

// Remember that song names are CASE SENSITIVE on the server!
const QUESTIONS_MEDIUM = [

    // CATEGORY: Battles
    { question: "What is the regular battle theme called?",
		options: [ "Force Your Way", "Never Look Back", "Don't Be Afraid", "Premonition" ],
		answer: "Don't Be Afraid", loadMusic: "easy" },

    { question: "What is the boss battle theme called?",
		options: [ "Force Your Way", "Find Your Way", "Don't Be Afraid", "Those Who Fight Further" ],
		answer: "Force Your Way", loadMusic: "easy" },

    { question: "What is the Laguna's battle theme called?",
		options: [ "Force Your Way", "The Man With The Machine Gun", "Don't Be Afraid", "Those Who Fight" ],
		answer: "The Man With The Machine Gun", loadMusic: "easy" },

    // CATEGORY: Character and other themes
    { question: "What is the main Chocobo Theme of Final Fantasy VIII?",
		options: [ "Mods De Chocobo", "ODEKA de Chocobo", "ODEKA ke Chocobo", "Cinco de Chocobo" ],
		answer: "Mods De Chocobo", loadMusic: "easy" },

    { question: "What music plays in Chocobo Forests?",
		options: [ "Mods De Chocobo", "Blue Fields", "Breezy", "Fisherman's Horizon" ],
		answer: "Mods De Chocobo", loadMusic: "easy" },

    { question: "What can be considered NORG's theme song?",
		options: [ "Heresy", "Unrest", "A Sacrifice", "Truth" ],
		answer: "Heresy", loadMusic: "easy" },

    { question: "What music plays during Triple Triad?",
		options: [ "Shuffle Or Boogie", "The Man With The Machine Gun", "Junction", "Truth" ],
		answer: "Shuffle Or Boogie", loadMusic: "easy" },

    // CATEGORY: Cities and towns
    { question: "What music plays in Balamb town?",
		options: [ "Breezy", "Balamb GARDEN", "Fisherman's Horizon", "Martial Law" ],
		answer: "Breezy", loadMusic: "easy" },

    { question: "What music plays in Deiling City?",
		options: [ "Galbadia GARDEN", "Martial Law", "Breezy", "Under Her Control" ],
		answer: "Under Her Control", loadMusic: "easy" },

    { question: "What music plays in Timber?",
		options: [ "Galbadia GARDEN", "Martial Law", "Breezy", "Under Her Control" ],
		answer: "Martial Law", loadMusic: "easy" },

    { question: "What music plays in Winhill in the present?",
		options: [ "Fragments Of Memories", "Fisherman's Horizon", "Breezy", "Under Her Control" ],
		answer: "Fisherman's Horizon", loadMusic: "easy" },

    { question: "What music plays in Winhill in the past?",
		options: [ "Fragments Of Memories", "Fisherman's Horizon", "Breezy", "Under Her Control" ],
		answer: "Fragments Of Memories", loadMusic: "easy" },

    { question: "What music plays in the chocobo crossing section of Winhill?",
		options: [ "Mods De Chocobo", "ODEKA de Chocobo", "ODEKA ke Chocobo", "Fisherman's Horizon" ],
		answer: "ODEKA ke Chocobo", loadMusic: "easy" },

    { question: "What music plays in Dollet after the withdrawal of Galbadian Troops?",
		options: [ "Dance With The Balamb-Fish", "The Landing", "Martial Law", "The Salt Flats" ],
		answer: "Dance With The Balamb-Fish", loadMusic: "easy" },

    { question: "What music plays in the underground walkways of Shumi Village?",
		options: [ "Julia", "Breezy", "No Music", "Find Your Way" ],
		answer: "No Music", loadMusic: "easy" },

    // CATEGORY: Special areas
    { question: "Where does The Successor play?",
		options: [ "Tears' Point", "Orphanage", "Galbadian Garden Auditorium", "Deiling City" ],
		answer: "Orphanage" },

    { question: "What music plays inside the Galbadia missile base?",
		options: [ "The Spy", "Intruders", "Rivals", "Jailed" ],
		answer: "Intruders", loadMusic: "easy" },

    // CATEGORY: Events
    { question: "What music plays in the secret back area of the Training Centre?",
		options: [ "Tell Me", "My Mind", "Fear", "Balamb GARDEN" ],
		answer: "Tell Me", loadMusic: "easy" },

    { question: "What music plays in the Garden Master Crisis?",
		options: [ "The Mission", "SeeD", "The Stage Is Set", "Only A Plank Between One And Perdition" ],
		answer: "The Mission", loadMusic: "easy" },

    // CATEGORY: Dungeons
    { question: "What music plays in the Fire Cavern?",
		options: [ "Junction", "Find Your Way", "Blue Fields", "Intruders" ],
		answer: "Find Your Way", loadMusic: "easy" },

    { question: "What music plays in the Tomb of the Unknown King?",
		options: [ "Blue Fields", "Junction", "No Music", "Find Your Way" ],
		answer: "Find Your Way", loadMusic: "easy" },

    { question: "What music plays in D-District Prison after a general alarm is issued?",
		options: [ "Jailed", "Never Look Back", "Only A Plank Between One And Perdition", "Unrest" ],
		answer: "Never Look Back", loadMusic: "easy" },

    { question: "What music plays in the Training Centre?",
		options: [ "Intruders", "Unrest", "Fear", "Balamb GARDEN" ],
		answer: "Fear", loadMusic: "easy" },

    { question: "What music plays in the MD Level of Balamb Garden?",
		options: [ "The Mission", "SeeD", "The Stage Is Set", "Only A Plank Between One And Perdition" ],
		answer: "The Stage Is Set", loadMusic: "easy" },

    { question: "What music plays in the sewers of Deiling City?",
		options: [ "Residents", "Intruders", "The Stage Is Set", "The Mission" ],
		answer: "Intruders", loadMusic: "easy" },

    // CATEGORY: Specific instances
    { question: "What music plays after Squall seemingly falls into the sands underneath D-District Prison?",
		options: [ "Tell Me", "Breezy", "No Music", "Blue Fields" ],
		answer: "Breezy", loadMusic: "easy" },

    { question: "What music plays during the black and white reels outside of the game itself?",
		options: [ "Liberi Fatali", "Overture", "The Oath", "The Loser" ],
		answer: "Overture", loadMusic: "easy" },

    { question: "What music plays when first meeting Rinoa in the train in her room?",
		options: [ "Love Grows", "Tell Me", "My Mind", "Eyes On Me" ],
		answer: "My Mind", loadMusic: "easy" },

    { question: "What music plays when the Balamb Garden transforms and starts flying for the first time?",
		options: [ "Movin'", "Retaliation", "The Stage Is Set", "Blue Fields" ],
		answer: "Movin'", loadMusic: "easy" },

    { question: "What music plays when Squall is stabbed by icicles launched by Edea?",
		options: [ "Premonition", "Wounded", "Rivals", "The Loser" ],
		answer: "Wounded'", loadMusic: "easy" },
];

// Remember that song names are CASE SENSITIVE on the server!
const QUESTIONS_HARD = [
    { question: "What music plays when fighting Ultima Weapon?",
		options: [ "Never Look Back", "Only A Plank Between One And Perdition", "Force Your Way", "Dead End" ],
		answer: "Only A Plank Between One And Perdition", loadMusic: "easy" },

    { question: "What music plays when the fake president Deiling reveals his true nature?",
		options: [ "Unrest", "Force Your Way", "Starting Up", "The Mission" ],
		answer: "Starting Up", loadMusic: "easy" },

    { question: "Which of these music is missable?",
		options: [ "Rivals", "Drifting", "Blue Sky", "Junction" ],
		answer: "Blue Sky", loadMusic: "easy" },

    { question: "Which of these music was completely re-written from the older released version?",
		options: [ "The Landing", "Force Your Way", "Don't Be Afraid", "Dead End" ],
		answer: "The Landing", loadMusic: "easy" },

    { question: "What music plays when fighting Ultimecia's first form?",
		options: [ "Premonition", "Force Your Way", "The Legendary Beast", "The Extreme" ],
		answer: "Premonition", loadMusic: "easy" },

    { question: "Which of these music is played only once?",
		options: [ "Roses And Wine", "Unrest", "The Salt Flats", "Tell Me" ],
		answer: "Tell Me", loadMusic: "easy" },

    { question: "How many times will Premonition be played?",
		options: [ "2", "3", "4", "5" ],
		answer: "4", playMusic: "Premonition (easy)" },

    { question: "What music plays when the Missile Base team appears to be stuck and doomed in the base?",
		options: [ "My Mind", "Trust Me", "Drifting", "Unrest" ],
		answer: "Trust Me", loadMusic: "easy" },

    { question: "What music plays when Rinoa attempts to approach Edea to trick her into wearing an Odine bangle?",
		options: [ "FITHOS LUSEC WECOS VINOSEC", "SUCCESSION OF WITCHES", "A Sacrifice", "Premonition" ],
		answer: "A Sacrifice", loadMusic: "easy" },

    { question: "What is this music?",
		options: [ "Ami", "Where I Belong", "Trust Me", "Balamb GARDEN" ],
		answer: "Ami", loadMusic: "hard", playMusic: "Ami (hard)" },

    { question: "What is the final last boss theme?",
		options: [ "The Legendary Beast", "Maybe I'm A Lion", "Premonition", "The Extreme" ],
		answer: "The Extreme", loadMusic: "easy" },

];

let optionsAnswers = [];
let selQuestionBox;
let selBoxRetry;
let selBtnConfirm;
let currentQuestion = 1;

let selAudioCursor;
let selAudioError;
let selAudioSalary;

let selBody;

const QUESTION_ARRS_CUR = {
    "easy": [],
    "medium": [],
    "hard": []
};

let lastSelectedMusic = "";

function addSelectionListener( node, option ) {
    node.addEventListener( "click", () => {
        selAudioCursor.currentTime = 0;
        selAudioCursor.play();

        document.querySelectorAll(".pointer").forEach( pointer => { pointer.className = "pointer opaque" } );
        node.children[0].childNodes[0].classList.remove("opaque");
        const currentOptAns = optionsAnswers.pop();
        currentOptAns[0] = node.textContent;
        optionsAnswers.push(currentOptAns);

        if ( lastSelectedMusic !== option && lastSelectedMusic.length > 0 ) {
            console.log( "pausing", lastSelectedMusic );
            document.getElementById( `${lastSelectedMusic}` ).pause();
        }

        const newMusic = document.getElementById( `${option}` );
        if ( newMusic ) {
            newMusic.currentTime = 0;
            newMusic.play();
            lastSelectedMusic = option;   
        }
    });
}

function loadMusic( question ) {
    if ( question.playMusic ) {
      const elemMusic = document.createElement("audio");
      elemMusic.loop = true;
      elemMusic.autoplay = true;
      elemMusic.preload = "auto";

      const elemSource = document.createElement("source");
      elemSource.src = `ost/${question.playMusic}.mp3`;
      elemSource.type = "audio/mpeg";
      elemMusic.appendChild(elemSource);
      
      selDivMusic.appendChild(elemMusic);

    } else if ( question.loadMusic ) {
      question.options.forEach( option => {
          const elemMusic = document.createElement("audio");
          elemMusic.id = option;
          elemMusic.loop = true;

          const elemSource = document.createElement("source");
          elemSource.src = `ost/${option === "ODEKA de Chocobo" ? "ODEKA ke Chocobo" : option} (${question.loadMusic}).mp3`;
          elemSource.type = "audio/mpeg";
          elemMusic.appendChild(elemSource);
          
          selDivMusic.appendChild(elemMusic);
      });
    }
}

function fillQuestionDOM( difficulty ) {
    const questions = QUESTION_ARRS_CUR[difficulty];
    const randomIndex = Math.floor((Math.random() * questions.length));
    const question = JSON.parse(JSON.stringify(questions[randomIndex]));
    questions.splice(randomIndex, 1);

    if ( question.options.length < 4 ) {
        const optionsFunnyDupe = JSON.parse(JSON.stringify(OPTIONS_FUNNY));
        const initOptionsLength = question.options.length;

        for ( let i = 0; i < (4 - initOptionsLength); i++ ) {
            const randIndex = Math.floor( (Math.random() * optionsFunnyDupe.length) );
            question.options.push( optionsFunnyDupe[randIndex] );
            optionsFunnyDupe.splice(randIndex, 1);
        }
    }

    loadMusic( question );

    selQuestionBox.replaceChildren();
    const intQnDom = setInterval( () => {
        if ( selQuestionBox.childElementCount === 0 ) {
            clearInterval(intQnDom);

            selQuestionBox.appendChild( document.createTextNode( question.question ) );
            selQuestionBox.appendChild( document.createElement("br") );

            const elemTable = selQuestionBox.appendChild( document.createElement("table") );
            const optionsLength = question.options.length;
            const optionsCopy = JSON.parse(JSON.stringify(question.options));
            // console.log( "optionsLength", optionsLength );
            for ( let i = 0; i < optionsLength; i++ ) {
                const randIndex = Math.floor( (Math.random() * optionsCopy.length) );
                const elemTr = elemTable.appendChild( document.createElement("tr") );
                // console.log( "tr appended", i );
                const elemTdPointer = elemTr.appendChild( document.createElement("td"));
                const elemTdOption = elemTr.appendChild( document.createElement("td"));

                const elemPointer = elemTdPointer.appendChild( document.createElement("img"));
                elemPointer.className = `pointer${i === 0 ? '' : ' opaque' }`
                elemPointer.src = "images/pointer_transparent.gif";
                elemTdOption.textContent = `${optionsCopy[randIndex]}`;
                addSelectionListener(elemTr, optionsCopy[randIndex]);

                if ( i === 0 ) {
                    optionsAnswers.push( [optionsCopy[randIndex], question.answer] );
                }
                optionsCopy.splice(randIndex, 1);
            }

            selBtnConfirm.classList.remove("hidden");
        }
    }, 150);
}

function loadQuestion ( difficulty ) {
    fillQuestionDOM( difficulty );
}

function confirmPressed() {
    selDivMusic.innerHTML = "";
    lastSelectedMusic = "";
    selAudioCursor.currentTime = 0;
    selAudioCursor.play();

    selBtnConfirm.classList.add("hidden");
    if ( currentQuestion < 4 ) {
        loadQuestion( "medium" );
    } else if ( currentQuestion < 5 ) {
        loadQuestion( "hard" );
    } else {
        selBoxRetry.classList.remove("hidden");
        selQuestionBox.replaceChildren();
        const intResults = setInterval(() => {
            if ( selQuestionBox.childElementCount === 0 ) {
                clearInterval(intResults);
                selQuestionBox.textContent = "Results:";
                let qnCounter = 1;
                let hasWrong = false;
                optionsAnswers.forEach( opAns => {
                    const correct = opAns[0] === opAns[1];

                    selQuestionBox.appendChild(
                        document.createElement("p"))
                        .textContent = `Question ${qnCounter} - ${correct ? "Correct!" : "Wrong!"}`;
                    qnCounter++;

                    if ( !correct ) {
                        hasWrong = true;
                    }
                });
                
                if ( hasWrong ) {
                    selAudioError.currentTime = 0;
                    selAudioError.play();
                } else {
                    selAudioSalary.currentTime = 0;
                    selAudioSalary.play();
                }
            }
        }, 150);
    }

    currentQuestion++;
}

function firstInit() {
    selQuestionBox = document.querySelector("#questionBox");
    selBoxRetry = document.querySelector("#boxRetry");
    selBtnConfirm = document.querySelector(".confirm");

    selDivMusic = document.querySelector("#divMusic");

    selAudioCursor = document.getElementById("audioCursor");
    selAudioError = document.getElementById("audioError");
    selAudioSalary = document.getElementById("audioSalary");

    selBody = document.getElementById( "elemBody" );
}

function initGame() {
    QUESTION_ARRS_CUR["easy"] = JSON.parse(JSON.stringify(QUESTIONS_EASY));
    QUESTION_ARRS_CUR["medium"] = JSON.parse(JSON.stringify(QUESTIONS_MEDIUM));
    QUESTION_ARRS_CUR["hard"] = JSON.parse(JSON.stringify(QUESTIONS_HARD));

    optionsAnswers = [];
    currentQuestion = 1;
    elemTable = null;
    selBtnConfirm.classList.remove("hidden");
    selBoxRetry.classList.add("hidden");
    loadQuestion("easy");

    firstInit();
}

addEventListener("DOMContentLoaded", (/* event */) => {
    firstInit();
    initGame();
});