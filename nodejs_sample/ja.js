const level = require('level');
const argv = require('argv');

let dbPath = '../leveldb/jawiki/dict';
let db = level(dbPath);
let args = argv.run();
let word = args.targets[0];

db.get(word, function (err, value) {
  if (err && err.notFound) {
    console.log('err=<',err,'>');
  } else {
    console.log('単語=<',word,'>','かな=<',value,'>');
  }
});
