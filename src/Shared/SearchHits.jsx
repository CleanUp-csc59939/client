import React from 'react';
// import { Link } from 'react-router-dom';

const SearchHits = (props) => {
  const { hit } = props;
  return (
    <a href={`/event/${hit.id}`}>
      <div style={{ backgroundColor: 'white' }}>{hit.name}</div>
    </a>
  );
};

export default SearchHits;
