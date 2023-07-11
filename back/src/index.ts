import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import appRoutes from './routes/appRoutes';


class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
    }

    routes(): void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/easyMedia',appRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on PORT: ', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();