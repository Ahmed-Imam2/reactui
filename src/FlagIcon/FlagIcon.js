import React, { Component } from 'react'
import { number, oneOf } from 'prop-types'
import Icon from 'react-icon-base'

class FlagIcon extends Component {
    static propTypes = {
        size: number,
        type: oneOf([
            'flagkm',
            'flagen',
            'flagja',
            'flagko',
            'flagms',
            'flagth',
            'flagmy',
            'flaglo',
            'flagzhTW',
            'flagzhCN',
            'flagid',
            'flagvi'
        ]).isRequired
    }

    VIEWBOX = (type) => {
        switch(type) {
            case 'flagkm':
                return '0 0 625 400'
            case 'flagen':
                return '0 0 33 20'
            case 'flagja':
                return '0 0 33 20'
            case 'flagko':
                return '0 0 33 20'
            case 'flagms':
                return '0 0 33 20' 
            case 'flagth':
                return '0 0 33 20'
            case 'flagmy':
                return '0 0 33 20'
            case 'flaglo':
                return '0 0 33 20'
            case 'flagvi':
                return '0 0 33 20'
            case 'flagid':
                return '0 0 33 20'
            case 'flagzhTW':
                return '0 0 33 20'
            case 'flagzhCN':
                return '0 0 33 20'  
            default: 
                return null
        }
    }

    renderPaths = (type) => {
        switch(type) {
            case 'flagkm':
                return(
                    <React.Fragment>
                        <style jsx="true">{`
                            .cls-km1{fill:#032ea1;}
                            .cls-km2{fill:#e00025;}.
                            cls-km10,.cls-km11,.cls-km3,.cls-km4,.cls-km5,.cls-km6,.cls-km9{fill:#fff;}
                            .cls-km10,.cls-km11,.cls-km3,.cls-km4,.cls-km5,.cls-km6,.cls-km7,.cls-km8,.cls-km9{stroke:#000;}
                            .cls-km3,.cls-km4,.cls-km9{stroke-linejoin:bevel;}.cls-km3,.cls-km5,.cls-km8{stroke-width:0.96px;}
                            .cls-km4{stroke-width:0.94px;}.cls-km6{stroke-width:0.98px;}.cls-km7,.cls-km8{fill:none;}
                            .cls-km7{stroke-width:0.8px;}.cls-km9{stroke-width:1.03px;}.cls-km10{stroke-width:1.04px;}
                            .cls-km11{stroke-width:1.04px;}
                        `}
                        </style>
                        <g>
                           <path className="cls-km1" d="M0,0H625V400H0Z"/><path className="cls-km2" d="M0,100H625V300H0Z"/>
                           <path className="cls-km3" d="M256.16,188.53H370v43.78H256.16Z"/>
                           <path className="cls-km3" d="M364.09,212.71h3.59V229.2h-3.59Zm-107.93-8.15H370v5.09H256.16Zm0-6.9H370v4.49H256.16Z"/>
                           <path className="cls-km4" d="M256.16,190.77H370v4.35H256.16Z"/>
                           <path className="cls-km3" d="M286.12,212.71h3.59V229.2h-3.59Zm49,0h3.59V229.2h-3.59Zm-78.05,0h3.59V229.2h-3.59Zm7,0h3.59V229.2h-3.59Zm7.5,0h3.59V229.2h-3.59Zm7.5,0h3.59V229.2h-3.59Zm62.82,0h3.59V229.2h-3.59Zm7.5,0H353V229.2h-3.59Zm7.5,0h3.59V229.2h-3.59Z"/><path className="cls-km5" d="M211.65,234.62a9.39,9.39,0,0,0,4.43-5.32H409.15a9.34,9.34,0,0,0,4.42,5.32Z"/>
                           <path className="cls-km5" d="M310.14,121.87s-.14-4.12,2.25-4.16,2.25,4.16,2.25,4.16Zm-12.49,54.54v-5.54c-.08-2.77-2.76-3-2.84-5,0,0-.34-3,.46-4.4,1.08,4,3.05,3.3,3.05,1.64,0-1.46-1.11-2.81-3.41-6.33-.73-1.13-.28-4.66.75-5.93.4,3.07.85,4.54,2.17,4.54.81,0,1.46-.52,1.46-2.06,0-2-1.32-2.94-2-4.72a5,5,0,0,1,1-5.38c.54,3,.38,4.23,1.73,4.23,2.71-.85,0-4.78-.58-5.77-.67-1.16.9-3.46.9-3.46.86,2.69,1.14,2.91,2.07,2.66,1.17-.32,1-2.06-.41-3.47a2.26,2.26,0,0,1,.16-3.27c1,1.9,2.22,1.79,2.34.66l-.78-4.4H321l-.85,4.25c-.25,1.22,1.39,1.48,2.41-.51a2.26,2.26,0,0,1,.17,3.27c-1.44,1.41-1.59,3.15-.41,3.47.93.25,1.2,0,2.07-2.66a4.08,4.08,0,0,1,.89,3.46c-.58,1-3.29,4.92-.58,5.77,1.35,0,1.19-1.2,1.73-4.23a5,5,0,0,1,1,5.38c-.65,1.78-2,2.76-2,4.72,0,1.54.66,2.06,1.46,2.06,1.32,0,1.77-1.47,2.17-4.54,1,1.27,1.48,4.8.75,5.93-2.29,3.52-3.41,4.87-3.41,6.33,0,1.66,2,2.4,3.06-1.64.79,1.38.45,4.4.45,4.4-.08,2-2.76,2.22-2.84,5v5.54Zm7.22-46-.39-3.13h15.83l-.39,3.13Zm1.06-3.19-.34-2.57H319.2l-.34,2.57Zm2.16-2.66-.22-2.57h9.05l-.22,2.57Zm33,110.08c-2-.78-5-2.92-5-5.07v-24.3l2.63-3.36H286l2.53,3.36v24.3c0,2.15-2,4.29-4,5.07Z"/>
                           <path className="cls-km3" d="M295.38,212.71H299V229.2h-3.59Zm30.32,0h3.59V229.2H325.7Z"/>
                           <path className="cls-km5" d="M285.05,174.24v27.65h54v-5.95l.07-21.7a4.19,4.19,0,0,0-2.59,2.87v11.77H287.81V177.11a4.69,4.69,0,0,0-2.76-2.87Z"/>
                           <path className="cls-km5" d="M331.74,234.62c-1.76-.78-5.61-2.92-5.61-5.07V202.36c.38-1.52,2.44-2.42,3.76-3.36H294.07c1.7.9,3.6,1.65,4.28,3.36v27.19c0,2.15-3,4.29-4.8,5.07Z"/>
                           <path className="cls-km5" d="M336.55,199.29V179.7h-4.91v-1.91H292.8v1.91h-4.91v19.59ZM324,234.62c-1.73-.78-4.25-2.92-4.25-5.07V206.33l1.42-2.11H303.48l1.42,2.11v23.22c0,2.15-2.52,4.29-4.25,5.07Z"/>
                           <path className="cls-km6" d="M307.85,204.23h9V234.6h-9Z"/>
                           <path className="cls-km3" d="M321.52,197.55c0-2,5.84-2.09,8.84-3.8h-36c3,1.7,8.68,1.85,8.68,3.8l1.21,3.88,14.89.6Z"/><path className="cls-km5" d="M328.55,176.41c0-4.9.21-6.79,1.71-6.79V185.2c-3.69,1.34-6.32,6.05-6.32,6.05H300.73s-2.64-4.71-6.33-6.05V169.62c1.86,0,1.87,2,1.87,6.79Zm1.71-2c0-5.62,4.85-6.25,4.85-6.25v5c-1.84-.08-2.73,1.57-2.73,4s1.48,2.51,1.48,2.51v14.19h-3.6Z"/>
                           <path className="cls-km5" d="M294.42,174.4c0-5.62-4.85-6.25-4.85-6.25v5c1.85-.08,2.74,1.57,2.74,4s-1.49,2.51-1.49,2.51v14.19h3.6Z"/><path className="cls-km7" d="M304,135.69h17.13M302,141h20.92m-22.95,6.49h24.91m-27,7.93h29.54m-30.22,9h30.43"/><path className="cls-km8" d="M287.89,194h48.66m-33.22,0h18v6.63h-18Z"/><path className="cls-km5" d="M301.07,179.31c3,3.59,2.72,9.68,2.68,13.27h17.34c0-3.59-.31-9.68,2.68-13.27Zm9.75-41.13L308.45,137v-3.5c1,.29,2.06.41,2.16,2,.34-2.21.95-2.1,1.91-3,1,.86,1.57.75,1.91,3,.1-1.54,1.19-1.66,2.17-2V137l-2.38,1.22Z"/>
                           <path className="cls-km5" d="M310.66,143.92l-3.94-2.72V138c1.38.32,2.93.45,3.09,2.15a6.55,6.55,0,0,1,2.71-4.62c1.37.94,2.23,2.2,2.71,4.62.16-1.7,1.71-1.83,3.09-2.15v3.22l-3.94,2.72Z"/>
                           <path className="cls-km5" d="M310.38,152.87l-4.53-4v-4.74c1.59.47,3.37.67,3.55,3.16.55-3.56,1.55-5.4,3.12-6.79,1.57,1.39,2.57,3.23,3.12,6.79.18-2.49,2-2.69,3.55-3.16v4.74l-4.54,4Zm8.37,5.29-4.1,5.67H310l-4.1-5.67Zm-15.22,9.53c2.06,1.12,2.81,3.35,3,7.55h11.55c.22-4.2,1-6.43,3-7.55Z"/><path className="cls-km3" d="M321.31,158.16v-5.71a5.21,5.21,0,0,0-3.77,3.26c0-1.89-2.49-6.26-5.21-8.43-2.72,2.43-5.26,6.38-5.21,8.43a5.18,5.18,0,0,0-3.77-3.26v5.71Z"/>
                           <path className="cls-km3" d="M322.18,167.69V162a5.59,5.59,0,0,0-4.14,3.26c0-1.89-2.73-6.26-5.7-8.43-3,2.43-5.77,6.38-5.71,8.43a5.56,5.56,0,0,0-4.14-3.26v5.71Z"/><path className="cls-km3" d="M324.58,179.39v-6.58a9.51,9.51,0,0,0-5.15,3.8c0-3.56-4-9-7.1-10.77-3.16,1.83-7.1,7.44-7.1,10.77a9.64,9.64,0,0,0-5.15-3.8v6.58Z"/><path className="cls-km3" d="M323.14,194v-6.77c-2.34.92-3.05,3.18-3.78,4.72.29-6.86-3.86-14.23-7-16.1-3.16,1.87-7.39,9.4-7,16.1-.76-1.53-1.44-3.8-3.79-4.72V194Z"/><path className="cls-km5" d="M321.5,204.23v-6.77c-2.45.59-2.61,1.49-3.39,3,.29-4.1-2.61-8.77-5.77-10.64-3.16,1.87-6.07,6.54-5.78,10.64-.78-1.52-.87-2.42-3.39-3v6.77Z"/><g id="a"><path className="cls-km5" d="M216.08,229.3V208.86c-.67-2.61-2.88-4.91-4.54-5.37v-18l3.74,2,4.27,18.81v23Z"/>
                           <path className="cls-km5" d="M216.08,229.38V208.86c-.67-2.61-2.88-4.91-4.54-5.37V184.25c2.51,0,3.74,3.27,3.74,3.27l4.27,18.81v22.89Z"/><path className="cls-km5" d="M213.42,234.62c1.73-.78,4.25-2.92,4.25-5.07V204l-1.19-2.11H260L258.31,204v25.55a6.12,6.12,0,0,0,3.46,5.07Z"/><path className="cls-km5" d="M253,234.62c-1.73-.78-4.25-2.92-4.25-5.07v-24.3l3.62-3.36H222.76l3.62,3.36v24.3c0,2.15-2.52,4.29-4.25,5.07Z"/><path className="cls-km5" d="M248.83,234.62c-1.73-.78-4.25-2.92-4.25-5.07v-22l2.37-3.36h-18.8l2.37,3.36v22c0,2.15-2.52,4.29-4.25,5.07Z"/>
                           <path className="cls-km5" d="M233.06,204.23h9v30.39h-9Z"/><path className="cls-km3" d="M220.84,212.71h3.59V229.2h-3.59Zm30.75,0h3.59V229.2h-3.59Zm-33.81-27.82h4.32V201.8h-4.32Zm0-3.18h4.3v3.14h-4.3Z"/><path className="cls-km9" d="M253.31,188.53h6.16v13.05h-6.16Z"/><path className="cls-km5" d="M222,201.67V172.73c1.23,0,1.42,4.24,4.25,4.24,1.47,0,1.32-1.76.49-3.19a6.45,6.45,0,0,1-.41-6.28c.85,2.49,3.12,3.29,2.7,1.72-.72-2.69-2.8-3.13-1.24-7.3.54,3.48,2.77,3.33,2.23,1.3-.61-2.28-1.87-3.21-.32-6.42.88,3.65,2.06,3.43,2.06,1.17,0-3.35-.13-7,4.2-8.3,0,0,.25-3.07,1.81-3.07s1.81,3.07,1.81,3.07c4.33,1.34,4.21,5,4.21,8.3,0,2.26,1.18,2.48,2.05-1.17,1.56,3.21.29,4.15-.32,6.43-.54,2,1.69,2.17,2.23-1.31,1.56,4.17-.52,4.62-1.24,7.3-.42,1.57,1.85.78,2.7-1.72a6.45,6.45,0,0,1-.41,6.28c-.83,1.43-1,3.19.49,3.19,2.83,0,3-4.24,4.25-4.24v28.94Zm-6.76-21.86v22.08h2.51V179.75a2.19,2.19,0,0,0-2.51.06Z"/>
                           <path className="cls-km5" d="M215.35,194.1c3.11,1.59,6.19,3.43,7,7.79h-7Zm43.16-6.61v14.4h2V187.45A2.16,2.16,0,0,0,258.51,187.49Z"/><path className="cls-km5" d="M260.55,194c-3.11,1.59-6.19,3.43-7,7.79h7Z"/><path className="cls-km5" d="M240,160.34l1.82-1.53v-1.95a1.9,1.9,0,0,0-1.52.93,5,5,0,0,0-2.56-2.93,4.89,4.89,0,0,0-2.56,2.89,1.87,1.87,0,0,0-1.52-.89v1.95l1.82,1.53Z"/><path className="cls-km5" d="M240.94,165.23l.85-1.83v-2.54a1.93,1.93,0,0,0-1.52.95,5,5,0,0,0-2.56-3,4.92,4.92,0,0,0-2.56,2.92,1.88,1.88,0,0,0-1.52-.9v2.54l.84,1.83Z"/><path className="cls-km5" d="M241.07,171.86l2.7-3.29v-3.24a2.8,2.8,0,0,0-2.25,1.6c-.62-2.22-2-2.71-3.81-3.78-1.82,1.07-3.19,1.48-3.81,3.7a2.69,2.69,0,0,0-2.25-1.52v3.24l2.7,3.29Z"/><path className="cls-km5" d="M241.86,178.37s3.14-2.74,3.33-4.25v-3.47a4,4,0,0,0-3.27,1.89c-.76-2.87-2-3.67-4.21-5.06-2.25,1.39-3.45,2.19-4.21,5.06a4,4,0,0,0-3.27-1.89v3.47c.4,1.5,3.33,4.24,3.33,4.24Z"/>
                           <path className="cls-km5" d="M243.2,190.39s4.3-4.76,4.4-6.62v-5.41c-1.61.23-3.13,1.33-4.32,3.55-1-4.47-2.59-7.59-5.57-9.76-3,2.17-4.56,5.29-5.57,9.77-1.19-2.23-2.71-3.34-4.32-3.56v5.41c.31,1.85,4.4,6.62,4.4,6.62Z"/><path className="cls-km5" d="M243.2,197.5s3.68-3.75,4.4-5.37v-5.41c-1.61.23-3.13,1.33-4.32,3.55-1-4.47-2.59-7-5.57-9.2-3,2.17-4.56,4.73-5.57,9.2-1.19-2.22-2.71-3.33-4.32-3.55v5.41a49.87,49.87,0,0,0,4.4,5.36Z"/><path className="cls-km5" d="M244.68,201.63c-1.07-4.67-2-8.13-7.16-11.64-5.17,3.51-6.09,7-7.16,11.64Z"/><path className="cls-km5" d="M247.34,204.23v-6.77c-2.34.92-4.46,2.28-5.25,3.8-.87-3.76-2.55-5.41-4.65-7.68-2.1,2.27-3.5,3.92-4.37,7.68-.79-1.52-2.91-2.88-5.25-3.8v6.77Z"/></g><path className="cls-km5" d="M409,229.3V208.86c.67-2.61,2.88-4.91,4.54-5.37v-18l-3.74,2-4.27,18.81v23Z"/>
                           <path className="cls-km5" d="M409,229.38V208.86c.67-2.61,2.88-4.91,4.54-5.37V184.25c-2.51,0-3.74,3.27-3.74,3.27l-4.27,18.81v22.89Z"/><path className="cls-km5" d="M411.61,234.62c-1.73-.78-4.25-2.92-4.25-5.07V204l1.18-2.11H365l1.7,2.11v25.55a6.12,6.12,0,0,1-3.46,5.07Z"/><path className="cls-km5" d="M372,234.62c1.73-.78,4.25-2.92,4.25-5.07v-24.3l-3.62-3.36h29.59l-3.62,3.36v24.3c0,2.15,2.52,4.29,4.25,5.07Z"/><path className="cls-km5" d="M376.19,234.62c1.73-.78,4.25-2.92,4.25-5.07v-22l-2.37-3.36h18.8l-2.37,3.36v22c0,2.15,2.52,4.29,4.25,5.07Z"/><path className="cls-km5" d="M392,204.23h-9v30.39h9Z"/><path className="cls-km3" d="M404.18,212.71H400.6V229.2h3.58Zm-30.75,0h-3.58V229.2h3.58Zm33.81-27.82h-4.32V201.8h4.32Zm0-3.18H403v3.14h4.29Z"/>
                           <path className="cls-km9" d="M371.71,188.53h-6.16v13.05h6.16Z"/><path className="cls-km5" d="M403,201.67V172.73c-1.23,0-1.42,4.24-4.25,4.24-1.47,0-1.31-1.76-.49-3.19.74-1.27,1.64-3,.41-6.28-.84,2.49-3.11,3.29-2.69,1.72.72-2.69,2.79-3.13,1.24-7.3-.54,3.48-2.78,3.33-2.23,1.3.61-2.28,1.87-3.21.31-6.42-.87,3.65-2.05,3.43-2.05,1.17,0-3.35.13-7-4.2-8.3,0,0-.25-3.07-1.82-3.07s-1.81,3.07-1.81,3.07c-4.33,1.34-4.2,5-4.2,8.3,0,2.26-1.18,2.48-2-1.17-1.56,3.21-.3,4.15.31,6.43.55,2-1.69,2.17-2.23-1.31-1.55,4.17.52,4.62,1.24,7.3.42,1.57-1.85.78-2.69-1.72-1.23,3.26-.33,5,.41,6.28.82,1.43,1,3.19-.49,3.19-2.83,0-3-4.24-4.25-4.24v28.94Zm6.77-21.86v22.08h-2.51V179.75a2.19,2.19,0,0,1,2.51.06Z"/>
                           <path className="cls-km5" d="M409.68,194.1c-3.11,1.59-6.2,3.43-7,7.79h7Zm-43.17-6.61v14.4h-2V187.45A2.14,2.14,0,0,1,366.51,187.49Z"/><path className="cls-km5" d="M364.47,194c3.11,1.59,6.2,3.43,7,7.79h-7Z"/><path className="cls-km5" d="M385.05,160.34l-1.81-1.53v-1.95a1.9,1.9,0,0,1,1.51.93,5,5,0,0,1,2.57-2.93,4.93,4.93,0,0,1,2.56,2.89,1.85,1.85,0,0,1,1.52-.89v1.95l-1.82,1.53Z"/><path className="cls-km5" d="M384.08,165.23l-.84-1.83v-2.54a1.94,1.94,0,0,1,1.52.95,5,5,0,0,1,2.56-3,5,5,0,0,1,2.56,2.92,1.87,1.87,0,0,1,1.52-.9v2.54l-.85,1.83Z"/><path className="cls-km5" d="M384,171.86l-2.69-3.29v-3.24a2.82,2.82,0,0,1,2.25,1.6c.62-2.22,2-2.71,3.81-3.78,1.82,1.07,3.18,1.48,3.8,3.7a2.72,2.72,0,0,1,2.25-1.52v3.24l-2.69,3.29Z"/>
                           <path className="cls-km5" d="M383.16,178.37s-3.14-2.74-3.32-4.25v-3.47a4,4,0,0,1,3.26,1.89c.77-2.87,2-3.67,4.21-5.06,2.26,1.39,3.45,2.19,4.22,5.06a4,4,0,0,1,3.26-1.89v3.47c-.39,1.5-3.32,4.24-3.32,4.24Z"/><path className="cls-km5" d="M381.82,190.39s-4.3-4.76-4.4-6.62v-5.41c1.61.23,3.14,1.33,4.32,3.55,1-4.47,2.59-7.59,5.57-9.76,3,2.17,4.56,5.29,5.57,9.77,1.19-2.23,2.72-3.34,4.32-3.56v5.41c-.3,1.85-4.4,6.62-4.4,6.62Z"/><path className="cls-km5" d="M381.82,197.5s-3.67-3.75-4.4-5.37v-5.41c1.61.23,3.14,1.33,4.32,3.55,1-4.47,2.59-7,5.57-9.2,3,2.17,4.56,4.73,5.57,9.2,1.19-2.22,2.72-3.33,4.32-3.55v5.41a49.87,49.87,0,0,1-4.4,5.36Z"/>
                           <path className="cls-km5" d="M380.34,201.63c1.08-4.67,2-8.13,7.17-11.64,5.16,3.51,6.09,7,7.16,11.64Z"/><path className="cls-km5" d="M377.68,204.23v-6.77c2.35.92,4.47,2.28,5.25,3.8.87-3.76,2.56-5.41,4.65-7.68,2.1,2.27,3.5,3.92,4.38,7.68.78-1.52,2.9-2.88,5.25-3.8v6.77Z"/><path className="cls-km5" d="M206.56,234.35v6.17H418.44v-6.17Zm-3.84,6.23v8H422.28v-8Zm219.56,8-219.56.06-6.42-.06v10.62H428.7V248.63ZM189.84,259.32v12.51H435.17V259.32Zm245.33,12.51v0H189.84v0h-6.47v12.51H441.63V271.83Z"/><path className="cls-km10" d="M229.55,234.38h16v49.93h-16Z"/><path className="cls-km11" d="M233.09,234.38H242v49.93h-8.92Z"/><path className="cls-km10" d="M304.22,234.38h16v49.93h-16Z"/><path className="cls-km11" d="M307.87,234.38h8.92v49.93h-8.92Z"/><path className="cls-km10" d="M379.33,234.38h16v49.93h-16Z"/>
                           <path className="cls-km11" d="M382.87,234.38h8.92v49.93h-8.92Z"/><path className="cls-km8" d="M216.08,229.3H409.15M232.93,278h9.25m-9.25-6.25h9.25m-9.25-6.25h9.25m-9.25-6.25h9.25M232.93,253h9.25m-9.25-6.25h9.25m-9.25-6.25h9.25m65.73,37.51h8.61m-8.61-6.26h8.61m-8.61-6.25h8.61m-8.61-6.25h8.61M307.91,253h8.61m-8.61-6.25h8.61m-8.61-6.25h8.61M382.71,278H392m-9.25-6.25H392m-9.25-6.25H392m-9.25-6.25H392M382.71,253H392m-9.25-6.25H392m-9.25-6.25H392"/>
                       </g>
                       </React.Fragment>
                    )
                case 'flagen':
                    return(
                        <React.Fragment>
                            <style jsx="true">{`
                                .cls-en1{fill:#2e4593;}
                                .cls-en2{fill:#fcf5ff;}
                                .cls-en3{fill:#f42525;}
                                .cls-en4{fill:#fff;}
                                .cls-en5{fill:#cd002a;}
                            `}
                            </style>
                            <g>
                                <polygon className="cls-en1" points="33 0 33 20 33 20 0 20 0 0 33 0"/>
                                <polygon className="cls-en2" points="33 17.9 33 20 33 20 29.6 20 19.4 13.8 18.4 13.2 17.2 12.5 16.8 12.3 15.6 11.5 15.2 11.3 14.8 11 14 10.6 13.8 10.4 13.4 10.2 9.8 8 8.2 7 0 2.1 0 0 0.1 0 0.1 0 3.5 0 13.8 6.3 14.8 6.9 15.1 7 16.7 8 16.8 8.1 17.5 8.5 18.4 9.1 18.6 9.2 19.4 9.7 20.3 10.2 22.5 11.5 24.1 12.5 33 17.9"/>
                                <polygon className="cls-en3" points="33 19.9 33 20 30.8 20 19.4 13.1 18.5 12.5 18.4 12.5 17.5 11.9 16.9 11.5 15.8 10.9 14.8 10.3 14.7 10.2 14 9.8 13.8 9.7 11.1 8 9.4 7 0 1.3 0 0 0.1 0 0.1 0 11.7 7 13.3 8 13.8 8.3 14.8 8.9 15.2 9.1 15.8 9.5 16.9 10.2 18.4 11.1 18.6 11.2 19.2 11.5 19.4 11.7 20.8 12.5 33 19.9"/>
                                <polygon className="cls-en2" points="33 0.4 33 2.5 25.5 7 23.9 8 20.3 10.2 19.4 10.7 18.6 11.2 18.4 11.3 18.1 11.5 17.5 11.9 16.8 12.3 16.4 12.5 14.8 13.5 13.8 14.1 4.1 20 0 20 0 18.3 9.6 12.5 11.2 11.5 13.4 10.2 13.8 10 14 9.8 14.8 9.4 15.2 9.1 16.8 8.1 17 8 18.4 7.1 18.6 7 19.4 6.5 30.2 0 32.7 0 33 0.4"/>
                                <polygon className="cls-en3" points="32.9 0.5 22.1 7 20.5 8 19.4 8.7 18.6 9.2 18.4 9.3 16.9 10.2 15.8 10.9 15.2 11.3 14.8 11.5 14.7 11.5 13.8 12.1 13.1 12.5 0.8 20 0 20 0 19 10.8 12.5 12.4 11.5 13.8 10.7 14 10.6 14.7 10.2 14.8 10.1 15.8 9.5 17.5 8.5 18.2 8 18.4 7.9 19.4 7.3 19.9 7 31.4 0 32.6 0 33 0 33 0.5 32.9 0.5"/>
                                <rect className="cls-en4" y="7" width="33" height="5.5"/><rect className="cls-en3" y="8" width="33" height="3.5"/><rect className="cls-en5" x="14.8" width="3.6" height="19.9"/>
                                <polygon className="cls-en4" points="18.4 12.5 19.4 12.5 19.4 20 13.8 20 13.8 12.5 14.8 12.5 14.8 7 13.8 7 13.8 0 19.4 0 19.4 7 18.4 7 18.4 12.5"/>
                                <rect className="cls-en3" x="14.8" width="3.7" height="19.9"/>
                            </g>
                       </React.Fragment>
                    ) 
                case 'flagja':
                    return(
                        <React.Fragment>
                             <style jsx="true">{`
                                .cls-ja1{fill:#fff !important;}
                                .cls-ja2{fill:#db2e2e;}
                            `}
                            </style>
                            <g>
                                <rect className="cls-ja1" width="33" height="20"/>
                                <path className="cls-ja2" d="M24.2,10a7.52,7.52,0,0,1-7.7,7.4A7.58,7.58,0,0,1,8.8,10a7.52,7.52,0,0,1,7.7-7.4A7.58,7.58,0,0,1,24.2,10Z"/>
                            </g>
                        </React.Fragment>
                    )
                case 'flagko':
                    return(
                        <React.Fragment>
                             <style jsx="true">{`
                                .cls-ko1{fill:#fff ;}
                                .cls-ko2{fill:#28292b;}
                                .cls-ko3{fill:#2e4593;}
                                .cls-ko4{fill:#db2e2e;}
                                `}
                            </style>
                            <g>
                            <rect className="cls-ko1" width="33" height="20"/>
                                <polygon className="cls-ko2" points="4.4 4.7 7.8 1.3 8.6 2 5.2 5.4 4.4 4.7"/>
                                <polygon className="cls-ko2" points="5.5 5.7 8.9 2.4 9.7 3.1 6.3 6.5 5.5 5.7"/>
                                <polygon className="cls-ko2" points="6.6 6.8 10 3.4 10.8 4.2 7.3 7.5 6.6 6.8"/>
                                <polygon className="cls-ko2" points="24.1 14 25.5 12.7 26.3 13.5 24.9 14.8 24.1 14"/>
                                <polygon className="cls-ko2" points="22.8 16.8 22 16.1 23.4 14.8 24.1 15.5 22.8 16.8"/>
                                <polygon className="cls-ko2" points="25.3 15.1 26.6 13.8 27.4 14.6 26 15.9 25.3 15.1"/>
                                <polygon className="cls-ko2" points="23.9 17.9 23.2 17.2 24.5 15.9 25.3 16.6 23.9 17.9"/>
                                <polygon className="cls-ko2" points="27.1 16.9 26.3 16.2 27.7 14.9 28.5 15.6 27.1 16.9"/>
                                <polygon className="cls-ko2" points="25 19 24.2 18.2 25.6 16.9 26.3 17.7 25 19"/>
                                <polygon className="cls-ko2" points="27.2 3.2 28.6 4.5 27.8 5.3 26.4 3.9 27.2 3.2"/>
                                <polygon className="cls-ko2" points="24.3 1.9 25.1 1.2 26.4 2.5 25.7 3.2 24.3 1.9"/>
                                <polygon className="cls-ko2" points="23.2 3 24 2.3 25.3 3.5 26.1 4.3 27.4 5.6 26.7 6.3 25.3 5 24.5 4.3 23.2 3"/>
                                <polygon className="cls-ko2" points="24.2 6.1 25 5.3 26.4 6.6 25.6 7.4 24.2 6.1"/>
                                <polygon className="cls-ko2" points="22.1 4 22.9 3.3 24.2 4.6 23.5 5.3 22.1 4"/>
                                <polygon className="cls-ko2" points="6.6 13.4 7.4 12.7 8.7 14 9.5 14.7 10.9 16 10.1 16.8 8.7 15.4 7.9 14.7 6.6 13.4"/>
                                <polygon className="cls-ko2" points="8.4 15.8 9.7 17.1 9 17.8 7.6 16.5 8.4 15.8"/>
                                <polygon className="cls-ko2" points="5.5 14.5 6.3 13.7 7.6 15 6.8 15.8 5.5 14.5"/>
                                <polygon className="cls-ko2" points="4.4 15.5 5.2 14.8 6.5 16.1 7.3 16.8 8.6 18.1 7.9 18.9 6.5 17.6 5.8 16.8 4.4 15.5"/>
                                <path className="cls-ko3" d="M22.5,9.8a5.81,5.81,0,0,1-5.9,5.7,5.81,5.81,0,0,1-5.9-5.7,5.81,5.81,0,0,1,5.9-5.7A5.94,5.94,0,0,1,22.5,9.8Z"/>
                                <path className="cls-ko4" d="M22.4,9.8a2.2,2.2,0,0,1-.1.8c-.2-1.1-.8-3.2-3.2-3.2-1.8,0-2.4.8-2.7,1.6-.5,1.3-.6,2.9-3,2.9a2.61,2.61,0,0,1-2.8-2V9.8a5,5,0,0,1,.7-2.7A5.94,5.94,0,0,1,22.4,9.8Z"/>
                            </g>
                        </React.Fragment>
                    )
                case 'flagms':
                    return(
                        <React.Fragment>
                            <style jsx="true">{`
                                .cls-ms1{fill:none;}
                                .cls-ms2{clip-path:url(#clip-path);}
                                .cls-ms3{fill:#d80031;}.cls-ms4{fill:#fff;}
                                .cls-ms5{fill:#2530a9;}.cls-6{fill:#f5d028;}
                            `}
                            </style>
                            <g>
                                <g><g className="cls-ms2">
                                <rect className="cls-ms3" width="33" height="1.4"/></g><g className="cls-ms2"><rect className="cls-ms4" y="1.4" width="33" height="1.4"/>
                                </g><g className="cls-2">
                                <rect className="cls-ms3" y="2.9" width="33" height="1.4"/></g><g className="cls-ms2">
                                <rect className="cls-ms4" y="4.3" width="33" height="1.4"/></g>
                                <g className="cls-ms2"><rect className="cls-ms3" y="5.7" width="33" height="1.4"/></g>
                                <g className="cls-2"><rect className="cls-ms4" y="7.1" width="33" height="1.4"/></g>
                                <g className="cls-ms2"><rect className="cls-ms3" y="8.6" width="33" height="1.4"/></g>
                                <g className="cls-2"><rect className="cls-ms4" y="10" width="33" height="1.4"/></g>
                                <g className="cls-ms2"><rect className="cls-ms3" y="11.4" width="33" height="1.4"/></g>
                                <g className="cls-2"><rect className="cls-ms4" y="12.9" width="33" height="1.4"/></g>
                                <g className="cls-ms2"><rect className="cls-ms3" y="14.3" width="33" height="1.4"/></g>
                                <g className="cls-2"><rect className="cls-ms4" y="15.7" width="33" height="1.4"/></g>
                                <g className="cls-ms2"><rect className="cls-ms3" y="17.1" width="33" height="1.4"/></g>
                                <g className="cls-2"><rect className="cls-ms4" y="18.6" width="33" height="1.4"/></g>
                                <g className="cls-ms2"><rect className="cls-ms5" width="19.2" height="11.4"/></g>
                                <g className="cls-2"><g className="cls-2">
                                <path className="cls-ms6" d="M5.2,5.7A3.7,3.7,0,0,1,8.8,1.9a3.29,3.29,0,0,1,1.9.6A3.86,3.86,0,0,0,8,1.4,4.17,4.17,0,0,0,3.9,5.7,4.17,4.17,0,0,0,8,10a3.69,3.69,0,0,0,2.7-1.1,3.29,3.29,0,0,1-1.9.6A3.7,3.7,0,0,1,5.2,5.7"/></g>
                                <g className="cls-ms2">
                                <polygon className="cls-6" points="13.4 5.7 15.4 4.9 13.3 5.1 14.7 3.5 12.9 4.6 13.5 2.5 12.4 4.3 12.1 2.1 11.8 3.7 11.8 4.2 11.7 4.3 10.6 2.5 11.2 4.6 9.4 3.5 10.8 5.1 8.7 4.9 10.7 5.7 8.7 6.5 10.8 6.3 9.4 8 11.2 6.8 10.6 8.9 11.7 7.1 11.8 7.3 11.8 7.7 12.1 9.3 12.4 7.1 13.5 8.9 12.9 6.8 14.7 8 13.3 6.3 15.4 6.5 13.4 5.7"/></g></g></g>        
                            </g>
                       </React.Fragment>
                    ) 
                case 'flagth':
                    return(
                        <React.Fragment>
                            <style jsx="true">{`
                                .cls-th1{fill:#2b4ba5;}
                                .cls-th2{fill:#fff;}
                                .cls-th3{fill:#dd1212;}
                                    `}
                            </style>
                            <g> 
                                <rect className="cls-th1" y="16.1" width="33" height="3.9"/>
                                <rect className="cls-th2" y="12.1" width="33" height="4"/>
                                <rect className="cls-th2" y="4" width="33" height="4"/>
                                <rect className="cls-th1" width="33" height="3.9"/>
                                <rect className="cls-th3" y="6.7" width="33" height="6.6"/>        
                            </g>
                       </React.Fragment>
                    )
                case 'flagmy':
                    return(
                        <React.Fragment>
                            <style jsx="true">{`
                                .cls-my1{fill:#ea2839;}
                                .cls-my2{fill:#34b233;}
                                .cls-my3{fill:#fecb00;}.cls-my4{fill:#fff;}
                            `}
                            </style>
                            <g> 
                                <rect className="cls-my1" y="13.3" width="33" height="6.7"/>
                                <rect className="cls-my2" y="6.7" width="33" height="6.7"/><rect className="cls-my3" width="33" height="6.7"/>
                                <path className="cls-my4" d="M9.4,8.5H23.7L12.1,16.2,16.5,3.8l4.4,12.4Z"/>     
                            </g>
                       </React.Fragment>
                    )
                case 'flaglo':
                    return(
                        <React.Fragment>
                        <style jsx="true">{`
                            .cls-lo1{fill:none;}
                            .cls-lo2{clip-path:url(#clip-path);}
                            .cls-lo3{fill:#bc0030;}
                            .cls-lo4{fill:#192967;}
                            .cls-lo5{fill:#fff;}
                            `}
                        </style>
                       <g> 
                            <g id="LAOS">
                            <g className="cls-lo2"><rect className="cls-lo3" width="33" height="20"/>
                            </g><g className="cls-lo2"><rect className="cls-lo4" y="5" width="33" height="10"/>
                            </g><g className="cls-lo2"><g className="cls-lo2">
                            <path className="cls-lo5" d="M16.5,6a4,4,0,0,1,3.9,4,3.93,3.93,0,0,1-3.9,4,4,4,0,0,1-3.9-4,4.06,4.06,0,0,1,3.9-4"/></g></g></g>  
                        </g>
                       </React.Fragment>
                    )  
                case 'flagvi':
                    return(
                        <React.Fragment>
                        <style jsx="true">{`
                            .cls-vi1{fill:#db2e2e;}.cls-vi2{fill:#fff915;}
                        `}
                        </style>
                       <g> 
                        <rect className="cls-vi1" width="33" height="20"/>
                        <polygon className="cls-vi2" points="19.9 11.3 22 17.2 16.9 13.5 16.8 13.5 16.8 13.5 11.7 17.2 13.8 11.3 13.9 11.3 13.9 11.3 
                                    8.5 7.8 14.9 7.8 16.7 1.9 18.7 7.8 18.7 7.8 18.7 7.8 25.2 7.8 19.8 11.3 19.8 11.3 19.9 11.3"/>  
                        </g>
                       </React.Fragment>
                    )
                case 'flagid':
                    return(
                        <React.Fragment>
                            <style jsx="true">{`
                            .cls-id1{fill:#fff;}.cls-id2{fill:#e22b2b;}
                                `}
                            </style>
                            <g> 
                                <rect className="cls-id1" width="33" height="20"/><rect className="cls-id2" width="33" height="10"/>
                            </g>
                       </React.Fragment>
                    )
                case 'flagzhCN':
                    return(
                        <React.Fragment>
                            <style jsx="true">{`
                                .cls-CN1{fill:#f42525;}.cls-CN2{fill:#ffed00;}
                            `}
                            </style>
                            <g> 
                            <rect className="cls-CN1" width="33" height="20"/><polygon className="cls-CN2" points="6.8 5.7 7.7 8.1 5.5 6.6 5.5 6.6 5.5 6.6 3.4 8.1 4.3 5.7 4.3 5.7 4.3 5.7 2.1 4.2 4.7 4.2 5.5 1.7 6.3 4.2 6.3 4.2 6.3 4.2 9 4.2 6.8 5.7"/><polygon className="cls-CN2" points="12.7 8.2 12.8 7.7 13 8.2 12.9 8.6 12.7 8.2"/><polygon className="cls-CN2" points="13 8.2 13.6 8.2 13.1 8.5 12.6 8.4 13 8.2"/><polygon className="cls-CN2" points="13.1 8.5 13.3 9 12.9 8.6 12.7 8.2 13.1 8.5"/>
                                <polygon className="cls-CN2" points="12.7 8.2 12.2 8.2 12.6 8.5 13.1 8.4 12.7 8.2"/>
                                <polygon className="cls-CN2" points="12.6 8.5 12.4 9 12.9 8.6 13 8.2 12.6 8.5"/>
                                <polygon className="cls-CN2" points="10.2 10.7 10.5 10.2 10.5 10.8 10.2 11.2 10.2 10.7"/>
                                <polygon className="cls-CN2" points="10.5 10.8 11 10.9 10.5 11.1 10 10.9 10.5 10.8"/>
                                <polygon className="cls-CN2" points="10.5 11.1 10.6 11.6 10.2 11.2 10.2 10.7 10.5 11.1"/>
                                <polygon className="cls-CN2" points="10.2 10.7 9.7 10.5 10 10.9 10.5 11.1 10.2 10.7"/>
                                <polygon className="cls-CN2" points="10 10.9 9.7 11.4 10.2 11.2 10.5 10.8 10 10.9"/>
                                <polygon className="cls-CN2" points="13.3 5.1 13.8 4.7 13.6 5.2 13.2 5.5 13.3 5.1"/>
                                <polygon className="cls-CN2" points="13.6 5.2 14.1 5.5 13.5 5.5 13.1 5.2 13.6 5.2"/>
                                <polygon className="cls-CN2" points="13.5 5.5 13.4 6 13.2 5.5 13.3 5.1 13.5 5.5"/>
                                <polygon className="cls-CN2" points="13.4 5.1 12.9 4.8 13.1 5.2 13.5 5.5 13.4 5.1"/>
                                <polygon className="cls-CN2" points="13.1 5.2 12.7 5.6 13.2 5.5 13.6 5.2 13.1 5.2"/>
                                <polygon className="cls-CN2" points="11.8 2.1 12.1 1.7 12.1 2.2 11.8 2.6 11.8 2.1"/>
                                <polygon className="cls-CN2" points="12.1 2.2 12.6 2.4 12.1 2.5 11.6 2.4 12.1 2.2"/>
                                <polygon className="cls-CN2" points="12.1 2.5 12.1 3.1 11.8 2.6 11.8 2.1 12.1 2.5"/>
                                <polygon className="cls-CN2" points="11.8 2.1 11.3 2 11.6 2.4 12.1 2.5 11.8 2.1"/>
                                <polygon className="cls-CN2" points="11.6 2.4 11.3 2.8 11.8 2.6 12.1 2.2 11.6 2.4"/>
                            </g>
                       </React.Fragment>
                    ) 
                case 'flagzhTW':
                    return(
                        <React.Fragment>
                            <style jsx="true">{`
                                .cls-CN1{fill:#f42525;}.cls-CN2{fill:#ffed00;}
                            `}
                            </style>
                        <g> 
                            <rect className="cls-CN1" width="33" height="20"/><polygon className="cls-CN2" points="6.8 5.7 7.7 8.1 5.5 6.6 5.5 6.6 5.5 6.6 3.4 8.1 4.3 5.7 4.3 5.7 4.3 5.7 2.1 4.2 4.7 4.2 5.5 1.7 6.3 4.2 6.3 4.2 6.3 4.2 9 4.2 6.8 5.7"/><polygon className="cls-CN2" points="12.7 8.2 12.8 7.7 13 8.2 12.9 8.6 12.7 8.2"/><polygon className="cls-CN2" points="13 8.2 13.6 8.2 13.1 8.5 12.6 8.4 13 8.2"/><polygon className="cls-CN2" points="13.1 8.5 13.3 9 12.9 8.6 12.7 8.2 13.1 8.5"/>
                            <polygon className="cls-CN2" points="12.7 8.2 12.2 8.2 12.6 8.5 13.1 8.4 12.7 8.2"/>
                            <polygon className="cls-CN2" points="12.6 8.5 12.4 9 12.9 8.6 13 8.2 12.6 8.5"/>
                            <polygon className="cls-CN2" points="10.2 10.7 10.5 10.2 10.5 10.8 10.2 11.2 10.2 10.7"/>
                            <polygon className="cls-CN2" points="10.5 10.8 11 10.9 10.5 11.1 10 10.9 10.5 10.8"/>
                            <polygon className="cls-CN2" points="10.5 11.1 10.6 11.6 10.2 11.2 10.2 10.7 10.5 11.1"/>
                            <polygon className="cls-CN2" points="10.2 10.7 9.7 10.5 10 10.9 10.5 11.1 10.2 10.7"/>
                            <polygon className="cls-CN2" points="10 10.9 9.7 11.4 10.2 11.2 10.5 10.8 10 10.9"/>
                            <polygon className="cls-CN2" points="13.3 5.1 13.8 4.7 13.6 5.2 13.2 5.5 13.3 5.1"/>
                            <polygon className="cls-CN2" points="13.6 5.2 14.1 5.5 13.5 5.5 13.1 5.2 13.6 5.2"/>
                            <polygon className="cls-CN2" points="13.5 5.5 13.4 6 13.2 5.5 13.3 5.1 13.5 5.5"/>
                            <polygon className="cls-CN2" points="13.4 5.1 12.9 4.8 13.1 5.2 13.5 5.5 13.4 5.1"/>
                            <polygon className="cls-CN2" points="13.1 5.2 12.7 5.6 13.2 5.5 13.6 5.2 13.1 5.2"/>
                            <polygon className="cls-CN2" points="11.8 2.1 12.1 1.7 12.1 2.2 11.8 2.6 11.8 2.1"/>
                            <polygon className="cls-CN2" points="12.1 2.2 12.6 2.4 12.1 2.5 11.6 2.4 12.1 2.2"/>
                            <polygon className="cls-CN2" points="12.1 2.5 12.1 3.1 11.8 2.6 11.8 2.1 12.1 2.5"/>
                            <polygon className="cls-CN2" points="11.8 2.1 11.3 2 11.6 2.4 12.1 2.5 11.8 2.1"/>
                            <polygon className="cls-CN2" points="11.6 2.4 11.3 2.8 11.8 2.6 12.1 2.2 11.6 2.4"/>
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

export default FlagIcon