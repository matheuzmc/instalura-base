import styled, { css } from 'styled-components';
import get from 'lodash/get';

const ButtonGhost = css`
    color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
    background: transparent;
`

const ButtonDefault = css`
    color: white;
    background-color: ${function (props) {
        return get(props.theme, `colors.${props.variant}.color`);
    }};
    color: ${function (props) {
        return get(props.theme, `colors.${props.variant}.contrastext`);
    }};
`;

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;
    ${function (props) {
        // console.log('<Button />', props.variant, props.theme, get(props.theme, `colors.${props.variant}.color`));
        
        if (props.ghost) {
            return ButtonGhost;
        }
        return ButtonDefault;
    }}
    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRaius};
    &:hover,
    &:focus {
        opacity: .5;
    }
`;