import {Request, Response} from 'express';
import pool from '../database';
import passport from 'passport';
// const passport = require('../lib/passport');

class AuthController {

    public profile (req: Request, res: Response){
        console.log('Desde el PROFILE');
        res.json({text: 'Desde el PROFILE '})
    }

    public signUp (req: Request, res: Response){
        console.log('Desde el signUp');
        res.json({text: 'Desde el SIGN UP '})
    }

    public postSignUp (req: Request, res:Response){
        // console.log('el bodA: ', req.body);
        passport.authenticate('local.signup',{
            successRedirect: '/profile',
            failureRedirect: '/signup',
            failureFlash: true
        });

        res.send('RECEIVED')
    }

}
export const atuhController = new AuthController();
export default atuhController;