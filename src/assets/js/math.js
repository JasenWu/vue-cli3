
// 求某个数的因数
const getFactor = function (num) {
  let res = []
  if (typeof num === 'number') {
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        res.push(i)
      }
    }
  }
  return res
}

// 某数是否是素数/质数
const isPrimeNumber = function (num) {
  let res = []
  if (typeof num === 'number' && num > 0) {
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        res.push(i)
      }
    }
  }
  return res[0] === 1 && res[1] === num && num !== 1
}
// 某数是否是合数
const isCompositeNumber = function (num) {
  return !isPrimeNumber(num) && num !== 1 // 不是质数又不等于1的正整数
}

// 某数是否是偶数
const isEvenNumber = function (num) {
  return typeof num && num % 2 === 0
}

// 某数是否是奇数
const isOddNumber = function (num) {
  return typeof num && num % 2 !== 0
}

// 分解素因数
const getPrimeFactor = function (num) {
  let res = []
  let factors = getFactor(num)
  factors.forEach((d, i) => {
    if (isPrimeNumber(d)) {
      res.push(d)
    }
  })
  return res
}

// 求两个数的最大公因数
const greatestCommonFactor = function (num1, num2) {
  let factorNum1 = getFactor(num1)
  let factorNum2 = getFactor(num2)
  let res = []
  factorNum1.forEach((d, i) => {
    if (factorNum2.includes(d)) {
      res.push(d)
    }
  })
  return Math.max.apply(null, res)
}

// 求n数的最大公因数  //todo
const greatestCommonFactorN = function (nums) {
  let primeFactor = {}// 素数对象

  nums.forEach((d, i) => {
    primeFactor[d] = (function (n) {
      return getPrimeFactor(n)
    }(d))
  })

  let longestFactor = (function (primeFactor) {
    let l = 0
    let k = ''
    let t = 0
    for (let x in primeFactor) {
      if (t === 0) {
        l = primeFactor[x].length
        k = x
      }

      if (primeFactor[x].length > l) {
        k = x
      }
    }
    return primeFactor[k]
  })(primeFactor)

  let len = Object.keys(longestFactor).length
  let result = []
  longestFactor.forEach((d, i) => {
    for (let x in primeFactor) {
      if (primeFactor[x].includes(d)) {
        result.push(true)
      };
    }
  })

  if (len === result.length) {

  }

  return longestFactor
}

export default {
  getFactor, isPrimeNumber, isCompositeNumber, isEvenNumber, isOddNumber, getPrimeFactor, greatestCommonFactor, greatestCommonFactorN
}
