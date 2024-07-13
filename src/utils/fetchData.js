export const options = { //Exercise API OPTIONS
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4eb9296380msha152c3a77f72aa0p1deb2cjsn3f6f8b9d0f0e',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

export const options_two = { //Youtube videos API options
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4eb9296380msha152c3a77f72aa0p1deb2cjsn3f6f8b9d0f0e',
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

export async function fetchData(url, options){
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}


