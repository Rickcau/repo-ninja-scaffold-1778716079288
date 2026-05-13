import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!', timestamp: new Date().toISOString() });
});

export default router;
