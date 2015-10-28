var _ = require('underscore');


// The API that returns the in-email representation.
module.exports = function(req, res) {
  var term = req.query.text.trim();

  var html = '<h4 style="margin: 5px;">' +
    '<font color="#999999" size="5">“</font>' +
    '<font face="Baskerville, Baskerville Old Face, Hoefler Text, Garamond, Times New Roman, serif">' + term + '</font>' +
    '<font color="#999999" size="5">”</font>' +
    '</h4>' +
    '<p><img style="max-width:100%; box-sizing:border-box;" src="https://dl.dropboxusercontent.com/u/14168496/martian_inboxlove.png"/></p>';

  res.json({
    body: html
  });
};
