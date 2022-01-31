import Item from './components/item';
import Card from './components/card';
const App = () => {
  return(
    <>
    <h1>Minha primeira aplicação com React</h1>
    <ul>
    <Item>Item I</Item>
    <Item>Item II</Item>
    <Item>Item III</Item>
    </ul>
    <Card/>
    </>
    
  )
}


export default App;