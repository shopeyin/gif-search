import React from "react";
import GifList from "../gif-list/gif-list.component";
import {
  getGifRequest,
  getGifSuccess,
  getSearchField,
} from "../../redux/index";
import { connect } from "react-redux";

import "./search.styles.css";

import { Spinner } from "react-bootstrap";
import * as ReactBootStrap from "react-bootstrap";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      searchField: "",
      loading: false,
    };
  }
  submitFormHandler = (event) => {
    event.preventDefault();

    this.setState({
      searchField: event.target.name.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchField !== this.state.searchField) {
      fetch(
        `http://api.giphy.com/v1/gifs/search?api_key=GuN18iG06KnZHBSYQROKcfCw2YCZHN37&q=${this.state.searchField}`
      )
        .then((response) => response.json())
        .then((gif) => this.setState({ gifs: gif.data, loading: true }))
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    const { gifs, searchField, loading } = this.state;
    console.log(`this ${gifs.length}`);
    return (
      <div className="App">
        <div className="row search">
          <div className="col col-md-5">
            <form className="form" onSubmit={this.submitFormHandler}>
              <div className="form-group">
                <h3>Search Gif</h3>
                <input
                  type="search"
                  placeholder="Search gif...."
                  className="form-control"
                  name="name"
                />
              </div>
              <button id="btn" className="btn btn-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        {gifs.length > 0 ? <GifList gifs={this.state.gifs} /> : " "}
        {loading ? (
          <div className="no-result-message">No result found</div>
        ) : (
          " "
        )}
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    loading: state.loading,
    searchField: state.searchField,
    gifs: state.gifs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGifRequest: () => dispatch(getGifRequest()),
    getSearchField: () => dispatch(getSearchField()),
    getGifSuccess: () => dispatch(getGifSuccess()),
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Search);
