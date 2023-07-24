//server.js
const express = require('express');
const app = express();
const port = 3001;

// เส้นทาง (route) ของ API ที่รับค่า CA ผ่าน URL
app.get('/api/Search/[CA]', async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("EVCharger");
    const { CA } = req.body;

    const post = await db.collection("posts").findOne({ CA });

    if (!post) {
      res.status(404).json({ error: "Not Found" });
    } else {
      res.json(post);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while processing the request." });
  }
});

app.get('/api/Search/map', async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("EVCharger");

    const posts = await db.collection("posts").find().toArray();

    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while processing the request." });
  }
});
app.get('/api/Search/STATUS', async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("EVCharger");
    const { CA } = req.body;

    const post = await db.collection("posts").findOne({ CA });

    if (!post) {
      res.status(404).json({ error: "Not Found" });
    } else {
      res.json(post);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while processing the request." });
  }
});

// รันเซิร์ฟเวอร์ที่พอร์ตที่กำหนด
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
