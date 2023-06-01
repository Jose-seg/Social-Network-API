module.exports = {
    db: {
        uri: process.env.MONGODB_URI || 'mongodb://localhost/social-network',
        options: {
            useFindAndModify: false,
            useNewUriParser: true,
            useUnifiedTopology: true
        }
    },
    port: process.env.PORT || 3001,
};