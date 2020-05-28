import { RouterContext } from 'https://deno.land/x/oak/mod.ts';

/**
 * @export
 * @class BooksController
 */
export class BooksController {
    /**
     * @param {RouterContext} context
     * @returns
     * @memberof BooksController
     */
    books(context: RouterContext) {
        return context.response.body = 'Hello /books';
    }

    /**
     * @param {RouterContext} context
     * @returns
     * @memberof BooksController
     */
    book(context: RouterContext) {
        return context.response.body = 'Hello /book';
    }
}