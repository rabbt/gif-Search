import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './components/GifList'
import SearchBar from './components/SearchBar'
import request from 'superagent';
import './vist/App.css';
import GifModal from './components/myModal';

class App extends React.Component {
    constructor(){
        super();

        this.state = {
           gifs: [],
           //casos del modal
           selectedGif: null,
           modalIsOpen:false

            };
        }
            
        openModal(gif){
            this.state({
                modalIsOpen:true,
                selectedGif:gif
            });
        }

        closeModal(){
            this.setState({
                modalIsOpen:false,
                selectedGif:null
            });
        }

        handleTerm = (term) => {
            const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=jzzAtUS7zLW7uqIzK0VpPe582gdCrnio`;

        request.get(url, (err, res) => {
            this.setState({ gifs: res.body.data })
        });
        };

        render() {
            return (
              <div>
                <SearchBar onTerm={term => this.handleTerm(term)} />
                <GifList  gifs={this.state.gifs}
                          onGifSelect={selectedGif => this.openModal(selectedGif) } />
                <GifModal modalIsOpen={this.state.modalIsOpen}
                          selectedGif={this.state.selectedGif}
                          onRequestClose={ () => this.closeModal() } />
              </div>
            );
          }
        }
        
        ReactDOM.render(<App />, document.getElementById('app'));