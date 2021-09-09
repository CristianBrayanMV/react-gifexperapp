
export const getGifs = async(category) => {
    const api = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=triJeR7B1d7mslXOJdgoV78HCEfYUFGt`;
    const response = await fetch(api);
    const {data} = await response.json();
    const gifs = data.map(img =>  (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }
    ));
    console.log(gifs);
    return gifs;
    
}