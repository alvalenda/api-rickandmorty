import { Router } from 'express';
import * as characterController from './character.controller.js';
import { CharacterMiddleware } from './character.middleware.js';

export const router = Router();

// FIND ALL CHARACTERS
router.get('/', characterController.findAllCharactersController);
// CREATE CHARACTER
router.post(
  '/create',
  CharacterMiddleware.validateBody,
  characterController.createCharacterController,
);
// FIND BY ID
router.get(
  '/find/:id',
  CharacterMiddleware.validateId,
  characterController.findByIdController,
);
// UPDATE CHARACTER
router.put(
  '/update/:id',
  CharacterMiddleware.validateId,
  CharacterMiddleware.validateBody,
  characterController.updateCharacterController,
);
// DELETE CHARACTER
router.delete(
  '/delete/:id',
  CharacterMiddleware.validateId,
  characterController.deleteCharacterController,
);
