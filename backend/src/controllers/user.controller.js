import { getConnection } from "./../database/database"

const getUser = async (req , res) => {
    const connection = await getConnection();
    
};

export const methods = {
    getUser
};