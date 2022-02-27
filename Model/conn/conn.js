const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;

Conn(db_url, db_user, db_pass, db_data);

function Conn(db_url, db_user, db_pass, db_data) {
  mongoose
    .connect(`${db_url}/${db_data}`, {
        user: db_user,
        pass: db_pass,
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
