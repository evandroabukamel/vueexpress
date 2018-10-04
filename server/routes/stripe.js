const express = require('express')
const router = express.Router()

router.post("/charge", (req, res, next) => {
	let amount = req.body.total*100;

	stripe.customers.create({
		email: req.body.stripeToken.email,
		source: req.body.stripeToken.id //source == stripeToken.id not just stripeToken
	})
	.then(customer =>
	stripe.charges.create({
		amount,
		description: "Ecommerce Shopping Cart",
		currency: "usd",
		customer: customer.id
	}))
	.then(charge => res.json(req.body.stripeToken));
})

module.exports = router