import styled, {css, keyframes} from "styled-components"

const rotate = keyframes`
    0%{
        transform: rotate(0);
    }

    50%{
        transform: rotate(180deg);
    }
    
    100%{
        transform: rotate(360deg);

    }


`

const ButtonTwo = styled.button`
padding: .5rem .8rem;
border: none;
outline: none;
color:#fff;
background-color: ${ ({ theme }) =>  theme.primary};
transition: color, background-color 2s;
animation: ${ rotate } 1.5s;

    &:hover{
        color: #fff;
        background-color: blue;
    }

${({ danger, ghost }) => danger && ghost && css`
    background-color: transparent;
    color: ${ ({ theme }) => theme.danger};
    border: 1px solid red;
`}

${({ danger, ghost }) => danger && !ghost && css`
    background-color: ${ ({ theme }) => theme.danger};
`}

${({ danger, ghost }) => !danger && ghost && css`
    background-color: transparent;
    color: ${ ({ theme }) => theme.primary};
    border: 1px solid royalblue;
`}

`

export default ButtonTwo;