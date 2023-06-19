import express, { Express, Request, Response} from 'express';
import environment from './environment';
import * as routes from './routes';

const app: Express = express();
const appPort = environment.APP_PORT;
const appEnvironment = environment.APP_ENVIRONMENT;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/__gtg', routes.gtgRouter);
app.use('/persons', routes.personRoute);

// route
app.get('/api/version', (req: Request, resp: Response) => {
    const jsonResponse = {
        version: "1.0.0",
        environment: appEnvironment
    };
    resp.setHeader('Content-Type', 'application/json');
    resp.writeHead(200);
    resp.end(JSON.stringify(jsonResponse));
});

app.get('/contact.html', (req: Request, resp: Response) => {
    resp.setHeader('Content-Type', 'text/html');
    resp.writeHead(200);
    resp.end('<html><body><h1>HTML response</h1></body></html>');
});

app.get('/contact.csv', (req: Request, resp: Response) => {
    resp.setHeader('Content-Type', 'text/csv');
    resp.writeHead(200);
    resp.end(`id,name,salary\n1,Peter,3000`);
});

app.listen(appPort, () => {
    console.log(`[server]: Server is running at http://localhost:${appPort}`);
});
