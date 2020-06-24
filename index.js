require('dotenv').config()
require('./scripts/babelLoaders');

if(process.argv.indexOf("prod") >=0 )
process.env.NODE_ENV = "production";

// cluster 
require('./scripts/cluster')();
