import React, { Component } from 'react'
import Role from '../../role'
import './index.scss'

export default class RangeDecay extends Component {
    render() {
        return (
            <div className="rangedecay">
                <Role />
                <div className="arrow bottom"></div>
                <div className="arrow left"></div>
                <div className="arrow right"></div>
            </div>
        )
    }
}
