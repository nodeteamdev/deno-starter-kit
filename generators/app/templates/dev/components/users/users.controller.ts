import { RouterContext } from 'https://deno.land/x/oak/mod.ts';

/**
 * @export
 * @class UsersController
 */
export class UsersController {
    /**
     * @param {RouterContext} context
     * @returns
     * @memberof UsersController
     */
    users(context: RouterContext) {
        return context.response.body = 'Hello /users';
    }

    /**
     * @param {RouterContext} context
     * @returns
     * @memberof UsersController
     */
    user(context: RouterContext) {
        return context.response.body = 'Hello /user';
    }
}