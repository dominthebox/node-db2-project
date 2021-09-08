const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  return db('cars').where('id', id).first()
}

const create = () => {
  return 
}

module.exports = {
  getAll,
  getById,
  create
}