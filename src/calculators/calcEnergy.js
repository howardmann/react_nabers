const DATA_NABERS = [{
    "nabers": 0,
    "state": "NSW",
    "energyPerSqm": 20
  },
  {
    "nabers": 1,
    "state": "NSW",
    "energyPerSqm": 18
  },
  {
    "nabers": 2,
    "state": "NSW",
    "energyPerSqm": 16
  },
  {
    "nabers": 3,
    "state": "NSW",
    "energyPerSqm": 14
  },
  {
    "nabers": 4,
    "state": "NSW",
    "energyPerSqm": 12
  },
  {
    "nabers": 5,
    "state": "NSW",
    "energyPerSqm": 10
  },
  {
    "nabers": 6,
    "state": "NSW",
    "energyPerSqm": 8
  },
  {
    "nabers": 0,
    "state": "VIC",
    "energyPerSqm": 18
  },
  {
    "nabers": 1,
    "state": "VIC",
    "energyPerSqm": 16.5
  },
  {
    "nabers": 2,
    "state": "VIC",
    "energyPerSqm": 15
  },
  {
    "nabers": 3,
    "state": "VIC",
    "energyPerSqm": 13.5
  },
  {
    "nabers": 4,
    "state": "VIC",
    "energyPerSqm": 12
  },
  {
    "nabers": 5,
    "state": "VIC",
    "energyPerSqm": 10.5
  },
  {
    "nabers": 6,
    "state": "VIC",
    "energyPerSqm": 9
  },
  {
    "nabers": 0,
    "state": "QLD",
    "energyPerSqm": 22
  },
  {
    "nabers": 1,
    "state": "QLD",
    "energyPerSqm": 20.9
  },
  {
    "nabers": 2,
    "state": "QLD",
    "energyPerSqm": 19.8
  },
  {
    "nabers": 3,
    "state": "QLD",
    "energyPerSqm": 18.7
  },
  {
    "nabers": 4,
    "state": "QLD",
    "energyPerSqm": 17.6
  },
  {
    "nabers": 5,
    "state": "QLD",
    "energyPerSqm": 16.5
  },
  {
    "nabers": 6,
    "state": "QLD",
    "energyPerSqm": 15.4
  }
]

let findEnergyPerSqm = ({state, nabers}) => {
  let row = DATA_NABERS
    .filter(el => el.state === state)
    .filter(el => el.nabers === nabers)
  return row[0].energyPerSqm
}

let calcEnergy = ({state, nabers, size}) => {
  let energyPerSqm = findEnergyPerSqm({
    state,
    nabers
  })
  let annualEnergy = energyPerSqm * Number(size)
  return annualEnergy
}

module.exports = calcEnergy

