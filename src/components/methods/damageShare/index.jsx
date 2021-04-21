import React, { Component } from 'react'
import Role from '../../role'
import './index.scss'

export default class DamageShare extends Component {
    render() {
        return (
            <div className="damageshare-compoent">
                <div className="circle">
                    <Role />
                    <div className="arrow-box bottom">
                        <div className="arrow one"></div>
                        <div className="arrow two"></div>
                        <div className="arrow third"></div>
                        <div className="arrow four"></div>
                    </div>
                    <div className="arrow-box top">
                        <div className="arrow one"></div>
                        <div className="arrow two"></div>
                        <div className="arrow third"></div>
                        <div className="arrow four"></div>
                    </div>
                    <div className="arrow-box left">
                        <div className="arrow one"></div>
                        <div className="arrow two"></div>
                        <div className="arrow third"></div>
                        <div className="arrow four"></div>
                    </div>
                    <div className="arrow-box right">
                        <div className="arrow one"></div>
                        <div className="arrow two"></div>
                        <div className="arrow third"></div>
                        <div className="arrow four"></div>
                    </div>
                </div>
            </div>
        )
    }
}
