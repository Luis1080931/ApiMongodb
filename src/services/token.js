import jwt from 'jwt-simple'
import moment from 'moment'
import { SECRET_TOKEN } from '../config.js'

export function createToken(client){
    const payload = {
        sub: client._id,
        iat: moment().unix() ,
        exp: moment().add(1, 'day').unix(),
    }

    return jwt.encode(payload, SECRET_TOKEN)
}