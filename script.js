const {names. middleNames, surnames} =require('./app.js');
const format = [names, middleNames, surnames];

const create = () => {
    let output = [];
    format.forEach((list) => {
        let word = list[Math.floor(Math.random() * list.length)];
        output.push(word);
});
    return output.join(" ");
};

console.table({name: create()});