module.exports = {
    PORT: process.env.PORT || 3842,
    USE_HTTPS: process.env.USE_HTTPS,
    // HTTPS_KEY: process.env.HTTPS_KEY || './key.pem',
    // HTTPS_CERT: process.env.HTTPS_CERT || './cert.pem',
    HTTPS_CA: process.env.HTTPS_CA,
    DATABASE_URL:  process.env.DATABASE_URL || "postgres://bustabit:bustabit@localhost:5432/pocgamedb_test",
    ENC_KEY: process.env.ENC_KEY || 'devkey',
    PRODUCTION: process.env.NODE_ENV  === 'production',
    GAME_HISTORY_LENGTH: 50,

    GAME_API_VERSION: 1,

    //Do not set any of this on production

    CRASH_AT: process.env.CRASH_AT, //Force the crash point
    WALLET_API_DOMAIN: ""
};