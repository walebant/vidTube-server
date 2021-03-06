import Joi from '@hapi/joi';

// register validation schema
const registerSchema = Joi.object({
  avatar: Joi.string().uri(),
  channelName: Joi.string().max(20),
  username: Joi.string()
    .min(6)
    .required(),
  password: Joi.string()
    .min(6)
    .required(),
});

const loginSchema = Joi.object({
  username: Joi.string()
    .min(6)
    .required(),
  password: Joi.string()
    .min(6)
    .required(),
});

const videoSchema = Joi.object({
  title: Joi.string()
    .min(5)
    .max(30)
    .required(),
  description: Joi.string()
    .min(5)
    .max(255)
    .required(),
  url: Joi.string().uri(),
  upvotes: Joi.number(),
  downvotes: Joi.number(),
  comments: Joi.array(),
  userId: Joi.string(),
  views: Joi.number(),
});

export { registerSchema, loginSchema, videoSchema };
