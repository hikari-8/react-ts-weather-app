import './App.css';
import { useState } from "react";
import { Title } from './components/Title';
import { Form } from './components/Form';
import { Results } from './components/Results'; 
import { Loading } from './components/Loading';

type ResultsStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
}

function App() {
  const [city, setCity] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<ResultsStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: ""
  });

    const getWeather =(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setLoading(true);
        fetch(`http://api.weatherapi.com/v1/current.json?key=219e6adf409b424c96d52157221308&q=${city}&aqi=no`)
        .then(res => res.json())
        .then(data => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon
        })  
        setCity("");
        setLoading(false);
      })
        .catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"))
    }

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form city={city}
              setCity={setCity}
              getWeather={getWeather}
                />
        {loading ? <Loading /> : <Results results={results}/>}
      </div>
    </div>
  );
}

export default App;
