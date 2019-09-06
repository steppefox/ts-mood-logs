import * as express from 'express';
import { Mood } from '../db/models/Mood';

export async function getIndexController(req:any, res:express.Response) {
    const data = await Mood.findAll();

    console.log(data);

    res.send(data);
}
