const mongoose = require('mongoose');
/**
* Set to Node.js native promises
* Per http://mongoosejs.com/docs/promises.html

mongodb://${env.accountName}:${env.key@ds013486.mlab.com:13486/test_nvovap_mongodb
*/
mongoose.Promise = global.Promise;

const env = require('./env/environment');

// eslint-disable-next-line max-len
//const mongoUri = `mongodb://${env.accountName}:${env.key}@${env.accountName}.documents.azure.com:${env.port}/${env.databaseName}?ssl=true`;

const mongoUri = 'mongodb://' + env.accountName + ':'+env.key+'@ds013486.mlab.com:13486/test_nvovap_mongodb';

//const mongoUri = 'mongodb://userfordevices:123@ds045734.mlab.com:45734/famallymoney-db';



function connect() {
  // mongoose.set('debug', true);
    console.log(mongoUri);
    
        
    return mongoose.connect(mongoUri,{ useNewUrlParser: true });
}

module.exports = {
connect,
mongoose
};