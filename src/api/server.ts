import { config } from 'dotenv';
config();

import 'reflect-metadata';
import Fastify from "fastify";
import cors from "@fastify/cors";
import paymentRoutes from '@/modules/payment/presentation/payment.routes';




const start = async () => {
  try {
    console.log("Base de datos conectada");

    const app = Fastify({ logger: false });


    // await app.register(cors, {
    //   origin: (origin, callback) => {
    //     const urls_allowed = process.env.CORS_URLS?.split(",") || [];

    //     if (!origin || urls_allowed.includes(origin)) {
    //       callback(null, true);
    //     } else {
    //       callback(new Error("No permitido por CORS"), false);
    //     }
    //   }
    // });


    await app.register(cors, {
      origin: (origin, callback) => {
        const urls_allowed = process.env.CORS_URLS ? process.env.CORS_URLS.split(",") : [];

        console.log("Orígenes permitidos:", urls_allowed);

        if (!origin || urls_allowed.length === 0 || urls_allowed.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("No permitido por CORS"), false);
        }
      }
    });

    app.register(paymentRoutes);

    await app.listen({
      port: Number(process.env.PORT) || 4002,
      host: process.env.HOST || '0.0.0.0',
    });

    console.log(`Servidor Fastify ejecutándose en http://${process.env.HOST}:${process.env.PORT}`);
  } catch (error: unknown) {
    console.error('Error al iniciar el servidor:', error);
    process.exit(1);
  }
};

start();