'use strict';

var path = require('path'),
	rootPath = path.normalize(__dirname + '/../..');

module.exports = {
	app: {
		title: 'torv',
		description: 'A virtual town square.',
		keywords: 'MongoDB, Express, AngularJS, Node.js'
	},
	root: rootPath,
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'torv',
	sessionCollection: 'sessions'
};