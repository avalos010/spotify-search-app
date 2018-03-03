import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Search from './Search.js'

class App extends Component {

  state = {
    data: {},
    term: ''
  }

//To wake up backend
componentWillMount = () => {
  fetch('https://spotify-backend-api.herokuapp.com/', {
        method: 'GET'
  }).then(res => console.log(res))
}
search = (e) => {
    e.preventDefault();
    this.setState({term: e.target[0].value})
    fetch('https://spotify-backend-api.herokuapp.com/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({term: e.target[0].value})
    }).then(res => res)
      .then(res => res.json())
      .then(json => this.setState({data: json }))
      e.target[0].value = '';
  };
  
  render() {
   console.log(this.state);
    return (
      <div className="App">
         <h1> Spotify Track Search </h1>
          <Search search={this.search}/>
      {this.state.term.length > 0 && <h3> Search Results for {this.state.term}</h3>}
          <ul>
          {this.state.data.length > 0 && 
          this.state.data.map(d => (
            <li key={d.id}> 
              <h4><a target="_blank" href={d.external_urls.spotify}>{d.name} - {d.artists[0].name}</a></h4>
              <img src={d.album.images[0].url} />
              <br></br>
              <audio controls> 
                <source src={d.preview_url} type="audio/mpeg"/>
              </audio>
              <hr></hr>
            </li>
          ))
          
          }
          </ul>
      </div>
    );
  }
}

export default App;
