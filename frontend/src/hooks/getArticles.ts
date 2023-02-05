import axios from "axios";
import { useEffect, useState } from "react";

const getArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:8000/articles?page=0`,
    })
      .then((response) => {
        console.log("GET ARTICLES SUCCESS", response);
        setArticles(response.data);
      })
      .catch((error) => {
        console.log("GET ARTICLES ERROR", error.response.data.error);
      });
  }, []);

  return articles;
};

export default getArticles;
