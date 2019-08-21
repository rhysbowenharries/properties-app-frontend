import React,{Fragment, Component} from 'react';
import ClientList from '../components/ClientList'

class Clients extends React.Component {

  constructor(props){
      super(props);

      this.state = {
          loading: 'initial',
          clients: []
        };
  }  
  
  componentDidMount() {
      const url = 'http://localhost:8080/bidders';

      this.setState({ loading: 'true' });
      fetch(url)
      .then(res => res.json())
      .then((clients) => {
      this.setState({clients: clients,loading: 'false'})
    })
    .catch(err => console.error);
  }

  render(){


      if (this.state.loading === 'initial') {
        return <h2>Intializing...</h2>;
      }
  
      if (this.state.loading === 'true') {
        return <h2>Loading...</h2>;
      }

      return(
        <div>
        <h2>Hi Im clients container</h2>
        <ClientList data={this.state.clients._embedded.bidders}/>
      </div>
      )
  }
}    
export default Clients