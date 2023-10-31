const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3003;

app.use(express.static("."));
app.use(cors());
app.use(express.json());

// handle default route
app.get("/", (req, res) => {
  res.sendFile("index.html");
})

app.get('*', (req, res) => {
  console.log("request", req.params[0]);
  let request = req.params[0];

  // handle file fetch
  if (request.includes(".")) {
    res.sendFile(request);
    return;
  }
  // handle static routes
  res.sendFile(request + "/index.html");
})

app.listen(PORT, () => {
  console.log(`Opened server at port ${PORT}`);
})
