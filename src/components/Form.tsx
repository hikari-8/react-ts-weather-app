type FormPropsType = {
    city : string;
    setCity: React.Dispatch<React.SetStateAction<string>>;
    getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Form =({city, setCity, getWeather}: FormPropsType)=> {
    return(
        <form onSubmit={getWeather}>
            <input type="text" 
                    name="city" 
                    placeholder="都市名" 
                    onChange={(e)=>setCity(e.target.value)}/>
            <button type="submit">Get Weather</button>
        </form>
        
    );
}