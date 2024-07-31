function loadContent(section) {
    let url = '';
    switch(section) {
        case 'home':
            url = '<h2>Inicio</h2><p>Bienvenido a la página de inicio.</p>';
            break;
        case 'about':
            url = 'das' ;
            break;
        case 'services':
            url = "/app/views/gestionProveedor.html";
            break;
        case 'contact':
            url = '<h2>Contacto</h2><p>Ponte en contacto con nosotros a través de este formulario.</p>';
            break;
        default:
            url = '<p>Selecciona una opción del menú para cargar el contenido.</p>';
    }
    //Obtener el contenido de la URL y actualizar el contenido principal
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching the content:', error);
            document.getElementById('main-content').innerHTML = '<p>Error al cargar el contenido.</p>';
        });
}
