import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import Router from "koa-router";
import logger from "koa-logger";

const app = new Koa();

const router = new Router();

const PORT = process.env.PORT || 3000;

app.use(bodyParser());
app.use(
  cors({
    origin: "*",
  })
);
app.use(logger());

router.get(`/`, async (ctx) => {
  try {
    ctx.body = {
      status: "success",
    };
  } catch (err) {
    console.error(err);
  }
});

app.use(router.routes());

const server = app
  .listen(PORT, async () => {
    console.log(`🚀 Server listening on port: ${PORT}`);
  })
  .on("error", (err) => {
    console.error(err);
  });

export default server;
