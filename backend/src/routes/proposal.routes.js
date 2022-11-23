import { Router } from "express";
import { methods as proposalsController } from "../controllers/proposals.controller";

const router = Router();

router.get("/list", proposalsController.getProposals);
router.post("/vote", proposalsController.addCalification);
router.get("/califications/:id", proposalsController.getCalificationsByProposal);
router.get("/user/:id", proposalsController.getProposalsByUser);
router.post("/add", proposalsController.createProposal);
router.get("/:id", proposalsController.getProposalById);
router.delete("/:id", proposalsController.deleteProposal);

export default router;