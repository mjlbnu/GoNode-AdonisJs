'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Task extends Model {
  project () {
    this.belongsTo('App/Models/Project')
  }

  user () {
    this.belongsTo('App/Models/User')
  }

  file () {
    this.belongsTo('App/Models/File')
  }
}

module.exports = Task
