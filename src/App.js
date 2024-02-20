import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=tesla&from=2024-01-20&sortBy=publishedAt&apiKey=0603b04428f54c88b476d959361c6a5f"
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Recherche de nouvelles du monde entier</h1>
      <div className="grid-container">
        {articles.map((article, index) => (
          <div className="card " key={index}>
            <img
              className="card-img-top"
              src={article.urlToImage}
              alt={article.title}
            />
            <div className="card-body">
              <h5 className="card-t itle">{article.title}</h5>
              <p>{article.description}</p>
              <p>Source : {article.source.name}</p>
              <p>Date de publication : {article.publishedAt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
