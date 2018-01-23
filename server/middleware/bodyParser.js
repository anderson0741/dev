module.exports = {
    json: () => {
        return (req, res, next) => {
            requ.body = JSON.stringify("data");
            next();
        }
    },
    xml: () => {

    }
}