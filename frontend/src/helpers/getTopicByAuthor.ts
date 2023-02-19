const getTopicByAuthor = (key: string) => {
  let dict: Record<string, string> = {
    "ambassador-olivia": "Politics",
    "deputy-director-grace": "something",
    "governor-felicity": "something",
    "secretary-albert": "something",
    "senator-marcus": "War",
    "sir-humphrey-appleby": "Economy",
  };
  return dict[key];
};

export default getTopicByAuthor;
