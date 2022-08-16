const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => {
  if (env('NODE_ENV') === 'production') {
    return{
      connection: {
        client: 'postgres',
        connection: {
          host: config.host,
          port: config.port,
          database: config.database,
          user: config.user,
          password: config.password,
          ssl: {
            rejectUnauthorized: false
          },
        },
        debug: false,
      },
    }
  }

  return {
    connection: {
      client: 'mysql',
      connection: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'ptallerdb'),
        user: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', 'ExoLca@0230'),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  }
};
