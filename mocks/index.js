const glob = require('glob');
const path = require('path');
const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');

//init Koa
const app = new Koa();
app.use(bodyParser());
app.use(router.routes());

//set route
const providers = glob.sync(path.join(__dirname, '*.*'), {
  ignore: __filename,
});
providers.forEach((itm) => {
  const provider = require(itm);

  router[provider.method](provider.api, async (ctx, next) => {
    ctx.body = provider.response;
    await next();
  });
});

//cors
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,HEAD,PUT,DELETE'); // 支持的方法
  ctx.set('Access-Control-Allow-Credentials', 'true');
  if (ctx.get('Access-Control-Request-Headers')) {
    ctx.set(
      'Access-Control-Allow-Headers',
      ctx.get('Access-Control-Request-Headers'),
    );
  }
  // FIX：if on Origin
  ctx.set('Vary', 'Origin');

  // if OPTIONS
  if (ctx.method === 'OPTIONS') {
    ctx.status = 204;
    return;
  }

  await next();
});

// error handler
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

// launch http server
const port = 5000;
app.listen(port, () => {
  console.log(`mock server http://127.0.0.1:${port}`);
});
