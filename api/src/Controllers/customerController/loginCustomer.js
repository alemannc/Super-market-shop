// const hash = require("../utils/bcrypt");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const findByEmail = require("./byEmailCustoemer");


const loginCustomer = async (email, password) => {
    const customer = await findByEmail(email)
    if (customer.length === 0) {
        throw new Error('User not found')
    }
    if (customer[0].password === password) {
        const token = jwt.sign({
            id: customer[0].id,
            name: customer[0].name,
            email: customer[0].email,
            provider: customer[0].provider,
        }, process.env.API_SECRET, { algorithm: 'HS256' })
        return token
    } else {
        throw new Error('Incorrect email/password')
    }
}

module.exports = loginCustomer