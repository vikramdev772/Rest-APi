// export default function fib(n) {
    function fib(n) {
        if (n <= 0) return 'n should be greater than 0';
        let fs = [0, 1];
        for (let i = 2; i < n; i++) {
            fs.push(fs[i - 1] + fs[i - 2]);
        }
        return `\n\tfibonacci (${n}) : ${fs.slice(0, n).join(', ')}`;
    }
    
    module.exports = fib;
    