import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MembersList from '../../components/MembersList/MembersList';

const CONGRESS_API = 'A4J8rnPWbg72kZBvcT7iFuQw8YtYWF7ZrKqkD1EV';
const options = {
  headers: { 'X-API-Key': CONGRESS_API }
};


const Main = () => {
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
    getMembers(116, 'house')
  }, [])

  console.log(members, "main")
  return (
    <div>
      {isLoading ?
        <div>hola</div> : (<MembersList members={members} />)
      }
    </div>
  )
};

export default Main;