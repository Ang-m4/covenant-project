import { Router } from "express";
import { methods as concertationController } from "../controllers/concertations.controller";

const router = Router();

router.get("/:id/proposals", concertationController.getProposalsByConcertation);
router.get("/user/:id", concertationController.getConcertationsByUser);
router.get("/sectors", concertationController.getSectors);
router.get("/list", concertationController.getConcertations);
router.post("/add", concertationController.createConcertation);
router.get("/:id", concertationController.getConcertationById);
router.delete("/:id", concertationController.deleteConcertation);

export default router;