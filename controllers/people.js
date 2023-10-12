let { people } = require('../data')

// controllers contains the logic for the requests and responses

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people })
}

const createPerson = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'Please provide name value' })
  }
  res.status(201).json({ success: true, person: name })
}

const createPersonPostman = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({
      success: false,
      msg: 'Please provide name value',
    })
  }

  newPerson = { id: people.length + 1, name }
  res.status(201).json({ success: true, data: [...people, newPerson] })
}

const updatePerson = (req, res) => {
  const { id } = req.params //i.e. router.put('/:id',
  const { name } = req.body //information you are updating
  console.log('id received' + id)
  const person = people.find((person) => person.id == Number(id))

  console.log('person ', person)
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: 'no person with id ' + id })
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({
    success: true,
    data: newPeople,
  })
}

const deletePerson = (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res.status(404).json({
      success: false,
      msg: 'no person with id' + req.params.id,
    })
  }

  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  )
  return res.status(200).json({ success: true, data: newPeople })
}

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
}
