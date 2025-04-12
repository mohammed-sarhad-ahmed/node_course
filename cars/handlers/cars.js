import { CarModel } from "../model/cars.js";

export const getCars = (req, res) => {
  res.status(200);
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

export const deleteCar = (req, res) => {
  res.end();
};
