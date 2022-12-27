const errorHandler = (err, req, res, next) => {
  const code = err.code || 500;

  res.status(code).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? "muy triste" : err.stack,
  });
};

module.exports = errorHandler;
