const pintarhtml = (seccionhtml, propiedades = [], cantItems = propiedades.length) => {
    let html = ''

for (let i=0; i<cantItems; i++) {
    html += `
    <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${propiedades[i].src}" class="card-img-top" alt="Imagen del departamento"/>
            <div class="card-body">
            <h5 class="card-title">${propiedades[i].title}</h5>
            <p class="card-text">${propiedades[i].description}</p>
            <p>
                <i class="fas fa-map-marker-alt"></i> ${propiedades[i].address}
            </p>
            <p>
                <i class="fas fa-bed"></i> ${propiedades[i].bedrooms} Habitaciones | <i class="fas fa-bath"></i> ${propiedades[i].bathrooms} Baños
            </p>
            <p>
                <i class="fas fa-dollar-sign"></i> ${propiedades[i].price}
            </p>
            <p class="text-danger">
                <i class="fas fa-smoking-ban"></i> ${propiedades[i].smoking ? "👍 Se permite fumar" : "❌ No se permite fumar"}
            </p>
            <p class="text-success">
                <i class="fas fa-paw"></i> ${propiedades[i].pets ? "🐶 Mascotas permitidas" : "❌ No se permiten mascotas"}
            </p>
            </div>
        </div>
    </div>
        `
    }

    seccionhtml.innerHTML = html
}

export default pintarhtml