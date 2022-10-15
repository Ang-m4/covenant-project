import { Router } from "express";
import { methods as proposalsController } from "../controllers/concertations.controller";

const router = Router();

router.get("/:id/proposals", proposalsController.getProposalsByConcertation);

export default router;