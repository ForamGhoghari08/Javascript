let str = "red";
let vowels = ['a', 'e', 'i', 'o', 'u'];
let hasVowel = false;

for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (vowels.includes(char)) {
        hasVowel = true;
        break; 
    }
}

console.log(hasVowel);
