import { getConnection } from "../database/database"

const validateUser = async (req, res) => {

    try {
        const connection = await getConnection();
        const { email, password } = req.body;

        const result = await connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    validateUser
}