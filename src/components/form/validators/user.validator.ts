import Joi from "joi";

const userValidator = Joi.object({
    username: Joi.string()
        .pattern(/\w{4,}/)
        .required()
        .messages({
            'string.pattern.base': 'Only chars allowed'
        }),
    password: Joi.string().min(3).max(10).required().messages({
        'string.min.base': 'min is not ',
        'string.max.base': ''
    }),
    age: Joi.number().min(2).max(117).required()
})

export {
    userValidator,
}