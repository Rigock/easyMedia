import { Router } from "express";
import {appController} from "../controllers/appController"

class AppRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', appController.index);
    }

}

const appRoutes = new AppRoutes();
export default appRoutes.router;