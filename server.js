const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('dist/index.html'));
app.set('port', process.env.PORT || 8080);

console.log(path.join(__dirname, 'dist/index.html'));

const server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});
