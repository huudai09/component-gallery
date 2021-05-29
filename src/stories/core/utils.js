let increment = 0;
export const random = () => {
  return (new Date().getTime() + ++increment + 0.1).toString(16).slice(0, -4);
};
