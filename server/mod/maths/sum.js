
exports.sum = (n)=> {
    
    if (n === 0 || n === 1) {
        return n;
    }
  
    return n + exports.sum(n - 1);
};
