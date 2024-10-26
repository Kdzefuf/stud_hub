const validateUser = (req, res, next) => {
    const { nickname, name, email, password, shedule } = req.body;
  
    if (!nickname || !name || !email || !password || !shedule) {
      return res.status(400).json({ error: 'All fields are required: nickname, name, email, password, and shedule.' });
    }
  
    next();
  };
  
  module.exports = validateUser;