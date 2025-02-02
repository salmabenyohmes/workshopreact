import {Search} from "/src/fonction.js"


function findLongestWord(tabword){
let [...tab]= tabword;
let longwordobjet = tab.map(str =>
({
    mot : str,
    longuermot : str.length
})
);

let longword = longwordobjet.reduce((max,index)=>
index.longuremot > max.longuermot ? index :max )
return longword;


}
console.log(findLongestWord(["chien", "ممم", "تنست", "ضضضضضض"]));

const countOccurrences = (arrays) => {
    return arrays.flat().reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
};

console.log(countOccurrences([["apple", "banana"], ["apple", "orange"], ["banana", "apple"]]));


const calculateTotal = (grades) => {
    return grades.map(grade => grade < 50 ? grade + 15 : grade)
                 .filter(grade => grade > 50)
                 .reduce((sum, grade) => sum + grade, 0);
};

console.log(calculateTotal([30, 80, 45, 90, 50]));





let lastID = 0; 

let Tab = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];


function addID(obj) {
    lastID += 1;
    obj.id = lastID;
}


Tab.forEach(addID);


Tab.push({ name: "Charlie", age: 35 });
addID(Tab[Tab.length - 1]); 

Tab.unshift({ name: "David", age: 40 });
addID(Tab[0]); 

console.log(Tab);

let result = Search(Tab, 2); 
console.log(result);