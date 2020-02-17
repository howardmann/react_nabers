let calcEnergy = require('../calcEnergy.js')

describe('calcEnergy', () => {
  it('calculates annual energy consumption', () => {
    let input = calcEnergy({
      state: 'NSW', 
      nabers: 5,
      size: 10000
    })
    let actual = 100000
    expect(input).toBe(actual)
  })

  it('calculates annual energy consumption for different NABERS', () => {
    let input = calcEnergy({
      state: 'NSW', 
      nabers: 4,
      size: 10000
    })
    let actual = 120000
    expect(input).toBe(actual)
  })
})