import { Request, Response } from 'express';

class IndexController{
    public index (req: Request, res: Response) {
        res.json({ text: 'API is /api/games' })
    }
}

export const indexController =  new IndexController();
