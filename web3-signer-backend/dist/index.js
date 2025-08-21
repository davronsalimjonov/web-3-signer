import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import verifyRouter from "./routes/verify.js";
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/verify-signature", verifyRouter);
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`✅ Backend running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map