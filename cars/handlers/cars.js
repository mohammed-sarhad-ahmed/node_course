const cars = [
  { id: 1, make: "Toyota", model: "Corolla" },
  { id: 2, make: "Honda", model: "Civic" },
  { id: 3, make: "Ford", model: "Mustang" },
  { id: 4, make: "Chevrolet", model: "Camaro" },
  { id: 5, make: "Tesla", model: "Model 3" },
  { id: 6, make: "BMW", model: "M3" },
  { id: 7, make: "Audi", model: "A4" },
  { id: 8, make: "Mercedes-Benz", model: "C-Class" },
  { id: 9, make: "Nissan", model: "Altima" },
  { id: 10, make: "Volkswagen", model: "Golf" },
];

export const getCars = (req, res) => {
  const filteredCars = cars.filter((car) => {
    if (req.query.model && req.query.make) {
      if (req.query.make === car.make && req.query.model === car.model)
        return true;
    }
    if (req.query.make && !req.query.model) {
      if (req.query.make === car.make) return true;
    }
    if (req.query.model && !req.query.make) {
      if (req.query.model === car.model) return true;
    }
  });

  res.status(200).send(filteredCars);
};

export const addCar = (req, res) => {
  cars.push(req.body);
  res.end();
};

export const deleteCar = (req, res) => {
  cars.splice(req.params.id - 1, 1);
  console.log(cars);
  res.end();
};
