const app = require("express")();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(4000, () =>
  console.log("Express is running on http://localhost:4000...")
);

// const WebSocket = require("ws");
// const wss = new WebSocket.Server({ port: "8080" });

// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "./server/db.sqlite",
//   define: {
//     freezeTableName: true,
//   },
// });

// sequelize
//   .authenticate()
//   .then(() => console.log("Connection to db successfuly established!"))
//   .catch((e) => {
//     console.log("Connection to db failed!", e.message);
//   });

// const Message = sequelize.define("Message", {
//   text: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   userName: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

// sequelize.sync();

// wss.on("connection", (ws) => {
//   ws.on("message", (message) => {
//     try {
//       data = JSON.parse(message);
//     } catch {
//       console.log(`Can't parse invalid JSON: ${message}`);
//       return;
//     }

//     if (data.type === "getMessages") {
//       Message.findAll().then((messages) => {
//         ws.send(JSON.stringify(messages));
//       });
//     }

//     if (data.type === "saveMessage" && data.payload) {
//       Message.create(data.payload)
//         .then((message) => {
//           wss.clients.forEach((client) => {
//             if (client.readyState === WebSocket.OPEN) {
//               client.send(JSON.stringify(message));
//             }
//           });
//         })
//         .catch(() => {
//           console.log(`Could not create a Message record for: ${data.payload}`);
//           return;
//         });
//     }
//   });
// });
