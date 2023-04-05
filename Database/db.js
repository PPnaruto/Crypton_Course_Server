const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const USERNAME = process.env.CLUSTER_USERNAME;
const PASSWORD = process.env.CLUSTER_PASSWORD;

function connection(){
    mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.ytjszoj.mongodb.net/Web_Courses`);  
}

module.exports = (connection);

