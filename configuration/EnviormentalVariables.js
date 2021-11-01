//Depndencies
const dotenv = require('dotenv');


//dotenv
// if(process.env.NODE_ENV !== 'production'){
//     dotenv.config({path: `${__dirname}/../SkillstituteInternational.env`});
// }

dotenv.config({path: `${__dirname}/EnviormentalVariable.env`});
console.log(`yes${__dirname}/EnviormentalVariable.env`);

module.exports ={
    _PORT:process.env.PORT,
    _MONGO_DB_CONNECTION_URI:process.env.MONGO_URI
}

