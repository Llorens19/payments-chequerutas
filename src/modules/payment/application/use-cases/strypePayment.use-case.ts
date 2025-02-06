//interfaces
import { IUseCaseData } from "@/shared/interfaces/useCaseGenericInpur.interface";

//errors
import { Errors } from "@/shared/errors/errors.error";

//utils
import { resp } from "@/shared/utils/resp.util";
import { IPaymentOutputPort } from "@/modules/payment/domain/repo/payment.port";
import { IResp } from "@/shared/interfaces/utils/respUtils.interface";

//dto




export const paymentUseCase = async ({ repo , request }: IUseCaseData<IPaymentOutputPort>): Promise<IResp<any>> => {

  const { amount, currency } = request.body as { amount: number; currency: string };

  if (!amount || !currency) {
    throw new Error("Faltan parámetros requeridos");
  }

  const paymentResponse = await repo.payment({ amount, currency });

  console.log({ clientSecret: paymentResponse.client_secret });

  return resp(200, { clientSecret: paymentResponse.client_secret });
};
