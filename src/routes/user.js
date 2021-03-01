const express = require('express');
const router = express.Router();
const { getKeyValidation } = require('../utils/validations/userValidations');

router.get('/', async (req, res) => {
	//Validate incoming request
	const { error } = getKeyValidation(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}

	try {
		res.status(200).send({
			msg: req.body,
		});
	} catch (err) {
		res.status(400).send(err);
	}
});

module.exports = router;
