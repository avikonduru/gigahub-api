const Joi = require('joi');

const annotationValidation = (data) => {
	const schema = Joi.object({
		data: Joi.array().items(
			Joi.object({
				time: Joi.number().required(),
				value: Joi.number().required(),
			})
		),
	});

	return schema.validate(data);
};

module.exports.annotationValidation = annotationValidation;
