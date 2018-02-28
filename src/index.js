// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var H = 50, Q = 25, D = 10, N = 5, P = 1;
var res1 = res2 = res3 = res4 = res5 = 0; 
var res2 = 0, res3 = 0, res4 = 0, res5 = 0;
var total = {};
while (currency) {
    if (currency > 10000) {
        Object.assign(total, {error : "You are rich, my friend! We don't have so much coins for exchange"});
        break;
    }
    if (currency <= 0) {
        Object.assign(total, {});
        break;
    }
   if (currency % H == 0) {
        res1 += currency/H;
        currency -= currency;
    }
    else {
        res1 += Math.floor(currency / H);
        currency = currency - (res1*H);    
    }
    if (currency % Q == 0) {
        res2 += currency/Q;
        currency -= currency;
    }
    else {
        res2 += Math.floor(currency / Q);
        currency = currency - (res2*Q); 
    }
    if (currency % D == 0) {
        res3 += currency/D;
        currency -= currency;
    }
    else {
        res3 += Math.floor(currency / D);
        currency = currency - (res3*D); 
    }
    if (currency % N == 0) {
        res4 += currency/N;
        currency -= currency;
    }
    else {
        res4 += Math.floor(currency / N);
        currency = currency - (res4*N); 
    }
res5 += currency;
currency -= currency;
}

Object.assign(total, (res1 > 0) ? {"H" : res1} : null,
                     (res2 > 0) ? {"Q" : res2} : null,
                     (res3 > 0) ? {"D" : res3} : null,
                     (res4 > 0) ? {"N" : res4} : null,
                     (res5 > 0) ? {"P" : res5} : null);
return total;
}
