import React from 'react';
import axios from 'axios';
import EditGym from './EditGym';
import NewGymForm from './NewGymForm';

export default class GymsPage extends React.Component {
  constructor() {
    super();
    this.handleAddGym = this.handleAddGym.bind(this);
  }
  state = {
    gymsList: []
  }
  
  componentDidMount() {
    this.getGymsArray();
  }
  
  getGymsArray() {
    axios.get('/gyms').then(res => {
      console.log(res);
      this.setState({
        gymsList: res.data
      });
    });
  }
  
  handleDelete(id) {
    const url = `/gyms/${id}`
    axios.delete(url).then((res) => {
      console.log(res);
      this.getGymsArray();
    });
  }
  
  handleAddGym() {
    this.getGymsArray();
  }
  
  render() {
    const gyms = this.state.gymsList.map(gym => {
      return (
        <EditGym 
          key={gym._id}
          id={gym._id}
          deleteHandler={this.handleDelete}
          name={gym.name}
          />
      )
    });
    return (
      <div className="page">
        <NewGymForm
          addGymHandler={this.handleAddGym}
          />
        {gyms}
      </div>
    );
  }
}
