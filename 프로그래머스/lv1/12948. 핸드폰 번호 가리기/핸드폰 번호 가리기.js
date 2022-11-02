function solution(phone_number) {
    // const a = phone_number.slice(phone_number.length - 4, phone_number.length)
    return "*".repeat(phone_number.length - 4) + phone_number.slice(phone_number.length - 4, phone_number.length)
}