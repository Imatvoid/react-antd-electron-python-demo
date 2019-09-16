/* craco.config.js */

const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
    plugins: [{plugin: CracoAntDesignPlugin}],
    webpack: {
        configure: {
            target: 'electron-renderer',
        },
        // module: {
        //     unknownContextCritical : true,
        // }
    },
};
