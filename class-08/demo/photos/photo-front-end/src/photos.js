import React from 'react';

class Photos extends React.Component {
  render() {
    return(
      this.props.photos.map((photo, idx) => (
        <div key={idx}>
          {photo.img_url && 
            <a href={photo.original_image}><img alt={this.props.searchQuery} width={200} src={photo.img_url} /></a>
          }
          <span>photo by: {photo.photographer} from unsplash</span>
        </div>
      ))
    )
  }
}

export default Photos;