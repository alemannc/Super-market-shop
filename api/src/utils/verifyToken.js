const jwt = require('jsonwebtoken')
const axios = require('axios')
const fs = require('fs')

async function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token === null) return res.status(401).send('Token required')
    const publicKey = fs.readFileSync('dev-wyxt60ixz16xhf76.pem', 'utf8')
    const decodedToken = jwt.decode(token)
    if (decodedToken?.sub) {
        jwt.verify(token, publicKey, { algorithms: 'RS256', audience: '5ghzR7bk38VckHVMuTZgZ5eEjGJSjjmv', issuer: 'https://dev-wyxt60ixz16xhf76.us.auth0.com/' }, (err, user) => {
            if (err) return res.status(403).json({ error: err })
            req.user = user
            next()
        })
    } else {
        jwt.verify(token, process.env.API_SECRET, (err, user) => {
            if (err) return res.status(403).json({ error: err })
            req.user = user
            next()
        })
    }
}

module.exports = verifyToken