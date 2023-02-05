import axios from "axios";
import { useEffect, useState } from "react";

function getArticle(id: string): Article {
  const [article, setArticle] = useState<Article>({
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
      url: `http://localhost:8000/articles/id/${id}`,
    })
      .then((response) => {
        console.log("GET ARTICLE SUCCESS", response);
        setArticle(response.data);
      })
      .catch((error) => {
        console.log("GET ARTICLE ERROR", error.response.data.error);
      });
  }, []);

  return article;
}

export default getArticle;
