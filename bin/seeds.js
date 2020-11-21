const mongoose = require('mongoose');
const host = require('../models/host.model');
const podcast = require('../models/podcast.model');

const DB_NAME = "starter-code";

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const hosts = [
  {
    name: 'Tom Hanks', occupation: 'Actor', catchPhrase: "What's up",
  },
  {
    name: 'Jennifer Aniston', occupation: 'Actress', catchPhrase: "Hola amigos",
  },
  {
    name: 'Anne Hathaway', occupation: 'Actress', catchPhrase: "Don't worry, be happy",
  },
];

const podcasts = [
  {
    title: 'Catch me if you can', genre: 'Drama',
    plot: 'Tom Hanks podcast', hosts: ["Tom Hanks"]
  },

  {
    title: 'One Day', genre: 'Drama',
    plot: 'Anne Hathaway podcast', hosts: ["Anne Hathaway"]
  },

  {
    title: 'Borat', genre: 'Comedy',
    plot: 'Borat podcast', hosts: ["Borat"]
  },


  {
    title: 'Power', genre: 'Suspense, Drama',
    plot: 'A Courtney A. Kemp podcast', hosts: ["James "Ghost" St. Patrick"]
  },

]
host.create(hosts)
  .then(hostsFromDB => {
    console.log(`Created ${hostsFromDB.length} hosts`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating hosts from the DB: ${err}`));


podcast.create(podcasts)
  .then(podcastsFromDB => {
    console.log(`Created ${podcastsFromDB.length} podcasts`);

    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating podcasts from the DB: ${err}`));