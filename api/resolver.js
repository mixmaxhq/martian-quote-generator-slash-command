var _ = require('underscore');


// The API that returns the in-email representation.
module.exports = function(req, res) {
  var term = req.query.text.trim();

  var html = '<p><img style="max-width:100%; box-sizing:border-box;" src="http://mixmax-res.cloudinary.com/image/upload/v1446059883/martian_inboxlove_dmxjou.png"/></p>' +
    '<h4 style="margin: 5px;">' +
    '<font face="Baskerville, Baskerville Old Face, Hoefler Text, Garamond, Times New Roman, serif">“' + term + '”</font>' +
    '</h4>' +
    '<p style="max-width: 590px; width: 100%;"><img height="1" title="separator" alt="separator" width="600" style="width:100%; height: 1px; max-height:1px; vertical-align:middle;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAACCAYAAACE7KJkAAAAI0lEQVRYR+3DQQkAAAgEsOvPYRFLWsLnBksAAPjV7qiq+vcAAMtuJOjWUFsAAAAASUVORK5CYII="></p>';

  res.json({
    body: html
  });
};
