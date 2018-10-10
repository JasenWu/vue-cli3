// 合并对象
const extend = function (o, n) {
  for (var p in n) {
    if (n.hasOwnProperty(p) && (!o.hasOwnProperty(p))) {
      o[p] = n[p]
    }
  }
}


equalObj = function (x, y) {
  // If both x and y are null or undefined and exactly the same 
  if (x === y) {
    return true;
  }

  // If they are not strictly equal, they both need to be Objects 
  if (!(x instanceof Object) || !(y instanceof Object)) {
    return false;
  }

  //They must have the exact same prototype chain,the closest we can do is
  //test the constructor. 
  if (x.constructor !== y.constructor) {
    return false;
  }

  for (var p in x) {
    //Inherited properties were tested using x.constructor === y.constructor
    if (x.hasOwnProperty(p)) {
      // Allows comparing x[ p ] and y[ p ] when set to undefined 
      if (!y.hasOwnProperty(p)) {
        return false;
      }

      // If they have the same strict value or identity then they are equal 
      if (x[p] === y[p]) {
        continue;
      }

      // Numbers, Strings, Functions, Booleans must be strictly equal 
      if (typeof (x[p]) !== "object") {
        return false;
      }

      // Objects and Arrays must be tested recursively 
      if (!Object.equals(x[p], y[p])) {
        return false;
      }
    }
  }

  for (p in y) {
    // allows x[ p ] to be set to undefined 
    if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
      return false;
    }
  }
  return true;
};

//求某个数的因数
const getFactor = function(num){
  let res = [];
  if(typeof num === "number"){
    for(let i =1 ;i <= num;i++){
      if(num % i === 0){
        res.push(i);
      }
    }
  }
  return res;
}

 //某数是否是素数/质数
const isPrimeNumber = function(num){
  let res = [];
  if(typeof num === "number" && num >0){
    for(let i =1 ;i <= num;i++){
      if(num % i === 0){
        res.push(i);
      }
    }
  }
  return res[0] === 1 && res[1] === num && num !==1;
}
 //某数是否是合数
 const isCompositeNumber = function(num){
  return !isPrimeNumber(num) && num !== 1; //不是质数又不等于1的正整数
}

//某数是否是偶数
const isEvenNumber = function(num){
  return typeof num  && num % 2 === 0;
}

//某数是否是奇数
const isOddNumber = function(num){
  return typeof num  && num % 2 !== 0;
}

//分解素因数
const getPrimeFactor = function(num){
  let res = [];
  let factors = getFactor(num);
  factors.forEach((d,i)=>{
    if(isPrimeNumber(d)){
      res.push(d);
    }
  })
  return res;
}

//求两个数的最大公因数
const greatestCommonFactor = function(num1,num2){
  let factor_num1 = getFactor(num1);
  let factor_num2 = getFactor(num2);
  let res =[];
  factor_num1.forEach((d,i)=>{
    if(factor_num2.includes(d)){
       res.push(d);
    }
  })
  return Math.max.apply(null,res);
}

//求n数的最大公因数  //todo
const greatestCommonFactorN = function(nums){

  let factor_num1 = getFactor(num1);
  let factor_num2 = getFactor(num2);
  let res =[];
  factor_num1.forEach((d,i)=>{
    if(factor_num2.includes(d)){
       res.push(d);
    }
  })
  return Math.max.apply(null,res);
}




export {
  extend,equalObj
}