import React from 'react';

const MembersList = ({ members }) => {
  console.log(typeof members, "hola")
  return (
    <ul>
      {members.map(member => {
        return (
          <li key={member.id}>
            <p>{`${member.short_title} ${member.first_name} ${member.last_name}`}</p>
            <p>{`Party: ${member.party}`}</p>
            <p>{`State: ${member.state}`}</p>
            <button>View detail</button>
          </li>
        )
      })}
    </ul>
  )
};

export default MembersList;
