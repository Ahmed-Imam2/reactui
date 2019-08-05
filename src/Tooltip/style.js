import styled from 'styled-components'


const Tooltip = styled.span`
    cursor: pointer;
    span.tooltip {
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;

        .tooltiptext {
            visibility: hidden;
            white-space: nowrap;
            position: absolute;
            width: auto;
            min-width:40px;
            background-color: black;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px;
       
            
           
            ${props => props.position === 'right' && `
                left: 122%;
                top: -5px;`}
            
            ${props => props.position === 'bottom' && `
                bottom: 760px;
              
              
            `}
        }
    }

    span.tooltip .tooltiptext::after {
        content: "";
      
        border-width: 5px;
        border-style: solid;
        z-index: 99999;
        
        ${props => props.position === 'right' && `
            top: 50%;
            right: 100%;
            margin-top: -5px;
            border-color:  transparent black transparent transparent;
        `}

        ${props => props.position === 'bottom' && `
                background-color: red;
                align-self: center;

            border-color: transparent transparent black transparent;
    `}
    }
    
    .tooltip:hover .tooltiptext {
        visibility: visible;
    }
`

export default Tooltip