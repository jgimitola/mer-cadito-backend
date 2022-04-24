const error = (error, req, res, next) => {
  console.log('###E An error occurred');
  if (error.code === 11000) {
    const field = Object.keys(error.keyValue);
    return res.status(400).json({
      message: `Field '${field}' with value '${error.keyValue[field]}' already exists`,
    });
  }

  next(err);
};

export default error;
