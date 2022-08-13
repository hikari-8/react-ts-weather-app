type ResultsPropstype = {
    results:{
        country: string;
        cityName: string;
        temperature: string;
        conditionText: string;
        icon: string;
    }
}

export const Results =({results}: ResultsPropstype)=> {
    return(
        <>           
        { results.country && <div className="results-country">{results.country}</div> }     
        { results.cityName && <div className="results-city">{results.cityName}</div> }
        { results.temperature && <div className="results-temp">{results.temperature}<span>℃</span></div>}
        { results.conditionText && 
        <div className="results-condition">
            <img src={results.icon} alt="icon" />
            <span>{results.conditionText}</span>
            </div> }
        </>
    );
}