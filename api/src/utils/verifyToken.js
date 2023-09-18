const jwt = require('jsonwebtoken')

export default function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token === null) return res.status(401).send('Token requerido')
    jwt.verify(token, process.env.API_SECRET, (err, user) => {
        if (err) return res.status(403).send('Token inválido')
        req.user = user
        next()
    })
}