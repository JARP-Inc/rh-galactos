const stringify = (name: string) => {
  return name.toLowerCase().replaceAll(" ", "-");
};

export default stringify;
