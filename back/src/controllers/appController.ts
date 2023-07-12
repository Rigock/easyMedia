import {Request, Response} from 'express';
import pool from '../database';

class AppController {
   
    public index (req: Request, res: Response) {
        pool.get('query')
        res.send('Desde la app')
    }    

}

export const appController = new AppController();
export default appController;