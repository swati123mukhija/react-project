import React from 'react'
export default class FetchRandomUser extends React.Component{
  state = {
    loading: true,
    person: null,
    data:''
  };
  async componentDidMount(){
    const url = "https://voyager.goibibo.com/api/v2/flights_search/find_node_by_name_v2/?limit=15&v=2&search_query=del";
    const response = await fetch(url);
    const result = await response.json();
    this.setState({person: result.data.r[0], loading: false});    
    console.log(typeof(result.data));
    for(var i=0; i<result.length; i++){
    console.log(result.length);
  }
  }
  handle(event){
  this.setState({
    data:event.target.value
  });    
  }
  render(){
    if(this.state.loading){
      return <div>loading...</div>
    }
    if(!this.state.person){
      return <div>did'nt get the result</div>
    }
    return(
      <div>
          <div>{this.state.person.xtr.cn}</div>
          <input type= "text" onChange={this.handle.bind(this)}/>
      </div>
    );
  }
}

