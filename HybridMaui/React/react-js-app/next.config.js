const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',

    env: {
        BUILD_TYPE: process.env.NEXT_PUBLIC_BUILD_TYPE,
        ADDITIONAL_SCRIPTS: process.env.NEXT_PUBLIC_ADDITIONAL_SCRIPTS,
    },

    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,

    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,

    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
}

// If a custom build mode was specified, load the corresponding .env file
// and overwrite the environment variables with the values from the file
if (process.env.APP_MODE) {
    const envFile = path.resolve(__dirname, '.env.' + process.env.APP_MODE);
    if (fs.existsSync(envFile)) {
        var result = dotenv.config({ path: envFile });
        nextConfig.env = {
            BUILD_TYPE: result.parsed.NEXT_PUBLIC_BUILD_TYPE,
            ADDITIONAL_SCRIPTS: result.parsed.NEXT_PUBLIC_ADDITIONAL_SCRIPTS,
        };
    }
}

module.exports = nextConfig
