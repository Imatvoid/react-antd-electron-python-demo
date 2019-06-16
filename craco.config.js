/* craco.config.js */

const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
    plugins: [{plugin: CracoAntDesignPlugin}],
    // webpack: {
    //     configure: {
    //         target: 'electron-renderer'
    //     },
    //
    // },


};


// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// const WebpackBar = require("webpackbar");
// const CracoAntDesignPlugin = require("craco-antd");
// const path = require("path");
//
// // Don't open the browser during development
// process.env.BROWSER = "none";
//
// module.exports = {
//     webpack: {
//         configure: {
//             target: 'electron-renderer'
//         },
//         plugins: [
//             new WebpackBar({ profile: true }),
//             ...(process.env.NODE_ENV === "development"
//                 ? [new BundleAnalyzerPlugin({ openAnalyzer: false })]
//                 : [])
//         ]
//     },
//     plugins: [
//         { plugin: require("craco-preact") },
//         {
//             plugin: CracoAntDesignPlugin,
//             options: {
//                 customizeThemeLessPath: path.join(
//                     __dirname,
//                     "src/style/AntDesign/customTheme.less"
//                 )
//             }
//         }
//     ]
// };

