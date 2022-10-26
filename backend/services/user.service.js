const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const { models } = require('./../libs/sequelize');

class UserServices {
  constructor() {}

  async findAll() {
    const allUsers = await models.User.findAll();

    return allUsers;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id, {
      include: ['contacts'],
    });

    if (!user) {
      throw boom.notFound('User not found');
    }

    return user;
  }

  async findByEmail(email) {
    const userEmail = await models.User.findOne({
      where: { email },
    });

    return userEmail;
  }

  async create(data) {
    const hash = await bcrypt.hash(data.password, 10);
    const newData = {
      ...data,
      password: hash,
    };
    const user = await models.User.create(newData);
    //Delete password in the returned value
    delete user.dataValues.password;
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
