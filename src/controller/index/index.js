import Router from 'koa-router';
// import request from '../../util/request';
// import config from '../../config/env';

const router = new Router();
router
  .get('/', async (ctx) => {
    console.log('进主页面');
    await ctx.render('index');
  })
  .get('/as', async (ctx) => {
    await ctx.render('as/as');
  })
  .get('/syslog', async (ctx) => {
    await ctx.render('syslog/syslog');
  })
  .get('/applog', async (ctx) => {
    await ctx.render('applog/applog');
  });
export default router;

