import koa from 'koa';
import koaRouter from 'koa-router';
import User, { getUsers } from './model.js';

const app = new koa();
const router = new koaRouter();

router.get('/users', getUsers);

app.use(router.routes()); 

app.listen(3000);

const jane = await User.create({
    firstName: 'jaane',
    lastName: 'doe',
});
