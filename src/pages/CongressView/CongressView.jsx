import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MembersList from '../../components/MembersList/MembersList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './CongressView.scss';
import Spinner from '../../components/Spinner/Spinner';
import SearchBar from '../../components/SearchBar/SearchBar';

const CONGRESS_API = 'A4J8rnPWbg72kZBvcT7iFuQw8YtYWF7ZrKqkD1EV';
const options = {
  headers: { 'X-API-Key': CONGRESS_API }
};

const CongressView = () => {
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredMembers, setFilteredMembers] = useState([]);

  useEffect(() => {
    const getMembers = async (congress, chamber) => {
      const res = await axios.get(`https://api.propublica.org/congress/v1/${congress}/${chamber}/members.json`,
        options
      );
      setMembers(res.data.results[0].members);
      setFilteredMembers(res.data.results[0].members)
      setIsLoading(false);
    }
    getMembers(116, 'senate')

  }, []);


  const handleFilter = (event) => {
    let filtered = members;
    filtered = filtered.filter((member => {
      return Object.values(member)
        .join(" ")
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    }))
    setFilteredMembers(filtered)
  };

  useEffect(() => { }, [members, filteredMembers]);

  return (
    <div className="view-container">
      <Header className="header" />
      <SearchBar onChange={handleFilter} />
      <main className="main">
        {isLoading ?
          <Spinner /> : (<MembersList members={filteredMembers} />)
        }
      </main>
      <Footer className="footer" />
    </div>
  )
};

export default CongressView;