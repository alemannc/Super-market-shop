const loginCustomer = require('../../Controllers/customerController/loginCustomer')

const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400).json({ error: 'Missing data' })
    }
    try {
        const customer = await loginCustomer(email, password)
        if (customer) {
            res.status(200).json(customer)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = login