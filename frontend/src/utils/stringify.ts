const stringify = (name: string | undefined) => {
  return name?.toLowerCase().replaceAll(" ", "-");
};

export default stringify;
