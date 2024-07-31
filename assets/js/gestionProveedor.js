document.addEventListener('DOMContentLoaded', function() {
    const providerForm = document.getElementById('provider-form');
    const providerList = document.getElementById('provider-list');
    let providers = [];

    // Función para agregar un proveedor
    function addProvider(provider) {
        providers.push(provider);
        renderProviderList();
    }

    // Función para eliminar un proveedor
    function deleteProvider(index) {
        providers.splice(index, 1);
        renderProviderList();
    }

    // Función para mostrar los detalles de un proveedor
    function showProviderDetails(provider) {
        alert(`Detalles del Proveedor:\n\nNombre: ${provider.name}\nCorreo: ${provider.email}\nTeléfono: ${provider.phone}\nDirección: ${provider.address}`);
    }

    // Función para renderizar la lista de proveedores
    function renderProviderList() {
        providerList.innerHTML = '';
        providers.forEach((provider, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${provider.name} 
                <span class="details" onclick="showProviderDetails(providers[${index}])">Detalles</span>
                <span class="delete" onclick="deleteProvider(${index})">Eliminar</span>
            `;
            providerList.appendChild(li);
        });
    }

    // Manejar el envío del formulario
    providerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(providerForm);
        const provider = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address')
        };
        addProvider(provider);
        providerForm.reset();
    });

    // Exponer funciones para detalles y eliminación
    window.showProviderDetails = showProviderDetails;
    window.deleteProvider = deleteProvider;
});
