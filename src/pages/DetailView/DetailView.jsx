import React, {useEffect} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './DetailView.scss';

const DetailView = () => {
  let location = useLocation();
  let history = useHistory();
  const member = location.state.data

  useEffect(() => {
    document.title = "Details"
  }, [])

  console.log(location)
  return(
    <div className="view-container">
    <Header className="header"/>
      <article className="detail-container">
        <button onClick={() => history.goBack()}>Go Back</button>
        <h2>{`${member.short_title} ${member.first_name} ${member.last_name}`}</h2>
        <p>{`${member.party} - ${member.state}`}</p>
        <h3>Contact information</h3>
        <div>
          <p>Phone: {member.phone}</p>
          <p>Website: {member.url}</p>
          <p>Twitter: {member.twitter_account}</p>
          <p>Facebook: {member.facebook_account}</p>
        </div>
      </article>
      <Footer className="footer"/>
    </div>
  )
};

export default DetailView;
