module.exports = {
    port: process.env.PORT || 5052,
    db: process.env.MONGODB_URI || 'mongodb://localhost:27017/CRM',
    SECRET_TOKEN: '12345essecreto'
  }