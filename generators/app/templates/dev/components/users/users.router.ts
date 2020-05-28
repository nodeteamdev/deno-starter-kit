import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

import { UsersController } from './users.controller.ts'

/**
 * @export
 * @class UsersRouter
 */
export class UsersRouter {
    private router: Router;
    private app: Application;
    private controller: UsersController;

    /**
     * Creates an instance of UsersRouter.
     * @param {Application} app
     * @param {UsersController} controller
     * @memberof UsersRouter
     */
    constructor(app: Application, controller: UsersController) {
        this.router = new Router();
        this.app = app;
        this.controller = controller;

        this.init();
    }

    /**
     * @private
     * @memberof UsersRouter
     */
    private routes() {
        this.router.get('/user', (context) => {
            this.controller.user(context);
        });
        this.router.get('/users', (context) => {
            this.controller.users(context);
        });
    }

    /**
     * @private
     * @memberof UsersRouter
     */
    private configured() {
        this.app.use(this.router.routes())
    }

    /**
     * @description called with contructor
     * @private
     * @memberof UsersRouter
     */
    private init() {
        this.routes();
        this.configured();
    }
}