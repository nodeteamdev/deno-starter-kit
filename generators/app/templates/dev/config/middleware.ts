import {
    Application,
    Status,
    isHttpError
} from 'https://deno.land/x/oak/mod.ts';

export class Middleware {
    /**
     * Call before all components init
     *
     * @param {Application} app
     * @memberof Middleware
     */
    before(app: Application) {
        // Logger
        app.use(async (ctx, next) => {
            await next();
            const rt = ctx.response.headers.get('X-Response-Time');
            console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
        });

        // Timing
        app.use(async (ctx, next) => {
            const start = Date.now();
            await next();
            const ms = Date.now() - start;
            ctx.response.headers.set('X-Response-Time', `${ms}ms`);
        });

        // Error handling
        app.use(async (ctx, next) => {
            try {
                await next();
            } catch (err) {
                if (isHttpError(err)) {
                    switch (err.status) {
                        case Status.NotFound:
                            // handle NotFound
                            break;
                        default:
                            // handle other statuses
                    }
                } else {
                    // rethrow if you can't handle the error
                    throw err;
                }
            }
        });
    }

    /**
     * Call after all components init
     *
     * @param {Application} app
     * @memberof Middleware
     */
    after(app: Application) {
        app.use((ctx) => {
            ctx.response.body = 'NOT FOUND';
        });
    }
}
