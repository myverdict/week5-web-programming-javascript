let text = 'The classes are itec 1150, itec 1250, itec 2560';

let replaced = text.replace('itec', 'ITEC');
console.log(replaced);

let replacedAll = text.replace(/itec/g, 'ITEC');
console.log(replacedAll);


let message = 'The classes are 1150, 1250, 2560';
let replaceRegex = message.replace(/\d{4}/g, 'itec $&');
console.log(replaceRegex);