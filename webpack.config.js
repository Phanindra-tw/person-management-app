const path = require("path");

module.exports = {
    entry: {
        index: "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        library: "BahmniPersonManagementApp",
        libraryTarget: "umd",
        umdNamedDefine: true,
        clean: true,
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.m?js/,
                type: "javascript/auto",
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: ['style-loader', "css-loader"],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                    {
                        loader: "react-svg-loader",
                        options: {
                            jsx: true,
                        },
                    },
                ],
            },
        ],
    },
    externals: {
        react: "react", // Exclude react from the bundled output
        "react-dom": "react-dom", // Exclude react-dom from the bundled output
    },
};
