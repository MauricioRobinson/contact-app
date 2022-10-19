const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class UserServices {
  constructor() {}

  async findAll() {
    const allUsers = await models.User.findAll();

    return allUsers;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);

    if (!user) {
      throw boom.notFound('User not found');
    }

    return user;
  }

  async create(data) {
    const user = await models.User.create(data);

    return user;
  }

  async update(id, data) {
    const user = await this.findOne(id);
    const updateUser = await user.update(data);

    return updateUser;
  }

  async delete(id) {
    const user = await this.findOne(id);

    await user.destroy();

    return id;
  }
}

module.exports = UserServices;
