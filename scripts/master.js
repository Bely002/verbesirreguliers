var header = document.querySelector("header")

async function load() {
    //Header
    await fetch('../components/header.html')
        .then(response => response.text())
        .then(async (html) => {
            header.innerHTML = html;
        })
        .catch(error => console.error('Erreur de chargement du composant :', error));
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting){
                entry.target.classList.add('show')
            }else{
                entry.target.classList.remove('show')
            }
        })
    })
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el))
};

load()
