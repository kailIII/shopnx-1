'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri:    process.env.OPENSHIFT_MONGODB_DB_URL || // Added app
            'mongodb://localhost/shopnx'
			//'mongodb://mitx:mitx@ds031812.mongolab.com:31812/mitxdb'
  },

  //seedDB: true
  seedDB: false
};
