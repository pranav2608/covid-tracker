import React from 'react';


import Cards from './components/Cards/Cards'
import CountryPicker from './components/CountryPicker/CountryPicker'
import Chart from './components/Chart/Chart';
import coronaImage from './images/image.png'
import { fetchData } from './api/index';
import styles from './App.module.css';



class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
  }

  render() {
    
    return (
      <div className={styles.container}>
        <img src={coronaImage} className={styles.image} alt="COVID19"/>
        {this.state.data.confirmed? ( <Cards data={this.state.data} />): "Loading......"}
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country} /> 
      </div>
    );
  }
}

export default App;