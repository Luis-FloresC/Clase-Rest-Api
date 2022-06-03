const DaoObject = require('../../dao/DaoObject');
module.exports = class Users {
  userDao = null;
  userMemStore = [];
  userCurrentKey = 0;

  constructor(userDao = null) {
    if (!(userDao instanceof DaoObject)) {
      throw new Error('An Instance of DAO Object is Required');
    }
    this.userDao = userDao;
  }
  async init() {
    await this.userDao.init();
    this.userDao.setup();
  }
  async getUsersVersion() {
    return {
      entity: 'Users',
      version: '1.0.0',
      description: 'CRUD de Usuarios'
    };
  }

  async addUser({
    avatar = 'NuevoUsuario',
    password = '',
    email = '',
    nombre = '',
    estado = 'ACT'
  }) {
    const result = await this.userDao.insertOne({
      avatar,
      password,
      email,
      nombre,
      estado,
    });
    return {
      avatar, password, email, nombre, estado, id: result.lastID
    };
  };

  async getUsers() {
    return this.userDao.getAll();
  }

  async getUserById({ id }) {
    return this.userDao.getById({ id });
  }

  async updateUser({ avatar, password, email, nombre, estado, id }) {
    const result = await this.userDao.updateOne({ avatar, password, email, nombre, estado, id });
    return {
      id, avatar, password, email, nombre, estado,modified: result.changes
    }
  }

  async deleteUser({ id }) {
    const userToDelete = await this.userDao.getById({ id });
    const result = await this.userDao.deleteOne({ id });
    return {
      ...userToDelete,
      deleted: result.changes
    };
  }

}
