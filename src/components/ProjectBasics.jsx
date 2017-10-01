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
                {props.no_link 
                    ? <div>{props.link}</div>
                    : <a className='project-link' href={props.link}>{props.link}</a>
                }
            </div>
            <div className='basics-info-header'>
                <div className='basics-icon-container'>
                    <FA className='fa' name='code' />
                </div>
                {props.no_code 
                    ? <div>{props.code}</div>
                    : <a className='project-link' href={props.code}>{props.code}</a>
                }
            </div>
        </div>
    </div>
)