import { getConnection } from "../database/database"

const getProposalsByConcertation = async (req, res) => {

    try {
        const connection = await getConnection();
        const { id } = req.params;
        const result = await connection.query('SELECT p.id, p.name, p.description, u.name as userName, p.score, d.name as department FROM proposals p  INNER JOIN votationPhases v ON p.votationPhaseId = v.id INNER JOIN users u ON p.userId = u.id INNER JOIN departments d ON p.departmentId = d.id WHERE concertationId = ?', [id]);
        // const result = await connection.query('SELECT p.id, p.name, p.description , u.name as userName, p.score FROM proposals p  INNER JOIN votationPhases v ON p.votationPhaseiD = v.id INNER JOIN users u ON p.userId = u.id WHERE concertationId = ?', [id]);
        res.status(200).json(result);

    } catch (error) {
        console.log(error);
        res.status(500);
        res.send(error.message);
    }

};

const getConcertationsByUser = async (req, res) => {

    try {
        const connection = await getConnection();
        const { id } = req.params;
        const result = await connection.query('SELECT c.id, c.name , c.description, isOpen, s.name as sector, apertureDate, v.name as votationPhase FROM concertation c INNER JOIN Sectors s ON c.sectorId = s.id INNER JOIN VotationPhases v ON c.votationPhaseId = v.id INNER JOIN segments seg ON seg.sectorId = s.id INNER JOIN users u ON u.segmentId= seg.id WHERE u.id = ?', [id]);
        res.status(200).json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

const getConcertations = async (req, res) => {

    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT c.id, c.name , c.description, isOpen, s.name as sector, apertureDate, v.name as votationPhase FROM concertation c INNER JOIN Sectors s ON c.sectorId = s.id INNER JOIN VotationPhases v ON c.votationPhaseId = v.id');
        res.status(200).json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const createConcertation = async (req, res) => {

    try {
        const connection = await getConnection();
        const { name, isOpen, sectorId, apertureDate, description } = req.body;
        if (name == undefined || isOpen == undefined || sectorId == undefined ||  apertureDate == undefined, description == undefined) {
            res.status(400);
            res.send('Bad Request');
        }else{
            const result = await connection.query('INSERT INTO concertation (name, isOpen, sectorId, apertureDate, votationPhaseId, description) VALUES (?, ?, ?, ?, ?, ?)', [name, isOpen, sectorId, apertureDate, 1, description]);
            res.status(200).json({ message: "Concertation created" });
        }

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const getConcertationById = async (req, res) => {

    try {
        const connection = await getConnection();
        const { id } = req.params;
        const result = await connection.query('SELECT name, isOpen, s.id as sector, apertureDate, v.id as votationPhase FROM concertation c INNER JOIN Sectors s ON c.sectorId = s.id INNER JOIN VotationPhases v ON c.votationPhaseId = v.id WHERE c.id = ?', [id]);
        res.status(200).json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const deleteConcertation = async (req, res) => {

    try {
        const connection = await getConnection();
        const { id } = req.params;
        const result = await connection.query('DELETE FROM concertation WHERE id = ?', [id]);
        res.status(200).json({ message: "Concertation deleted" });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const getSectors = async (req, res) => {
    
        try {
            const connection = await getConnection();
            const result = await connection.query('SELECT * FROM sectors');
            res.status(200).json(result);
    
        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
    
}

export const methods = {
    getProposalsByConcertation,
    getConcertations,
    createConcertation,
    getConcertationById,
    deleteConcertation,
    getSectors,
    getConcertationsByUser
};