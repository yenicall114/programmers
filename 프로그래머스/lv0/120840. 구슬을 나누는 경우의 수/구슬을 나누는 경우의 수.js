function solution(balls, share) {
  const fact = [BigInt(1), BigInt(1)]
  for (let i=2; i<=balls; i++) fact[i] = fact[i - 1] * BigInt(i)

  return parseInt(fact[balls] / (fact[balls - share] * fact[share]))
}