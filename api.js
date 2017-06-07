const router = require('express').Router();
const OBA = require('oba-api');

require('dotenv').config();

const client = new OBA({
  public: process.env.PUBLIC,
  secret: process.env.SECRET
});

router.get('/search', (req, res) => {
  const apiSearchObject = {
    facet: [],
    librarian: true,
    q: 'id:*'
  };

  const {query} = req;

  // If statements overloaddd!!1!!
  if (query.genre) {
    apiSearchObject.facet.push(`Genre(${query.genre})`);
  }

  client.get('search', apiSearchObject)
    .then(results => res.send(results))
    .catch(err => console.log(err));
});

router.get('*', (req, res) => res.status(404).send('Route not defined'));

module.exports = router;
