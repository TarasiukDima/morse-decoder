const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let oneWord = '';
    let phraseArray = [];
    let phraseText = '';

    for (let i = 0; i < expr.length; i++) {
        oneWord += expr[i];
        if (
            ( ((i + 1) % 10 === 0) && i > 0 )
            ||
            ( i === expr.length - 1 && oneWord )
        ) {
            phraseArray.push(oneWord);
            oneWord = '';
        };
    }

    let result = phraseArray.map(letter => {
        let ind = 0;
        let newLetter = '';

        while (ind < letter.length) {
            if (letter[ind] === '1' && (letter[ind + 1] === '0' || letter[ind + 1] === '1')) {

                letter[ind + 1] === '0'
                    ? newLetter += '.'
                    : newLetter += '-';

                ind += 2;

            } else {
                newLetter += letter[ind];
                ind++;
            }
        }

        return newLetter.replace(/0/g, '');
    });

    result.forEach(el => {
        MORSE_TABLE[el]
        ? phraseText += MORSE_TABLE[el]
        : phraseText += ' ';
    })

    return phraseText;
}




module.exports = {
    decode
}