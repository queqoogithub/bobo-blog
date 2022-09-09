import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.stripe_public_key);

export default function BuyMeCoffee() {
  // Buy Me Coffee
  const items = [
    {
      title: "Buy Me Coffee",
      // image: "data:image/png;base64,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",
      description: "I need more coffee :)",
      price: 100,
    },
  ];

  const createCheckOutSession = async () => {
    const stripe = await stripePromise;
    
    const checkoutSession = await fetch("/api/create-checkout-session", {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: items,
        email: "narathip.que@gmail.com"
      })
    });

    const checkout = await checkoutSession.json()
    console.log('checkout session data: ', checkout.id)

    // Redirecting the user to the checkout page 
    const result = await stripe.redirectToCheckout({
      sessionId: checkout.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-3">
      {items?.map((item) => (
        <div key={item.title} className="bg-white rounded-2xl h-[220px] w-[220px] p-3 shadow-xl flex flex-col justify-center items-center">
          <Image
            width={120}
            height={120}
            objectFit="contain"
            src="data:image/png;base64,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"
            alt={item.title}
          />
          <h3 className="text-center mb-2">{item.description}</h3>
          <button onClick={createCheckOutSession} role="link" className="bg-[#fb923c] hover:bg-[#fdba74] px-4 py-2 rounded-lg italic tracking-wide text-white">
            Buy Me Coffee
          </button>
        </div>
      ))}
    </div>
  );
}