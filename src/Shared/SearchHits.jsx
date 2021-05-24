import React from 'react';
import { connectHits } from 'react-instantsearch-dom';
// import { Link } from 'react-router-dom';

const SearchHits = (props) => {
  const { hits } = props;
   const results = hits.map(hit => {
    return (
        <a href={`/event/${hit.id}`}>
             <div style={{ backgroundColor: 'white' }}>{hit.name}</div>
        </a>
       )
     }   
   );
   return results
};

export default connectHits(SearchHits);

