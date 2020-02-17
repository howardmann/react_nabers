let calcTargetReduction = require('../calcTargetReduction.js')

describe('calcTargetReduction', () => {
  it('calculates annual percent reduction', () => {
    let input = calcTargetReduction({nabers: 5})
    let actual = 0.05
    expect(input).toBe(actual)
  })

  it('calculates annual energy percent reduction for different NABERS', () => {
    let input = calcTargetReduction({nabers: 4})
    let actual = 0.10
    expect(input).toBe(actual)
  })
})