module.exports = {
  development: {
    username: 'postgres',
    password: 1234,
    database: 'dumbsound-dev',
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  test: {
    username: process.env.USER_DATABASE,
    password: process.env.PASSWORD_DATABASE,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    operatorsAliases: false,
  },
  production: {
    username: process.env.USER_DATABASE,
    password: process.env.PASSWORD_DATABASE,
    database: 'dumbsound_production',
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    operatorsAliases: false,
  },
};
