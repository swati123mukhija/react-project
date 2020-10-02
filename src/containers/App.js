import React, { useEffect, useState } from 'react';
import './App.css';
import List from '../components/list';
import withListLoading from '../components/withListLoading';
function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    naruto: null,
    itemsToShow: 12,
    expanded: false,
	  flag : false,
  });

  useEffect(() => {
    setAppState({ loading: true, expanded: true });
    const apiUrl = `https://api.jikan.moe/v3/search/anime?q=naruto&limit=16`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((naruto,itemsToShow) => {
        setAppState({ loading: false, naruto: naruto.results , expanded:false,itemsToShow:appState.itemsToShow});
      });
  }, [setAppState]);
  
  const showMore =()=>{
    appState.itemsToShow === 12 ? (
		setAppState({ itemsToShow: appState.naruto.length, expanded: true , naruto: appState.naruto})
	  ) : (
		setAppState({ itemsToShow: 12, expanded: false , naruto: appState.naruto})
	  )
	}

  return (
    <div className='App'>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} naruto={appState.naruto} itemsToShow={appState.itemsToShow}/>
      </div>
      <div className="txt-c">
    				{appState.expanded ? (
    					<button type="button" className="btn btn-red mt20" onClick={showMore.bind(this)}>Show less</button>
    				  ) : (
    					<button type="button" className="btn btn-red mt20" onClick={showMore.bind(this)}>Show more</button>
    				  )}
    
    			</div>
    </div>
  );
}
export default App;
