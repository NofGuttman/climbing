import React from 'react';
import axios from 'axios';
import Gym from './Gym';

export default class GymsPage extends React.Component {
  state = {
    gymsList: []
  }
  
  componentDidMount() {
    axios.get('/gyms').then(res => {
      console.log(res)
      this.setState({
        gymsList: res.data
      });
    });
  }
  
  render() {
    const gyms = this.state.gymsList.map(gym => {
      return <Gym name={gym.name} />
    })
    return (
      <div className="page">
        {gyms}
      </div>
    );
  }
}
