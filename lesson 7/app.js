async function fetchAPI () {
    try{
        const response = await fetch ("https://jsonplaceholder.typicode.com/photos/");
        const dataRespone = await response.json();

        const divResult = document.getElementById('result');
        divResult.innerHTML = ``;

        dataRespone.forEach(image =>{
            const imgElement = document.createElement('img');
            imgElement.src = image.url;
            divResult.appendChild(imgElement);
        })
            
    } catch (e) {
        console.error(e);
    }
}