import React, { Fragment } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

function App(props) {
  return (
    <Fragment>
      <Header />
      <Content />
      <Footer />
    </Fragment>
  );
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
};

const mapDispatchToProps = dispatch => {
    return {
      increment: () => dispatch({ type: 'add' }),
      dicrement: () => dispatch({ type: 'odd' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
