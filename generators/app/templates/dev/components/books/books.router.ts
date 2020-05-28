import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

import { BooksController } from './books.controller.ts'

/**
 * @export
 * @class BooksRouter
 */
export class BooksRouter {
    private router: Router;
    private app: Application;
    private controller: BooksController;

    /**
     * Creates an instance of BooksRouter.
     * @param {Application} app
     * @param {BooksController} controller
     * @memberof BooksRouter
     */
    constructor(app: Application, controller: BooksController) {
        this.router = new Router();
        this.app = app;
        this.controller = controller;

        this.init();
    }

    /**
     * @private
     * @memberof BooksRouter
     */
    private routes() {
        this.router.get('/book', (context) => {
            this.controller.book(context);
        });
        this.router.get('/books', (context) => {
            this.controller.books(context);
        });
    }

    /**
     * @link https://doc.deno.land/https/deno.land/x/oak/mod.ts#Route
     * @private
     * @memberof BooksRouter
     */
    private configured() {
        this.app.use(this.router.routes())
        this.app.use(this.router.allowedMethods());
    }

    /**
     * @private
     * @memberof BooksRouter
     */
    private init() {
        this.routes();
        this.configured();
    }
}