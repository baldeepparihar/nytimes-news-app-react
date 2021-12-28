import React, {useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Articles from './components/Articles/Articles';
import TopStories from './components/TopStories/TopStories';
import Search from './components/Search/Search';
import axios from 'axios';
import { Typography, Container, Link } from "@material-ui/core";

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
        <div>
            <Navbar/>
                <Container>
                  <Typography color="textPrimary" gutterBottom variant="h2" align="center">
                  <BrowserRouter>
                    <Routes>
                      <Route path="/" 
                      element={
                        <>
                          <Search searchArticles={searchArticles}/> 
                            <Link>
                              <Articles loading={loading} articles={articles} />
                            </Link>
                        </> 
                      } 
                      />
                      <Route path="topstories" element={<TopStories loading={loading} topStories={topStories} getTopArticles={getTopArticles} />} />

                    </Routes>
                  </BrowserRouter>
                  </Typography>
                </Container>
        </div>
  );
}

export default App;
