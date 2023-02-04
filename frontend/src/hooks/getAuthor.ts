let sirHumphrey = {
  name: "Sir Humphrey Appleby",
  picture_url: "/sir_humphrey.jpg",
  description: `
Sir Appleby, economics and government correspondent for Γαλάχοτσ, has had a long and illustrious career within the ministry for administrative affairs that gives him unparalleled insight into the inner working of governments around the galaxy.

Sir Humphreys words of wisdom:
Paperwork is the religion of the Civil Service. Remember, if you haven't done the paperwork, God legally cannot kill you. This is how I have survived for over 5 millennia. My death certificate was simply never signed.`,
};

function getAuthor(name: string): Author {
  if (name === "sirHumphrey") {
    return sirHumphrey;
  }

  return {
    name: name,
    description:
      "Duis fringilla erat sit amet nisi porta, vitae lacinia turpis tempor. Nam viverra pharetra volutpat. Vestibulum sit amet mattis urna, eget faucibus tortor. Vivamus et lorem id ex eleifend sollicitudin at in felis. Phasellus vel lacus eget elit finibus finibus eget ac nulla. In lacus quam, rhoncus non ipsum feugiat, imperdiet dignissim nulla.",
    picture_url: "/sir_humphrey.jpg",
  };
}

export default getAuthor;
