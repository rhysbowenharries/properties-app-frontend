import React,{Fragment, Component} from 'react';
import ClientList from '../components/ClientList'
import ClientDetail from '../components/ClientDetail'
import './Clients.css'

class Clients extends React.Component {

  constructor(props){
      super(props);

      this.state = {
          loading: 'initial',
          clients: [],
          selctedClient: null
      };

      this.handleClientSelection = this.handleClientSelection.bind(this)
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

  handleClientSelection(index){
    
    const onClickClient = this.state.clients._embedded.bidders[index]
    this.setState({selctedClient:onClickClient})
  }

  render(){


      if (this.state.loading === 'initial') {
        return <h2>Intializing...</h2>;
      }
  
      if (this.state.loading === 'true') {
        return <h2>Loading...</h2>;
      }

      return(
        <div className="Clients">
        <ClientList data={this.state.clients._embedded.bidders}
        onClientSelect= {this.handleClientSelection}
        />
        <ClientDetail client={this.state.selctedClient}/>
      </div>
      )
  }
}    
export default Clients