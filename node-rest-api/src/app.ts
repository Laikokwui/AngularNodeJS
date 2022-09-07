import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/customers";
import * as mongoose from "mongoose";
import * as helmet from "helmet";
import * as cors from "cors";
import * as morgan from "morgan";
require('dotenv').config()

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    public mongoUri: string = process.env.MONGO_URI;

    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private config(): void{
        this.app.use(helmet.contentSecurityPolicy());
        this.app.use(helmet.dnsPrefetchControl());
        this.app.use(cors());
        this.app.use(morgan('combined'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(function (req, res, next) {
            //Enabling CORS
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
            next();
        });
    }

    private mongoSetup(): void{
        require('mongoose').Promise = global.Promise;
        mongoose.connect(this.mongoUri);
    }

}

export default new App().app;