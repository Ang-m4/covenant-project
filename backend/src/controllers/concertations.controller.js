import { getConnection } from "../database/database"

const getProposalsByConcertation = async(req, res) => {

    try {
        const connection = await getConnection();
        const { id } = req.params;
        const result = await connection.query('SELECT * FROM proposals WHERE concertationId = ?', [id]);
        res.status(200).json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const getConcertations = async(req, res) => {

    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM concertations');
        res.status(200).json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const createConcertation = async(req, res) => {

    try {
        const connection = await getConnection();
        const { name, isOpen, sectorId, userId, apertureDate } = req.body;
        if (name == undefined || isOpen == undefined || sectorId == undefined || userId == undefined || apertureDate == undefined) {
            res.status(400);
            res.send('Bad Request');
        }

        const result = await connection.query('INSERT INTO concertations (name, isOpen, sectorId, userId, apertureDate, votationPhaseId) VALUES (?, ?, ?, ?, ?, ?)', [name, isOpen, sectorId, userId, apertureDate, 1]);
        res.status(200).json({ message: "Concertation created" });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const getConcertationById = async(req, res) => {

    try {
        const connection = await getConnection();
        const { id } = req.params;
        const result = await connection.query('SELECT * FROM concertations WHERE id = ?', [id]);
        res.status(200).json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const deleteConcertation = async(req, res) => {

    try {
        const connection = await getConnection();
        const { id } = req.params;
        const result = await connection.query('DELETE FROM concertations WHERE id = ?', [id]);
        res.status(200).json({ message: "Concertation deleted" });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const methods = {
    getProposalsByConcertation,
    getConcertations,
    createConcertation,
    getConcertationById,
    deleteConcertation
};