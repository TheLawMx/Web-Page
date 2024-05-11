// Aquí puedes agregar los enlaces de la canción
const links = [
    { plataforma: "Spotify", url: "https://open.spotify.com/track/22seP38foydqUMp5Fvkcjm?si=RdNBlKofQWS96GlmLfoyIQ&context=spotify%3Atrack%3A22seP38foydqUMp5Fvkcjm" },
    { plataforma: "Apple Music", url: "https://music.apple.com/mx/album/inolvidable/328078359?i=328078366&l=en-GB&ls" },
    { plataforma: "YouTube", url: "https://youtu.be/zjpSX6fCPDc?si=rbzEO1uJLZ0qGjEb" }
];

// Función para mostrar los enlaces en la página
function mostrarEnlaces() {
    const linksContainer = document.getElementById('links');
    links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.textContent = link.plataforma;
        linkElement.target = "_blank"; // Abre enlace en una nueva pestaña
        linksContainer.appendChild(linkElement);
        linksContainer.appendChild(document.createElement('br')); // Salto de línea entre enlaces
    });
}

// Llama a la función para mostrar los enlaces cuando la página se cargue
document.addEventListener('DOMContentLoaded', mostrarEnlaces);

