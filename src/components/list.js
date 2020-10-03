import React from 'react';
import Autocomplete from "../autosuggest";
const List = (props) => {
  const {naruto,itemsToShow} = props;
  if (!naruto || naruto.length === 0) return <p>No repos, sorry</p>;
  return (
    <>
    <Autocomplete
        suggestions={naruto}/>
    <ul>
      {naruto.slice(0,itemsToShow).map((naru) => {
        return (
          <li key={naru.mal_id} className='flexa prel mb40'>
          <img src={naru.image_url} className="formbg"></img>
          <div className="bgbox">
            <span className='repo-text'>{naru.title} </span>
            </div>
          </li>
        );
      })}
    </ul>
    </>
  );
};
export default List;
