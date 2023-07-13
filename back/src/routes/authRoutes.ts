import { Router } from "express";
import {atuhController} from '../controllers/authController';
import passport from "passport";


class AuthRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/:email', atuhController.getUser);
        this.router.post('/', atuhController.createUser);
        // this.router.post('/', passport.authenticate('local.signup', {
        //     successRedirect: '/profile',
        //     failureRedirect: '/signup',
        //     failureFlash: true
        // }));

        this.router.get('/profile', atuhController.profile);
    }


}

const authRoutes = new AuthRoutes();
export default authRoutes.router;