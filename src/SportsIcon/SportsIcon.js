import React, { Component } from 'react'
import { number, oneOf } from 'prop-types'
import Icon from 'react-icon-base'

export default class SportsIcon extends Component {
    static propTypes = {
        size: number,
        type: oneOf([
            'soccer',
            'football',
            'basketball',
            'tennis',
            'esports',
            'allsports'
        ]).isRequired
    }
    VIEWBOX = (type) => {
        switch(type) {
            case 'soccer':
                return '0 0 50 50'
            case 'football':
                return '0 0 480 480'
            case 'basketball':
                return '0 0 50 50'
            case 'tennis':
                return '0 0 410 410.492'
            case 'esports':
                return '0 0 50 50'
            case 'allsports':
                return '0 0 50 50'
            default: 
                return null
        }
    }
    renderPaths = (type) => {
        switch(type) {
            case 'soccer':
                return (
                    <g>
                        <path id="XMLID_22_" className="white" style={{fill: '#fff'}} d="M18.5,48.9c13.2,3.5,26.8-4.3,30.4-17.5C52.5,18.2,44.7,4.7,31.5,1C27.3-0.1,23-0.1,19,0.9
                            C10.5,3.1,3.4,9.6,1,18.6C-2.5,31.8,5.3,45.4,18.5,48.9z"></path>
                        <path className="black" style={{fill: '#000'}} d="M31.5,1C27.3-0.1,23-0.1,19,0.9C10.5,3.1,3.4,9.6,1,18.6c-3.5,13.2,4.3,26.8,17.5,30.3c13.2,3.5,26.8-4.3,30.4-17.5
                            C52.5,18.2,44.7,4.7,31.5,1z M37,9.1l2.2-0.4c3.9,3.4,6.5,8.2,7.2,13.3l-3.6-0.6L37,15V9.1z M35.4,8.9v5.9l-6.9,3l-7.8-3.7L20.5,8
                            l6.3-2.7C27.8,5.7,31.9,6.8,35.4,8.9z M28.5,28.7l-7.1,4.8c-3.9-1.2-6.5-2.9-7.4-3.3l-0.8-8.9c1.1-1.4,4.9-4.1,6.6-5.3l7.8,3.4
                            L28.5,28.7z M19.5,4.2c2-0.6,4-0.8,6.1-0.7l0.1,0.3l-6.4,2.7c-2.2-0.1-4.5,0.3-6.1,0.8c-0.4,0.1-0.8,0.2-1.1,0.3
                            C14.3,6,16.9,4.8,19.5,4.2z M10.2,9c-2.8,3.8-3.4,6.7-3.7,7.6l-2.4,2.1C5.2,15,7.3,11.7,10.2,9z M3.3,21.8l4-3.4l4,2.9l0.8,9
                            c-1.1,1.8-2.7,3.9-3.2,4.9l-3.7-1C3.4,30.3,2.7,26.1,3.3,21.8z M14,43.9c-3.2-1.9-5.9-4.5-7.8-7.6l2.4,0.6c1.1,1.8,4.4,5.1,5.7,6.3
                            L14,43.9z M30.3,46.1C26.7,47,23,47,19.3,46c-1.2-0.3-2.4-0.8-3.6-1.3l0.3-0.8c3.1,0.2,6.2-0.7,7.2-0.9l7,1.9l0.4,1.1
                            C30.5,46,30.4,46.1,30.3,46.1z M30.6,43.3l-6.9-1.9l-1.2-6.6l7-4.6l7.4,2l0.9,6.2C35.9,40.7,31.8,42.7,30.6,43.3z M45.8,30.9
                            c-0.6,2.1-1.5,4.3-2.9,6.3l-3.3,0.4l-0.8-6.1l4.1-8.2l3.7,0.6C46.7,26.2,46.5,28.5,45.8,30.9z"></path>
                    </g>    
                )
            case 'football':
                return (<path d="m240 0c-132.546875 0-240 107.453125-240 240s107.453125 240 240 240 240-107.453125 240-240c-.148438-132.484375-107.515625-239.851562-240-240zm8.566406 69.191406 83.433594-33.351562c9.46875 4.285156 18.628906 9.222656 27.414062 14.777344l.21875.136718c8.632813 5.46875 16.882813 11.519532 24.695313 18.109375l.671875.585938c3.503906 2.984375 6.910156 6.074219 10.222656 9.261719.417969.410156.855469.800781 1.273438 1.21875 3.472656 3.390624 6.835937 6.886718 10.089844 10.484374.269531.304688.527343.625.796874.929688 2.855469 3.199219 5.601563 6.511719 8.265626 9.878906.640624.800782 1.28125 1.601563 1.902343 2.402344 2.890625 3.742188 5.6875 7.550781 8.328125 11.480469l-16.632812 70.703125-81.832032 27.28125-78.828124-63.074219zm-186.125 34.480469c.621094-.800781 1.253906-1.601563 1.894532-2.398437 2.632812-3.339844 5.355468-6.597657 8.167968-9.777344.304688-.335938.585938-.679688.886719-1.015625 3.234375-3.605469 6.582031-7.097657 10.050781-10.480469.398438-.390625.796875-.800781 1.214844-1.160156 3.285156-3.167969 6.664062-6.238282 10.136719-9.207032l.800781-.671874c7.742188-6.542969 15.914062-12.554688 24.460938-18l.3125-.199219c8.734374-5.542969 17.835937-10.472657 27.25-14.761719l83.816406 33.191406v80.800782l-78.832032 63.0625-81.832031-27.230469-16.632812-70.703125c2.664062-3.921875 5.429687-7.722656 8.304687-11.449219zm-9.640625 259.089844c-2.351562-3.585938-4.601562-7.238281-6.746093-10.960938l-.519532-.898437c-2.132812-3.703125-4.152344-7.46875-6.054687-11.292969l-.066407-.121094c-4.007812-8.046875-7.527343-16.328125-10.535156-24.800781v-.078125c-1.421875-4-2.71875-8.097656-3.917968-12.21875l-.433594-1.519531c-1.097656-3.871094-2.09375-7.785156-2.984375-11.742188-.078125-.386718-.175781-.753906-.253907-1.136718-1.964843-8.9375-3.375-17.984376-4.226562-27.097657l48.839844-58.605469 81.265625 27.085938 23.585937 94.335938-38.753906 51.5625zm240.472657 94.78125c-4 .992187-8.105469 1.847656-12.210938 2.617187-.574219.113282-1.160156.207032-1.734375.3125-3.496094.625-7.03125 1.160156-10.574219 1.597656-.945312.121094-1.882812.25-2.824218.363282-3.289063.382812-6.609376.671875-9.9375.910156-1.046876.070312-2.082032.175781-3.128907.242188-4.253906.261718-8.542969.414062-12.863281.414062-3.957031 0-7.890625-.105469-11.800781-.3125-.472657 0-.925781-.078125-1.398438-.113281-3.480469-.199219-6.945312-.460938-10.402343-.796875l-.398438-.074219c-7.574219-.820313-15.105469-2.023437-22.558594-3.597656l-47.320312-74.089844 38.144531-50.863281h111.46875l38.769531 51.199218zm165.496093-169.542969c-.082031.382812-.175781.753906-.257812 1.136719-.894531 3.953125-1.890625 7.867187-2.984375 11.742187l-.429688 1.519532c-1.203125 4.121093-2.496094 8.203124-3.921875 12.21875v.078124c-3.007812 8.472657-6.523437 16.753907-10.535156 24.800782l-.066406.121094c-1.914063 3.828124-3.929688 7.59375-6.054688 11.292968l-.519531.898438c-2.132812 3.734375-4.378906 7.378906-6.734375 10.945312l-78.929687 12.445313-39.023438-51.519531 23.574219-94.3125 81.265625-27.085938 48.839844 58.605469c-.847657 9.117187-2.257813 18.171875-4.222657 27.113281zm0 0"/>)
            case 'basketball':
                return (
                    <g>
                        <path className="orange" style={{fill: '#E17120'}} d="M39,44.1c10.5-7.7,12.8-22.4,5.1-32.9c0,0-0.1-0.1-0.1-0.1C36.4,0.6,21.6-1.7,11.1,5.9C11.1,6,11,6,11,6
                        C0.5,13.7-1.8,28.4,5.9,39c0,0,0.1,0.1,0.1,0.1C13.6,49.5,28.5,51.8,39,44.1z"></path>
                        <path d="M44.9,10.3C36.8-0.7,21.3-3,10.3,5c-11,8.1-13.3,23.6-5.3,34.6c4.8,6.6,12.4,10.1,20,10.1c5.1,0,10.1-1.5,14.6-4.8
                        C50.6,36.8,52.9,21.3,44.9,10.3z M43.2,11.6c2.4,3.2,3.8,6.9,4.2,10.6c-0.6-1.1-1.3-2.2-2-3.2c-3.6-4.2-8.7-6.3-13.3-8.7
                        c-2.2-1.1-4.4-2.3-6-3.8c1.2-0.3,2.4-0.7,3.7-0.9c1.9-0.3,3.9-0.5,5.8-0.4C38.5,6.7,41.1,8.9,43.2,11.6z M24.9,2.5
                        c3,0,5.9,0.6,8.7,1.7c-1.3,0-2.6,0-3.8,0.2c-1.5,0.2-3,0.7-4.4,1.1c-0.7-0.9-1.3-1.9-1.6-2.9C24.2,2.5,24.6,2.5,24.9,2.5z M22.7,2.6
                        c0.3,1.2,0.9,2.3,1.6,3.3c-1.1,0.4-2.2,1-3.2,1.5c-0.5,0.3-1.1,0.7-1.5,1c-1.6-1.6-3.1-2.9-4.3-3.7C17.6,3.6,20.1,2.9,22.7,2.6z
                        M11.7,6.9c0.8-0.6,1.7-1.2,2.5-1.6c0.4,0.3,0.8,0.6,1.3,1c1,0.8,2,1.6,3.2,2.9c-1.4,1-2.9,2.2-4.2,3.4c-1.1-1.2-2.7-2-4.4-1.9
                        c-1.4,0.1-2.6,0.8-3.7,1.6C7.8,10.2,9.6,8.4,11.7,6.9z M5.2,14.2c1.4-1.4,3.1-2.4,4.9-2.6c1.3-0.1,2.5,0.5,3.5,1.5
                        c-4.3,4.1-8,9.1-9.4,14.9c-0.3,1.4-0.5,2.9-0.5,4.4C1.6,26.4,2.2,19.8,5.2,14.2z M6.8,38.3c-1-1.4-1.8-2.8-2.5-4.3
                        c0-1.9,0.3-3.8,0.8-5.6c1.4-5.5,4.9-10.3,9.1-14.3c0.8,1,1.2,2.2,1.5,3.3c0.8,2.9,0.8,6,0.8,9.2c0,6.3,0.1,13,3.1,18.8
                        c0.4,0.7,0.9,1.2,1.4,1.7C15.5,46.2,10.4,43.2,6.8,38.3z M38.3,43.1c-4,3-8.7,4.4-13.3,4.4c-1.1,0-2.1-0.1-3.1-0.2
                        c-0.5-0.7-1-1.5-1.3-2.3c-2.9-5.5-3-12-3-18.2c0-3.2,0-6.4-0.8-9.6c-0.3-1.3-0.9-2.6-1.8-3.7c1.4-1.2,2.9-2.4,4.3-3.5
                        c2,2,4.2,4.6,6.6,7.9c0.8,1,1.5,2.1,2.3,3.3c6.9,10.2,9.6,17.8,10.6,21.5C38.7,42.9,38.5,43,38.3,43.1z M39.8,41.9
                        c-1.1-4-3.9-11.4-10.6-21.4c-0.8-1.1-1.5-2.3-2.3-3.3c-2.4-3.3-4.6-5.9-6.6-7.9c0.4-0.3,0.9-0.7,1.3-0.9c1-0.7,2.1-1.2,3.3-1.6
                        c2,2,4.4,3.2,6.7,4.4c4.7,2.4,9.6,4.6,13,8.5c1,1.3,2,2.6,2.9,4.1C47.8,30.5,45.2,37.3,39.8,41.9z"></path>
                    </g>
                )
            case 'tennis':
                return (
                <React.Fragment>
                    <path d="m272.402344 274.699219c-36.773438 35.105469-55.613282 84.066406-52.332032 135.242187 4.734376-.34375 9.472657-.851562 14.222657-1.519531 93.304687-13.273437 165.605469-88.335937 175.378906-182.070313-50.636719-4.839843-100.839844 12.839844-137.269531 48.347657zm0 0"/>
                    <path d="m328.769531 41.207031c-35.375-26.746093-78.511719-41.2148435-122.859375-41.207031-2.941406 0-5.882812.0703125-8.832031.199219.777344 51.753906-19.773437 101.546875-56.828125 137.6875-35.128906 34.195312-82.257812 53.269531-131.28125 53.128906-2.742188 0-5.488281-.058594-8.242188-.179687-.984374 14.421874-.457031 28.910156 1.578126 43.226562 14.347656 101.019531 100.710937 176.171875 202.746093 176.429688.339844 0 .683594-.007813 1.027344-.007813-3.441406-55.195313 16.945313-108 56.617187-145.878906 39.265626-38.246094 93.339844-57.339844 147.914063-52.222657.390625-12.019531-.265625-24.046874-1.957031-35.949218-7.496094-53.9375-36.261719-102.628906-79.882813-135.226563zm0 0"/>
                    <path d="m41.441406 81.953125c-20.972656 27.777344-34.496094 60.453125-39.277344 94.925781 2.269532.085938 4.539063.128906 6.796876.132813 45.367187.144531 88.984374-17.492188 121.492187-49.132813 34.097656-33.246094 53.113281-78.992187 52.636719-126.613281-2.140625.238281-4.285156.5-6.425782.800781-53.9375 7.5-102.628906 36.269532-135.222656 79.886719zm0 0"/>
                </React.Fragment>)
            case 'esports':
                return (
                    <React.Fragment>
                        <g>
                        <g>
                            <g>
                            <g>
                                <path className="es0" d="M45,24.1v13.7c2.5,0,4.5-3.1,4.5-6.9c0-2-0.6-3.8-1.5-5.1C47.3,24.8,46.1,24.1,45,24.1z"></path>
                            </g>
                            </g>
                        </g>
                        <g>
                            <g>
                            <g>
                                <path className="es0" style={{fill: '#1C1C1B'}} d="M2.3,25.8c-0.9,1.2-1.5,3.1-1.5,5.1c0,3.8,2,6.9,4.5,6.9V24.1C4.2,24.1,3,24.8,2.3,25.8z"></path>
                                <path className="es0" style={{fill: '#1C1C1B'}} d="M42.9,25.1v11.8c0,0.6-0.1,1-0.3,1.5c-0.4,0.9-1.1,1.6-2.1,2c-0.9,3.8-4,5.8-7.6,5.8h-4.1
                                c-0.1,0.2-0.2,0.4-0.4,0.6c-0.2,0.2-0.4,0.3-0.7,0.3h-3.6c0,0-0.4-0.1-0.7-0.5c-0.3-0.4-0.5-0.8-0.5-1.6c0-1.3,0.6-1.9,1.4-1.9
                                h3.4c0.4,0,0.9,0.2,1,0.5c0.1,0.1,0.2,0.3,0.2,0.5c2.3,0,4,0,4,0c2.9,0,4.1-1.4,4.9-3.8c-1.3-0.5-2.1-1.8-2.1-3.3V25.1
                                c0-1,0.5-1.9,0.9-2.5c0.3-0.3,0.6-0.6,1.1-0.8c-0.4-8.1-4.2-13.5-12.6-13.5c-8.3,0-12.2,5.4-12.6,13.5c0,0,0,0,0.1,0
                                c0.4,0.2,0.8,0.5,1.1,0.8c0.4,0.6,0.9,1.5,0.9,2.5v12c0,2-1.6,3.6-3.6,3.6c-1.5,0-2.7-1-3.3-2.2C7.5,38,7.4,37.6,7.4,37V25.1
                                c0-0.6,0.1-1,0.3-1.5c0.4-0.8,1-1.4,1.7-1.8C9.8,12,15,5.2,25.1,5.2S40.4,12,40.8,21.8c0.9,0.4,1.4,1,1.8,1.8
                                C42.8,24.1,42.9,24.5,42.9,25.1z"></path>
                            </g>
                            </g>
                        </g>
                        </g>
                        <polygon className="es1" style={{fill: '#FF001C'}} points="28.7,10.7 18.8,22.6 26,21 18.9,32.8 25.4,31.8 19.4,43.5 32,27.8 24.4,29 31,18.1 25.3,18.9 "></polygon>
                    </React.Fragment>
                    )
                case 'allsports':
                    return (
                        <React.Fragment>
                            <style jsx="true">{`
                                .asst0{fill:#DDD4D4;}
                                .asst1{fill:#E17120;}
                                .asst2{fill:#D6DE23;}
                                .asst3{fill:#FFFFFF;}
                                .asst4{fill:url(#SVGID_1_);}
                                .asst5{opacity:0.5;fill:url(#SVGID_2_);enable-background:new    ;}
                                .asst6{fill:url(#SVGID_3_);}
                                .asst7{fill:url(#SVGID_4_);}
                                .asst8{fill:#16D4FF;}
                                .asst9{fill:#E85500;}
                            `}
                            </style>
                            <g>
                                <g>
                                <g id="XMLID_4_">
                                    <path d="M25,0.8c-1.9,0-3.6,0.8-5,2.1c-1.3,1.3-2,3.1-2,4.9c0,1.9,0.8,3.6,2.1,4.9c1.4,1.3,3.1,2,5,2s3.6-0.8,4.9-2.1
                                    c0.8-0.9,1.4-2,1.8-3.1c0.2-0.6,0.3-1.2,0.3-1.8c0-1.9-0.8-3.6-2.1-4.9C28.7,1.5,26.9,0.8,25,0.8L25,0.8z"></path>
                                </g>
                                <g id="XMLID_2_">
                                    <path d="M25.1,21.5c-1,0-2,0.4-2.7,1.1s-1.1,1.7-1.1,2.7s0.4,2,1.2,2.7c0.8,0.7,1.7,1.1,2.7,1.1s2-0.4,2.7-1.1
                                    c0.5-0.5,0.8-1.1,1-1.7c0.1-0.3,0.1-0.7,0.1-1c0-1-0.4-2-1.2-2.7C27.1,21.8,26.1,21.5,25.1,21.5L25.1,21.5z"></path>
                                </g>
                                <g id="XMLID_3_">
                                    <path d="M2,12.8c-0.9,1.6-1.1,3.5-0.7,5.3c0.5,1.8,1.6,3.3,3.3,4.2s3.5,1.1,5.3,0.6s3.3-1.7,4.2-3.3c0.9-1.6,1.1-3.5,0.7-5.3
                                    c-0.3-1.2-1-2.2-1.8-3c-0.4-0.4-0.9-0.8-1.5-1.2C9.8,9.2,8,9,6.2,9.5S2.9,11.1,2,12.8L2,12.8z"></path>
                                </g>
                                <g id="XMLID_5_">
                                    <path d="M2.1,37.1c1,1.6,2.5,2.8,4.3,3.3s3.7,0.2,5.3-0.7s2.7-2.5,3.2-4.3c0.4-1.8,0.2-3.7-0.8-5.3s-2.5-2.8-4.3-3.2
                                    c-1.2-0.3-2.4-0.3-3.5,0c-0.6,0.2-1.2,0.4-1.7,0.7c-1.6,1-2.7,2.5-3.2,4.3C0.9,33.7,1.1,35.5,2.1,37.1L2.1,37.1z"></path>
                                </g>
                                <g id="XMLID_7_">
                                    <path d="M25.2,49.2c1.9,0,3.6-0.8,5-2.1c1.3-1.3,2-3.1,2-4.9c0-1.9-0.8-3.6-2.1-4.9c-1.4-1.3-3.1-2-5-2s-3.6,0.8-4.9,2.1
                                    c-0.8,0.9-1.4,2-1.8,3.1c-0.2,0.6-0.3,1.2-0.3,1.9c0,1.9,0.8,3.6,2.1,4.9C21.5,48.6,23.3,49.3,25.2,49.2L25.2,49.2z"></path>
                                </g>
                                <g id="XMLID_9_">
                                    <path d="M48.2,37c0.9-1.6,1.1-3.5,0.7-5.3c-0.5-1.8-1.6-3.3-3.3-4.2c-1.6-0.9-3.5-1.1-5.3-0.6s-3.3,1.7-4.2,3.3
                                    c-0.9,1.6-1.1,3.5-0.7,5.3c0.3,1.2,1,2.2,1.8,3c0.4,0.4,0.9,0.8,1.5,1.2c1.6,0.9,3.5,1.1,5.3,0.6S47.3,38.6,48.2,37L48.2,37z"></path>
                                </g>
                                <g id="XMLID_11_">
                                    <path d="M48.2,12.7c-1-1.6-2.5-2.8-4.3-3.3s-3.7-0.2-5.3,0.7c-1.6,1-2.7,2.5-3.2,4.3c-0.4,1.8-0.2,3.7,0.8,5.3s2.5,2.8,4.3,3.2
                                    c1.2,0.3,2.4,0.3,3.5,0c0.6-0.2,1.2-0.4,1.7-0.7c1.6-1,2.7-2.5,3.2-4.3C49.4,16.2,49.1,14.3,48.2,12.7L48.2,12.7z"></path>
                                </g>
                                </g>
                            </g>
                            <g>
                                <g id="XMLID_24_">
                                <path className="asst0" d="M42.2,10.1c-1.6,0-3.1,0.7-4.3,1.8c-1.1,1.2-1.7,2.7-1.7,4.3c0,3.3,2.7,6,6.1,6c1.6,0,3.1-0.7,4.3-1.8
                                    c0.8-0.8,1.2-1.7,1.6-2.7c0.1-0.5,0.2-1,0.2-1.6c0-1.6-0.7-3.1-1.8-4.2C45.3,10.7,43.7,10.1,42.2,10.1z"></path>
                                <g id="XMLID_23_">
                                    <path d="M37.1,19c0.4,0.2,1.6,0.6,2.7,0.7c1.7,0.1,3.1-0.5,4.3-1.7c-0.4-0.6-1-1-1.8-1.4c-1.7,1.2-3.3,1.2-4.3,0.9
                                    c-0.7-0.1-1.2-0.4-1.5-0.7c0-0.2,0-0.3,0-0.4s0-0.2,0-0.3l0.1-0.1c0,0,0.7,0.6,1.7,0.9c0.3,0.1,0.7,0.1,1,0.1
                                    c-0.6-2.4,0.2-4.2,0.9-5.3c0.4-0.6,0.8-1,1.2-1.3c0.3-0.1,0.7-0.1,0.9-0.1c0.1,0,0.1,0,0.2,0l0,0c0,0-1,0.7-1.7,1.7
                                    c-1,1.4-1.2,3-0.8,4.7c0.7-0.1,1.4-0.4,2.1-0.9c-0.1-2.2,0.8-3.5,1.6-4.2c0.4-0.4,0.9-0.7,1.3-0.9c0.3,0.1,0.4,0.3,0.7,0.4
                                    c-0.2,0.1-0.9,0.3-1.6,0.9c-0.3,0.3-0.5,0.6-0.7,0.9c2.2,0.6,3.4,2.1,4,3.3c0.3,0.6,0.5,1.2,0.6,1.7c-0.1,0.3-0.3,0.7-0.4,1
                                    L47.3,19c0,0-0.1-1.3-0.7-2.5c-0.7-1.6-2-2.5-3.6-3c-0.3,0.7-0.4,1.4-0.3,2.3c2,0.9,2.7,2.4,2.9,3.4c0.1,0.6,0.1,1.2,0.1,1.6
                                    c-0.3,0.2-0.4,0.3-0.7,0.4c0-0.2,0.2-0.9-0.1-1.8c-0.1-0.4-0.2-0.8-0.3-1c-1.6,1.6-3.3,1.9-4.7,1.8c-0.8,0-1.5-0.2-2-0.3
                                    C37.6,19.6,37.3,19.3,37.1,19z"></path>
                                </g>
                                <path d="M42.2,22.5c-1.6,0-3.3-0.7-4.4-1.8c-1.2-1.2-1.9-2.7-1.9-4.4s0.6-3.3,1.8-4.4s2.7-1.9,4.4-1.9l0,0c1.7,0,3.3,0.6,4.4,1.7
                                    s2.2,2.7,2.2,4.4c0,0.6-0.4,1.1-0.5,1.7c-0.3,1-0.8,2-1.6,2.8C45.4,21.8,43.8,22.5,42.2,22.5L42.2,22.5z M42.2,10.4
                                    c-1.6,0-3,0.7-4.1,1.7s-1.7,2.5-1.6,4.1c0,1.6,0.7,3,1.7,4.1c1.1,1.1,2.5,1.7,4.1,1.6c1.6,0,3.1-0.8,4.1-1.7
                                    c0.7-0.7,1.2-1.6,1.4-2.5c0.1-0.5,0.2-1,0.2-1.6c0-1.6-0.7-3-1.7-4.1C45.1,10.9,43.6,10.4,42.2,10.4L42.2,10.4z"></path>
                                </g>
                            </g>
                            <path className="asst1" d="M11.8,21.3c2.8-2,3.4-5.9,1.4-8.8l0,0c-2-2.9-6-3.5-8.8-1.5l0,0C1.6,13.1,1,17,3,19.8l0,0
                                      C5,22.7,9,23.3,11.8,21.3z"></path>
                            <g>
                                <path d="M13.3,12.3C11.1,9.4,7,8.8,4.1,10.8c-2.9,2.2-3.5,6.3-1.4,9.3C4,21.9,6,22.8,8,22.8c1.4,0,2.7-0.4,3.9-1.3
                                C14.9,19.3,15.5,15.2,13.3,12.3z M12.9,12.7c0.6,0.9,1,1.8,1.1,2.9c-0.2-0.3-0.4-0.6-0.6-0.9c-0.9-1.1-2.3-1.7-3.5-2.3
                                c-0.5-0.3-1.2-0.7-1.6-1c0.3-0.1,0.6-0.1,1-0.2c0.7-0.1,1.1-0.1,1.5-0.1C11.6,11.4,12.3,11.9,12.9,12.7z M7.9,10.2
                                c0.8,0,1.5,0.2,2.3,0.4c-0.4,0-0.7,0.1-1,0.2c-0.4,0.1-0.7,0.2-1.1,0.3c-0.1-0.2-0.4-0.6-0.5-0.9C7.8,10.2,7.9,10.2,7.9,10.2z
                                    M7.4,10.3c0,0.3,0.2,0.6,0.4,0.9c-0.3,0.1-0.6,0.2-0.9,0.4c-0.1,0.1-0.3,0.2-0.4,0.2c-0.4-0.5-0.8-0.8-1.1-1
                                C6.1,10.5,6.7,10.3,7.4,10.3z M4.5,11.4c0.2-0.2,0.4-0.3,0.7-0.4c0.1,0.1,0.2,0.2,0.3,0.3C5.7,11.5,6,11.7,6.3,12
                                c-0.4,0.3-0.7,0.5-1.1,0.9c-0.3-0.3-0.6-0.5-1.1-0.4c-0.4,0.1-0.7,0.2-1,0.5C3.4,12.3,3.9,11.8,4.5,11.4z M2.8,13.3
                                c0.3-0.4,0.8-0.6,1.3-0.7c0.3,0,0.7,0.1,0.9,0.3c-1.1,1.1-2.1,2.4-2.5,4c0,0.4-0.1,0.7-0.1,1.2C1.8,16.6,1.9,14.8,2.8,13.3z
                                    M3.2,19.7C3,19.3,2.7,19,2.5,18.6c0-0.5,0-1,0.2-1.5c0.4-1.5,1.3-2.7,2.4-3.8c0.2,0.2,0.3,0.5,0.4,0.8c0.2,0.7,0.2,1.6,0.2,2.5
                                c0,1.7,0,3.5,0.8,5c0.1,0.2,0.2,0.3,0.4,0.4C5.5,21.9,4.1,21,3.2,19.7z M11.6,21c-1.1,0.8-2.3,1.2-3.5,1.2c-0.3,0-0.6,0-0.8,0
                                C7.1,22,7,21.8,6.8,21.5C6.1,20,6,18.3,6,16.7c0-0.9,0-1.7-0.2-2.6c0-0.3-0.2-0.7-0.5-1c0.4-0.3,0.7-0.6,1.1-0.9
                                c0.6,0.6,1.1,1.3,1.7,2.1c0.2,0.2,0.4,0.6,0.6,0.9C10.7,17.9,11.4,20,11.6,21C11.7,21,11.6,21,11.6,21z M11.9,20.7
                                c-0.3-1.1-1.1-3-2.9-5.7c-0.2-0.3-0.4-0.6-0.6-0.9c-0.6-0.9-1.3-1.6-1.7-2.1c0.1-0.1,0.2-0.2,0.4-0.2c0.2-0.2,0.6-0.3,0.9-0.4
                                c0.6,0.6,1.2,0.9,1.8,1.2c1.3,0.6,2.6,1.3,3.5,2.3c0.2,0.4,0.6,0.7,0.7,1.1C14.1,17.7,13.4,19.5,11.9,20.7z"></path>
                            </g>
                            <g>
                                <g id="XMLID_25_">
                                <path className="asst2" d="M42.7,28.1c-3.1-0.2-5.9,2-6.2,5.2c-0.3,3,2,5.9,5.2,6.2c3,0.2,5.9-2,6.2-5.2C48.2,31,45.8,28.4,42.7,28.1"></path>
                                <g>
                                    <g>
                                    <path className="asst3" d="M42.7,39.2c-0.9-0.9-0.9-1.3-0.9-2.3c0.2-1.5,1.7-2.5,1.8-2.5l0,0c3.8-2.3,3.4-3,3.4-3l0.2,0.5
                                        c0,0.2,0.2,1-3.4,2.9c-0.1,0.1-1.4,0.9-1.6,2.1c-0.1,0.8,0.2,1.3,1,2.1L42.7,39.2z"></path>
                                    </g>
                                </g>
                                <g>
                                    <path className="asst3" d="M38.8,29.5c-0.1,0.2-0.3,1.2,0.9,3.8c0.2,0.4,0.3,0.8,0.3,1.2c0,0.9-0.2,2.4-1.6,3L38,37.2
                                    c1.2-0.5,1.5-1.8,1.5-2.7c0-0.3-0.1-0.7-0.3-1c-1.6-3-0.9-3.7-0.9-3.8l0.2-0.2"></path>
                                </g>
                                <path d="M42.2,39.7c-0.2,0-0.3,0-0.5,0c-1.6-0.2-3-0.9-4.1-2c-1-1.2-1.5-2.8-1.3-4.5c0.2-1.6,0.9-3,2-4.1c1.2-1,2.8-1.5,4.5-1.3
                                    c3.3,0.3,5.7,3.1,5.5,6.5C47.9,37.3,45.2,39.7,42.2,39.7z M42.2,28.3c-1.2,0-2.5,0.5-3.4,1.2c-1.1,0.9-1.8,2.2-1.9,3.7
                                    c-0.2,1.4,0.3,2.8,1.2,4c0.9,1.1,2.3,1.8,3.7,1.9c0.2,0,0.3,0,0.5,0c2.7,0,5.2-2.1,5.4-5c0.2-2.9-2-5.5-4.8-5.8
                                    C42.4,28.3,42.4,28.3,42.2,28.3z"></path>
                                </g>
                            </g>
                            <g>
                                <g>
                                <circle cx="25.2" cy="42.4" r="6.4"></circle>
                                </g>
                                <g>
                                <g>
                                    
                                    <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="24.648" y1="-27.872" x2="25.2885" y2="-13.3161" gradientTransform="matrix(1 0 0 1 0 60)">
                                    <stop offset="0" style={{stopColor:'#E9E4DE'}}></stop>
                                    <stop offset="0.3992" style={{stopColor:'#E7E2DB'}}></stop>
                                    <stop offset="0.6533" style={{stopColor:'#E2DAD3'}}></stop>
                                    <stop offset="0.8662" style={{stopColor:'#DACEC4'}}></stop>
                                    <stop offset="0.9946" style={{stopColor:'#D2C3B7'}}></stop>
                                    </linearGradient>
                                    <ellipse className="asst4" cx="25.1" cy="42.4" rx="5.6" ry="5.6"></ellipse>
                                    
                                    <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="24.6074" y1="-26.5293" x2="25.1904" y2="-13.2791" gradientTransform="matrix(1 0 0 1 0 60)">
                                    <stop offset="0" style={{stopColor:'#E9E4DE', stopOpacity: '0'}}></stop>
                                    <stop offset="0.5188" style={{stopColor:'#E9E4DE', stopOpacity: '0.5216'}}></stop>
                                    <stop offset="0.722" style={{stopColor:'#E4DCD5', stopOpacity: '0.7259'}}></stop>
                                    <stop offset="0.8694" style={{stopColor:'#DDD2C9', stopOpacity: '0.874'}}></stop>
                                    <stop offset="0.9897" style={{stopColor:'#D3C4B8', stopOpacity: '0.9951'}}></stop>
                                    <stop offset="0.9946" style={{stopColor:'#D2C3B7'}}></stop>
                                    </linearGradient>
                                    <path className="asst5" d="M21.6,38c-1.4,1-2.2,2.6-2.2,4.4c0,3.1,2.6,5.6,5.6,5.6s5.6-2.5,5.6-5.6c0-1.7-0.7-3.1-1.9-4.2
                                    c1.2,1,1.5,3.3,1.3,4.8c-0.3,1.5-1.4,3.1-3,3.7c-1.9,0.7-4.2,0.3-5.6-1.1c-1-1.1-1.5-2.7-1.4-4.1C20.2,40.1,20.8,39,21.6,38z"></path>
                                    
                                    <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="21.5496" y1="-26.1412" x2="22.2417" y2="-12.4731" gradientTransform="matrix(1 0 0 1 0 60)">
                                    <stop offset="0.3666" style={{stopColor:'#CDD0D6'}}></stop>
                                    <stop offset="0.4266" style={{stopColor:'#C2C6CC'}}></stop>
                                    <stop offset="0.6764" style={{stopColor:'#98A1A5'}}></stop>
                                    <stop offset="0.8725" style={{stopColor:'#7E8A8D'}}></stop>
                                    <stop offset="0.9892" style={{stopColor:'#748284'}}></stop>
                                    </linearGradient>
                                    <path className="asst6" d="M22,44.8c-0.2,0.5-0.6,1-1,1.4c0.1,0.1,0.1,0.1,0.2,0.2c0.4-0.5,0.7-1,1-1.5c1.2-2.5,1.2-5.1-0.1-7.2
                                    c-0.1,0.1-0.2,0.1-0.2,0.2C23,39.9,23.1,42.4,22,44.8z"></path>
                                    
                                    <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="26.5462" y1="-24.899" x2="29.8071" y2="-13.0198" gradientTransform="matrix(1 0 0 1 0 60)">
                                    <stop offset="0.3666" style={{stopColor:'#CDD0D6'}}></stop>
                                    <stop offset="0.4266" style={{stopColor:'#C2C6CC'}}></stop>
                                    <stop offset="0.6764" style={{stopColor:'#98A1A5'}}></stop>
                                    <stop offset="0.8725" style={{stopColor:'#7E8A8D'}}></stop>
                                    <stop offset="0.9892" style={{stopColor:'#748284'}}></stop>
                                    </linearGradient>
                                    <path className="asst7" d="M29.3,46.2c-0.3-0.4-0.6-0.9-0.9-1.4c-1.1-2.4-1-4.9,0.1-6.9c-0.1-0.1-0.2-0.1-0.2-0.2
                                    c-1.2,2-1.3,4.7-0.1,7.2c0.2,0.5,0.6,1,0.9,1.4C29.1,46.4,29.2,46.3,29.3,46.2z"></path>
                                    <g>
                                    <path d="M28.6,45.5C28.6,45.5,28.5,45.5,28.6,45.5c-0.5-0.5-0.9-0.4-0.9-0.4c-0.1,0-0.1,0-0.2-0.1s0-0.1,0.1-0.2
                                        c0,0,0.4-0.1,0.8,0.2c0-0.2,0.1-0.4,0.3-0.6c0.1-0.1,0.1-0.1,0.2,0s0.1,0.1,0,0.2c-0.3,0.3-0.2,0.7-0.2,0.7
                                        C28.7,45.3,28.7,45.3,28.6,45.5L28.6,45.5z"></path>
                                    <path d="M27.9,44.3C27.8,44.3,27.8,44.3,27.9,44.3c-0.4-0.5-0.8-0.5-0.8-0.5c-0.1,0-0.1-0.1-0.1-0.1l0.1-0.1c0,0,0.4,0,0.7,0.3
                                        c0-0.2,0.2-0.4,0.4-0.6c0.1-0.1,0.1,0,0.2,0c0.1,0.1,0,0.1,0,0.2c-0.3,0.2-0.3,0.6-0.3,0.6C28.1,44.2,28,44.3,27.9,44.3
                                        L27.9,44.3z"></path>
                                    <path d="M27.6,43C27.5,43,27.5,43,27.6,43c-0.4-0.6-0.8-0.6-0.8-0.6c-0.1,0-0.1-0.1-0.1-0.1l0.1-0.1c0,0,0.4,0,0.7,0.4
                                        c0.1-0.2,0.2-0.4,0.5-0.5c0.1,0,0.1,0,0.2,0.1c0,0.1,0,0.1-0.1,0.2c-0.4,0.2-0.3,0.6-0.3,0.6C27.7,43,27.7,43,27.6,43
                                        C27.7,43,27.7,43,27.6,43z"></path>
                                    <path d="M27.5,41.8C27.4,41.8,27.4,41.8,27.5,41.8c-0.3-0.6-0.7-0.6-0.7-0.6c-0.1,0-0.1-0.1-0.1-0.1c0-0.1,0.1-0.1,0.1-0.1
                                        s0.4,0.1,0.7,0.4c0.1-0.2,0.2-0.4,0.5-0.5c0.1,0,0.1,0,0.2,0.1c0,0.1,0,0.1-0.1,0.2c-0.4,0.2-0.4,0.6-0.4,0.6
                                        C27.6,41.7,27.6,41.8,27.5,41.8L27.5,41.8z"></path>
                                    <path d="M27.5,40.6C27.4,40.6,27.4,40.6,27.5,40.6c-0.2-0.6-0.6-0.6-0.6-0.7c-0.1,0-0.1-0.1-0.1-0.2c0-0.1,0.1-0.1,0.2-0.1
                                        c0,0,0.4,0.1,0.6,0.5c0.1-0.2,0.2-0.3,0.5-0.5c0.1,0,0.1,0,0.2,0.1c0,0.1,0,0.1-0.1,0.2c-0.4,0.2-0.5,0.6-0.5,0.6
                                        C27.6,40.6,27.6,40.6,27.5,40.6L27.5,40.6z"></path>
                                    <path d="M27.7,39.4L27.7,39.4C27.7,39.4,27.7,39.3,27.7,39.4c-0.2-0.6-0.6-0.8-0.6-0.8c-0.1,0-0.1-0.1-0.1-0.2
                                        c0-0.1,0.1-0.1,0.2-0.1c0,0,0.3,0.2,0.5,0.6c0.1-0.2,0.3-0.3,0.6-0.3c0.1,0,0.1,0.1,0.1,0.1l-0.1,0.1
                                        C27.9,38.9,27.8,39.3,27.7,39.4C27.8,39.3,27.7,39.4,27.7,39.4z"></path>
                                    </g>
                                    <g>
                                    <path d="M21.8,45.5C21.8,45.5,21.9,45.5,21.8,45.5c0.5-0.5,0.9-0.4,0.9-0.4c0.1,0,0.1,0,0.2-0.1c0-0.1,0-0.1-0.1-0.2
                                        c0,0-0.4-0.1-0.8,0.2c0-0.2-0.1-0.4-0.3-0.6c-0.1-0.1-0.1-0.1-0.2,0s-0.1,0.1,0,0.2c0.3,0.3,0.2,0.7,0.2,0.7
                                        C21.6,45.3,21.6,45.3,21.8,45.5L21.8,45.5z"></path>
                                    <path d="M22.4,44.3C22.5,44.3,22.5,44.3,22.4,44.3c0.4-0.5,0.8-0.5,0.8-0.5c0.1,0,0.1-0.1,0.1-0.1l-0.1-0.1c0,0-0.4,0-0.7,0.3
                                        c0-0.2-0.2-0.4-0.4-0.6c-0.1-0.1-0.1,0-0.2,0c-0.1,0.1,0,0.1,0,0.2c0.3,0.2,0.3,0.6,0.3,0.6C22.4,44.2,22.4,44.3,22.4,44.3
                                        L22.4,44.3z"></path>
                                    <path d="M22.8,43L22.8,43c0.4-0.6,0.8-0.6,0.8-0.6c0.1,0,0.1-0.1,0.1-0.1l-0.1-0.1c0,0-0.4,0-0.7,0.4c-0.1-0.2-0.2-0.4-0.5-0.5
                                        c-0.1,0-0.1,0-0.2,0.1s0,0.1,0.1,0.2c0.4,0.2,0.3,0.6,0.3,0.6C22.7,43,22.7,43,22.8,43C22.7,43,22.7,43,22.8,43z"></path>
                                    <path d="M22.8,41.8C22.9,41.8,22.9,41.8,22.8,41.8c0.3-0.6,0.7-0.6,0.7-0.6c0.1,0,0.1-0.1,0.1-0.1c0-0.1-0.1-0.1-0.1-0.1
                                        s-0.4,0.1-0.7,0.4c-0.1-0.2-0.2-0.4-0.5-0.5c-0.1,0-0.1,0-0.2,0.1c0,0.1,0,0.1,0.1,0.2c0.4,0.2,0.4,0.6,0.4,0.6
                                        C22.8,41.7,22.8,41.8,22.8,41.8L22.8,41.8z"></path>
                                    <path d="M22.8,40.6C22.9,40.6,22.9,40.6,22.8,40.6c0.2-0.6,0.6-0.6,0.6-0.7c0.1,0,0.1-0.1,0.1-0.2c0-0.1-0.1-0.1-0.2-0.1
                                        c0,0-0.4,0.1-0.6,0.5c-0.1-0.2-0.2-0.3-0.5-0.5c-0.1,0-0.1,0-0.2,0.1c0,0.1,0,0.1,0.1,0.2c0.4,0.2,0.5,0.6,0.5,0.6
                                        C22.8,40.6,22.8,40.6,22.8,40.6L22.8,40.6z"></path>
                                    <path d="M22.6,39.4L22.6,39.4C22.7,39.4,22.7,39.3,22.6,39.4c0.2-0.6,0.6-0.8,0.6-0.8c0.1,0,0.1-0.1,0.1-0.2
                                        c0-0.1-0.1-0.1-0.2-0.1c0,0-0.3,0.2-0.5,0.6c-0.1-0.2-0.3-0.3-0.6-0.3c-0.1,0-0.1,0.1-0.1,0.1c0,0.1,0,0.1,0.1,0.1
                                        C22.4,38.9,22.5,39.3,22.6,39.4C22.5,39.3,22.6,39.4,22.6,39.4z"></path>
                                    </g>
                                </g>
                                </g>
                            </g>
                            <g>
                                <ellipse cx="25.1" cy="25.1" rx="7" ry="7"></ellipse>
                            </g>
                            <g>
                                <path id="XMLID_22_" d="M23.5,31.2c3.4,0.9,6.8-1.1,7.7-4.4c0.9-3.4-1.1-6.8-4.4-7.7c-1.1-0.3-2.1-0.3-3.1,0
                                c-2.1,0.6-4,2.2-4.5,4.5C18.1,26.9,20.2,30.3,23.5,31.2z"></path>
                                <path id="XMLID_21_" className="asst3" d="M19.4,24.3l1.1-0.9l1.1,0.8l0.2,2.3c-0.3,0.5-0.7,1.1-0.8,1.3l-1-0.3
                                C19.5,26.6,19.2,25.5,19.4,24.3z"></path>
                                <path id="XMLID_20_" className="asst3" d="M20.8,28.3c0.3,0.5,1.2,1.4,1.5,1.7l-0.1,0.2c-0.8-0.5-1.6-1.2-2.1-2L20.8,28.3z"></path>
                                <path id="XMLID_19_" className="asst3" d="M22.7,30.2c0.8,0.1,1.6-0.2,1.9-0.2l1.9,0.5l0.1,0.3h-0.1c-0.9,0.2-1.9,0.2-2.9,0
                                c-0.3-0.1-0.6-0.2-0.9-0.3V30.2z"></path>
                                <path id="XMLID_18_" className="asst3" d="M30.9,24.4L30,24.2l-1.6-1.7V21l0.6-0.1C30,21.7,30.7,23,30.9,24.4z"></path>
                                <path id="XMLID_17_" className="asst3" d="M28,20.9v1.6l-1.9,0.8l-2.1-1l-0.1-1.7l1.7-0.7C25.9,20,27.1,20.3,28,20.9z"></path>
                                <path id="XMLID_16_" className="asst3" d="M28.6,28.7c-0.5,0.6-1.6,1.1-1.9,1.3l-1.8-0.5l-0.3-1.7l1.9-1.3l2,0.5L28.6,28.7z"></path>
                                <path id="XMLID_15_" className="asst3" d="M25.9,23.6l0.2,2.5l-1.9,1.3c-1.1-0.3-1.7-0.8-2-0.9L22,24.2c0.3-0.4,1.3-1.1,1.7-1.4
                                L25.9,23.6z"></path>
                                <path id="XMLID_14_" className="asst3" d="M30,28.4l-0.9,0.1l-0.2-1.6l1.1-2.2l1,0.2c0,0.6,0,1.3-0.2,1.9C30.5,27.3,30.3,27.9,30,28.4z"></path>
                                <path id="XMLID_6_" className="asst3" d="M25.3,19.5l-1.7,0.7c-0.6,0-1.2,0.1-1.6,0.2c-0.1,0-0.2,0.1-0.3,0.1c0.6-0.5,1.3-0.7,2-0.9
                                C24.3,19.5,24.9,19.4,25.3,19.5L25.3,19.5L25.3,19.5z"></path>
                                <path id="XMLID_1_" className="asst3" d="M21.2,20.9c-0.7,1-0.9,1.8-1,2l-0.6,0.6C19.9,22.5,20.4,21.6,21.2,20.9z"></path>
                            </g>
                            <g>
                                <g>
                                <ellipse className="asst8" cx="25" cy="7.7" rx="5.8" ry="5.8"></ellipse>
                                <g>
                                    <path className="asst3" d="M24.9,12L24.9,12c-2.4,0-4.2-2.1-4.2-4.3c0-1.1,0.5-2.2,1.3-3s1.9-1.2,3.1-1.2c2.3,0.1,4.2,2.1,4.1,4.4
                                    c0,1.1-0.5,2.2-1.3,3C27.1,11.7,26,12,24.9,12z M25.1,3.8C24,3.7,23,4.1,22.3,4.9S21,6.6,21,7.7c-0.1,2.2,1.8,4.1,3.8,4.1l0,0
                                    c1.1,0,2.1-0.3,2.9-1.1C28.5,9.9,29,9,29,7.9l0,0C29,5.8,27.3,3.9,25.1,3.8L25.1,3.8z"></path>
                                </g>
                                <g>
                                    <path d="M25.2,7.1c0-0.2-0.1-0.3-0.2-0.3S24.8,6.9,24.8,7v0.2h-0.4V7.1c0-0.4,0.2-0.8,0.7-0.8s0.7,0.2,0.7,0.8v0.1
                                    c0,0.3-0.1,0.5-0.3,0.5l0,0c0.2,0.1,0.3,0.3,0.3,0.5v0.3c0,0.4-0.2,0.8-0.7,0.8s-0.7-0.2-0.7-0.8V8.4h0.4v0.2
                                    c0,0.2,0.1,0.2,0.2,0.2s0.2-0.1,0.2-0.3V8.3c0-0.2-0.1-0.4-0.2-0.4h-0.1V7.5h0.2C25.2,7.5,25.2,7.4,25.2,7.1L25.2,7.1z"></path>
                                </g>
                                </g>
                                <ellipse className="asst9" cx="8.2" cy="33.6" rx="5.9" ry="5.9"></ellipse>
                                <g>
                                <ellipse className="asst9" cx="8" cy="33.6" rx="5.5" ry="5.5"></ellipse>
                                <g>
                                    <path className="asst3" d="M7.9,37.6L7.9,37.6c-2.2-0.1-4-1.9-3.9-4c0-1.1,0.4-2.1,1.2-2.9C6,30,7,29.5,8.1,29.5c2.2,0.1,3.9,1.9,3.9,4
                                    c0,1.1-0.4,2.1-1.2,2.9C10,37.2,8.9,37.6,7.9,37.6z M8.1,29.8c-1,0-2,0.4-2.7,1.1s-1.2,1.7-1.2,2.7c0,2.1,1.7,3.8,3.7,3.8
                                    c1,0.1,2-0.4,2.7-1.1c0.7-0.7,1.2-1.7,1.2-2.7l0,0C11.8,31.6,10.2,29.8,8.1,29.8C8.2,29.8,8.1,29.8,8.1,29.8z"></path>
                                </g>
                                <g>
                                    <path d="M7.6,32.6c0.4,0,0.4-0.1,0.5-0.4h0.3l-0.1,2.7H7.9l0.1-2H7.6V32.6z"></path>
                                </g>
                                </g>
                            </g>
                        </React.Fragment>
                    )
            default: 
                return null
        }
    }
    render() {
        const { type, ...props } = this.props
        const viewBox = this.VIEWBOX(type)

        return (
            <Icon viewBox={viewBox} {...props}>
                {this.renderPaths(type)}
            </Icon>
        )
    }
}
