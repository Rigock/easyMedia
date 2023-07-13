import {Request, Response} from 'express';
import pool from '../database';

class AppController {
   
    public async list (req: Request, res: Response) {
        const posts = await pool.then(poolGet => {
           return poolGet.query('SELECT * FROM `states`')
            .then(resp => resp);
        });
        res.json(posts);
    }
   
    public async getOne (req: Request, res: Response): Promise<any> {
        const {id} = req.params;
         const specificPost = await pool.then( poolGetOne  => {
           return poolGetOne.query('SELECT * FROM states WHERE id = ?', [id])
            .then(resp  => resp); 
        }); 
        if (specificPost.length > 0){
            return res.json(specificPost[0]);
        }
        res.status(404).json({text: 'Post does not exist'});
    }

    public async create(req: Request, res: Response): Promise<void>{
        await pool.then( poolConnection => {
            poolConnection.query('INSERT INTO states set ?', [req.body])
        });
        res.json({text: 'Post created'});
    }
    
    public async update(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.then( poolConnection => {
            poolConnection.query('UPDATE states set ? WHERE id = ?', [req.body, id]);
        });
        res.json({text: 'Updating post: '+ req.params.id});
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        await pool.then( poolConnection => {
            poolConnection.query('DELETE FROM states WHERE id = ?', [id]);
        });
        res.json({text: 'Post deleted'});
    }

}

export const appController = new AppController();
export default appController;