import { getConnection } from "./../database/database"

const getUsers = async (req, res) => {

    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM users');
        res.status(200).json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const createUser = async (req, res) => {

    try {
        const connection = await getConnection();
        const { name, password, roleId } = req.body;
        if (name == undefined || password == undefined || roleId == undefined) {
            res.status(400).json({ message: "Bad request" });
        };

        const result = await connection.query('INSERT INTO users (name, password, roleId) VALUES (?, ?, ?)', [name, password, roleId]);
        res.status(200).json({ message: "User created" });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const methods = {
    getUsers,
    createUser
};