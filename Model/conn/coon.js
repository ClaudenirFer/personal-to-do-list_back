const mongoose = require("mongoose");

function Conn() {
  mongoose
    .connect("mongodb://localhost:27017/list", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
      console.log("Banco conectado");
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = Conn
