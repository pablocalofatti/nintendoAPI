const config = {
    environment: 'development',
    common: {
      database: {
        name: process.env.DB_NAME_DEV
      }
    },
    isDevelopment: true
  };

export default config;