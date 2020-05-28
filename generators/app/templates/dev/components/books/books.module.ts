import { Application } from 'https://deno.land/x/oak/mod.ts';
import { BooksController } from './books.controller.ts';
import { BooksRouter } from './books.router.ts';

/**
 * @export
 * @class BooksModule
 */
export class BooksModule {
    /**
     * Creates an instance of BooksModule.
     * @param {Application} app
     * @memberof BooksModule
     */
    constructor(app: Application) {
        new BooksRouter(app, new BooksController());
    }
}