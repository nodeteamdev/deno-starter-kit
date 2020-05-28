import { Application } from 'https://deno.land/x/oak/mod.ts';
import { UsersController } from './users.controller.ts';
import { UsersRouter } from './users.router.ts';

/**
 * @export
 * @class UsersModule
 */
export class UsersModule {
    /**
     * Creates an instance of UsersModule.
     * @param {Application} app
     * @memberof UsersModule
     */
    constructor(app: Application) {
        new UsersRouter(app, new UsersController());
    }
}