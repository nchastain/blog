import React, { Component } from 'react'
import FA from 'react-fontawesome'
import SectionHeader from './SectionHeader'

export const ProjectBasics = props => (
    <div className='basics-section' style={props.styles}>
        <span className='project-header'>
            <SectionHeader title='Basics' background='rgba(0,0,0,0)' color='white' />
        </span>
        <div className='basics-section-info-panel'>
            <div className='basics-info-header'>
                <div className='basics-icon-container'>
                    <FA className='fa' name='user' />
                </div>
                {props.role}
            </div>
            <div className='basics-info-header'>
                <div className='basics-icon-container'>
                    <FA className='fa' name='clock-o' />
                </div>
                {props.time}
            </div>
            <div className='basics-info-header'>
                <div className='basics-icon-container'>
                    <FA className='fa' name='wrench' />
                </div>
                {props.tools}
            </div>
            <div className='basics-info-header'>
                <div className='basics-icon-container'>
                    <FA className='fa' name='link' />
                </div>
                {props.link}
            </div>
            <div className='basics-info-header'>
                <div className='basics-icon-container'>
                    <FA className='fa' name='code' />
                </div>
                {props.code}
            </div>
        </div>
    </div>
)