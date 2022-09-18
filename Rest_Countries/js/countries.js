const LoadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
};
const displayCountries = countries => {
    console.log(countries[0]);

    const allCountriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(allCountriesHTML);

    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join(' ');
};

const getCountryHTML = country => {
    const { name, flags, area, population, capital, region } = country;
    return `
 <div class="country"> 
 <img src="${flags.png}">
 <h2>Name: ${name.common}</h2>
 <span>Capital: ${capital}</span>&nbsp;
 <span>Cantinent: ${region}</span>&nbsp;
 <h2><span>Area: ${area}</span>&nbsp;&nbsp;<span>Population: ${population}</span></h2>
 </div>
`;
};

/*
const getCountryHTML = country => {
    return `
 <div class="country"> 
 <img src="${country.flags.png}">
 <h2>${country.name.common}</h2>
 </div>
`;
};
*/
LoadCountries();