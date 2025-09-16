const express = require("express");
const cors = require("cors"); // import cors
const path = require("path");
const app = express();

app.use(cors()); // enable cors cho tất cả route

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/song", (req, res) => {
  res.json({
    title: "Tự Sự",
    artist: "Thuận Nguyễn",
    audioUrl: "/audio/tusu.mp3",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
