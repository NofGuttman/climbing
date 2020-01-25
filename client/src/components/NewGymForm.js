import React from 'react';
import styles from '../styles/NewGymForm.module.css';
import axios from 'axios';

export default class NewGymForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: null,
      address: null,
      sun: null,
      mon: null,
      tue: null,
      wed: null,
      thu: null,
      fri: null,
      sat: null,
      website: null
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  submitForm(event) {
    event.preventDefault();
    const gym = {
      name: this.state.name,
      address: this.state.address,
      hours: {
        sun: this.state.sun,
        mon: this.state.mon,
        tue: this.state.tue,
        wed: this.state.wed,
        thu: this.state.thu,
        fri: this.state.fri,
        sat: this.state.sat
      },
      website: this.state.website
    }
    axios.post('/gyms', gym)
    .then(res => {
      console.log(res);
      this.props.addGymHandler();
    });
  }
  
  handleChange(event) {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value
    });
  }
  
  render() {
    return(
      <form className={styles.form} onSubmit={this.submitForm}>
        <input placeholder="שם" name="name" onChange={this.handleChange} />
        <input placeholder="כתובת" name="address" onChange={this.handleChange} />
        <label>שעות פעילות</label>
        <input placeholder="ראשון" name="sun" onChange={this.handleChange} />
        <input placeholder="שני" name="mon" onChange={this.handleChange} />
        <input placeholder="שלישי" name="tue" onChange={this.handleChange} />
        <input placeholder="רביעי" name="wed" onChange={this.handleChange} />
        <input placeholder="חמישי" name="thu" onChange={this.handleChange} />
        <input placeholder="שישי" name="fri" onChange={this.handleChange} />
        <input placeholder="שבת" name="sat" onChange={this.handleChange} />
        <br/>
        <input placeholder="אתר" name="website" onChange={this.handleChange} />
        <button type="submit">הוסף מכון</button>
      </form>
    );
  }
}