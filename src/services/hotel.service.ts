import { createHotelDto } from "../dto/hotel.dto.js";
import {
  createHotel,
  getAllHotel,
  getHotelById,
  softDeleteHotel,
  updateHotel
} from "../repositories/hotel.repository.js";

export async function createHotelService(hotelData: createHotelDto) {
  const hotel = await createHotel({
    name: hotelData.name,
    address: hotelData.address,
    location: hotelData.location,
    rating: hotelData.rating,
    ratingCount: hotelData.ratingCount
  });
  return hotel;
}

export async function getHotelByIdService(id: number) {
  const hotel = await getHotelById(id);
  return hotel;
}

export async function getAllHotelsService() {
  const hotels = await getAllHotel();
  return hotels;
}

export async function deleteHotelService(id: number) {
  const hotel = await softDeleteHotel(id);
  return hotel;
}

export async function updateHotelService(id: number, hotelData: createHotelDto) {
  const hotel = await updateHotel(id, hotelData);
  return hotel;
}
