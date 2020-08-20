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


const uri =
  // eslint-disable-next-line max-len
  'mongodb+srv://Fort:fortune@cluster0.144qe.mongodb.net/<dbname>?retryWrites=true&w=majority';
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