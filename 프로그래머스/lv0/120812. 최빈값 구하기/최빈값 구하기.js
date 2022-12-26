function solution(array) {
    const count = array.reduce((pv, cv) => {
        pv[cv] = (pv[cv] || 0) + 1
        return pv
    }, {})

    const max = Math.max(...Object.values(count));
    const result = Object.keys(count).filter(el => count[el] === max);
    
    return result.length === 1 ? +result : -1
}