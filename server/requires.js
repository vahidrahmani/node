(function () {
	var express = require('express'),
		env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
		app = express(),
		q = require('q'),
		request = require('request'),
		logger = require('morgan'),
		cookieParser = require('cookie-parser'),
		bodyParser = require('body-parser'),
		path = require('path'),
		cluster = require('cluster'),
		numCPUs = require('os').cpus().length,
		util = require('util'),
		bcrypt = require('bcrypt-nodejs'),
		crypto = require('crypto'),
		Client = require('mariasql'),
		jwt = require('jwt-simple'),
		passport = require('passport'),
		local_strategy = require('passport-local').Strategy,
		c = new Client();

	//var flights = require('data');
	//var flight = require('flight');

	//exports.socket = socket;
	exports.app = app;
	exports.express = express;
	exports.q = q;
	exports.logger = logger;
	exports.cookieParser = cookieParser;
	exports.bodyParser = bodyParser;
	exports.path = path;
	exports.cluster = cluster;
	exports.numCPUs = numCPUs;
	exports.util = util;
	exports.c = c;
	exports.bcrypt = bcrypt;
	exports.crypto = crypto;
	exports.jwt = jwt;
	exports.request = request;
	exports.passport = passport;
	exports.local_strategy = local_strategy;
	//exports.flights = flights;
	//exports.flight = flight;

}());