import dotenv from 'dotenv'
import path from 'path'



dotenv.config({path: path.join((process.cwd(), '.env'))})

export default {
port: process.env.PORT,
DATABASSE_URL:process.env.DATABASSE_URL,
DEFAULT_PASS:process.env.DEFAULT_PASS,
BCRIPT_SALT_ROUNDS:process.env.BCRIPT_SALT_ROUNDS

}