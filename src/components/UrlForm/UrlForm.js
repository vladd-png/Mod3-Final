import React, { Component } from 'react';
import { setUrls } from '../../actions';
import { connect } from 'react-redux';
import { postUrl } from '../../apiCalls';

export class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      long_url: '',
      short_url: ''
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addUrls(this.state)
    this.pushNewurl(this.state)
    this.clearInputs();
  }
  pushNewurl = url => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        id: Math.random(),
        long_url: this.state.long_url,
        title: this.state.title
      }),
      headers: {
        'content-type': 'application/json'
      }
    }
    postUrl(options)
      .then(data => console.log(data))
  }

  clearInputs = () => {
    this.setState({title: '', long_url: '', short_url: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='long_url'
          value={this.state.long_url}
          onChange={e => this.handleNameChange(e)}
        />

        <button onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}
export const mapDispatchToProps = dispatch => ({
  addUrls: url => ( dispatch(setUrls(url)) )
})

export default connect(null, mapDispatchToProps)(UrlForm);
