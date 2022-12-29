function solution(denum1, num1, denum2, num2) {    
    const fraction = [denum1 * num2 + denum2 * num1, num1 * num2]
    
    let abbreviation = 0
    for (let i=1; i<=Math.max(...fraction); i++) {
        if (fraction[0] % i === 0 && fraction[1] % i === 0) abbreviation = i
    }
    
    return fraction.map(el => el / abbreviation)
}