async function fetchData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/albums/1");
        const data = await response.json();

        const dataElement = document.getElementById('content')
        const userIdElement = document.createElement('h2');
        const idElement = document.createElement('h2');
        const titleElement = document.createElement('h2');
        

        userIdElement.textContent ="userID :" + data.userId;
        idElement.textContent = "id :" + data.id;
        titleElement.textContent ="title :" + data.title;
        

        dataElement.appendChild(userIdElement);
        dataElement.appendChild(idElement);
        dataElement.appendChild(titleElement);

    }
    catch(e){
        console.log(e);
    }
};
fetchData();