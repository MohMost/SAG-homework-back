import express from "express";
import cors from "cors";
import router from "./routes/booksRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("copy this to test https://sag-assignment-back.onrender.com/search?q=harry+potter");
});
app.use(
  cors({
    origin: "https://sag-assignment-front.vercel.app",
  })
);

app.use(express.json());

app.use("/search", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
