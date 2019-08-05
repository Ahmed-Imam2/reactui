import styled from 'styled-components'


const Tooltip = styled.span`
    cursor: pointer;
    span.tooltip {
        position: relative;
        display: inline-block;
        border-bottom: 1px dotted black;

        .tooltiptext {
            visibility: hidden;
          
            
            
            background-color: black;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px 0;
            position: absolute;
            z-index: 1;
          
       
            
           
            ${props => props.position === 'right' && `
                    top: -5px;
                    left: 165%;
                    width: auto;
                    minWidth:40px;
                    padding: 5px;
            
            `}

            ${props => props.position === 'left' && `
                    top: -5px;
                    right: 165%;
                    width: auto;
                    minWidth:40px;
                    padding: 5px;
            
            `}
            
            ${props => props.width && props.position === 'bottom' && `
                    top: 150%;
                    left: 50%;
                    width: ${props.width}px;
                    margin-left: calc( ${props.width}px / -2);
            `}

            ${props => props.position === 'top' && `
                    bottom: 150%;
                    left: 50%;
                    width: ${props.width}px;
                    margin-left: calc( ${props.width}px / -2);
            `}
        }
    }

    span.tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        border-width: 5px;
        border-style: solid;
        
        ${props => props.position === 'right' && `
                top: 50%;
                right: 100%;
                margin-top: -5px;
                border-color: transparent black transparent transparent;
        `}

        ${props => props.position === 'left' && `
                top: 50%;
                left: 100%;
                margin-top: -5px;
                border-color: transparent transparent transparent black;
        `}

        ${props => props.position === 'top' && `
                top: 100%;
                left: 50%;
                margin-left: -5px;
                border-color: black transparent transparent transparent;
        `}

         ${props => props.position === 'bottom' && `
                bottom: 100%;
                left: 50%;
                margin-left: -5px;
                border-color: transparent transparent black transparent;
        `}
    }
    
    .tooltip:hover .tooltiptext {
        visibility: visible;
    }
`

export default Tooltip