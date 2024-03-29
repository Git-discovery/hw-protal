const express = require('express');
const Router = require('./app.js');

const app = express();

// allow custom header and CORS
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
  );
  res.header(
    'Access-Control-Allow-Methods',
    'PUT, POST, GET, DELETE, OPTIONS',
  );

  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

app.use('/assets', express.static('assets'));
// app.use('index.html', function(req, res) {
//     res.sendFile(path.resolve(rootPath, 'index.html'));
// });

app.use(Router);

app.listen(9000, () => {
  console.log('Node app start at port 9000');
});
