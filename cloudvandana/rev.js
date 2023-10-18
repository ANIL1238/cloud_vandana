function reverseWordsInSentence(sentence) {
    const words = sentence.split(' ');
    
    for (let i = 0; i < words.length; i++) {
        words[i] = reverseWord(words[i]);
    }
    
    return words.join(' ');
}

function reverseWord(word) {
    return word.split('').reverse().join('');
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);

console.log("Reversed Sentence: " + reversedSentence);
