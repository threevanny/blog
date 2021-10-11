import { Request, Response } from 'express'

export class IndexCtrl {

  hello(req: any, res: any) {
    res.send('Hi there 👋');
  }

}