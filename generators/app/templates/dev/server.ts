import { Application } from 'https://deno.land/x/oak/mod.ts';
import { Components } from './components/index.ts';
import { Middleware } from './config/middleware.ts';

/**
 * @class Server
 */
class Server {
    private port: number;
    private app: Application;
    private middleware: Middleware;

    /**
     * Creates an instance of Server.
     * @param {number} port
     * @memberof Server
     */
    constructor(port: number) {
        this.port = port;
        this.app = new Application();
        this.middleware = new Middleware();

        this.configure();
        this.listen();
    }

    /**
     * -> middleware:before -> components -> middleware:after
     *
     * @private
     * @memberof Server
     */
    private configure() {
        this.middleware.before(this.app);

        new Components(this.app);

        this.middleware.after(this.app);
    }

    /**
     * @private
     * @memberof Server
     */
    private async listen() {
        await this.app.listen({ port: this.port });
    }
}

new Server(4000);