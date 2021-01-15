import React from 'react'
import styled, { css } from 'src/styles'

type Props = Partial<{
  fontColor: string
  color: string
}>
export const Alert: React.FC<Props> = (props) => {
  const { children } = props
  return <ScAlert {...props}>{children}</ScAlert>
}
const ScAlert = styled.div<Props>`
  ${(props) => {
    return css`
      display: block;
      border-radius: 4px;
      border: solid 1px ${props.color || '#f0f0f0'};
      color: ${props.fontColor || '#333'};
      font-size: 1.4rem;
      padding: ${props.theme.base.size * 2}px;
    `
  }}
`
