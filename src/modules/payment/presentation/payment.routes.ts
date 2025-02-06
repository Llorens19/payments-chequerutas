//Interfaces
import { FastifyInstance } from "fastify";

//Adapters

//Controller
import { genericController } from "@/presentation/adapters/genericController.adapter";

//Use Cases

//middlewares
import verifyJWT from "@/shared/middlewares/verifyJWT.middleware";
import { PaymentRepoAdapter } from "@/modules/payment/infrastructure/repoImplement/payment.adapter";
import { paymentUseCase } from "@/modules/payment/application/use-cases/strypePayment.use-case";


const paymentAdapter = new PaymentRepoAdapter();

const paymentRoutes = (routes: FastifyInstance): void => {
  routes.post("/payment", genericController(paymentUseCase, paymentAdapter));

};

export default paymentRoutes;
