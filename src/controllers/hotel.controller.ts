import { Request, Response, NextFunction } from "express";
import {
  createHotelService,
  deleteHotelService,
  getAllHotelsService,
  getHotelByIdService,
  updateHotelService
} from "../services/hotel.service.js";
import { StatusCodes } from "http-status-codes";

export async function createHotelHandler(req: Request, res: Response, next: NextFunction) {
  const hotelResponse = await createHotelService(req.body);
  res.status(StatusCodes.CREATED).json({
    success: true,
    message: "Hotel created successfully",
    data: hotelResponse
  });
}

export async function getHotelByIdHandler(req: Request, res: Response, next: NextFunction) {
  const hotelResponse = await getHotelByIdService(Number(req.params.id));
  res.status(StatusCodes.OK).json({
    success: true,
    message: "Hotel found successfully",
    data: hotelResponse
  });
}

export async function getAllHotelsHandler(req: Request, res: Response, next: NextFunction) {
  const hotelResponse = await getAllHotelsService();
  res.status(StatusCodes.OK).json({
    success: true,
    message: "All Hotels found successfully",
    data: hotelResponse
  });
}

export async function deleteHotelHandler(req: Request, res: Response, next: NextFunction) {
  const hotelResponse = await deleteHotelService(Number(req.params.id));
  res.status(StatusCodes.OK).json({
    success: true,
    message: "Hotel deleted successfully",
    data: hotelResponse
  });
}

export async function updateHotelHandler(req: Request, res: Response, next: NextFunction) {
  const hotelResponse = await updateHotelService(Number(req.params.id), req.body);
  res.status(StatusCodes.OK).json({
    success: true,
    message: "Hotel updated successfully",
    data: hotelResponse
  });
}
