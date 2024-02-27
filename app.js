const createDots1 = (str) => {
    let maxComb = Math.pow(2, str.length - 1) - 1;
    let maxBinNum = maxComb.toString(2);

    const result = [];
    for (let i = 0; i <= maxComb; i++) {
        let binCounter = i.toString(2);
        if (binCounter.length < maxBinNum.length) {
            binCounter = binCounter.padStart(maxBinNum.length, 0);
        }
        const res = [...str].map((item, idx) => {
            return item + (binCounter[idx] === "1" ? '.' : '');
        }).join('')
        result.push(res)
    }
    return result;
}
console.time('1')
console.log(createDots1('abcde'))
console.timeEnd('1')


// Optimized app----------------------------------------------------------------

const createDots2 = (str) => {
    let maxComb = Math.pow(2, str.length - 1) - 1;
    const result = [];
    const res = [...str].reverse()
    for (let i = maxComb; i >= 0; i--) {
        let item = '';

        let binCounterRevs = i.toString(2).split('').reverse().join('');
        const restArr = res.slice(binCounterRevs.length)
        for (let i = 0; i < binCounterRevs.length; i++) {
            item += res[i] + (binCounterRevs[i] === "1" ? '.' : '')
        }
        result.push((item + restArr.join('')).split('').reverse().join(''))
    }
    return result.reverse();
}
console.time('2')
console.log(createDots2('abcde'))
console.timeEnd('2')
