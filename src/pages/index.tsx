import { useState } from 'react'

const Home = () => {
  const [count, setCount] = useState(0)
  const isTenCount = count == 10
  const add = () => {
    setCount(count + 1)
  }
  const sub = () => {
    setCount(count - 1)
  }

  return (
    <main>
      <h1>Reactカウンター</h1>
      <div>
        <button onClick={add}>増えるボタン</button>
        <button onClick={sub}>減るボタン</button>
        <div>{count}</div>
        {isTenCount && <div>カウントが10になったぞ!!!!!!!</div>}
      </div>
    </main>
  )
}

export default Home
