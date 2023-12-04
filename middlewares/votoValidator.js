import { body, validationResult } from 'express-validator';

const votoValidationMiddleware = [
  body('candidato')
    .exists()
    .withMessage('Field Candidato is required')
    .isString()
    .withMessage('Field Candidato must be a String')
    .isIn(['candidatoA', 'candidatoB', 'candidatoC', 'enBlanco'])
    .withMessage('Field Candidato must be either candidatoA, candidatoB, candidatoC or enBlanco'),
  body('distrito')
    .exists()
    .withMessage('Field Distrito is required')
    .isString()
    .withMessage('Field Distrito must be a String')
    .isIn(['zona1', 'zona2', 'zona3', 'zona4'])
    .withMessage('Field Distrito must be either zona1, zona2, zona3 or zona4'),
];

const validationErrorHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).send({ sucess: false, message: errors })
  } else {
    next();
  }
};

export default [ ...votoValidationMiddleware, validationErrorHandler ];