const admin = require('firebase-admin');

module.exports = function(req, res) {
  // validation
  if (!req.body.pose) {
    return res.status(422).send({ error: 'No pose provided' });
  } else if (!req.body.token) {
    return res.status(422).send({ error: "User not logged in"})
  }

  const user = req.body.token;
  const pose = req.body.pose;
  const userPoseRef = admin.database().ref('users/' + user + '/poses');
    
  userPoseRef
    .child(pose.name)
    .set(pose, () => {
        res.send({ success: true });
    });
}