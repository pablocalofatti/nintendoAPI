const config = {
    environment: 'production',
    common: {
      database: {
        name: process.env.DB_NAME
      }
    },
    isProduction: true
};

export default config;