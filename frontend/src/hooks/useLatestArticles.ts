import axios from "axios";
import { useEffect, useState } from "react";

const useLatestArticles = (page: "all" | number = "all") => {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://galactos-production.up.railway.app/articles?page=${page}`,
    })
      .then((response) => {
        console.log("GET ARTICLES SUCCESS", response);
        setArticles(response.data);
      })
      .catch((error) => {
        console.log("GET ARTICLES ERROR", error.response.data.error);
      });
  }, [page]);

  return articles;
};

export default useLatestArticles;
