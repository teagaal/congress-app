import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MembersList from '../../components/MembersList/MembersList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './CongressView.scss';

const CONGRESS_API = 'A4J8rnPWbg72kZBvcT7iFuQw8YtYWF7ZrKqkD1EV';
const options = {
  headers: { 'X-API-Key': CONGRESS_API }
};

const CongressView = () => {
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMembers = async (congress, chamber) => {
      const res = await axios.get(`https://api.propublica.org/congress/v1/${congress}/${chamber}/members.json`,
        options
      );
      setMembers(res.data.results[0].members);
      setIsLoading(false);
    }
    getMembers(116, 'senate')
  }, [])

  return (
    <div className="view-container">
      <Header className="header" />
      <main className="main">
        {isLoading ?
          <p>hola</p> : (<MembersList members={members} />)
        }
      </main>
      <Footer className="footer" />
    </div>
  )
};

export default CongressView;