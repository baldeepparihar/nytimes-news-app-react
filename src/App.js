import React, {useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Spinner from './components/Spinner/Spinner';
import Articles from './components/Articles/Articles';
import TopStories from './components/TopStories/TopStories';
import Search from './components/Search/Search';
import axios from 'axios';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [topStories, setTopStories] = useState([]);


  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Technology")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
      setArticles(res.data.response.docs);
      setLoading(false);
  };
  getArticles();
  }, []);

  const searchArticles = async (text) => {
    setLoading(true);
    const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${text}&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
    setArticles(res.data.response.docs);
    setLoading(false);
  };

  const getTopArticles = async (section) => {
    setLoading(true);
    const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
    setTopStories(res.data.response.docs);
    setLoading(false);
  }
  
  console.log(articles)

  return (
    <div className="app">
          {loading ? 
          (
            <Spinner />
          ) : (
            <div>
              <Navbar/>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" 
                    element={
                      <>
                        <Search searchArticles={searchArticles}/> 
                        <Articles loading={loading} articles={articles} />
                      </> 
                    } 
                    />
                    <Route path="topstories" element={<TopStories loading={loading} topStories={topStories} getTopArticles={getTopArticles} />} />
                  </Routes>
                </BrowserRouter>
            </div>
        )}
    </div>
  )
};

export default App;
