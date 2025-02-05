import { IResp } from "@/shared/interfaces/utils/respUtils.interface";

export const resp = <T>(status: number, result: T): IResp<T> => {
    return {
        status: status,
        result: result
    };
}