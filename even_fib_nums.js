/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;




  let arrFib=[0,1];
  let arrFibEven=[];

  //create arrays of Fib numbers and even Fib numbers

  for (i=2; i<10000000; i++){
    arrFib[i] = arrFib[i-2] + arrFib[i-1];
    //console.log(arrFib[i]);
    arrFib.push(arrFib[i]);
    //console.log(arrFib);
    if (arrFib[i]%2===0){
      arrFibEven.push(arrFib[i]);
      //console.log(arrFibEven);
    }
  }

  //iterate through array of even Fib numbers and sum up numbers less than maxFibValue

  for(i=0; i<10000002; i++){
    if (arrFibEven[i] <= maxFibValue){
      sum += arrFibEven[i];
    }




  }

  return sum;
}




// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //let arrFib=[0,1];
  //let arrFibEven=[];


  // //define your base case, validate your input
  // for (i=2; i<10000000; i++){
  //   arrFib[i] = arrFib[i-2] + arrFib[i-1];
  //   //console.log(arrFib[i]);
  //   arrFib.push(arrFib[i]);
  //   //console.log(arrFib);
  //   if (arrFib[i]%2===0){
  //     arrFibEven.push(arrFib[i]);
  //     //console.log(arrFibEven);
  //   }
  // }

  // for(i=0; i<10000002; i++){
  //   if (arrFibEven[i] < maxFibValue){
  //     highest = arrFibEven[i];
  //   }

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};