

const path = require('path');
var reactDomLibPath = path.join(__dirname, "./node_modules/react-dom/lib");
var alias = {};
["EventPluginHub", "EventConstants", "EventPluginUtils", "EventPropagators",
 "SyntheticUIEvent", "CSSPropertyOperations", "ViewportMetrics"].forEach(function(filename){
    alias["react/lib/"+filename] = path.join(__dirname, "./node_modules/react-dom/lib", filename);
});
function root(__path = '.') {
    return path.join(__dirname, __path);
}

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        alias: alias,
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],

    },
    
    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            // { test: /\.tsx?$/, loader: "ts-loader" }
            {
                test: /\.tsx?$/,
                loaders: [
                    'babel-loader?presets[]=es2015',
                    'awesome-typescript-loader',
                ],
                exclude: [/\.(spec|e2e|d)\.ts$/]
               
            }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },


};