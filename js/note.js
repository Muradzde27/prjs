// console.log("hello world")
// console.log("My name is Murad")

////////////////////////////////////////////////////////

// let num = 42; 

// let fifthPower = num ** 5;
// let remainder = num % 3;
// console.log("The fifth power of the number:", fifthPower);
// console.log("The remainder when divided by 3:", remainder);

////////////////////////////

// let firstName = "Murat"; 
// let lastName = "Aliyev";

// console.log(`Sizi bir daha görməyimizə şadıq, ${firstName} ${lastName}.`);

// const name = prompt("Adınızı daxil edin:");
// console.log(`Salam, ${name}!`);

////////////////////////////////////////////////////////

// let age = prompt("Yaşınızı daxil edin:");

// if (age < 18) {
//     alert("İcazə verilmədi");
// } else {
//     alert("İcazə verildi");
// }

////////////////////////////////////////////////////////

// let firstName = prompt("Write your name"); 
// let lastName = prompt("Write your surname");

// console.log(`Salam, ${firstName} ${lastName}.`);

////////////////////////////////////////////////////////

// let id = prompt('məhsul id daxil edin:');
// if (id === '1') {
//     alert('Mövcud 10 ədəd.');
// } else if (id === '2') {
//     alert('Mövcud 256 ədəd.');
// } else if (id === '3') {
//     alert('53 ədəd mövcuddur.');
// } else if (id === '4') {
//     alert('Mövcud 3 ədəd.');
// } else {
//     alert('Mövcud deyil');
// }

////////////////////////////////////////////////////////

// const monthNames = [
//     "yanvar", "fevral", "mart", "aprel", "may", "iyun",
//     "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"
// ];

// const inputDate = prompt("Tarixi 'YYYY.MM.DD' formatında daxil edin:");
// const parts = inputDate.split('.');

// if (parts.length === 3) {
//     const year = parts[0];
//     const month = parseInt(parts[1]);
//     const day = parseInt(parts[2]);

//     if (month >= 1 && month <= 12 && day >= 1 && day <= 31) {
//         console.log(`${day} ${monthNames[month - 1]} ${year}-cu il`);
//     } else {
//         console.log("Yanlış tarix daxil edilib!");
//     }
// } else {
//     console.log("Format səhvdir! 'YYYY.MM.DD' şəklində daxil edin.");
// }

////////////////////////////////////////////////////////

// const monthNumber = parseInt(prompt("Ayın nömrəsini daxil edin (1-12):"));

// let monthName;

// switch (monthNumber) {
//     case 1:
//         monthName = "Yanvar";
//         break;
//     case 2:
//         monthName = "Fevral";
//         break;
//     case 3:
//         monthName = "Mart";
//         break;
//     case 4:
//         monthName = "Aprel";
//         break;
//     case 5:
//         monthName = "May";
//         break;
//     case 6:
//         monthName = "İyun";
//         break;
//     case 7:
//         monthName = "İyul";
//         break;
//     case 8:
//         monthName = "Avqust";
//         break;
//     case 9:
//         monthName = "Sentyabr";
//         break;
//     case 10:
//         monthName = "Oktyabr";
//         break;
//     case 11:
//         monthName = "Noyabr";
//         break;
//     case 12:
//         monthName = "Dekabr";
//         break;
//     default:
//         console.log("Yanlış ay nömrəsi daxil edildi!");
//         monthName = null;
// }

// if (monthName) {
//     console.log(`Seçilmiş ay: ${monthName}`);
// }


////////////////////////////////////////////////////////

// function greeting(name) {
//     name = "Murad";
//     console.log(`${name} is a JS developer`);
// }

// greeting(" ");

////////////////////////////////////////////////////////

// function userActiveMessage(username) {
//     console.log(`${username} is active now`);
// }

// userActiveMessage("Murad");
// userActiveMessage("Daniz");
// userActiveMessage("Yusif");

////////////////////////////////////////////////////////

// function findLargestNumber(num1, num2, num3) {
//     let largest = num1;

//     if (num2 > largest) {
//         largest = num2;
//     }
//     if (num3 > largest) {
//         largest = num3;
//     }

//     console.log("The largest number is:", largest);
// }

// findLargestNumber(10, 20, 15); 

////////////////////////////////////////////////////////

// function min(a, b) {
//     return a < b ? a : b;
// }

// console.log(min(5, 10));

////////////////////////////////////////////////////////////////////////////////////

// function isValidNumber(phoneNumber) {
//     if (phoneNumber.startsWith('+7') && phoneNumber.length == 12) {
//         return true;
//     }
//     return false;
// }

// console.log(isValidNumber("+71234567890")); 
// console.log(isValidNumber("+7123456789"));  
// console.log(isValidNumber("81234567890"));  

///////////////////////////////////////////////////////////////////////

// function capitalizeWords(text) {
//     return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }

// console.log(capitalizeWords('Hello my name is Harry')); 

// ///////////////////////////////////////////////////////////////////////////////////////

// function isValidNumber(phoneNumber) {
//     return phoneNumber.length === 11 && phoneNumber.startsWith('+7');
// }

// console.log(isValidNumber('+71234567890')); 
// console.log(isValidNumber('81234567890')); 

// ///////////////////////////////////////////////////////////

// function isLucky(number) {
//     const str = number.toString();
//     if (str.length !== 6) return false;

//     const firstHalf = str.slice(0, 3);
//     const secondHalf = str.slice(3);

//     const sumFirstHalf = firstHalf.split('').reduce((sum, digit) => sum + Number(digit), 0);
//     const sumSecondHalf = secondHalf.split('').reduce((sum, digit) => sum + Number(digit), 0);

//     return sumFirstHalf === sumSecondHalf;
// }

// console.log(isLucky(234801));

// ///////////////////////////////////////////////////////////////////////////////////////

// function numCounter(text) {
//     return text.replace(/[^a-zA-Z]/g, '').length;
// }

// console.log(numCounter("Hello World!"));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let number = parseInt(prompt("Please enter a two-digit number:"));

// if (number >= 10 && number <= 99) {
//     while (number < 100) {
//         number += 7;
//     }
//     console.log("The final value is: " + number);
// } else {
//     console.log("Invalid input. Please enter a valid two-digit number.");
// }

// let product = 1;

// for (let i = 1; i <= 10; i++) {
//     product *= i;
// }

// console.log("The product of numbers from 1 to 10 is:", product);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let product = 1;

// for (let i = 1; i <= 10; i++) {
//     product *= i;
// }

// console.log("Answer:", product);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let userInput = prompt("Zəhmət olmasa mətn daxil edin:");

// if (userInput) {
//     let reversedText = userInput.split('').reverse().join('');

//     console.log("Əks qaydada düzülmüş mətn:", reversedText);
// } else {
//     console.log("Mətn daxil edilməyib.");
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let userInput = prompt("Zəhmət olmasa mətn daxil edin:");

// if (userInput) {
//     let indexOfA = userInput.indexOf('a');
    
//     if (indexOfA !== -1) {
//         console.log("'a' hərfinin ilk dəfə yerleşdiyi indeks:", indexOfA);
//     } else {
//         console.log("'a' hərfi mətndə tapılmadı.");
//     }
// } else {
//     console.log("Mətn daxil edilməyib.");
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////