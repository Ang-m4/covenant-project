import {getConnection} from "./../database/database";

const getProposalsByUser = async (req, res) => {

    try {
        const connection = await getConnection();
        const { id } = req.params;
        const result = await connection.query('SELECT * FROM proposals WHERE userId = ?', [id]);
        res.status(200).json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const getProposals = async (req, res) => {

    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT p.name, p.description, p.isOpen, v.name AS votationPhase, p.userId, d.id FROM proposals INNER JOIN VotationPhases v ON p.votationPhaseId = v.id INNER JOIN Departments d ON p.departmentId = d.id');
        res.status(200).json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const createProposal = async (req, res) => {

    try {
        const connection = await getConnection();
        const { name, description, concertationId, userId } = req.body;
        if (name == undefined || description == undefined || concertationId == undefined || userId == undefined) {
            res.status(400);
            res.send('Bad Request');
        }

        const result = await connection.query('INSERT INTO proposals (name, description, concertationId, userId, ) VALUES (?, ?, ?, ?)', [name, description, concertationId, userId]);
        res.status(200).json({ message: "Proposal created" });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const getProposalById = async (req, res) => {

    try {
        const connection = await getConnection();
        const { id } = req.params;
        const result = await connection.query('SELECT * FROM proposals WHERE id = ?', [id]);
        res.status(200).json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const deleteProposal = async (req, res) => {

    try {
        const connection = await getConnection();
        const { id } = req.params;
        const result = await connection.query('DELETE FROM proposals WHERE id = ?', [id]);
        res.status(200).json({ message: "Proposal deleted" });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const methods = {
    getProposalsByUser,
    getProposals,
    createProposal,
    getProposalById,
    deleteProposal
};