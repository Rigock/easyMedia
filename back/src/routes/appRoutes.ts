import { Router } from "express";

class AppRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', (req, resp) => resp.send('DesdeLaApp'));
    }

}

const appRoutes = new AppRoutes();
export default appRoutes.router;