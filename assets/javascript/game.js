// Create an array of words

const word = ['Mickey Mouse', 'Minnie Mouse', 'Donald Duck', 'Daisy Duck', 'Scrooge McDuck', 'Cruella da Vil']

// Choose words randomly

let randNum = Math.floor(Math.random() * word.length);
let chosenWord = word[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];

// console.log(chosenWord);



// Create underscores based on length of word

let generateUnderscore = () => {
    for(let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

// console.log(generateUnderscore());

// Get users guess 

document.addEventListener('keypress', (event) => {
    // console.log(event);
    let keyword = String.fromCharCode(event.keyCode);
    // console.log(keyword);

    // let keycode = event.keyCode;
    // console.log(keycode);
    // let keyWord = String.fromCharCode(keycode);
    // console.log(keyWord);

    // console.log(chosenWord.indexOf(keyword));
    if(chosenWord.indexOf(keyword) > -1) {
        // console.log(true);
    rightWord.push(keyord);
    // console.log(rightWord);
    underScore[chosenWord.indexOf(keyword)] = keyword;
    if(underScore.join('') == chosenWord) {
        alert('You Win');
    }
    wrongWord.push(keyword);
    // console.log(wrongWord);
    }

});

// Check if guest is correct



// If right, push to right array
// If wrong, push to wrong array
