module.exports = function rev(n) {
    let r = 0;
    while (n != 0) {
        let l = n % 10;
        r = r * 10 + l;
        n = Math.floor(n / 10); 
    }
    return `reverse of ${n} : ${r}`;
};

