import { Avatar, Flex, Typography } from "antd"



export const UserWidget = () => {

  return (
    <Flex align="center" gap={8} style={{padding: 10}}>
      <Avatar shape="square" src="/avatar.jpg"/>
      <Typography.Text strong style={{fontSize: 14}}>Username</Typography.Text>
    </Flex>
  )
}