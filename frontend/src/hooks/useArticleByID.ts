import axios from "axios";
import { useEffect, useState } from "react";

function useArticleByID(id: string): Article {
  const [article, setArticle] = useState<Article>({
    id: -1,
    title: "loading...",
    author: "loading...",
    content: "",
    image_url: "",
    in_game_date: "",
    publication_date: "",
  });

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://galactos-production.up.railway.app/articles/id/${id}`,
    })
      .then((response) => {
        console.log("GET ARTICLE SUCCESS", response);
        setArticle(response.data);
      })
      .catch((error) => {
        console.log("GET ARTICLE ERROR", error.response.data.error);
      });
  }, [id]);

  return article;
}

export default useArticleByID;
