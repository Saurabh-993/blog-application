import express from "express";
import multer from "multer";

const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const filefromuser = multer({
  storage,
  //   fileFilter: () => {},
});

app.get("/home", (req, res) => {
  res.render("views.multer.ejs");
});

app.post("/upload", filefromuser.single("file"), (req, res) => {
  // filefromuser.single("file") isme ye file jo ander likha h ye form ke andar file input ka name hi hona chahiye kuch aur hua to read nahi karega.
  console.log(req.body);
  console.log(req.file);
  res.send("file received");
});

app.listen(10000, () => console.log("The port is started now at 10000"));
