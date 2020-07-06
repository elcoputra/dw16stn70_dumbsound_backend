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
    use_env_variable: process.env.DATABASE_URL
    username: 'postgre',
    password: 1234,
    database: 'dumbsound-test',
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  production: {
    use_env_variable: process.env.DATABASE_URL
    username: 'postgre',
    password: 1234,
    database: 'dumbsound_production',
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
  },
};
