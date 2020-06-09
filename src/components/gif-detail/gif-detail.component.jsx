import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./gif-detail.style.css";

class GifDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifImages: [],
      loading: false,
    };
  }

  componentDidMount() {
    fetch(
      `https://api.giphy.com/v1/gifs/${this.props.match.params.id}?api_key=GuN18iG06KnZHBSYQROKcfCw2YCZHN37`
    ).then((response) =>
      response
        .json()
        .then((data) => this.setState({ gifImages: data.data, loading: true }))
    );
  }

  render() {
    const { gifImages, loading } = this.state;
    let url;
    if (gifImages.images && gifImages.images.original) {
      url = gifImages.images.downsized_large.url;
      console.log(gifImages);
    }

    return (
      <div className="row detail">
        <div className=" image col-md-6">
          {loading ? (
            <div>
              <img
                src={`${url}`}
                className="img-fluid"
                alt={`${gifImages.title}`}
              />

              <h4>{gifImages.title}</h4>
            </div>
          ) : (
            <span className="loading-animation">
              <ReactBootStrap.Spinner animation="border" variant="success" />
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default GifDetail;
