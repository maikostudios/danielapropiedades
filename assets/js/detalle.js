(() => {
  const properties = Array.isArray(window.PROPERTIES_DATA) ? window.PROPERTIES_DATA : [];
  if (!properties.length) {
    console.error("No se encontraron datos de propiedades.");
    return;
  }

  const refs = {
    badge: document.querySelector("#detailBadge"),
    title: document.querySelector("#propertyDetailTitle"),
    location: document.querySelector("#detailLocation"),
    carouselIndicators: document.querySelector("#detailCarouselIndicators"),
    carouselInner: document.querySelector("#detailCarouselInner"),
    description: document.querySelector("#detailDescription"),
    video: document.querySelector("#detailVideo"),
    map: document.querySelector("#detailMap"),
    priceUf: document.querySelector("#detailPriceUf"),
    priceClp: document.querySelector("#detailPriceClp"),
    type: document.querySelector("#detailType"),
    areas: document.querySelector("#detailAreas"),
    beds: document.querySelector("#detailBeds"),
    baths: document.querySelector("#detailBaths"),
    payments: document.querySelector("#detailPayments"),
    whatsapp: document.querySelector("#detailWhatsapp"),
    agenda: document.querySelector("#detailAgenda"),
    relatedGrid: document.querySelector("#relatedPropertiesGrid")
  };

  const formatCurrencyCLP = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0
  });

  const getRequestedId = () => {
    const params = new URLSearchParams(window.location.search);
    return Number(params.get("id"));
  };

  const getPropertyById = (id) => properties.find((property) => property.id === id);

  const getCurrentProperty = () => {
    const requestedId = getRequestedId();
    if (Number.isFinite(requestedId)) {
      return getPropertyById(requestedId) || properties[0];
    }

    return properties[0];
  };

  const fillCarousel = (property) => {
    refs.carouselIndicators.innerHTML = property.images
      .map(
        (_, index) =>
          `<button type="button" data-bs-target="#detailCarousel" data-bs-slide-to="${index}" class="${
            index === 0 ? "active" : ""
          }" ${index === 0 ? 'aria-current="true"' : ""} aria-label="Imagen ${index + 1}"></button>`
      )
      .join("");

    refs.carouselInner.innerHTML = property.images
      .map(
        (image, index) => `
          <div class="carousel-item ${index === 0 ? "active" : ""}">
            <img src="${image}" class="d-block w-100" alt="${property.title} ${index + 1}" loading="lazy" />
          </div>
        `
      )
      .join("");

    const carouselElement = document.querySelector("#detailCarousel");
    const instance = bootstrap.Carousel.getOrCreateInstance(carouselElement, {
      interval: 4200,
      pause: "hover"
    });

    if (property.images.length <= 1) {
      instance.pause();
    }
  };

  const fillPropertyContent = (property) => {
    document.title = `${property.title} | Daniela Henriquez Propiedades`;

    refs.badge.textContent = property.status;
    refs.title.textContent = property.title;
    refs.location.textContent = `${property.sector}, ${property.commune} - ${property.region}`;
    refs.description.textContent = property.description;

    refs.priceUf.textContent = `UF ${property.priceUf.toLocaleString("es-CL")}`;
    refs.priceClp.textContent = `${formatCurrencyCLP.format(property.priceClp)} aprox.`;

    refs.type.textContent = property.type;

    const builtAreaText = property.buildArea > 0 ? `${property.buildArea.toLocaleString("es-CL")} m2 construidos` : "Sin construccion";
    refs.areas.textContent = `${builtAreaText} / ${property.landArea.toLocaleString("es-CL")} m2 terreno`;
    refs.beds.textContent = property.beds > 0 ? `${property.beds} dormitorios` : "No aplica";
    refs.baths.textContent = property.baths > 0 ? `${property.baths} banos` : "No aplica";

    refs.payments.innerHTML = property.paymentOptions
      .map((option) => `<li class="list-group-item">${option}</li>`)
      .join("");

    refs.video.src = property.videoUrl;
    refs.map.src = property.mapUrl;

    const whatsappMessage = encodeURIComponent(
      `Hola Daniela, me interesa ${property.title} por UF ${property.priceUf.toLocaleString("es-CL")}. Quiero mas detalle y agendar visita.`
    );

    refs.whatsapp.href = `https://wa.me/56912345678?text=${whatsappMessage}`;
    refs.agenda.href = property.agendaUrl;

    fillCarousel(property);
  };

  const renderRelatedProperties = (currentPropertyId) => {
    const relatedProperties = properties.filter((property) => property.id !== currentPropertyId).slice(0, 3);

    refs.relatedGrid.innerHTML = relatedProperties
      .map(
        (property) => `
          <article class="col-12 col-md-6 col-xl-4">
            <div class="property-card h-100 d-flex flex-column">
              <figure class="property-media mb-0">
                <img src="${property.images[0]}" alt="${property.title}" loading="lazy" />
                <span class="property-type-badge">${property.type}</span>
                <span class="property-tag">${property.tag}</span>
              </figure>

              <div class="property-content d-flex flex-column flex-grow-1">
                <h3>${property.title}</h3>
                <p class="property-location mb-2"><i class="bi bi-geo-alt me-1"></i>${property.commune}, ${property.region}</p>
                <p class="property-price">UF ${property.priceUf.toLocaleString("es-CL")}</p>
                <a class="btn btn-outline-dark mt-auto" href="detalle.html?id=${property.id}">Ver mas detalle</a>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  };

  const init = () => {
    const currentProperty = getCurrentProperty();
    fillPropertyContent(currentProperty);
    renderRelatedProperties(currentProperty.id);
  };

  init();
})();
