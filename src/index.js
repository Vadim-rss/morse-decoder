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
    let number = expr.length / 10;
    let arr = [];
    for (let i = 0; i < number; i++){
        let start = i * 10;
        let end = start + 10;
        let str1 = expr.substring (start, end);
        
        let symbol = str1.replace(/11/g, '-').replace(/10/g, '.').replace(/0/g, '')

        if (symbol === '**********') {
            arr.push(' ')
        }
        arr.push(MORSE_TABLE[symbol]);
    }
    return arr.join('')
}

module.exports = {
    decode
}