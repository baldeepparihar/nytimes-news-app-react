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
  const [featuredArticle, setFeaturedArticle] = useState([]);
  const [smallArticles, setSmallArticles] = useState([]);
  const [topStories, setTopStories] = useState([]);
  const [adventureSports, setAdventureSports] = useState([]);
  const [businessDay, setBusinessDay] = useState([]);
  const [culture, setCulture] = useState([]);
  const [fashionStyle, setFashionStyle] = useState([]);
  const [food, setFood] = useState([]);
  

  useEffect(() => {
    const getArticles = async () => {
      try{
        setLoading(true);
        const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Metro")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
        setArticles(res.data.response.docs);
        setLoading(false); 

        setFeaturedArticle(res.data.response.docs.slice(0, 1))
        setSmallArticles(res.data.response.docs.slice(1, 6))
      } catch(e) {
        console.log("Catch Error: ", e)
      }
    };
    getArticles();
    getAdventureSports();
    getBusinessDay();
    getCulture();
    getFashionStyle();
    getFood();
  }, []);

  // const getRemainingArticles = () => {
  //   let endpoints = [
      
  //     `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Health & Fitness")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`,
  //     `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Opinion")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`,
  //     `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Personal Tech")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`,
  //     `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Retail")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`,
  //     `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Science")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`,
  //     `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Sports")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`,
  //     `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Style")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`,
  //     `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Technology")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`
  //   ];
  //   axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
  //   .then((res) => {
  //     console.log("Multiple Endpoints: ", res)
  //   })
  // }

  const getAdventureSports = async () => {
    try{
      const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Adventure Sports")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
      setAdventureSports(res.data.response.docs);
      console.log("Adventure Sports", res.data.response.docs)
    } catch(e) {
      console.log("Catch Error: ", e)
    }
  };
  const getBusinessDay = async () => {
    try{
      const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Business Day")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
      setBusinessDay(res.data.response.docs);
      console.log("Business Day", res.data.response.docs)
    } catch(e) {
      console.log("Catch Error: ", e)
    }
  };
  const getCulture = async () => {
    try{
      const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Culture")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
      setCulture(res.data.response.docs);
      console.log("Culture", res.data.response.docs)
    } catch(e) {
      console.log("Catch Error: ", e)
    }
  };
  const getFashionStyle = async () => {
    try{
      const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Fashion & Style")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
      setFashionStyle(res.data.response.docs);
      console.log("Fashion Style", res.data.response.docs)
    } catch(e) {
      console.log("Catch Error: ", e)
    }
  };
  const getFood = async () => {
    try{
      const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Food")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
      setAdventureSports(res.data.response.docs);
      console.log("Food", res.data.response.docs)
    } catch(e) {
      console.log("Catch Error: ", e)
    }
  };

  const searchArticles = async (text) => {
    const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${text}&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
    setArticles(res.data.response.docs);
    console.log(res.data.response.docs)
  };

  const getTopArticles = async (section) => {
    const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
    setTopStories(res.data.response.docs);
    console.log(res.data.response.docs)
  }
  
  // console.log("Articles from app: ", articles)
  // console.log("Featured Article from app: ", featuredArticle)
  // console.log("Small Articles from app: ", smallArticles)

  return (
    <div className="app">
          {loading ? 
          (
            <div>
              <h1>loading in app</h1>
              <Spinner />
            </div>
          ) : (
            <div>
              <Navbar/>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" 
                    element={
                      <div>
                        <Search searchArticles={searchArticles}/> 
                        <Articles
                          articles={articles} 
                          featuredArticle={featuredArticle}
                          smallArticles={smallArticles}
                          adventureSports={adventureSports}
                          />
                      </div> 
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
