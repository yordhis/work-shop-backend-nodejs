require('dotenv').config()

module.exports = {
    token: {
      key: process.env.DATABASE_HOST,
      expiresIn: process.env.EXPIRES_IN
    }
  }
  
