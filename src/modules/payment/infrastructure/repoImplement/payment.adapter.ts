
import { IPaymentInput } from "@/modules/payment/domain/interfaces/payment.interface";
import { IPaymentOutputPort } from "@/modules/payment/domain/repo/payment.port";
import Stripe from "stripe";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export class PaymentRepoAdapter implements IPaymentOutputPort {


  payment = async (data: IPaymentInput): Promise<Stripe.Response<Stripe.PaymentIntent>> => {
    const { amount, currency } = data;
    return await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: ['card'],
    });
  }
}
