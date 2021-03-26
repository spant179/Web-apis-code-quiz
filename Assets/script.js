function Quiz(){
    console.log(questions);
   
}

var questions =[
    {
        question: "All interactive websites use JavaScript",
        answers:{
            a: 'true',
            b: 'false'
        },
        correctAnswer: 'a'
    },
    {
        question: "Which built-in method removes the last element from an array and returns that element?",
        answers:{
            a: 'last()',
            b: 'pop()',
            c: 'first()',
            d: 'get()'
        },
        correctAnswer: 'b'

    },
    {
        question: "Which of the following function of Boolean object returns a string containing the source of the Boolean object?",
        answers:{
            a: 'toSource()',
            b: 'valueOf()',
            c: 'toString()',
            d: 'toUpper()'
        },
        correctAnswer: 'a'
    },
    {
        question: "Which of the following function of String object splits a String object into an array of strings by separating the string into substrings?",
        answers:{
            a: 'slice()',
            b: 'replace()',
            c: 'search()',
            d: 'split()'
        },
        correctAnswer: 'd'

    },
    {
        question: "Which of the following function of Array object extracts a section of an array and returns a new array?",
        answers:{
            a: 'reverse()',
            b: 'shift()',
            c: 'slice()',
            d: 'map()'
        },
        correctAnswer: 'c'
    },

]