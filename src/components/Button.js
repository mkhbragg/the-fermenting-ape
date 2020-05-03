import styled from '@emotion/styled'

export const Button = styled.button(props => ({
  alignItems: 'center',
  backgroundColor: props.filled ? '#222' : 'transparent',
  border: props.noBorder? '1px solid transparent': '1px solid #222',
  color: props.filled ? '#eee' : '#222',
  cursor: props.disabled ? 'no-drop': 'pointer',
  display: 'grid',
  fontFamily: 'AveriaSans',
  fontSize: props.big ? `2rem` : `1rem`,
  gridTemplateRows: props.grid ? '2rem 1fr' : '',
  gridTemplateColumns: props.grid ? 'auto' : '',
  justifyItems: 'center',
  justifyContent: 'center',
  padding: props.big ? `1rem` : `0.5rem`,
  ['&:focus']: {
    '-webkit-box-shadow': props.filled ? `0px 5px 0px 0px #7ba9dc` : `0px 5px 0px 0px #222`,
    boxShadow: props.filled ? `0px 5px 0px 0px #7ba9dc` : `0px 5px 0px 0px #222`,
  },
  ['&:hover']: {
    backgroundColor: props.filled ? 'transparent' : 'rgba(34, 34, 34, 0.03)',
    color: '#222',
  },
}))

export const SubmitButton = styled.input(props => ({
  alignItems: 'center',
  backgroundColor: props.filled ? '#222' : 'transparent',
  border: props.noBorder? '1px solid transparent': '1px solid #222',
  color: props.filled ? '#eee' : '#222',
  cursor: props.disabled ? 'no-drop': 'pointer',
  display: 'grid',
  fontFamily: 'AveriaSans',
  fontSize: props.big ? `2rem` : `1rem`,
  gridTemplateRows: props.grid ? '2rem 1fr' : '',
  gridTemplateColumns: props.grid ? 'auto' : '',
  justifyItems: 'center',
  justifyContent: 'center',
  padding: props.big ? `1rem` : `0.5rem`,
  ['&:focus']: {
    '-webkit-box-shadow': props.filled ? `0px 5px 0px 0px #7ba9dc` : `0px 5px 0px 0px #222`,
    boxShadow: props.filled ? `0px 5px 0px 0px #7ba9dc` : `0px 5px 0px 0px #222`,
  },
  ['&:hover']: {
    backgroundColor: props.filled ? 'transparent' : 'rgba(34, 34, 34, 0.03)',
    color: '#222',
  },
}))