import { candidateController } from '@delivery/controllers/candidates';
import express, { Request, Response } from 'express';
const router = express.Router({
    strict: true
});



router.post('/', (req: Request, res: Response) => { candidateController.add(req, res) })


export default router;