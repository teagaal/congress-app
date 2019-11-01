import React from 'react';
import { Link } from 'react-router-dom';
import './MembersList.scss';

const MembersList = ({ members }) => {
  return (
    <div className="members-container">
      {members && members.map(member => {
        const location = {
          pathname: '/detail',
          state: { data: member }
        }
        return (
          <article key={member.id} className="members-article">
            <p>{`${member.short_title} ${member.first_name} ${member.last_name}`}</p>
            <p>{`Party: ${member.party}`}</p>
            <p>{`State: ${member.state}`}</p>
            <Link to={location}>View detail</Link>
          </article>
        )
      })}
    </div>
  )
};

export default MembersList;
