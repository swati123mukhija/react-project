import Axios from 'axios';
import React from 'react';
class API {
  getData = () => {
    return Axios
      .get('https://voyager.goibibo.com/api/v2/flights_search/find_node_by_name_v2/?limit=15&v=2&search_query=del')
      .then(function(response) {
        if (response.status === 200 && response != null) {
          var data = response.data
          return data
        } else {
          throw new Error('Empty data')
        }
      })
      .catch(function(error) {
        console.log(error)
        return [] // Return empty array in case error response.
      })
  }
}
export default Axios ;