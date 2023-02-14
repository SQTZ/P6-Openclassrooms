const img = document.getElementById('img');

fetch('http://localhost:5678/api/works')
    .then(res => {
        if(res.ok){
            res.json().then(data => {
                img.src = data[0].url
            })
        } else {
            console.log("ERREUR");

        }
    })