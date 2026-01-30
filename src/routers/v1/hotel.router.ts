import express from "express";
import {
  createHotelHandler,
  deleteHotelHandler,
  getAllHotelsHandler,
  getHotelByIdHandler,
  updateHotelHandler
} from "../../controllers/hotel.controller.js";
import { validateRequestBody } from "../../validators/index.js";
import { hotelSchema } from "../../validators/hotel.validator.js";

const hotelRouter = express.Router();

hotelRouter.post("/", validateRequestBody(hotelSchema), createHotelHandler);
hotelRouter.get("/", getAllHotelsHandler);
hotelRouter.get("/:id", getHotelByIdHandler);
hotelRouter.delete("/:id", deleteHotelHandler);
hotelRouter.put("/:id", validateRequestBody(hotelSchema), updateHotelHandler);

export default hotelRouter;
