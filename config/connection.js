module.exports = {
    db: {
        uri: process.env.MONGODB_URI || 'mongodb://localhost/social-network',
        options: {
            useNewUriParser: true,
            useUnifiedTopology: true
        }
    },
    port: process.env.PORT || 3001,
};