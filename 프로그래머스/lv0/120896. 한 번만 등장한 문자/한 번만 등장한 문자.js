function solution(s) {
    let str = [...s]
    let arr = []
    
    for (let i=0; i<str.length; i++) {
        for (let j=i+1; j<str.length; j++) {
            if (str[i] === str[j]) arr.push(str[i])
        }
    }
    
    const newArr = [...new Set(arr)].join("")
	const regex = new RegExp(`[${newArr}]`, 'g');
    
    return [...s.replace(regex, "")].sort().join("")
}