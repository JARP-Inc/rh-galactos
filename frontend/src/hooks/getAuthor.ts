function getAuthor(name: string): Author {
  return {
    name: name,
    description:
      "Duis fringilla erat sit amet nisi porta, vitae lacinia turpis tempor. Nam viverra pharetra volutpat. Vestibulum sit amet mattis urna, eget faucibus tortor. Vivamus et lorem id ex eleifend sollicitudin at in felis. Phasellus vel lacus eget elit finibus finibus eget ac nulla. In lacus quam, rhoncus non ipsum feugiat, imperdiet dignissim nulla.",
    image_url: "/sir_humphrey.jpg",
    title: "Economics and Government correspondent",
  };
}

export default getAuthor;
