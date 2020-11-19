//Final Challenge

//Challenge: Using all your knowledge from this course, add 5 words to 
//your scrabble board using only one for loop. 

//As this challenge is the last in this course you will be expected to rely on
//all the material you have learnt so far.

//If you do get stuck please do reach out to the Scrimba community on Discord or
//or feel free to google.

const squares = Array.from(document.querySelectorAll('.grid div'))

console.log(squares)

const layout = [
    'f','e','e','b','i','','','','','','','','',
    '','i','','','','','','','','','','','',
    '','p','u','d','d','l','e','','','','','','',
    '','','','','','','u','','','','','','',
    '','','','','','','l','','','','','','',
    '','','','','','','g','o','a','t','','','',
    '','','','','','','','','','','','','',
    '','','','','','','','','','','','','',
    '','','','','','','','','','','','','',
    '','','','','','','','','','','','','',
    '','','','','','','','','','','','','',
    '','','','','','','','','','','','','',
    '','','','','','','','','','','','','',
]

// declare a variable to store the letter
// innerHTML
// style the div with a class

for (let i = 0; i < squares.length; i++) {
    let letter = layout[i]
    squares[i].innerHTML = letter
    if (letter !== '') squares[i].classList.add('tile')
}
