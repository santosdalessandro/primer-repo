document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  // Datos simulados (puedes obtener estos datos de tu fuente de datos)
  const data = [
    "Resultado 1",
    "Resultado 2",
    "Resultado 3",
    // ... más resultados
  ];

  // Escuchar cambios en el input de búsqueda
  searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();

    // Limpiar resultados anteriores
    searchResults.innerHTML = '';

    // Filtrar resultados que coincidan con el término de búsqueda
    const filteredResults = data.filter(result => result.toLowerCase().includes(searchTerm));

    // Mostrar los resultados filtrados
    filteredResults.forEach(result => {
      const listItem = document.createElement('li');
      listItem.textContent = result;
      listItem.addEventListener('click', () => onResultClick(result));
      searchResults.appendChild(listItem);
    });
  });

  // Función para manejar el clic en un resultado
  function onResultClick(result) {
    // Aquí deberías manejar la acción cuando el usuario hace clic en un resultado
    console.log("Usuario hizo clic en: " + result);
  }
});


/* Esto lo saque de gpt, creo q no funciona. */