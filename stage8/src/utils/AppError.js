class AppError {
  message;
  statusCode;

  constructor(message, status = 400) {
    this.message = message;
    this.statusCode = status;
  };
};

module.exports = AppError;