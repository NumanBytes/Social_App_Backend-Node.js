const checkRole = (roles) => async (req, res, next) => {
    const check = roles.indexOf(req.User.role);
    if (check === -1) {
        res.status(403).json({ message: "Forbidden"});
    } else next();
};

export default checkRole;