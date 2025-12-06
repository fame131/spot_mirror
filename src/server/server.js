import express from "express";
import cors from "cors";
import mongoose from "mongoose";


const app = express();

app.use(cors());
app.use(express.json());


mongoose
  .connect("mongodb://localhost:27017/spotmirror")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));


const userSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model("User", userSchema, "accounts");


const songMetadataSchema = new mongoose.Schema({
  trackName: String,
  description: String,
  trackURL: String,
  coverURL: String,
  artist: String
});

const Metadata = mongoose.model("Metadata", songMetadataSchema, "metadata");


app.get("/", (req, res) => res.send("Server running"));

app.post("/accounts", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const emailExists = await User.findOne({ email });
    if (emailExists) return res.json({ emailTaken: true });

    const nameExists = await User.findOne({ name });
    if (nameExists) return res.json({ nameTaken: true });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ name, email, password: hashedPassword });
    res.json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: "Error saving user" });
  }
});

app.post("/upload-metadata", async (req, res) => {
  try {
    const { trackName, description, trackURL, coverURL ,artist} = req.body;

    const newSong = await Metadata.create({ trackName, description, trackURL, coverURL ,artist});
    console.log("Uploaded song:", newSong);

    res.json({ message: "Metadata uploaded successfully", metadata: newSong });
  } catch (error) {
    console.error("Error uploading metadata:", error);
    res.status(500).json({ message: "Error uploading metadata" });
  }
});

app.get("/tracks", async (req, res) => {
  try {
    const tracks = await Metadata.find();
    res.json(tracks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching tracks" });
  }
});


app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
