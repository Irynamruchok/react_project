import Joi from "joi";

export const schema = Joi.object({
    query: Joi.string().min(2).required().messages({
        'string.base':'Search query must be a string',
        'string.empty':'Search query cannot be empty',
        'string.min':'Search query must be at least 2 characters long ',
        'any.required': 'Search query is required'
    })
})