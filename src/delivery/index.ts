import { Router, Request, Response } from 'express';
import candidateRouter from '@delivery/routes/candidate'
const router = Router();

router.use("/v1/health", (req: Request, res: Response) => {
    return res.status(200).json({ status: "OK" })
})

router.use("/v1/candidate", candidateRouter)

export default router

