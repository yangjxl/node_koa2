import compose from 'koa-compose';
import convert from 'koa-convert';
import logger from 'koa-logger';
import helmet from 'koa-helmet';
import cors from 'koa-cors';
import bodyParser from 'koa-bodyparser';
import json from 'koa-json';
// import session from 'koa-generic-session';
// import RedisStore from 'koa-redis';
// import config from '../config/env';

export default function middleware() {
  return compose([
    bodyParser(),
    convert(json()),
    logger(),
    helmet(),
    convert(cors())
    // convert(session({
    //   store: new RedisStore({
    //     host: config.redis.host,
    //     port: config.redis.port
    //   }),
    //   cookie: {
    //     path: '/',
    //     httpOnly: true,
    //     maxAge: 30 * 60 * 1000,
    //     rewrite: true,
    //     signed: false
    //   },
    //   ttl: 60 * 1000 * 30
    // }))
  ]);
}
