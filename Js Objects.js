 let obj = {
   Name : 'Rahul',
   FatherName : 'Suresh',
   LastName : ['Rahul','Suresh','Borkar']   // Declaration of an array inside the object
  };  // Declaration of object
 
 // document.write(obj.LastName);
 // console.log(obj.Name);   // Accessing object properties
 
//  obj.Name = 'Great';
// console.log(obj);    // Changing Properties of the Object
 
// obj.Age = 23   // Adding new property to object
// console.log(obj); 
 
// delete obj.FatherName;   // Deleting property from object
// console.log(obj);
 
// for(let key in obj){       // Printing object using for in loop
//   console.log(obj[key]);
// }
 
// console.log('Name' in obj);  
// console.log(obj.hasOwnProperty('Father'));  // Cheacking weather property exist in objet or not

// console.log(obj.LastName[2]);   // Printing Array

let object = {
  ObjName : {
    Name : 'Rahul',
    LastName : 'Borkar'
  },  // Declaring Object inside anouther object
  
  Fun : function(){
    return 'Rahul is Great';
  }
}

// console.log(object.ObjName.LastName);
console.log(object.fun());