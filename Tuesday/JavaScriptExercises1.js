var names = ["Hassan", "Jan", "Peter", "Boline", "Frederik"];

var result = names.filter(name => name.includes("a"));
  console.log("Ufiltreret: ", names)  
  console.log("Filtreret:", result);

  var result1 = names.map(name => name).reverse();
  console.log("Omvendt array: ",result1);

  