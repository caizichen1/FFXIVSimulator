/*
 * @LastEditors: caizichen
 */
import React from 'react';
import './index.scss'

export default class Index extends React.Component {

  componentDidMount() {
    console.log(this.props.history.push('/demo'))
  }

  render() {
    return (
      <div className='container'>1</div>
    );
  }
}
