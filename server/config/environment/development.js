'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    //uri: 'mongodb://localhost/shopnx-dev'
	//uri: 'mongodb://mitx:mitx@ds031812.mongolab.com:31812/mitxdb'
	//uri: 'mongodb://mitx:mitx@ds019816.mlab.com:19816/shopnx-dev'
	uri: 'mongodb://u.mitx.ca:27017/shopnx-dev'
  },

  //seedDB: true
  seedDB: false
};
