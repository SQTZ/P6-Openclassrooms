//Fonction pour récupérer les works
function get_works() {
    const settings = {
        //On choisi la méthode
        method: 'GET',

        //On déclare ce qu'on souhaite voir
        headers: {

            //On dit qu'on accepte que le JSON
            'Accept': 'applications/json',

            //On définit le format pour le body
            'Content-Type': 'application/json',

            //On applique la clé d'API
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NjM3MTkzOCwiZXhwIjoxNjc2NDU4MzM4fQ.A5596jM-i6FAS28Cvojeh4R5Aw1e9JOOhOQNap9ipF4',
        }
    }

    //On déclare le lien pour le work
    const url_works = 'http://localhost:5678/api/works';

    fetch(url_works)
        //On applique une promesse qui vérifie si il à trouvé quelque chose 
        .then((res) => {
            return res.json();
        })

        //On met en place une autre promesse qui lui va récupérer les données inscrites
        .then((data) => {
            const fragment = document.createDocumentFragment();
            let works = data;
            works.forEach((work) => {
                console.log(work);
                //On déclare ce qu'on souhaite obtenir
                const figure = document.createElement('figure');
                const div = document.createElement('div');
                const img = document.createElement('img');
                //On définit la source de l'image
                img.src = work.imageUrl;
                const titre = document.createElement('figcaption');
                //On définit la source du titre
                titre.textContent = work.title;
                fragment.appendChild(figure);
                figure.appendChild(div);
                div.appendChild(img);

                console.log(work.imageUrl);

                div.appendChild(titre);
            });
            //On définit la gallerie
            const gallery = document.getElementById('galleryworks');
            gallery.appendChild(fragment);

        })
}


//Fonction pour récupérer une catégorie
function get_category() {
    const settings = {
        //On choisi la méthode
        method: 'GET',

        //On déclare ce qu'on souhaite voir
        headers: {

            //On dit qu'on accepte que le JSON
            'Accept': 'applications/json',

            //On définit le format pour le body
            'Content-Type': 'application/json',

            //On applique la clé d'API
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3NjM3MTkzOCwiZXhwIjoxNjc2NDU4MzM4fQ.A5596jM-i6FAS28Cvojeh4R5Aw1e9JOOhOQNap9ipF4',
        }
    }

    //On déclare le lien pour les catégories
    const url_category = 'http://localhost:5678/api/categories';

    fetch(url_category)
        //On applique une promesse qui vérifie si il à trouvé quelque chose 
        .then((res) => {
            return res.json();
        })

        //On met en place une autre promesse qui va afficher les catégories disponibles
        .then((data) => {
            const fragment = document.createDocumentFragment();
            let categories = data;
            categories.forEach((category) => {
                console.log(category);
                const link = document.createElement('button');
                link.textContent = category.name;
                link.classList.add("subcat");
                fragment.appendChild(link);
            });
            
            //On affiche les catégories disponibles
            const categorie = document.getElementById('category');
            categorie.appendChild(fragment);


            

            //FIXME: Voir avec WESLEY pour afficher les images en fonction de la catégorie demandé !!!
            //On met en place le système du filtrage
            let tousLesBoutons = document.querySelectorAll(".subcat");
            for (let i = 0; i < tousLesBoutons.length; i++) { 
            let bouton = tousLesBoutons[i];
            //On crée l'évenement qui active/désactive le bouton lorsqu'on clique
            bouton.addEventListener("click", function(e) {
            e.target.classList.toggle("default");
            });
        }


    });


};



//Fonction pour ajouter un work
function add_work() {
    //TODO: créer un formulaire pour l'ajout d'un projet
}

//Fonction pour supprimer un work
function remove_work() {

}





//TODO: créer un système de catégorie
//TODO: Faire afficher le mode édition
//TODO: A un modal pour gérer les projets

get_works();
get_category();
//add_work();
//remove_work();