import path from 'path';
import fs from 'fs';
import Koa from 'koa';
import mount from 'koa-mount';
import serve from 'koa-static';
import views from 'koa-views';
import onerror from 'koa-onerror';
import config from './src/config/env';
import logger from './src/util/logs';
import middleware from './src/middleware';
import routes from './src/router';

const app = new Koa();

app.key = ['keys', config.context_path];

// middlewares
app.use(middleware());

app.use(mount(`/${config.context_path}`, serve(path.join(__dirname, '/public'))));

app.use(views(path.join(__dirname, 'src/views'), { map: { html: 'ejs' } }));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// response
onerror(app, {
  html: (ctx) => {
    ctx.status = 500;
    ctx.body = fs.readFileSync(path.join(__dirname, './src/views/error/error500.html'), 'utf-8');
    ctx.type = 'html';
  }
});

// routes
app.use(mount(`/${config.context_path}`, routes()));
// 404 handle
app.use(async (ctx) => {
  ctx.status = 404;
  await ctx.render('error/error404');
});

app.on('error', (err, ctx) => {
  logger.error({ err, method: `${ctx.method}`, path: `${ctx.path}`, params: ctx.params, query: ctx.query, body: ctx.request.body});
});

module.exports = app;
