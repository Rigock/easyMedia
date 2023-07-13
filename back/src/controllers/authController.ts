import {Request, Response} from 'express';
import pool from '../database';
import passport from 'passport';
// const passport = require('../lib/passport');

class AuthController {

    public profile (req: Request, res: Response){
        res.json({text: 'Desde el PROFILE '})
    }

    public signUp (req: Request, res: Response){
        res.json({text: 'Desde el SIGN UP '})
    }

    public async getUser (req: Request, res: Response): Promise<any> {
        const email = req.params.email;
         const specificUser = await pool.then( poolGetOne  => {
           return poolGetOne.query('SELECT * FROM users WHERE email = ?', [email])
            .then(resp  => resp); 
        }); 
        if (specificUser.length > 0){
            return res.json(specificUser[0]);
        }
        res.status(404).json({text: 'User does not exist'});
    }

    public async createUser (req: Request, res:Response): Promise<void>{
        await pool.then( poolConnection => {
            poolConnection.query('INSERT INTO users set ?', [req.body])
        });
        res.json({text: 'User created'});

    }
    
}
export const atuhController = new AuthController();
export default atuhController;