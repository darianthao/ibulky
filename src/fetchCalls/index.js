

// retrieve BMR from API
export function fetchBMR(weight, height, age, gender){

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3003482a04msh1f5f62e281cc75cp159084jsn979b928ab4c9',
            'X-RapidAPI-Host': 'mega-fitness-calculator1.p.rapidapi.com'
        }
    };

    return fetch(`https://mega-fitness-calculator1.p.rapidapi.com/bmr?weight=${weight}&height=${height}&age=${age}&gender=${gender}`, options)
        .then(response => response.json())
}