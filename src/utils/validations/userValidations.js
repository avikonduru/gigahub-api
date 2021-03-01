const Joi = require('joi');

const getKeyValidation = (data) => {
	const schema = Joi.object({
		first_name: Joi.string().required(),
		last_name: Joi.string().required(),
	});

	return schema.validate(data);
};

module.exports.getKeyValidation = getKeyValidation;
