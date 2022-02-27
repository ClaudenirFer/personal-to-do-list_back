const express = require("express");
const Conn = require("./Model/conn/conn");
const router = require("./routes/routes");
const cors = require("cors");
const app = express();

const port = 8000;

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(Conn)
app.use("/list", router);

app.listen(process.env.PORT || port, () => {
  console.log("Servidor Rodando na Porta ", port);
});
