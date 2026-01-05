import dotenv from "dotenv";
import logger from "./logger.config.js";

type ServerConfig = {
  PORT: number;
};

export function loadEnv() {
  dotenv.config();
  logger.info("Environment variables loaded");
}

loadEnv();

export const serverConfig: ServerConfig = {
  PORT: Number(process.env.PORT) || 3001,
};
