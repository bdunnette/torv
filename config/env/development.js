'use strict';

module.exports = {
	db: 'mongodb://localhost/torv-dev',
	app: {
		title: 'torv - Development Environment'
	},
	facebook: {
		clientID: 'APP_ID',
		clientSecret: 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/facebook/callback'
	},
	twitter: {
		clientID: 'CONSUMER_KEY',
		clientSecret: 'CONSUMER_SECRET',
		callbackURL: 'http://localhost:3000/auth/twitter/callback'
	},
	google: {
		clientID: '835482301060-lh0bqch64og9h7ngdnqs45pi38dsjjjm.apps.googleusercontent.com',
		clientSecret: 'N_ffbJcJA_wye6Z6_ZTMv9s-',
		callbackURL: 'http://localhost:3000/auth/google/callback'
	},
	linkedin: {
		clientID: 'APP_ID',
		clientSecret: 'APP_SECRET',
		callbackURL: 'http://localhost:3000/auth/linkedin/callback'
	}
};
