module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', ''),
        password: env('DATABASE_PASSWORD', ''),
        // client: 'mysql',
        // host: env('DATABASE_HOST', '127.0.0.1'),
        // port: env.int('DATABASE_PORT', 3306),
        // database: env('DATABASE_NAME', 'branchless_cms'),
        // username: env('DATABASE_USERNAME', 'root'),
        // password: env('DATABASE_PASSWORD', ''),
        // ssl: env.bool('DATABASE_SSL', false),
      },
      // options: {}
      options: {
        autoMigration: true,
        ssl: false,
      },
    },
  },
});
