import axios from "axios";
import React, { useState, useEffect } from "react";
import { Cards } from "../styles/cards";
import NewsCard from '../components/newscard'

function news() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadingBar = document.querySelector('#loading')
    loadingBar.classList.add('run')

    axios.get("/api/news").then((res) => {
      setNews(res.data.result);
      loadingBar.classList.remove('run')
    });
  }, []);

  return (
    <div>
      <h1>Astronomy news</h1>
      <Cards>
        {
          news.map((article, key) => (
            <NewsCard
              key={key}
              website={article.newsSite}
              articleName={article.title}
              articleDescription={article.summary}
              publishedAt={article.publishedAt}
            />
          ))
        }
      </Cards>
    </div>
  );
}
export default news;