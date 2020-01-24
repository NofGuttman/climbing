import React from 'react';
import styles from '../styles/NewGymForm.module.css';

export default class NewGymForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      sun: "",
      mon: "",
      tue: "",
      wed: "",
      thu: "",
      fri: "",
      sat: "",
      website: ""
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  submitForm(event) {
    event.preventDefault();
    console.log("submitted");
  }
  
  handleChange(event) {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value
    });
    console.log(this.state);
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
      </form>
    );
  }
}