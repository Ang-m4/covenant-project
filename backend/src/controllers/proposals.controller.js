import {getConnection} from "./../database/database";

const getProposalsByUser = async (req, res) => {

    try {
        const connection = await getConnection();
        const { id } = req.params;
        const result = await connection.query('SELECT p.id, p.name, p.description , u.name as userName, v.name as votationPhase, p.score, d.name as department FROM proposals p  INNER JOIN votationPhases v ON p.votationPhaseiD = v.id INNER JOIN users u ON p.userId = u.id INNER JOIN departments d ON p.departmentId = d.id WHERE u.id = ?', [id]);
        // const result = await connection.query('SELECT * FROM proposals WHERE userId = ?', [id]);
        res.status(200).json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const addCalification = async (req, res) => {

    try {
        const connection = await getConnection();
        const { proposalId, userId, score } = req.body;
        if (proposalId == undefined || userId == undefined || score == undefined) {
            res.status(400);
            res.send('Bad Request');
            return;
        }else{
            const result = await connection.query('INSERT INTO califications (proposalId, userId, score) VALUES (?, ?, ?)', [proposalId, userId, score]);
            const average = await connection.query('SELECT AVG(score) as average FROM califications WHERE proposalId = ?', [proposalId]);
            const result2 = await connection.query('UPDATE proposals SET score = ? WHERE id = ?', [average[0].average, proposalId]);
            
            res.status(201).json({ message: "Calification added" });
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};



const getCalificationsByProposal = async (req, res) => {

    try {
        const connection = await getConnection();
        const { id } = req.params;
        const result = await connection.query('SELECT * FROM califications WHERE proposalId = ?', [id]);
        res.status(200).json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const getProposals = async (req, res) => {

    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT p.name, p.description, p.isOpen, p.userId, d.id FROM proposals INNER JOIN Departments d ON p.departmentId = d.id');
        res.status(200).json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const createProposal = async (req, res) => {

    try {
        const connection = await getConnection();
        const { name, description, concertationId, userId, departmentId,votationPhaseId } = req.body;
        if (name == undefined || description == undefined || concertationId == undefined || userId == undefined) {
            res.status(400);
            res.send('Bad Request');
        }
        const result = await connection.query('INSERT INTO proposals (name, description, concertationId, userId, departmentId,votationPhaseId, score) VALUES (?, ?, ?, ?, ?, ?, ?)', [name, description, concertationId, userId, departmentId,votationPhaseId,0]);
        res.status(201).json({ message: "Proposal created" });

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
    deleteProposal,
    addCalification,
    getCalificationsByProposal
};