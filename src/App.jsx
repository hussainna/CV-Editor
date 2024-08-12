import CV from "./layouts/CV"
import FormLeft from "./layouts/FormLeft"
import './assets/style/main.scss'
import './assets/style/ui.scss'
function App() {

  return (
    <div className="App">
      <div className="left">
        <FormLeft/>
      </div>
      <div className="right">
        <CV/>
      </div>
    </div>
  )
}

export default App
