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
