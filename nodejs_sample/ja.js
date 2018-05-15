const level = require('level');
const argv = require('argv');

let dbPath = '../leveldb/jawiki/dict';
let db = level(dbPath);
let args = argv.run();
let word = args.targets[0];

db.get(word, function (err, value) {
  if (err && err.notFound) {
    console.log('word err=<',err,'>');
  } else {
    console.log('word=<',word,'>','value=<',value,'>');
  }
});
