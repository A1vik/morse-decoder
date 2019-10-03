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
    // console.log(expr);
    let decodedWords = '';

    // one letter = 10 symbols, space = 10 *;

    for (let i = 0; i < expr.length; i += 10) {
        let letterInNums = expr.substr(i, 10);

        if (letterInNums === '**********') {
            decodedWords += ' ';
        } else {
            // Every ten characters contain 10 = . and 11 = -,
            // except for the first zeros. 

            let letterInMorse = '';

            for (let j = 0; j < expr.length; j += 2) {
                let symbol = letterInNums.substr(j, 2);
                // console.log(symbol);

                if(symbol === '10') {
                    letterInMorse += '.';
                }
                if(symbol === '11') {
                    letterInMorse += '-';
                }
                // continue;
            }
            decodedWords += MORSE_TABLE[letterInMorse];
        }
    }

    return decodedWords;
}

module.exports = {
    decode
}