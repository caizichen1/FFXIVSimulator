/*
 * @Description: 
 * @Author: caizichen1
 * @Date: 2021-03-31 16:21:37
 * @LastEditors: caizichen1
 * @LastEditTime: 2021-04-01 15:57:26
 */
import React from 'react';
import { keyboardTools } from "../../utils/keyboardTools";
import { initRolePosition } from "../../utils/role";
import Role from '../../components/role'
import './index.scss'

export default class Simpleton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    initRolePosition()
    keyboardTools('role-st')
  }

  render() {
    const { role, mechanism } = this.props.location.state || {}
    return (
      <div className='container'>
        <div className="role role-st">
          <Role role={role} mechanism={mechanism} />
        </div>
      </div>
    );
  }
}
