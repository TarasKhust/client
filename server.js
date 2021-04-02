const path = require('path');
const express = require('express');

const app = express();

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('dist'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

app.set('port', process.env.PORT || 8080);

const server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});

