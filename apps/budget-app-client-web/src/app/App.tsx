import { useState } from 'react'
import { Button, Divider, Flex } from 'antd'
import { NavbarWidget } from '../widgets/NavBarWidget'
import { UserWidget } from '../widgets/UserWidget'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Flex vertical={true} style={{background: 'white', width: 256, height: '100vh'}}>
        <UserWidget/>
        <NavbarWidget/>
      </Flex>
      {/* <Button type="primary">Button</Button> */}
    </>
  )
}

export default App
