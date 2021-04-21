/*
 * @Description: 
 * @Author: caizichen1
 * @Date: 2021-03-31 16:19:02
 * @LastEditors: caizichen1
 * @LastEditTime: 2021-04-21 10:38:41
 */
import React from 'react';
import './index.scss'
import RangeDecay from '../../components/methods/rangeDecay'
import DamageShare from '../../components/methods/damageShare'
export default class Index extends React.Component {

  render() {
    return (
      <div className='container'>
        <DamageShare />
        {/* <RangeDecay /> */}
      </div>
    );
  }
}
