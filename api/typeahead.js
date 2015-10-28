var _ = require('underscore');

var QUOTES = [
  // Source: http://www.rottentomatoes.com/m/the_martian/quotes/
  'Fear my botany powers, Mars!',
  'I am dipping this potato in crushed up Vicodin. And no one can stop me.',
  'Mark Watney, Space Pirate.',
  "Hi, I'm Mark Watney and I'm still alive... obviously",
  'If we are going to have a secret project called "Elrond", then I want my code name to be "Glorfindel".',
  "I'm going to have to science the shit out of this.'",
  'In your face Neil Armstrong.'
];

// The Type Ahead API.
module.exports = function(req, res) {
  var allQuotes = _.map(QUOTES, function(quote) {
    return {
      title: quote,
      text: quote
    };
  });

  var term = req.query.text.trim();
  if (!term) {
    res.json(allQuotes);
    return;
  }

  var filtered = _.filter(allQuotes, function(quote) {
    return quote.title.toLowerCase().indexOf(term.toLowerCase()) >= 0;
  });

  if (filtered.length === 0) {
    res.json([{
      title: '<i>(no results)</i>',
      text: ''
    }]);
  } else {
    res.json(filtered);
  }
};
