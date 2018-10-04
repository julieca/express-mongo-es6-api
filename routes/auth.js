import { Router } from 'express';
import AuthController from '../controllers/auth';
/*import passport from 'passport';*/

const router = new Router();

router.route('/register')
  .post(AuthController.register);

router.route('/login')
  .post(AuthController.login);

router.route('/logout')
  .post(AuthController.logout);

export default router;