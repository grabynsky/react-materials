import Joi from "joi";

const userValidator =
    Joi.object({
        username: Joi.string()
            .required()
            // .pattern(/w{3,}/)
            // .messages({
            //     'string.pattern.base': 'Enter at least 3 chars',
            // }),
            .error(errors => {

                errors.forEach(error => {
                    switch (error.code){
                        case 'string.empty':
                            error.message = 'cannot be empty any.empty';
                            break;
                        case 'string.min':
                            error.message = 'cannot be empty lower than 3'
                            break;
                        default:
                            break;
                    }
                })

                return errors;
            }),

        password: Joi.string()
            .required()
            .min(3)
            .max(12)
            .messages({
                'string.min.base': 'Password must be at 3 chars',
                'string.max.base': 'Password cannot be more 12 chars',
            }),

        age: Joi.string()
            .required()
            .min(1)
            .max(132)
            .messages({
                'number.min.base': 'min 1',
                'number.max.base': 'max 132'
            })


})
export default userValidator;