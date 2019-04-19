import express from 'express';

import { AuthController } from '../controllers';
import { User } from '../models';

const router = express.Router();

router.route(`/login`).post(new AuthController(User).login);

export default router;
