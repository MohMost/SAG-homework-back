import express from "express";
import cors from "cors";
import router from "./routes/booksRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(
  cors({
    origin: "https://sag-assignment-back.vercel.app/",
  })
);

app.use(express.json());

app.use("/api/books", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
