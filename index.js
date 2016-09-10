import koa from 'koa';

import loader from './lib/loader';
import mock from './lib/mock';
import serve from './lib/serve';
import logger from './lib/logger';

export default options => {
	const app = koa();

	// middlewares
	app.use( logger() );
	app.use( loader( options ) );
	app.use( mock( options.mock ) );
	app.use( serve( options.static ) );

	app.listen( options.port, () => {
		console.log( `listening on port: ${options.port}` );
	} );
};
