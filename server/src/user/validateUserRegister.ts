import Joi from "joi";

const validateUserRegister = (data: string) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(24).required(),
    email: Joi.string().min(5).max(50).required(),
    confirmEmail: Joi.string().min(5).max(50).required(),
    password: Joi.string().min(8).max(255).required(),
    confirmPassword: Joi.string().min(8).max(255).required(),
  });

  return schema.validate(data);
};

export default validateUserRegister;
