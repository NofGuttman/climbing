import React from 'react';
import axios from 'axios';
import EditGym from './EditGym';
import NewGymForm from './NewGymForm';

export default class GymsPage extends React.Component {
  
  state = {
    gymsList: []
  }
  
  componentDidMount() {
    axios.get('/gyms').then(res => {
      console.log(res);
      this.setState({
        gymsList: res.data
      });
    });
  }
  
  render() {
    const gyms = this.state.gymsList.map(gym => {
      return (
        <EditGym 
          name={gym.name}
          />
      )
    });
    return (
      <div className="page">
        <NewGymForm />
        {gyms}
      </div>
    );
  }
}
