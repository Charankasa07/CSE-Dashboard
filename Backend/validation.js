const joi = require('joi')

const student_details = (data) =>{
    const schema = joi.object({
        name : joi.string().required(),
        id : joi.string().required(),
        department : joi.string().required(),
        domain : joi.string().required(),
        phone : joi.string().required(),
        email : joi.string().required(),
        higherStudies : joi.string().required(),
    })
    return schema.validate(data)
}

const placement_details = (data) =>{
    const schema = joi.object({
        id : joi.string().required(),
        placedCompany : joi.string().required(),
        placedRole : joi.string().required(),
        placedDate : joi.string().required(),
        placedPPO : joi.string().required()
    })
    return schema.validate(data)
}

module.exports.student_details = student_details
module.exports.placement_details = placement_details