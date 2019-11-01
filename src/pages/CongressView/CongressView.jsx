import React, { useState, useEffect } from "react";
import axios from "axios";
import MembersList from "../../components/MembersList/MembersList";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./CongressView.scss";
import Spinner from "../../components/Spinner/Spinner";
import SearchBar from "../../components/SearchBar/SearchBar";
import Filter from "../../components/Filter/Filter";

const CONGRESS_API = "A4J8rnPWbg72kZBvcT7iFuQw8YtYWF7ZrKqkD1EV";
const options = {
  headers: { "X-API-Key": CONGRESS_API }
};

const CongressView = () => {
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(
        `https://api.propublica.org/congress/v1/116/senate/members.json`,
        options
      );
      setMembers(res.data.results[0].members);
      setFilteredMembers(res.data.results[0].members);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleFilter = event => {
    let filtered = members;

    switch (event.target.name) {
      case "name":
        filtered = filtered.filter(member => {
          return member.first_name
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
        });
        setFilteredMembers(filtered);
        break;
      case "last-name":
        filtered = filtered.filter(member => {
          return member.last_name
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
        });
        setFilteredMembers(filtered);
        break;
      case "party":
        filtered = filtered.filter(member => {
          return member.party
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
        });
        setFilteredMembers(filtered);
        break;
      case "state":
        filtered = filtered.filter(member => {
          return member.state
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
        });
        setFilteredMembers(filtered);
        break;
      default:
        filtered = filtered.filter(member => {
          return Object.values(member)
            .join(" ")
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
        });
        setFilteredMembers(filtered);
    }
  };

  useEffect(() => {}, [members, filteredMembers]);

  const handleToggle = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="view-container">
      <Header className="header" />
      <div className="search-container">
        <SearchBar onChange={handleFilter} />
        <button onClick={handleToggle}>Advanced search</button>
      </div>
      {isHidden ? null : <Filter onChange={handleFilter} />}
      <main className="main">
        {isLoading ? <Spinner /> : <MembersList members={filteredMembers} />}
      </main>
      <Footer className="footer" />
    </div>
  );
};

export default CongressView;
