import React,{Fragment, Component} from 'react';
import PropertiesList from '../components/PropertiesList';

class Properties extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            loading: 'initial',
            properties: []
          };
    }  
    
    componentDidMount() {
        const url = 'http://localhost:8080/properties';

        this.setState({ loading: 'true' });
        fetch(url)
        .then(res => res.json())
        .then((properties) => {
        this.setState({properties: properties,loading: 'false'})
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
          <h2>Hi Im properties container</h2>
          <PropertiesList data={this.state.properties._embedded.properties}/>
        </div>
        )
    }
}    
export default Properties