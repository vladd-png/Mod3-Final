import React, { Component } from 'react';
import './UrlContainer.css';
import { connect } from 'react-redux';
import { setUrls } from '../../actions';
import { getUrls } from '../../apiCalls';
let urlEls = [];

export class UrlContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      urls: this.props.urls
    }
  }

  componentDidMount() {
    getUrls()
    .then(data => data.urls.forEach((url) => this.props.setUrls(url)))
    .catch(err => console.error('Error fetching:', err))
  }



  render() {
     const urlEls = this.props.urls.map(url => {
       return (
         <div className="url">
           <h3>{url.title}</h3>
           <a href={url.short_url} target="blank">{url.short_url}</a>
           <p>{url.long_url}</p>
         </div>
       )
     })
    return (
      <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
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
