import { CarModel } from "../model/cars.js";

export const getCars = async (req, res) => {
  const cars = await CarModel.find();
  res.status(200).send({
    status: "success",
    data: {
      cars,
    },
  });
};

export const addCar = async (req, res) => {
  const car = await CarModel.create(req.body);
  res.status(200).send({
    status: "success",
    data: {
      car,
    },
  });
};

export const deleteCar = async (req, res) => {
  const { id } = req.params;
  await CarModel.deleteOne({
    _id: id,
  });
  res.status(204).end();
};
