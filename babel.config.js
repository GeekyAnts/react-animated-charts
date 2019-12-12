module.exports = function (api) {
    api.cache(true);

    const presets = ["@babel/preset-env"];
    const plugins = [
        "transform-object-rest-spread",
        "transform-react-jsx"
    ];

    return {
        presets,
        plugins
    };
}