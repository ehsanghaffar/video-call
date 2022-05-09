/**
 * main entry point for the application
 * @param {Object} config - configuration object
 * @author: Ehsan Ghaffar
 * @version: 0.0.1
 */

let express = require("express");
let app = express();
let server = require("http").Server(app);
let io = require("socket.io")(server);
let stream = require("./ws/stream");
let path = require("path");
let port = process.env.PORT || 3000;
// let favicon = require("serve-favicon");

// app.use(favicon(path.join(__dirname, "favicon.ico")));
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.of("/stream").on("connection", stream);

server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
