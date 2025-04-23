// let user = {
//     name: "Murad",
//     surname: "Mammadzada",
//     gender: "Male",
//     birthday: "20.12.2006"
// }
// user.age = 18;
// delete user.birthday;

// console.log(user)

////////////////////////////////////////////////////////////////////

// const user = {
//     age: 0,

//     setAge(newAge) {
//       this.age = newAge; 
//       console.log(`Yash yenilend ${this.age}`);
//     },
  
//     getYearsBeforeRetirement(retirementAge = 65) {
//       if (this.age >= retirementAge) {
//         console.log("Bu insan artig pensiyadadi");
//         return 0;
//       }
//       const yearsLeft = retirementAge - this.age; 
//       console.log(`Pensiyaya ${yearsLeft} galib`);
//       return yearsLeft; 
//     }
//   };
  
//   user.setAge(30); 
//   user.getYearsBeforeRetirement();

//////////////////////////////////////////////////////////////////////


// class Person {
//     constructor(surname, name, age, gender) {
//       this.surname = surname; 
//       this.name = name;      
//       this.age = age;        
//       this.gender = gender;  
//     }
  

//     PersonInfo() {
//       return `Name: ${this.name}, Surname: ${this.surname}, Age: ${this.age}, Gender: ${this.gender}`;
//     }
//   }


//   const person1 = new Person("Aliyev", "Ali", 30, "Male");
//   const person2 = new Person("Huseynova", "Leyla", 25, "Female");
//   const person3 = new Person("Mammadov", "Rashid", 40, "Male");
  

//   console.log(person1.PersonInfo());
//   console.log(person2.PersonInfo());
//   console.log(person3.PersonInfo());

//////////////////////////////////////////////////////////////////////

// class Person {
//     constructor(name, age) {
//       this.name = name; 
//       this.age = age;  
//     }
  
//     Birthday() {
//       this.age += 1;
//       console.log(`Happy Birthday, ${this.name}! You are now ${this.age} years old.`);
//     }
//   }
  
//   const person = new Person("Ali", 30);
//   console.log(`Name: ${person.name}, Age: ${person.age}`);
//   person.Birthday(); 
//   console.log(`Name: ${person.name}, Age: ${person.age}`);