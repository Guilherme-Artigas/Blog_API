const express = require('express');

const { loginRouter, userRouter, categoriesRouter, postsRouter } = require('./routes');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use('/user', userRouter);

app.use('/categories', categoriesRouter);

app.use('/post', postsRouter);

module.exports = app;
