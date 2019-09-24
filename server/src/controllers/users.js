const users = {};
const User = require('../models/User')
users.get = async(req, res) => {
    const users = await User.find();
    res.json(users)
};
users.getId = (req, res) => {

};
users.post = async(req, res) => {
    const { username } = req.body;
    const user = new User({
        username: username,
    })
    await user.save();
    res.json({ message: 'User saved' });
};
users.put = async(req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: 'User updated' });
};
users.remove = async(req, res) => {
    const user = await User.findByIdAndRemove(req.params.id);
    res.json({message:'User removed'});
};
module.exports = users;