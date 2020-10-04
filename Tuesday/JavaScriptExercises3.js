var numbers = [1,3,5,10,11], sum;


// ikke rigtig, men jeg ved sku ikke
const array = numbers.map((current, index) => current += index);
console.log("Opg 3a")
console.log(array);

var people = ["Hassan", "Peter", "Jan", "Boline"];
const display = people.map(item => {
    return '<a href="">' + item + '</a>' + '\n';
    })
    const line = '<nav>' + '\n' + display.join('') + '</nav>';
console.log("Opg 3b")
console.log(line)