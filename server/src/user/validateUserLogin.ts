import Joi from "joi";

const validateUserLogin = (data: string) => {
  const schema = Joi.object({
    email: Joi.string().min(5).max(50).required(),
    password: Joi.string().min(8).max(255).required(),
  });

  return schema.validate(data);
};

export default validateUserLogin;
