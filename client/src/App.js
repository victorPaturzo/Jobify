import Landing from "./pages/Landing"
import styled from 'styled-components'

const Button = styled.button`
background: red;
color: white;
font-size: 1 rem;
`

const ButtonSecond = styled.button`
background: blue;
color: white;
font-size: 1 rem;
`

function App() {
  return (
    <div>
      <Button>Click ME</Button>
      <ButtonSecond>Click ME</ButtonSecond>
      <h1>jobify</h1>
      <Landing />
    </div>
  )
}

export default App;
