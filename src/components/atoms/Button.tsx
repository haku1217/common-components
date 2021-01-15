import React from 'react'
import styled, { css } from 'src/styles'

type Props = Partial<{
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled: boolean
  rounded: boolean
  blocked: boolean
  mediaQuery: boolean
  fontColor: string
  bgColor: string
  type: 'button' | 'submit' | 'reset'
  sizeH: number
  borderW: number
  id: string
}>
export const Button: React.FC<Props> = (props) => {
  const { onClick, children, type = 'button' } = props
  return (
    <ScButton {...props} onClick={onClick} type={type}>
      {children}
    </ScButton>
  )
}

const ScButton = styled.button<Props>`
  ${({ borderW = 1, sizeH = 46 }) => {
    return css`
      position: relative;
      display: inline-block;
      padding: 0 2.5em;
      height: ${sizeH}px;
      border: solid ${borderW}px #065d93;
      border-radius: 4px;
      text-align: center;
      font-size: 1.4rem;
      white-space: nowrap;
      color: #065d93;
      outline: none;
      touch-action: manipulation;
      cursor: pointer;
      background: #fff;
      font-weight: bold;

      &:hover {
        opacity: 0.9;
      }
      &.disabled,
      &[disabled] {
        cursor: not-allowed;
        background: #c0c0c0;
        border: 1px solid #c0c0c0;
        color: #fff;
      }
    `
  }}
  ${({ blocked }) =>
    blocked &&
    css`
      display: block;
      width: 100%;
      padding: 0 0.5em;
    `}
  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 25px;
    `}
  ${({ bgColor }) =>
    bgColor &&
    css`
      background: ${bgColor};
      border-color: ${bgColor};
    `}
  ${({ fontColor }) =>
    fontColor &&
    css`
      color: ${fontColor};
      &:hover {
        color: ${fontColor};
      }
    `}
    ${({ mediaQuery, theme }) =>
    mediaQuery &&
    css`
      @media (max-width: ${theme.base.viewport.phone}px) {
        height: 26px;
        font-size: 1.2rem;
        padding: 0 1em;
      }
    `}
`
