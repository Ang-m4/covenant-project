import { getConnection } from "./../database/database"

const getUsers = async (req, res) => {

    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT u.name, u.email, u.password, r.roleName AS role, d.name as department, s.segmentName as segment FROM users u INNER JOIN Roles r ON u.roleId = r.id INNER JOIN Segments s ON u.segmentId = s.id INNER JOIN Departments d ON u.departmentId = d.id');
        res.status(200).json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const createUser = async (req, res) => {

    try {
        const connection = await getConnection();
        const { name, password, email, roleId, segmentId, departmentId } = req.body;
        if (name == undefined || password == undefined || email == undefined || roleId == undefined) {
            res.status(400);
            res.send('Bad Request');
        };

        const result = await connection.query('INSERT INTO users (name, password, email, roleId, segmentId, departmentId) VALUES (?, ?, ?, ?, ?, ?)', [name, password, email, roleId, segmentId, departmentId]);
        res.status(200).json({ message: "User created" });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const getUserById = async (req, res) => {

    try {
        const connection = await getConnection();
        const { id } = req.params;
        const result = await connection.query('SELECT u.name, u.email, u.password, r.roleName AS role, d.name as department, s.segmentName as segment FROM users u INNER JOIN Roles r ON u.roleId = r.id INNER JOIN Segments s ON u.segmentId = s.id INNER JOIN Departments d ON u.departmentId = d.id WHERE u.id = ?', [id]);
        res.status(200).json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const deleteUser = async (req, res) => {

    try {
        const connection = await getConnection();
        const { id } = req.params;
        const result = await connection.query('DELETE FROM users WHERE id = ?', [id]);
        const { affectedRows } = result;

        if (affectedRows === 0) {
            res.status(400).json({ message: "Inexistent user" })
        } else {
            res.status(200).json({ message: "User deleted" });
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const methods = {
    getUsers,
    createUser,
    getUserById,
    deleteUser
};