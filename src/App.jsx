import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { Outlet } from "react-router-dom";

function App() {
  /* 
    const [data, setData] = useState([])
  
    useEffect(() => {
      fetch('https://customerrest.herokuapp.com/api',
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json()).then(responseData => {
          setData(responseData.content)
            .catch(err => {
              console.error(err)
            })
        })
    }) */

  return (
    <div className="App grid1x7">

        <Header />
        <Outlet />


      <Footer />
    </div>
  );
}


export default App;
