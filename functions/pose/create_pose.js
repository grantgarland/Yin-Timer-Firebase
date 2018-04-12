const admin = require('firebase-admin');

module.exports = function(req, res) {
  // validation
  if (!req.body.pose) {
    return res.status(422).send({ error: 'No pose provided' });
  } else if (!req.body.token) {
    return res.status(422).send({ error: "User not logged in"})
  }

  admin.auth().verifyIdToken(req.body.token)
    .then(uid => {
      const user = admin.auth().currentUser.uid;
      const userPoseRef = admin.database().ref('users/' + user + '/poses');

      userPoseRef.child(req.body.pose.name)
                 .set(req.body.pose, () => {
            res.send({ success: true });
          });
      })
    .catch((err) => {
      res.status(422).send({ error: err });
    });
}