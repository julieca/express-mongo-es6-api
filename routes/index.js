import express from 'express';
import auth from './auth';
import posts from './posts';
import response from '../helpers/response';

const router = express.Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
});

router.use(response.setHeadersForCORS);

router.use('/posts', posts);
//router.use('/auth', auth);


export default router;
