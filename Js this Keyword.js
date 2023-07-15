let Arr = [1,2,3,4,5,6];

Arr.forEach(function(value , index){
            document.write("[" + index + "]" + value + "<br>");
            })  // Printing Elements of the array using forEach function

for(let i=0;i<Arr.length;i++){
  document.write(Arr[i] + "<br>");
}

for(let i of Arr){
  document.write(i + "<br>");
} // Use of loop of for printing elements of the array (Loop in only used with objects)

let count = 0;
let string = "Rahul the great";
for(let i of string){
  document.write(i + " ");
  if(i == 'a'){
    count++;
  }
}
document.write(count);  // Making for of loop to work with strings

let obj = {
  Name : 'Rahul',
  LastName : 'Borkar'
}

