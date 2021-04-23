/*
 * @Description: 
 * @Author: GUI
 * @Date: 2021-04-21 22:48:50
 * @LastEditors: GUI
 * @LastEditTime: 2021-04-21 23:09:22
 */
import React, { Component } from 'react'
import './index.scss'

export default class SkillLoading extends Component {
    render() {
        const { title, time } = this.props
        return (
            <div id="skill" className="box">
                <div className="title">{title}</div>
                <div className="loading" style={{animation: `${time}s load linear forwards`}}></div>
            </div>
        )
    }
}
