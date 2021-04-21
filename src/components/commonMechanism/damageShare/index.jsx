/*
 * @Description: 
 * @Author: GUI
 * @Date: 2021-04-21 22:48:50
 * @LastEditors: GUI
 * @LastEditTime: 2021-04-21 23:07:02
 */
import React, { Component } from 'react'
import './index.scss'

export default class DamageShare extends Component {
    render() {
        return (
            <div className="damageshare-component">
                <div className="circle">
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
