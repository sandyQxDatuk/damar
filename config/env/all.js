// default app configuration

const port = process.env.PORT || 4000;
let db = process.env.MONGOLAB_URI || process.env.MONGODB_URI;

if (!db) {
  db = process.env.NODE_ENV === 'test' ? "mongodb://localhost:27017/alto_test" : "mongodb://nodegoat:owasp@ds159217.mlab.com:59217/alto_test";
}

module.exports = {
    port,
    db,
    cookieSecret: "session_cookie_secret_key_here",
    cryptoKey: "a_secure_key_for_crypto_here",
    cryptoAlgo: "aes256",
    hostName: "localhost"
};
