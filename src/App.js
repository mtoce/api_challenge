import { useState, useEffect } from 'react'
import Form from './Form'
// import List from './List'
import Table from './Table'

function App() {

  const [items, setItems] = useState([])
  const [reqType, setReqType] = useState('users')
  // const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    
    const BASE_URL = 'http://jsonplaceholder.typicode.com/'

    const fetchItems = async () => {
      try {
        const response = await fetch(`${BASE_URL}${reqType}`)
        // if (!response.ok) throw Error('Did not receive expected data')
        const data = await response.json()
        console.log(data)
        setItems(data)
        // setFetchError(null)
      } catch (err) {
        // setFetchError(err.message)
        console.log(err)
      }
    }
    fetchItems()
  }, [reqType])
  console.log(items)
  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      {/* <List items={items} /> */}
      <Table items={items} />
    </div>
  );
}

export default App;
