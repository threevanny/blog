import express from "express";

//Routes
import indexRouter from "./routes/index.routes";

class Server {
  private app: express.Application;

  constructor () {
    this.app = express();
    this.configuration();
    this.routes();
  }
  public configuration (): void {
    this.app.use(express.json());
    this.app.set('port', process.env.PORT || 3000);
  }
  public routes(): void {
    this.app.use(indexRouter);
  }
  public run(): void {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is runnig on port: ${this.app.get('port')}`);
    })
  }
}

const server = new Server();
server.run();