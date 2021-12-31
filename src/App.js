import React, {useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Spinner from './components/Spinner/Spinner';
import Articles from './components/Articles/Articles';
import TopStoriesArticles from './components/Articles/TopStoriesArticles';
import SearchArticles from './components/Articles/SearchArticles';
import Search from './components/Search/Search';
import axios from 'axios';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [featuredArticle, setFeaturedArticle] = useState([]);
  const [smallArticles, setSmallArticles] = useState([]);
  const [search, setSearch] = useState([]);
  const [topStories, setTopStories] = useState([]);
  const [smallTopStories, setSmallTopStories] = useState([]);
  const [sports, setSports] = useState([]);
  const [businessDay, setBusinessDay] = useState([]);
  const [culture, setCulture] = useState([]);
  const [wealth, setWealth] = useState([]);
  const [food, setFood] = useState([]);
  const [sidebarOne, setSidebarOne] = useState([]);
  const [sidebarTwo, setSidebarTwo] = useState([]);
  const [weather, setWeather] = useState([]);
  const [sectionName, setSectionName] = useState('');
  

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
    getSports();
    getBusinessDay();
    getCulture();
    getWealth();
    getFood();
    getSidebar();
    getWeather();
  }, []);

  const getSports = async () => {
    try{
      const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Sports")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
      setSports(res.data.response.docs);
    } catch(e) {
      console.log("Catch Error: ", e)
    }
  };
  const getBusinessDay = async () => {
    try{
      const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Business Day")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
      setBusinessDay(res.data.response.docs);
    } catch(e) {
      console.log("Catch Error: ", e)
    }
  };
  const getCulture = async () => {
    try{
      const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Culture")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
      setCulture(res.data.response.docs);
    } catch(e) {
      console.log("Catch Error: ", e)
    }
  };
  const getWealth = async () => {
    try{
      const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Wealth")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
      setWealth(res.data.response.docs);
    } catch(e) {
      console.log("Catch Error: ", e)
    }
  };
  const getFood = async () => {
    try{
      const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Food")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
      setFood(res.data.response.docs);
    } catch(e) {
      console.log("Catch Error: ", e)
    }
  };

  const getSidebar = async () => {
    try{
      const res1 = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Science")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
      const res2 = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:("Technology")&sort=newest&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
      setSidebarOne(res1.data.response.docs)
      setSidebarTwo(res2.data.response.docs)

    } catch(e) {
      console.log("Catch Error: ", e)
    }
  };

  const getWeather = async () => {
    const res = await axios.get(`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${process.env.REACT_APP_WEATHER_API_KEY}&q="Vancouver"&format=json`)
    setWeather(res.data.data);
  };

  const searchArticles = async (text) => {
    const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${text}&api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
    setSearch(res.data.response.docs);
  };

  const getTopArticles = async (section) => {
    try {
    setSectionName(section)
    const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`)
    setTopStories(res.data.results.slice(1, 2))
    setSmallTopStories(res.data.results.slice(2, 6))

    console.log("Section Name: ", sectionName)

  } catch(e) {
    console.log("Error: ", e);
  }
  };


  return (
    <div className="app">
          {loading ? 
          (
            <div>
              <Spinner />
            </div>
          ) : (
            <div>
              <Navbar />
                <BrowserRouter>
                  <Routes>
                    <Route path="/" 
                    element={
                      <div className='app__articles--container'>
                          <Search searchArticles={searchArticles}/> 
                          <Articles
                            articles={articles} 
                            featuredArticle={featuredArticle}
                            smallArticles={smallArticles}
                            sports={sports}
                            businessDay={businessDay}
                            culture={culture}
                            wealth={wealth}
                            food={food}
                            sidebarOne={sidebarOne}
                            sidebarTwo={sidebarTwo}
                            weather={weather}
                            />
                      </div>
                    } 
                    />
                    
                    <Route path="topstories/:section" element={
                      <div className='topstories__articles--container'>
                        <Search searchArticles={searchArticles}/>
                        <TopStoriesArticles 
                        loading={loading} 
                        search={search} 
                        articles={articles} 
                        featuredArticle={featuredArticle}
                        smallArticles={smallArticles}
                        sports={sports}
                        businessDay={businessDay}
                        culture={culture}
                        wealth={wealth}
                        food={food}
                        sidebarOne={sidebarOne}
                        sidebarTwo={sidebarTwo}
                        weather={weather}
                        topStories={topStories}
                        smallTopStories={smallTopStories}
                        getTopArticles={getTopArticles}
                        setSectionName={setSectionName}
                        />
                      </div>
                        } />
                    <Route path="searchresults/:search" element={
                    <div className='search__articles--container'>
                        <Search searchArticles={searchArticles}/>
                        <SearchArticles 
                        topStories={topStories} 
                        search={search} 
                        articles={articles} 
                        featuredArticle={featuredArticle}
                        smallArticles={smallArticles}
                        sports={sports}
                        businessDay={businessDay}
                        culture={culture}
                        wealth={wealth}
                        food={food}
                        sidebarOne={sidebarOne}
                        sidebarTwo={sidebarTwo}
                        weather={weather}
                        />
                    </div>
                    } />
                  </Routes>
                </BrowserRouter>
            </div>
        )}
    </div>
  )
};

export default App;
