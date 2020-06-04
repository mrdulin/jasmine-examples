const express = require('express');

beforeAll((done) => {
  const app = express();
  global.app = app;
  const port = 3000;
  app.get('/api', (req, res) => {
    res.sendStatus(200);
  });
  app.listen(port, () => {
    done();
    console.log('server is listening on port:' + port);
  });
});
