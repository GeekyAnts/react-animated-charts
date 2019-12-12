module.exports = function (api) {
    api.cache(true);

    const presets = ["@babel/preset-env"];
    const plugins = [
        "transform-object-rest-spread",
        "@babel/plugin-transform-react-jsx"
    ];

    return {
        presets,
        plugins
    };
}