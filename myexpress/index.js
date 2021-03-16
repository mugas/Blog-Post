const express = require('express');

const app = express();
// const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello Worlds');
});

/* app.get('/teste', function(req, res) {
  res.sendFile('index.html');
}); */

/* 
app.get('/home', (req, res) => {
  res.send('ta bem');
});
*/
app.get('/pug', function(req, res) {
  res.render('index' /* ,{ title: 'Hey', message: 'Hello There' } */);
});

// app.set('views', './views');

app.set('view engine', 'pug');

// app.use('/static', express.static('public'));

/* app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); */

app.listen(process.env.PORT || 3000, function() {
  console.log(
    'Express server listening on port %d in %s mode',
    this.address().port,
    app.settings.env
  );
});
