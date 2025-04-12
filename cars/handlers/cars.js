import { CarModel } from "../model/cars.js";

export const getCars = async (req, res) => {
  const cars = await CarModel.find();
  res.status(200).send({
    message: "success",
    cars,
  });
};

export const addCar = async (req, res) => {
  const { body } = req;
  console.log(body);
  const carDoc = await CarModel.create(body);
  res.status(201).send({
    status: "success",
    carDoc,
  });
};

export const deleteCar = async (req, res) => {
  await CarModel.deleteOne({
    _id: req.params.id,
  });
  res.status(204).end();
};
