import React, { Component } from 'react';
import './UrlContainer.css';
import { connect } from 'react-redux';
import { setUrls } from '../../actions';
import { getUrls } from '../../apiCalls';

class UrlContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      urls: this.props.urls
    }
  }
  // const urlEls = props.urls.map(url => {
  //   return (
  //     <div className="url">
  //       <h3>{url.title}</h3>
  //       <a href={url.short_url} target="blank">{url.short_url}</a>
  //       <p>{url.long_url}</p>
  //     </div>
  //   )
  // })
  componentDidMount() {
    getUrls()
      .then(data => this.props.setUrls(data.urls))
      .catch(err => console.error('Error fetching:', err));
  }

  render() {
    console.log(this.props.urls);

    return (
      <section>
      <p>No urls yet! Find some to shorten!</p>
      </section>
    )
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    setUrls: urls => dispatch(setUrls(urls))
  }
};

export const mapStateToProps = ({ urls }) => ({
  urls
})

export default connect(mapStateToProps, mapDispatchToProps)(UrlContainer);
