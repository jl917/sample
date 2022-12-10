import styled from '@emotion/styled'
import isPropValid from '@emotion/is-prop-valid'
import { css } from '@emotion/react'

// Styling elements and components
const Button = styled.button`
  color: red;
`
// Changing based on props
const Button2 = styled.button`
  color: ${props => props.primary ? 'red' : 'yellow'}
`

// Styling any component
const Button3 = styled(({ className }) => {
  return (
    <div className={className}>btn</div>
  )
})`
  color: red;
`

// Change the rendered tag using withComponent
const Button4 = styled.button`
  background: #333;
  color: #fff;
`.withComponent('a');

// Targeting another emotion component // @emotion/babel-plugin.
const Button5Span = styled.span({ color: 'red' })
const Button5 = styled.button({
  [Button5Span]: {
    color: 'yellow',
  }
})

// Object styles
const Button6 = styled.button(
  { fontSize: 20 },
  props => ({ color: props.color || 'yellow' }),
)

// Customizing prop forwarding???
// https://emotion.sh/docs/styled#customizing-prop-forwarding
// Composing dynamic styles???
// https://emotion.sh/docs/styled#composing-dynamic-styles

// as prop
const Button7 = styled.button`
  color: pink;
`

// Nesting components
const Button8 = styled.button`
  color: red;
  & > span {
    color: yellow
  }
  i {
    color: pink
  }
`

// Composition
const Button9Css = css`
  color: red
`
const Button9 = styled.button`
  ${Button9Css}
  background: black;
`

const StyledComponents = () => (
  <>
    <Button>btn1</Button>
    <Button2>btn2 yellow</Button2>
    <Button2 primary>btn2 red</Button2>
    <Button3>btn3</Button3>
    <Button4>btn4</Button4>
    {/* <Button5>btn5<Button5Span>inner span</Button5Span></Button5> */}
    <Button6>btn6</Button6>
    <Button6 color="red">btn6 props</Button6>
    <Button7 as="a" href="http://naver.com" target="_blank">btn7</Button7>
    <Button8>btn8<span>inner <i>#</i></span></Button8>
    <Button9>btn9</Button9>
  </>
)

export default StyledComponents;
