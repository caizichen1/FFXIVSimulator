/*
 * @Description: 
 * @Author: GUI
 * @Date: 2021-04-21 22:48:50
 * @LastEditors: GUI
 * @LastEditTime: 2021-04-21 23:09:48
 */
import React from 'react';
import DamageShare from './../commonMechanism/damageShare';
import RangeDecay from './../commonMechanism/rangeDecay';
import './index.scss'

export default class Role extends React.Component {

  state = {
    // 用于确定职业身份
    roles: [
      {
        profession: 'T',
        name: 'MT',
      },
      {
        profession: 'T',
        name: 'ST',
      },
      {
        profession: 'D',
        name: 'D1',
      },
      {
        profession: 'D',
        name: 'D2',
      },
      {
        profession: 'D',
        name: 'D3',
      },
      {
        profession: 'D',
        name: 'D4',
      },
      {
        profession: 'H',
        name: 'H1',
      },
      {
        profession: 'H',
        name: 'H2',
      },

    ]
  }

  render() {
    const role = this.state.roles.find((r) => {
      return r.name === this.props.role
    }) || {
      profession: 'T',
      name: 'MT',
    }

    const { mechanism } = this.props

    return (
      <div className="roles">
        <div className={`role ${role.profession}`}>
          <span>{role.name}</span>

          {
            mechanism === 'DamageShare' ? <DamageShare /> :
              mechanism === 'RangeDecay' ? <RangeDecay /> :
                console.log("此时角色无作用机制！")
          }

        </div>
      </div>
    );
  }
}

