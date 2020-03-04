import React from 'react';
import './App.css';
// import { connect } from 'react-redux';
// import { setUrls } from '../../actions';
// import { getUrls } from '../../apiCalls';
import UrlContainer from '../../components/UrlContainer/UrlContainer';
import UrlForm from '../../components/UrlForm/UrlForm';

const App = () =>  {
  // constructor(props) {
  //   super();
  //   this.props = props;
  // }

  // componentDidMount() {
  //   getUrls()
  //     .then(data => this.props.setUrls(data.urls))
  //     .catch(err => console.error('Error fetching:', err));
  // }

  // render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm />
        </header>

        <UrlContainer />
      </main>
    );
  // }
}

// export const mapStateToProps = ({ urls }) => ({
//   urls
// });
//
// export const mapDispatchToProps = dispatch => {
//   return {
//     setUrls: urls => dispatch(setUrls(urls))
//   }
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
