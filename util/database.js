const mongodb = require('mongodb');
const MongoCilent = mongodb.MongoClient;
let _db;
const mongoConnect = callback =>{
  MongoCilent.connect('mongodb+srv://sourabhsaini201098:2r5GFHXDzw5JPkX9@cluster0.ypqknjp.mongodb.net/?retryWrites=true&w=majority')
  .then(client =>{
    console.log('connected')
    // _db=client.db();
    callback(client)
  })
  .catch(err=>{
    console.log(err)
    throw err;
  })
}
const getDb=()=>{
  if(_db){
    return _db;
  }
  throw "no database found!"
}
exports.mongoConnect=mongoConnect;
exports.getDb=getDb;