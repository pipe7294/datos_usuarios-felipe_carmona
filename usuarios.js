(async () => {
    const url = 'https://randomuser.me/api/?results=10'; 

    try {
        
        const response = await fetch(url);
        const data = await response.json();
        const usuarios = data.results;

        const container = document.getElementById('usuarios');


        usuarios.forEach(usuario => {
            const userHTML = `
                <p><strong>Nombre:</strong> ${usuario.name.first} ${usuario.name.last}</p>
                <p><strong>Correo:</strong> ${usuario.email}</p>
                <p><strong>Teléfono:</strong> ${usuario.phone}</p>
                <img src="${usuario.picture.medium}" alt="Foto de ${usuario.name.first}">
                <hr>
            `;
            container.innerHTML += userHTML;
        });
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
})();