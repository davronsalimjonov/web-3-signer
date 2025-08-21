import { Router } from "express";
import type { Request, Response } from "express";
import { verifySignature } from "../services/signatures.js";

const verifyRouter = Router();

verifyRouter.post("/", async (req: Request, res: Response) => {
  try {
    const { message, signature } = req.body;

    if (!message || !signature) {
      return res.status(400).json({ error: "Message and signature required" });
    }

    const { isValid, signer } = verifySignature(message, signature);

    res.json({
      isValid,
      signer,
      originalMessage: message,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default verifyRouter;
