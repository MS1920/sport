// import app file from backend/app.js
const app = require("./backend/app");
app.listen(3000, () => {
  console.log("Done App listening on PORT 3000");
});