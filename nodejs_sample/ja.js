const level = require('level');
let dbPath = '../leveldb/cnwiktionary';
let db = level(dbPath);
let word = args.targets[0];
db.get(word, function (err, value) {
  if (err && err.notFound) {
    console.log('word err=<',err,'>');
  } else {
    console.log('word=<',word,'>','value=<',value,'>');
  }
});
