import { Router } from 'express';
import validateSchemaMiddleware from '../middlewares/validateSchema.middleware.js';
import doctorSchemas from '../schemas/doctor.schemas.js';
import doctorsController from '../controllers/doctors.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const doctorRoutes = Router();

doctorRoutes.get('/', validateSchemaMiddleware(doctorSchemas.findAll), doctorsController.findAll);
doctorRoutes.post('/sign_up', validateSchemaMiddleware(doctorSchemas.signUp), doctorsController.singUp);
doctorRoutes.post(
  '/specialties/:specialtyId',
  validateSchemaMiddleware(doctorSchemas.registerSpecialty),
  authMiddleware,
  doctorsController.registerSpecialty
);

export default doctorRoutes;
