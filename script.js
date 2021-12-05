 const list = document.getElementById('list');
 const form = document.querySelector('form');
 const item = document.getElementById('item');
  
// // add element
//dans notre form ajout un evenemnent observation quand on submit'(entree)'on va récuperer un évènement (e)qui permet de demander de faire une fonction

 form.addEventListener('submit', (e) => {
   e.preventDefault(); //permet de laisser les écrits à l'intérieur de mon input
   list.innerHTML += `<li>${item.value}</li>`;
   storage();
   item.value = "";//permet de laisser la memoire vide
 });



// // remove element enlever ces éléments
///dans notre list ajout un evenemnent observation quand on 'click'on va récuperer un évènement (e)qui permet de demander de faire une fonction

 list.addEventListener('click', (e) => {
   if(e.target.classList.contains('checked')){ //si quand on clic on contient l'élément checked on suprimme l'élément qui à été cliqué
     e.target.remove();
   } else {//sinon on lui ajout la classe checked si il ne l'a pas
     e.target.classList.add('checked');
   }
   storage();//appel de la fonction storage
 });




// // storage part LE STOCKAGE
//cette fonction s'occupe du local storage
 function storage() {
   window.localStorage.todoList = list.innerHTML;//on prend tout les éléments(window) je vais avoir un local storage du nom de todoliste pour lui injecter list.innerHTML qui sont les ul dans le local storage
 }
 function getValues() {//récupérer les valeurs
   let storageContent = window.localStorage.todoList;//contient toute la valeur
   if(!storageContent) { // si sa n'existe pas le storageContent et bien on aura un message de base à notre utilisateur
     list.innerHTML = 
       `<li>Cliquez sur un todo pour le supprimer</li>`;
   }
   else { // sinon tu m'affiche un storageContent
     list.innerHTML = storageContent;
   }
 }
 getValues();
