module.exports = {
    context: __dirname + "/frontend",
    entry: "./random_landscape.js",
    output: {
        path: __dirname + "/app/assets/javascripts",
        filename: "bundle.js"
    }
}