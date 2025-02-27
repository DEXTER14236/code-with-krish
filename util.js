function getMinNumber(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      return {
        status: 400,
        data: {
          error: `both parameters should be numbers`,
        },
      };
    }
    return {
      status: 200,
      data: {min: Math.min(num1, num2)},
    };
  }




function getMaxNumber(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      return {
        status: 400,
        data: {
          error: `both parameters should be numbers`,
        },
      };
    }
    return {
      status: 200,
      data: {max: Math.max(num1, num2)},
    };
  }




function getAvgNumber(num) {
    if (num.length === 0 || num.some(isNaN)) {
        return {
            status: 400,
            data: {
                error: "Invalid Input Numbers",
            },
        };
    } else {
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            sum += num[i];
        }
        return {
            status: 200,
            data: {
                average: sum / num.length,
            },
        };
    }
}


function accendingordr(num){
if (num.length === 0 || num.some(isNaN)) {
    return {
        status: 400,
        data: {
            error: "Invalid number format",
        },
    };
}

for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length - 1 - i; j++) {
      
        if (num[j] > num[j + 1]) {
            let temp = num[j];
            num[j] = num[j + 1];
            num[j + 1] = temp;
        }
    }
}


return {
    status: 200,
    data: {
        sorted: num,
        length: num.length,
    },
};
}

module.exports = { getMaxNumber ,getMinNumber,getAvgNumber,accendingordr};
