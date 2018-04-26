const admin = require('firebase-admin');
const functions = require('firebase-functions');

const serviceAccount = require('./service_account.json');

const createUser = require('./create_user');
const requestPassword = require('./request_password');
const verifyPassword = require('./verify_password');
const createPose = require('./create_pose');
const getPoses = require('./get_poses');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://yin-timer-2.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
exports.requestPassword = functions.https.onRequest(requestPassword);
exports.verifyPassword = functions.https.onRequest(verifyPassword);
exports.createPose = functions.https.onRequest(createPose);
exports.getPoses = functions.https.onRequest(getPoses);