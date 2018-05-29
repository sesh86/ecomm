// Create Account in https://cloud.mongodb.com
// Create new mongoDB user - Clusters -> Security -> +Add New user
// Goto Cluster -> Connect -> Connect your application -> Copy a connection string -> I am using driver 3.4 or earlier
// Copy the connection string and replace <password> with appropriate credential
// Sample connection string mongoose.connect('mongodb://sesh:<pwd>@cluster0-shard-00-00-lemrd.mongodb.net:27017,cluster0-shard-00-01-lemrd.mongodb.net:27017,cluster0-shard-00-02-lemrd.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',{useMongoClient: true,});//connect to the mongodb
// Connect with Studio 3T - https://studio3t.com/
var mongoose=require('mongoose');

mongoose.connect('mongodb://sesh:sesh.1234@cluster0-shard-00-00-lemrd.mongodb.net:27017,cluster0-shard-00-01-lemrd.mongodb.net:27017,cluster0-shard-00-02-lemrd.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',{useMongoClient: true,});//connect to the mongodb

//mongoose.connect('mongodb://sesh:sesh.1234@cluster0-shard-00-00-lemrd.mongodb.net:27017,cluster0-shard-00-01-lemrd.mongodb.net:27017,cluster0-shard-00-02-lemrd.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',{useMongoClient: true,});//connect to the mongodb

//creating class for the collection
var products = mongoose.model('products', { name: String, id:String, category:String, price:Number, brand: String,img:String});

//creating object for the collection
var prod = new products({ name: "ColorPlus Trouser",id:'CPT-001',category:'Men',price:'2000',brand:'ColorPlus',img:'../../assets/img/prod.jpg' });


//insert new record into the document
prod.save(function (err) {
  if (err) {console.log(err);}
  else {console.log('wowwww');}
});
