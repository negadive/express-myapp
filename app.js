import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import createError from 'http-errors';
import logger from 'morgan';
import { join } from 'path';
import { sequelize_err_handler } from './middlewares/error_handler.js';
import authRouter from './routes/auth.js';
// import indexRouter from './routes/index.js';
import inventoryRouter from './routes/inventory.js';
import userRouter from './routes/users.js';
import sellOrderRouter from './routes/sellOrder.js'


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(import.meta.url, 'public')));

// app.use('/', indexRouter);
app.use('/', authRouter);
userRouter.use('/:username/inventory', inventoryRouter);
app.use('/users', userRouter);
app.use('/sellOrders', sellOrderRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(sequelize_err_handler);
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ message: (err.message || "Internal Error") })
});

app.use(cors({
  origin: "http://localhost:3001"
}));

export default app
