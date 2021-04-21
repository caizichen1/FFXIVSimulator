/*
 * @Description: 
 * @Author: caizichen1
 * @Date: 2021-03-31 16:19:02
 * @LastEditors: caizichen1
 * @LastEditTime: 2021-04-21 10:38:41
 */
import React from 'react';
import Role from '../../components/role'
import SkillLoading from '../../components/commonMechanism/skillLoading'
import './index.scss'
export default class Index extends React.Component {
  state = {
    role: 'H1',
    mechanism: '',
  }

  change_state_0 = () => {
    this.setState({ mechanism: '' })
  }

  change_state_1 = () => {
    this.setState({ mechanism: '伤害分摊' })
  }

  change_state_2 = () => {
    this.setState({ mechanism: '距离衰减' })
  }

  use_skill = () => {
    const skill = document.getElementById("skill")
    console.log(skill);
    skill.style.display = 'block'
    setTimeout(() => {
      skill.style.display = 'none'
    }, 2000)
  }

  push_simpleton = () => {
    const { role, mechanism } = this.state
    this.props.history.push({ pathname: "/simpleton", state: { role, mechanism } })
  }

  render() {
    const { role, mechanism } = this.state
    return (
      <div className='container'>
        <button onClick={this.change_state_0}>正常</button>
        <button onClick={this.change_state_1}>伤害分摊</button>
        <button onClick={this.change_state_2}>距离衰减</button>
        <button onClick={this.use_skill}>技能吟唱</button>
        <button onClick={this.push_simpleton}>移动测试</button>

        <div className="role">
          <Role role={role} mechanism={mechanism} />
        </div>

        <div className="skill-loading">
          <SkillLoading title="活性弹" time={2} />
        </div>

      </div>
    );
  }
}
