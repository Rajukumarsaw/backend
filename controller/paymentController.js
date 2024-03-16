const Stripe = require('stripe');

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const checkOut = async (req, res) => {
	try {
		const params = {
			submit_type: "pay",
			mode: "payment",
			payment_method_types: ["card"],
			billing_address_collection: "auto",
			line_items: req.body.map((item) => {
				return {
					price_data: {
						currency: "inr",
						product_data: {
							name: item.brand,
						},
						unit_amount: item.price * 100,
					},
					adjustable_quantity: {
						enabled: true,
						minimum: 1,
					},
					quantity: item.qty,
				};
			}),

			success_url: `${process.env.FRONTEND_URL}/success`,
			cancel_url: `${process.env.FRONTEND_URL}/cancel`,
		};

		const session = await stripe.checkout.sessions.create(params);
		res.status(200).json(session.id);
	} catch (err) {
		res.status(err.statusCode || 500).json(err.message);
	}
};

module.exports = { checkOut };
