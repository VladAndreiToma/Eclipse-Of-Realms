import express from 'express';
import * as heroController from '../controllers/heroesController.js';

const router = express.Router();

router.post('/', heroController.createHero);
router.get('/', heroController.getAllHeroes);
router.get('/:id', heroController.getHeroById);
router.put('/:id', heroController.updateHero);
router.delete('/:id', heroController.deleteHero);

export default router;