const express = require('express');
const usersRoutes = require("./routes/users");
const diariesRoutes = require("./routes/diaries");

const app = express();

app.use(express.json());
app.use("/users", usersRoutes);
app.use("/diaries", diariesRoutes);

app.listen(3000, () => console.log("Listening on port 3000"));
