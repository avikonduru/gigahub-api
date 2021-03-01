const express = require('express');
const router = express.Router();
const {
	annotationValidation,
} = require('../utils/validations/taskValidations');
const _ = require('lodash');

var initialMean = Infinity;
var initialSTD = Infinity;

function σ(array) {
	var avg = _.sum(array) / array.length;
	return Math.sqrt(
		_.sum(_.map(array, (i) => Math.pow(i - avg, 2))) / array.length
	);
}

router.get('/', async (req, res) => {
	//Validate incoming request
	const { error } = annotationValidation(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}

	var body = req.body.data;
	var data = [];

	try {
		for (var i = 0; i < body.length; i++) {
			data.push(body[i].value);
		}

		dataMean = _.mean(data);

		if (initialMean == Infinity) {
			initialMean = dataMean;
		}
		if (initialSTD == Infinity) {
			initialSTD = σ(data);
		}

		meanDiff = Math.abs(dataMean - initialMean);
		rul = meanDiff / initialSTD;

		res.status(200).send({
			rul: rul,
		});
	} catch (err) {
		res.status(400).send(err);
	}
});

module.exports = router;
