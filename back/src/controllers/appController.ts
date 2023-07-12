import {Request, Response} from 'express';
import pool from '../database';

class AppController {
   
    public list (req: Request, res: Response) {
        res.json({text: 'Showing posts'});
    }
   
    public getOne (req: Request, res: Response) {
        res.json({text: 'Showing post: '+ req.params.id});
    }

    public create(req: Request, res: Response){
        res.json({text: 'Creating a post'});
    }
    
    public update(req: Request, res: Response){
        res.json({text: 'Updating post: '+ req.params.id});
    }

    public delete(req: Request, res: Response){
        res.json({text: 'Deleting post: '+ req.params.id});
    }

}

export const appController = new AppController();
export default appController;