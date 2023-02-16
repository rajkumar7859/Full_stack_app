import type { NextApiRequest, NextApiResponse } from 'next';
import data from "../../db.json"

const Redis = require("ioredis");
const redis = new Redis();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    switch (req.method) {
        case "GET": {
            // adding db.json data
            await redis.hset("laptops", data.Laptops);
            await redis.hset("cameras", data.Cameras);
            await redis.hset("mobiles", data.MobilePhones);
            await redis.hset("monitors", data.Monitors);


            //await redis.hset("laptops", {"Dell":20});

            let a = await redis.hgetall("laptops");
            let b = await redis.hgetall("cameras");
            let c = await redis.hgetall("mobiles");
            let d = await redis.hgetall("monitors");

            res.send([a, b, c, d]);
        }
    }
}