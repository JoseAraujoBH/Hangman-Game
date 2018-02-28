// Create an array of words

const word = ['Mickey Mouse', 'Minnie Mouse', 'Donald Duck', 'Daisy Duck', 'Scrooge McDuck', 'Cruella da Vil']

// Choose words randomly

let randNum = Math.floor(Math.random() * word.length);
let chosenWord = word[randNum];
console.log(chosenWord);
let underScore = [];


// Create underscores based on length of word

let generateUnderscore = () => {
    for(let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

console.log(generateUnderscore());

// Get users guess 

document.addEventListener('keypress', (event) => {
    console.log(event);
    let keyword = String.fromCharCode(event.keyCode);
    console.log(keyword);

    // let keycode = event.keyCode;
    // console.log(keycode);
    // let keyWord = String.fromCharCode(keycode);
    // console.log(keyWord);

    console.log(chosenWord.indexOf(keyword));
    if(keyword.indexOf(chosenWord) > -1) {
        console.log(true);
    }

});

// Check if guest is correct



// If right, push to right array
// If wrong, push to wrong array
