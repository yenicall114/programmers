const solution = (absolutes, signs) => {
    let result = 0;
    
    for (let i=0; i<absolutes.length; i++) {
        if (signs[i] === false)  {
            result -= absolutes[i]
        } else {
            result += absolutes[i]
        }
    }
    return result
}