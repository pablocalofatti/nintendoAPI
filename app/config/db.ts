import indexConfig from './index';

const config = indexConfig.common.database;

export default {
    development: {
      username: config.username,
      password: config.password,
      database: config.name,
      host: config.host,
      logging: true
    },
    testing: {
      username: config.username,
      password: config.password,
      database: config.name,
      host: config.host,
      logging: false
    },
    production: {
      username: config.username,
      password: config.password,
      database: config.name,
      host: config.host,
      logging: false,
      operatorsAliases: false
    }
  };