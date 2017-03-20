import Pouch from 'pouchdb';

var db = new Pouch('Grammarian');
if (typeof window != "undefined") {window.PouchDB = Pouch};
db.get('ctine').then(function (doc) {
  console.log(doc);
});
