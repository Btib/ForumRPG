"use strict";
var topic_model_1 = require("../models/topic.model");
module.exports = function (passport, router) {
    router.get('/showthreads', function (req, res, next) {
        topic_model_1.Topic.find(function (err, topics) {
            if (err) {
                res.send(err);
            }
            res.json(topics);
        });
    });
};
//# sourceMappingURL=topic.route.js.map