function solution1(input) {
    var sum = 0;
    for (i=1; i < input; i++) {
        if (i % 3 === 0) {
            sum += i;
        } else if (i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
};


var solution2 = function() {
    var a = 0;
    var b = 1;
    var sum = 0;
    var totalSum = 0;
    
    while (b < 4000000) {
        sum = a + b;
        a = b;
        b = sum;
        
        if (b % 2 === 0) {
            totalSum += sum;
        }
        
    }
    return totalSum;
};

function solution3(a) {
    b = 2;
while (a>b) {
    if (a%b === 0) {
        a = a/b;
        b=2;
    } else {
        b += 1;
    }
}
console.log(a);
};

function solution6() {
    var sum = 0;
    var sumSqrt = 0;
    for (x=0; x<=100; x++) {
        sum += x;
        var sqrtSum = sum*sum;
    }
    for (y=1; y<=100; y++) {
        var a = y * y;
        sumSqrt += a;
    }
    return sqrtSum - sumSqrt;
};
