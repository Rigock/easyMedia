import { Router } from "express";
import {appController} from "../controllers/appController"

class AppRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', appController.list);
        this.router.get('/:id', appController.getOne);
        this.router.post('/', appController.create);
        this.router.put('/:id', appController.update);
        this.router.delete('/:id', appController.delete);
    }

}

const appRoutes = new AppRoutes();
export default appRoutes.router;