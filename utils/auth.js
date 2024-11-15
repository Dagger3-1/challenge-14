const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    const now = Date.now();
    const timeoutDate = new Date(req.session.cookie._expires).getTime();
    
    if (now > timeoutDate) {
      req.session.destroy(() => {
        res.redirect('/login');
      });
    } else {
      next();
    }
  }
};

module.exports = withAuth;
