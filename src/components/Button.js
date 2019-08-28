import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform:capitalize;
    font-size:1.4rem;
    border:0.05rem solid;
    border-radius:0.5rem;
    padding:0.2rem 0.5rem;
    cursor:pointer;
    margin:0.2rem 0.5rem 0.2rem 0;
    transition:all 0.5s ease-in-out;
    &:hover{color:var(--mainBlue);}
    `

    export const ButtonUpdateDelete = styled.button`
    text-transform:capitalize;
    font-size:1.4rem;
    border-radius:0.5rem;
    padding:0.2rem 0rem;
    cursor:pointer;
    margin:0.2rem 0.5rem 0.2rem 0;
    transition:all 0.5s ease-in-out;
    &:hover{color:var(--mainBlue);}
    `