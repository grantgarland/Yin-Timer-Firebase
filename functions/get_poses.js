const admin = require('firebase-admin');

module.exports = function(req, res) {
  const user = req.body.token
  const userPosesRef = admin.database().ref('users/' + user + '/poses');
    
  userPosesRef.once('value', (snapshot) => {
    let poses = snapshot.val();

    res.status(200).send(poses);
  })
}