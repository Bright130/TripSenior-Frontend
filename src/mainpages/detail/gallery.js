 
import React from "react";
import "./gallery.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const createGallery = imgs => {
  return new Promise(function(resolve, reject) {
    let container = [];
    console.log(imgs);

    try {
      imgs.props.img_src.forEach(element => {
        if (element != null) {
          container.push({
            original: element,
            thumbnail: element
          });
        }
      });
      console.log(container);
      resolve(container);
    } catch (err) {
      console.log(imgs.props.img_src);
      reject();
    }
  });
};

export default class Gallery extends React.Component {
  constructor() {
    super();
    this.state = { galleries: [] };
  }

  componentDidMount() {
    // createGallery(this).then(data => {
    //   this.setState({ galleries: data });
    // });

    console.log(this);
  }

  render() {
    return (
      <div className="gallery-gallery-20">
        <div className="gallery-0">
          <div className="gallery-gallery-2">
            <ImageGallery
              className="fill"
              autoPlay={true}
              items={this.props.img_src}
            />
          </div>
        </div>
        <div className="gallery-1" />
      </div>
    );
  }
}
