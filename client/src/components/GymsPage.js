import React from 'react';
import axios from 'axios';
import Gym from './Gym';

export default class GymsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      gymsList: []
    }
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
      return <Gym
               key={gym._id}
               name={gym.name}
               hours={gym.hours}
               address={gym.address}
               website={gym.website}
               image={gym.image}
              />
    })
    return (
      <div className="page">
        {gyms}
      </div>
    );
  }
}
