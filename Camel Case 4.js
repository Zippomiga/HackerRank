// Camel Case is a naming style common in many programming languages. In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

// Your task is to write a program that creates or splits Camel Case variable, method, and class names.

// Input Format

// Each line of the input file will begin with an operation (S or C) followed by a semi-colon followed by M, C, or V followed by a semi-colon followed by the words you'll need to operate on.
// The operation will either be S (split) or C (combine)
// M indicates method, C indicates class, and V indicates variable
// In the case of a split operation, the words will be a camel case method, class or variable name that you need to split into a space-delimited list of words starting with a lowercase letter.
// In the case of a combine operation, the words will be a space-delimited list of words starting with lowercase letters that you need to combine into the appropriate camel case String. Methods should end with an empty set of parentheses to differentiate them from variable names.
// Output Format

// For each input line, your program should print either the space-delimited list of words (in the case of a split operation) or the appropriate camel case string (in the case of a combine operation).

// Sample Input                    Sample Output

// S;M;plasticCup()                plastic cup
// C;V;mobile phone                mobilePhone
// C;C;coffee machine              CoffeeMachine
// S;C;LargeSoftwareBook           large software book
// C;M;white sheet of paper        whiteSheetOfPaper()
// S;V;pictureFrame                picture frame


function processData(input) {
    const sentences = input.split(/\r\n/)
    let ans = ''

    sentences.forEach(sentence => {
        const exec = sentence.slice(0,1)
        const operator = sentence.slice(0,4)
        const words = sentence.slice(4, sentence.length).split('')
        const L = words.length

        for(let i = 0; i < L; i++) {
            if(exec === 'C') {
                if(words[i] === ' ') {
                    words[i+1] = words[i+1].toUpperCase()
                    words.splice(i, 1)
                } 
            }
            if(exec === 'S') {
                if(words[i] === words[i].toUpperCase()) {
                    words.splice(i, 0, ' ')
                    i++
                } 
            }
        }

        const R = words.join('')

        const output = {
            'C;C;': () => R.replace(R[0], R[0].toUpperCase()),
            'C;M;': () => R + '()',
            'C;V;': () => R,
            'S;C;': () => R.toLowerCase(),
            'S;M;': () => R.toLowerCase().replace('()', ''),
            'S;V;': () => R.toLowerCase()
        }

        ans += `${output[operator]().trim()}\n`
    })

    console.log(ans.trim())
}


// NOTE: the code passes the HackerRank's tests, but at any IDE it returns imprecise values.
// It's not a problem of my code, many users have had and reported the same issue.
// Removing the "\r" at the const "sentences" will return the correct output.