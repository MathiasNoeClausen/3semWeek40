var all = ["Hassan", "Peter", "Carla", "Boline"];

var allString = all.join('#');

console.log("Opg 4a")
console.log(allString);

const numbers = [2, 3, 67, 33];
const sum = numbers.reduce((total, current) => total + current, 0); // Hvert element (current) lægges sammen med totalen en efter en
console.log("Opg 4b")
console.log(sum);


const members = [
    {name: "Peter", age: 18},
    {name: "Jan", age: 35},
    {name: "Janne", age: 25},
    {name: "Martin", age: 22}
];

function average(accu, member, index, members) {
    if(index == members.length -1) {
        accu += member.age;
        return accu / members.length;
    }
    return accu + member.age
}

console.log("Opg 4c")
console.log(members.reduce(average,0))


const votes = ["Biden", "Trump", "Biden", "Biden", "Trump", "Trump", "Biden"];

result = votes.reduce((accu, candidate)=>{
    accu[candidate] = accu[candidate]? accu[candidate] + 1: 1;
    return accu;
},{  });
console.log("Opg 4d");
console.log(result);
