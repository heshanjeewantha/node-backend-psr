const { response } = require('./app');
const users = require('./model');  // ✅ Import your model

const getUsers = (req, res) => {
    users.find()
        .then(response => res.json({ users: response }))  // ✅ Return as 'users'
        .catch(error => res.status(500).json({ message: error.message }));
};

const addUser = (req, res) => {
    const user = new users({ id: req.body.id, name: req.body.name });
    user.save()
        .then(response => res.status(201).json({ user: response }))  // ✅ Return as 'user'
        .catch(error => res.status(500).json({ message: error.message }));
};

const updateUser = (req, res) => {
    users.updateOne({ id: req.body.id }, { $set: { name: req.body.name } })
        .then(response => res.json({ updated: response }))  // ✅ Return as 'updated'
        .catch(error => res.status(500).json({ message: error.message }));
};

const deleteUser = (req, res) => {
    const userId = req.params.id;
    users.deleteOne({ id: userId })
        .then(response => {
            if (response.deletedCount === 0) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json({ deleted: response });
        })
        .catch(error => res.status(500).json({ message: error.message }));
};

module.exports = { getUsers, addUser, updateUser, deleteUser };