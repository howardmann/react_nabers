const DATA_TARGET = [{
    "nabers": 0,
    "targetReduction": 0.25
  },
  {
    "nabers": 1,
    "targetReduction": 0.2
  },
  {
    "nabers": 2,
    "targetReduction": 0.15
  },
  {
    "nabers": 3,
    "targetReduction": 0.15
  },
  {
    "nabers": 4,
    "targetReduction": 0.1
  },
  {
    "nabers": 5,
    "targetReduction": 0.05
  },
  {
    "nabers": 6,
    "targetReduction": 0.05
  }
]

let calcTargetReduction = ({nabers}) => {
  return DATA_TARGET
    .filter(el => el.nabers === nabers)[0].targetReduction
}

module.exports = calcTargetReduction