function fetchData(url) {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error al cargar el archivo JSON:", error);
    });
}
//console.log(personas)

let div = document.getElementById("agregar");

function validarMayorUruguay(personas) {
  const personasFiltradas = personas.filter((persona) => {
    const mayor = persona.edad >= 18;
    const uruguayo = persona.pais === "Uruguay";
    return mayor && uruguayo;
  });
  personasFiltradas.map((i) => {
    div.innerHTML += `<p>${i.nombre} ${i.apellido}</p>`;
  });

  return personasFiltradas;
}

//console.log(validarMayorUruguay(personasJson))

document.getElementById("regBtn").addEventListener("click", async function () {
  //completar
  try {
    const personasJson = await fetchData("json/personas.json"); // Busca personas .Espera a que se resuelva la promesa
    console.log(" PERSONAS:");
    console.log(personasJson);

    const personasFiltradas = validarMayorUruguay(personasJson);
    console.log(" FILTRADAS: ");
    console.log(personasFiltradas);

    const categoriasTrabajosJson = await fetchData("../json/cats.json"); // Busca categorias .Espera a que se resuelva la promesa
    console.log(" Trabajos:");
    console.log(categoriasTrabajosJson);
  } catch (error) {
    console.error("Error:", error);
  }
});
