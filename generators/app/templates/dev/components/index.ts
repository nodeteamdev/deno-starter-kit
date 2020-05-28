import { Application } from 'https://deno.land/x/oak/mod.ts';
import { BooksModule } from './books/books.module.ts';
import { UsersModule } from './users/users.module.ts';

/**
 * @export
 * @class Components
 */
export class Components {
    public BooksModule: BooksModule;
    public UsersModule: UsersModule;

    /**
     * Creates an instance of Components.
     * @param {Application} app
     * @memberof Components
     */
    constructor(app: Application) {
        this.BooksModule = new BooksModule(app);
        this.UsersModule = new UsersModule(app);
    }
}