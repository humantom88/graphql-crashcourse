const dotenv = require('dotenv')
dotenv.config()

const { PORT, MONGO_CONNECTION } = process.env

module.exports = {
    PORT,
    MONGO_CONNECTION
}