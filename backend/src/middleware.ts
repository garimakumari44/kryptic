
require('dotenv').config()
import {Response, Request, NextFunction} from 'express'
import  Jwt  from 'jsonwebtoken'
import { JWTT_PASSWORD } from './config'



export const UserMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers['authorization']
    const decoded = Jwt.verify(header as string,JWTT_PASSWORD )

    if (decoded) {
        // @ts-ignore
        req.userId = decoded.id;
        next()
    } else {
        res.status(403).json({
            message : 'failed to verify'
        })
    }


}
