// loggerMiddleware.js

// Student Name: Cameron Wlodarczyk
// Student ID: 1231816913
// Date: 3/29/2026

function logger(req, res, next) {
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    
    next();
}

module.exports = logger;