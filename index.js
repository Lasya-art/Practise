// //let counter=0
// function inc(counter)

// {
// try{
//     inc(counter+1)
         
// }
// catch(error){
// console.log(error)
// console.log(counter)
// }

// }
// inc(0)
// try{
 
// }
// catch (error) {
//     console.error("An error occurred:", error.message);
//     console.log(`Counter value when the error occurred: ${counter}`);


// }

// const factorial = (n) => {
//     if (n === 0) return 1; // The base case, to stop recursion
//     return n * factorial(n - 1); // The recursive call
//   }
// const facto = (n, a = 1) => {
//     if (n === 0) return a;
//     return () => facto(n - 1, n * a);
//   }

// const trampoline = (f, ...args) => {
//     let result = f(...args);
//     while (typeof result === "function") {
//       result = result();
//     }
//     return result;
//   }
  
//   /**
//    * Now, we can call the factorial function with as high
//    * a number as we would like (as long as we don't run into
//    * other errors, like exceeding MAX_SAFE_INTEGER, or looping
//    * too many times...).
//    * 
//    * Unfortunately, both of these are the case here, but
//    * the principle of trampolining holds!
//    */
//   console.log(trampoline(facto(10000)))

// part2

// function flatten(arr) {
//     let result = [];
    
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         // If the item is an array, recursively flatten it
//         result = result.concat(flatten(arr[i]));
//       } else {
//         // If the item is not an array, just push it to the result array
//         result.push(arr[i]);
//       }
//     }
    
//     return result;
//   }


  const nestedArray = [1, [2, [3, 4], 5], [6, [7, [8]]]];
 // console.log(flatten(nestedArray));
  
  function trampoline(fn) {
    return function(...args) {
      let result = fn(...args);
      while (typeof result === 'function') {
        result = result();
      }
      return result;
    };
  }
  
  function flattenTrampolined(arr) {
    function flatten(arr, acc = []) {
      return function() {
        for (let i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i])) {
            let nestedArray = arr[i];

            let remainingArray = [];
            for (let j = i + 1; j < arr.length; j++) {
              remainingArray.push(arr[j]);
            }

        
        let combinedArray = nestedArray.concat(remainingArray);

        
        return flatten(combinedArray, acc);
              } else {
            
            acc.push(arr[i]);
          }
        }
        return acc;
      };
    }
  
    return trampoline(flatten)(arr);
  }
  console.log(flattenTrampolined(nestedArray));
  

  //part3
  // Function to check if a number is prime
//   function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// function displayPrimes(n) {
//     const outputElement = document.getElementById('output');
//     let currentNumber = 1;

//     function processNextNumber() {
//         if (currentNumber > n) {
//             alert("Calculation complete!");
//             return;
//         }

//         if (isPrime(currentNumber)) {
//             const para = document.createElement("p");
//             para.textContent = currentNumber;  
//             outputElement.appendChild(para);  
//         }

//         currentNumber++;
//         setTimeout(processNextNumber, 0); 
//     }

//     processNextNumber();
// }

// displayPrimes(10000);
