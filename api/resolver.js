var _ = require('underscore');


// The API that returns the in-email representation.
module.exports = function(req, res) {
  var term = req.query.text.trim();

  var html = '<p><img style="max-width:100%; box-sizing:border-box;" src="https://dl.dropboxusercontent.com/u/14168496/martian_inboxlove.png"/></p>' +
    '<h4 style="margin: 5px;">' +
    '<font face="Baskerville, Baskerville Old Face, Hoefler Text, Garamond, Times New Roman, serif">“' + term + '”</font>' +
    '</h4>';

  res.json({
    body: html
  });
};
