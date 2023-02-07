import axios from "axios";
import { useEffect, useState } from "react";

const useArticlesByAuthor = (authorName: string) => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://galactos-production.up.railway.app/articles/author/${authorName}`,
    })
      .then((response) => {
        console.log("GET ARTICLES SUCCESS", response);
        setArticles(response.data);
      })
      .catch((error) => {
        console.log("GET ARTICLES ERROR", error.response.data.error);
      });
  }, [authorName]);

  return articles;
};

export default useArticlesByAuthor;
