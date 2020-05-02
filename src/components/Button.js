import styled from '@emotion/styled'

export const Button = styled.button(props => ({
  alignItems: 'center',
  backgroundColor: 'transparent',
  border: props.noBorder? '1px solid transparent': '1px solid #222',
  cursor: props.disabled ? 'no-drop': 'pointer',
  display: 'grid',
  fontFamily: 'AveriaSans',
  gridTemplateRows: '2rem',
  gridTemplateColumns: '2rem 1fr',
  justifyItems: 'center',
  justifyContent: 'center',
  ['&:focus']: {
    borderBottom: '4px solid #222',
  },
  ['&:hover']: {
    backgroundColor: 'rgba(34, 34, 34, 0.03)',
  },
}))