const trendsSchema = require('../models/trendsModel')
const mongoose = require("mongoose");

let trendsController = {
    getData: (req, res) => {
        // var meter = req.params.mid
        trendsModel = mongoose.model('M-01', trendsSchema)
        var toTime = Math.floor(Date.now() / 1000);
        var fromTime = toTime - 900
        trendsModel.find({
            timestamp: {
                $gte: fromTime,
                $lt: toTime
            }
        }).then(foundData => {
            res.send(foundData)
        }).catch(err => {
            console.log(err)
        })
    }
}

module.exports = trendsController 