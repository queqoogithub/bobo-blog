const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  console.log(items);
  console.log(email);

  const transformedItems = items.map((item) => ({
    price_data: {
      currency: "thb",
      product_data: {
        images: [item.image],
        name: item.title,
      },
      unit_amount: item.price * 100,
    },
    description: item.description,
    quantity: 1,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["TH"],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
    metadata: {
      email,
      //images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  console.log('session: ', session.id)

  res.status(200).json({ id: session.id });
};