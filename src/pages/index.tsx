import React from 'react'
import { Alert } from 'src/components/atoms/Alert'
import { Button } from 'src/components/atoms/Button'

const Index: React.FC = () => {
  return (
    <>
      <div>foo</div>
      <Alert color="#e34959" fontColor="#e34959">
        hoge
      </Alert>
      <Alert>hoge</Alert>
      <Button>hoge</Button>
      <Button disabled>fuga</Button>
      <Button blocked onClick={() => alert('hoge')}>
        fuga
      </Button>
      <Button rounded>fuga</Button>
      <Button fontColor="black" bgColor="pink">
        fuga
      </Button>
      <Button mediaQuery>fuga</Button>
      <li>hoge</li>
    </>
  )
}
export default Index
