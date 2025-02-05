
import { IUseCaseData } from "@/shared/interfaces/useCaseGenericInpur.interface";
import { IResp } from "@/shared/interfaces/utils/respUtils.interface";


export interface IUseCaseFunction<T> {
  (data: IUseCaseData<T>): Promise<IResp<object>>;
}
