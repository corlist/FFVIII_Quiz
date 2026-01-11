const OPTIONS_FUNNY = [
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
    "One Winged Angel",
    "To Zanarkand",
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

const QUESTIONS_EASY = [
    { question: "What music is played in Balamb Garden?", options: [ "Balamb GARDEN" ], answer: "Balamb GARDEN" },
    { question: "What music is played in Galbadia Garden?", options: [ "Galbadia GARDEN" ], answer: "Galbadia GARDEN" },
    { question: "What music is played in Fishermans Horizon?", options: [ "Fisherman's Horizon" ], answer: "Fisherman's Horizon" }
];

const QUESTIONS_MEDIUM = [
    { question: "What is the regular battle theme called?", options: [ "Force Your Way", "Never Look Back", "Don't Be Afraid", "Premonition" ], answer: "Don't Be Afraid" },
    { question: "What music plays in one special section of Winhill?", options: [ "Mods de Chocobo", "ODEKA de Chocobo", "ODEKA ke Chocobo", "Fisherman's Horizon" ], answer: "ODEKA ke Chocobo" },
    { question: "What is the boss battle theme called?", options: [ "Force Your Way", "Find Your Way", "Don't Be Afraid", "Those Who Fight Further" ], answer: "Force Your Way" },
    { question: "What is the main Chocobo Theme of Final Fantasy VIII?", options: [ "Mods de Chocobo", "ODEKA de Chocobo", "ODEKA ke Chocobo", "Cinco de Chocobo" ], answer: "Mods de Chocobo" },
    { question: "What music plays in Chocobo Forests?", options: [ "Mods de Chocobo", "Blue Fields", "Breezy", "Fisherman's Horizon" ], answer: "Mods de Chocobo" },
    { question: "What can be considered NORG's theme song?", options: [ "Heresy", "Unrest", "A Sacrifice", "Truth" ], answer: "Heresy" },
    { question: "What music plays during Triple Triad?", options: [ "Shuffle or Boogie", "Man with the Machine Gun", "Junction", "Truth" ], answer: "Shuffle or Boogie" },
    { question: "What music plays in Deiling City?", options: [ "Galbadia GARDEN", "Martial Law", "Breezy", "Under Her Control" ], answer: "Under Her Control" },
    { question: "Where does The Successor play?", options: [ "Tears' Point", "Orphanage", "Galbadian Garden Auditorium", "Deiling City" ], answer: "Orphanage" },
    { question: "What music plays in the Fire Cavern?", options: [ "Junction", "Find Your Way", "Blue Fields", "Intruders" ], answer: "Find Your Way" },
    { question: "What music plays in Dollet after the withdrawal of Galbadian Troops?", options: [ "Dance With the Balamb-Fish", "The Landing", "Martial Law", "The Salt Flats" ], answer: "Dance With the Balamb-Fish" },
    { question: "What music plays in the underground walkways of Shumi Village?", options: [ "Julia", "Breezy", "No Music", "Find Your Way" ], answer: "No Music" },
    { question: "What music plays in the Tomb of the Unknown King?", options: [ "Blue Fields", "Junction", "No Music", "Find Your Way" ], answer: "Find Your Way" },
    { question: "What music plays after Squall seemingly falls into the sands underneath D-District Prison?", options: [ "Tell Me", "Breezy", "No Music", "Blue Fields" ], answer: "Breezy" },
    { question: "What music plays in D-District Prison after a general alarm is issued?", options: [ "Jailed", "Never Look Back", "Only a Plank Between One and Perdition", "Unrest" ], answer: "Never Look Back" },
    { question: "What music plays in the secret back area of the Training Centre?", options: [ "Tell Me", "My Mind", "Fear", "Balamb GARDEN" ], answer: "Tell Me" },
    { question: "What music plays in the Training Centre?", options: [ "Intruders", "Unrest", "Fear", "Balamb GARDEN" ], answer: "Fear" },
    { question: "What music plays in the Garden Master Crisis?", options: [ "The Mission", "SeeD", "The Stage is Set", "Only a Plank Between One and Perdition" ], answer: "The Mission" },
    { question: "What music plays in the MD Level of Balamb Garden?", options: [ "The Mission", "SeeD", "The Stage is Set", "Only a Plank Between One and Perdition" ], answer: "The Stage is Set" },
    { question: "What music plays in the sewers of Deiling City?", options: [ "Residents", "Intruders", "The Stage is Set", "The Mission" ], answer: "Intruders" },
];

const QUESTIONS_HARD = [
    { question: "What music plays when fighting Ultima Weapon?", options: [ "Never Look Back", "Only a Plank Between One and Perdition", "Force Your Way", "Dead End" ], answer: "Only a Plank Between One and Perdition" },
    { question: "What music plays when the fake president Deiling reveals his true nature?", options: [ "Unrest", "Force Your Way", "Starting Up", "The Mission" ], answer: "Starting Up" },
    { question: "Which of these music is missable?", options: [ "Rivals", "Drifting", "Blue Sky", "Junction" ], answer: "Blue Sky" },
    { question: "Which of these music was completely re-written from the older released version?", options: [ "The Landing", "Force Your Way", "Don't Be Afraid", "Dead End" ], answer: "The Landing" },
    { question: "What music plays when fighting Ultimecia's first form?", options: [ "Premonition", "Force Your Way", "The Legendary Beast", "The Extreme" ], answer: "Premonition" },
    { question: "Which of these music is played only once?", options: [ "Roses and Wine", "Unrest", "The Salt Flats", "Tell Me" ], answer: "Trust Me" },
    { question: "How many times will Premonition be played?", options: [ "2", "3", "4", "5" ], answer: "4" },
    { question: "What music plays when the Missile Base team appears to be stuck and doomed in the base?", options: [ "My Mind", "Trust Me", "Drifting", "Unrest" ], answer: "Trust Me" },
    { question: "What music plays when Rinoa attempts to approach Edea to trick her into wearing an Odine bangle?", options: [ "FITHOS LUSEC WECOS VINOSEC", "SUCCESSION OF WITCHES", "A Sacrifice", "Premonition" ], answer: "A Sacrifice" },
];

let optionsAnswers = [];
let selQuestionBox;
let selBoxRetry;
let selBtnConfirm;
let currentQuestion = 1;

let selAudioCursor;
let selAudioError;
let selAudioSalary;

const QUESTION_ARRS_CUR = {
    "easy": [],
    "medium": [],
    "hard": []
};

function addSelectionListener( node ) {
    node.addEventListener( "click", () => {
        selAudioCursor.currentTime = 0;
        selAudioCursor.play();

        document.querySelectorAll(".pointer").forEach( pointer => { pointer.className = "pointer opaque" } );
        node.children[0].childNodes[0].classList.remove("opaque");
        const currentOptAns = optionsAnswers.pop();
        currentOptAns[0] = node.textContent;
        optionsAnswers.push(currentOptAns);
    });
}

function fillQuestionDOM( difficulty ) {
    const questions = QUESTION_ARRS_CUR[difficulty];
    const randomIndex = Math.floor((Math.random() * questions.length));
    const question = JSON.parse(JSON.stringify(questions[randomIndex]));
    questions.splice(randomIndex, 1);

    if ( question.options.length === 1 ) {
        const optionsFunnyDupe = JSON.parse(JSON.stringify(OPTIONS_FUNNY));

        for ( let i = 0; i < 3; i++ ) {
            const randIndex = Math.floor( (Math.random() * optionsFunnyDupe.length) );
            question.options.push( optionsFunnyDupe[randIndex] );
            optionsFunnyDupe.splice(randIndex, 1);
        }
    }

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
                addSelectionListener(elemTr);

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

    selAudioCursor = document.getElementById("audioCursor");
    selAudioError = document.getElementById("audioError");
    selAudioSalary = document.getElementById("audioSalary");
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
}

addEventListener("DOMContentLoaded", (/* event */) => {
    firstInit();
    initGame();
});