import compose from 'koa-compose';
import Router from 'koa-router';
import routes from '../controller';

// The default load file in the folder below the index.js
const index = 'index';

// Router default prefix or context path
const router = new Router({
  prefix: ''
});

// redirect index
router.get('/', ctx => ctx.redirect('index'));

// Set router
Object.keys(routes).forEach(name => router.use(`/${name}`, routes[name][index].routes(), routes[name][index].allowedMethods()));

// console router list
if (process.env.NODE_ENV === 'development') {
  for (const layer of router.stack) {
    console.log(`path: ${layer.path}, methods: ${layer.methods}`);
  }
}

export default function api() {
  return compose([
    router.routes(),
    router.allowedMethods()
  ]);
}
