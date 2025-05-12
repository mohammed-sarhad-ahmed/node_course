import { CarModel } from "../model/cars.js";
import { handleError } from "../utils/handleError.js";

export const getCars = handleError(async (req, res) => {
  const cars = await CarModel.find();
  res.status(200).send({
    status: "success",
    data: {
      cars,
    },
  });
});

export const addCar = handleError(async (req, res) => {
  const car = await CarModel.create(req.body);
  res.status(200).send({
    status: "success",
    data: {
      car,
    },
  });
});
export const deleteCar = handleError(async (req, res) => {
  const { id } = req.params;
  await CarModel.deleteOne({
    _id: id,
  });
  res.status(204).end();
});

export const updateCar = handleError(async (req, res) => {
  const { id } = req.params;
  const car = await CarModel.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.status(200).send({
    status: "success",
    data: {
      car,
    },
  });
});
