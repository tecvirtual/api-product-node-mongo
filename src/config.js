require('dotenv').config()

export default {
    SECRET: 'BABYMETAL',
    dev: true,
    env: process.env.APP_ENV,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbName: process.env.DB_NAME
}