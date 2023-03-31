import { Router } from 'express';
import doctorRoutes from './doctor.routes.js';
import patientRoutes from './patient.routes.js';
import userRoutes from './user.routes.js';

const routes = Router();

routes.use('/doctors', doctorRoutes);
routes.use('/patients', patientRoutes);
routes.use('/users', userRoutes);

export default routes;
