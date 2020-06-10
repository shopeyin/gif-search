// import React from "react";
// import GifList from "../gif-list/gif-list.component";
// import {
//   getGifRequest,
//   getGifSuccess,
//   getSearchField,
// } from "../../redux/index";
// import { connect } from "react-redux";

// import "./search.styles.css";

// import { Spinner } from "react-bootstrap";
// import * as ReactBootStrap from "react-bootstrap";

// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       gifs: [],
//       searchField: "",
//       loading: false,
//     };
//   }
//   submitFormHandler = (event) => {
//     event.preventDefault();

//     this.setState({
//       searchField: event.target.name.value,
//     });
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.searchField !== this.state.searchField) {
//       fetch(
//         `http://api.giphy.com/v1/gifs/search?api_key=GuN18iG06KnZHBSYQROKcfCw2YCZHN37&q=${this.state.searchField}`
//       )
//         .then((response) => response.json())
//         .then((gif) => this.setState({ gifs: gif.data, loading: true }))
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   }

//   render() {
//     const { gifs, searchField, loading } = this.state;
//     return (
//       <div className="App">
//         <div className="row search">
//           <div className="col col-md-5">
//             <form className="form" onSubmit={this.submitFormHandler}>
//               <div className="form-group">
//                 <h3>Search Gif</h3>
//                 <input
//                   type="search"
//                   placeholder="Search gif...."
//                   className="form-control"
//                   name="name"
//                 />
//               </div>
//               <button id="btn" className="btn btn-warning" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//         {gifs.length === 0 ? null : <GifList gifs={gifs} />}
//       </div>
//     );
//   }
// }

// const mapStatetoProps = (state) => {
//   return {
//     loading: state.loading,
//     searchField: state.searchField,
//     gifs: state.gifs,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getGifRequest: () => dispatch(getGifRequest()),
//     getSearchField: () => dispatch(getSearchField()),
//     getGifSuccess: () => dispatch(getGifSuccess()),
//   };
// };

// export default connect(mapStatetoProps, mapDispatchToProps)(Search);

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
      emptyArray: 0,
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
        .then(
          (gif) => this.setState({ gifs: gif.data, loading: true }),

          setTimeout(
            () => this.setState({ loading: false, emptyArray: 1 }),
            2000
          )
        )
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    const { gifs, searchField, loading, emptyArray } = this.state;
    // if (gifs.length === 0 && emptyArray === 1) {
    //   console.log("working");
    // }
    // console.log(`render ${this.state.gifs.length}`);
    // console.log(`empty ${emptyArray}`);
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
        {gifs.length === 0 && emptyArray === 1 ? (
          <div className="no-result-message">No result found</div>
        ) : (
          " "
        )}
        {loading ? (
          <div className="row animation">
            <div className="col-md-12 d-flex justify-content-center align-items-center ">
              <ReactBootStrap.Spinner animation="border" variant="success" />
            </div>
          </div>
        ) : (
          <GifList gifs={gifs} />
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
