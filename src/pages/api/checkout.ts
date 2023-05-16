import type { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../lib/stripe";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { priceId } = req.body;

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!priceId) {
    return res.status(400).json({ error: "price not found" });
  }

  const priceID = priceId;
  const successUrl = `${process.env.NEXT_URL}/success`;
  const cancelUrl = `${process.env.NEXT_URL}/cancel`;
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: successUrl,
    cancel_url: cancelUrl,
    line_items: [
      {
        price: priceID,
        quantity: 1,
      },
    ],
  });
  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
