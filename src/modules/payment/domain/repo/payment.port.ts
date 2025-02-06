import { IPaymentInput } from "@/modules/payment/domain/interfaces/payment.interface";


export interface IPaymentOutputPort {
  payment(data: IPaymentInput): Promise<any>;
}
