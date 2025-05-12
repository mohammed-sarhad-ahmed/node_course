export const handleError = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch(next);
  };
};
