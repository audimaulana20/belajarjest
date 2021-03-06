const express = require('express');
const bodyParser = require('body-parser');
const knexfile = require('./knexfile.js');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/',async (req, res) => {
  const query=await knexfile('test')
  res.send(query)
});
// listen for requests
// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });
module.exports=app