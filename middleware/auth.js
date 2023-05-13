const jwt = require('jsonwebtoken');

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ msg: 'No token provided' });
    return;
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const { username } = decoded;
    req.user = { username, token };
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Not authorized to access this route' });
  }
}

module.exports = authenticationMiddleware;