module.exports = (req, res, next) => {
    console.log("User logged on " + new Date().toLocaleTimeString());
    next();
}