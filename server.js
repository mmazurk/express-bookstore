/** Server for bookstore. */


const app = require("./app");

app.listen(3000, "127.0.0.1", () => {
  console.log(`Server starting on port 3000`)
  console.log('Lets party!!');
});
