const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    "timestamp": Number,
    "meter": String,
    "data": {
        "VOLTAGE": {
            "R-N": Number,
            "Y-N": Number,
            "B-N": Number,
            "L-L-AVG": Number,
            "L-N-AVG": Number
        },
        "CURRENT": {
            "R": Number,
            "Y": Number,
            "B": Number,
            "AVG": Number
        },
        "POWER": {
            "R": Number,
            "Y": Number,
            "B": Number,
            "T": Number
        },
        "ENERGY": {
            "T": Number,
        },
        "PF": {
            "R": Number,
            "Y": Number,
            "B": Number,
            "T": Number
        },
        "FREQUENCY": {
            "T": Number
        }
    }
})

module.exports = dataSchema