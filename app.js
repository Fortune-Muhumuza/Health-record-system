const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const receptionRoutes = require('./routes/receptionRoutes')


const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/reception', receptionRoutes);
// app.use('/user', userRoutes);


const uri =
  // eslint-disable-next-line max-len
  'mongo';
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB Connected…');
  })

  .catch((err) => console.log(err));

let port = 3000;

app.listen(port, () => {
  console.log('Server is up and running on port numner ' + port);
});