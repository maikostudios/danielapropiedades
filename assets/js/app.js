(() => {
  const properties = [
    {
      id: 1,
      title: "Casa Mirador del Lago",
      type: "Casa",
      tag: "Vista al lago",
      status: "Venta exclusiva",
      priceUf: 14500,
      priceClp: 566000000,
      region: "La Araucania",
      province: "Cautin",
      commune: "Pucon",
      sector: "Camino al Volcan",
      buildArea: 265,
      landArea: 5200,
      beds: 4,
      baths: 3,
      parking: 2,
      images: [
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1200&q=80"
      ],
      description:
        "Residencia de arquitectura contemporanea con terminaciones premium, quincho equipado y acceso rapido al centro de Pucon. Ideal para segunda vivienda o renta vacacional de alto nivel.",
      videoUrl: "https://www.youtube.com/embed/Scxs7L0vhZ4",
      mapUrl: "https://www.google.com/maps?q=Pucon%2C%20Chile&output=embed",
      paymentOptions: [
        "Credito hipotecario con bancos en convenio.",
        "Pago contado con descuento por cierre inmediato.",
        "Combinacion contado + credito con promesa flexible."
      ],
      agendaUrl: "https://calendar.google.com"
    },
    {
      id: 2,
      title: "Parcela Bosque Nativo",
      type: "Parcela",
      tag: "Inversion rural",
      status: "Venta",
      priceUf: 3900,
      priceClp: 152000000,
      region: "Los Rios",
      province: "Valdivia",
      commune: "Valdivia",
      sector: "Ruta T-350",
      buildArea: 95,
      landArea: 12000,
      beds: 2,
      baths: 2,
      parking: 3,
      images: [
        "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
      ],
      description:
        "Parcela de agrado rodeada de bosque nativo con cabana habilitada, factibilidad electrica y agua de pozo. Excelente conectividad para proyecto familiar o descanso.",
      videoUrl: "https://www.youtube.com/embed/6xN4Yx2B0hY",
      mapUrl: "https://www.google.com/maps?q=Valdivia%2C%20Chile&output=embed",
      paymentOptions: [
        "Pago contado.",
        "Credito directo hasta 12 cuotas sin interes.",
        "Leasing para inversionistas (sujeto a evaluacion)."
      ],
      agendaUrl: "https://calendar.google.com"
    },
    {
      id: 3,
      title: "Departamento Vista Volcan",
      type: "Departamento",
      tag: "Rentabilidad",
      status: "Venta",
      priceUf: 6200,
      priceClp: 242000000,
      region: "La Araucania",
      province: "Cautin",
      commune: "Temuco",
      sector: "Av. Alemania",
      buildArea: 88,
      landArea: 88,
      beds: 3,
      baths: 2,
      parking: 1,
      images: [
        "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
      ],
      description:
        "Departamento en piso alto con orientacion nororiente, cercano a universidades y servicios. Gran opcion para familia joven o inversion en arriendo tradicional.",
      videoUrl: "https://www.youtube.com/embed/4hM2LUn8P9A",
      mapUrl: "https://www.google.com/maps?q=Temuco%2C%20Chile&output=embed",
      paymentOptions: [
        "Credito hipotecario tradicional.",
        "Pie en cuotas durante promesa.",
        "Pago al contado con escritura preferente."
      ],
      agendaUrl: "https://calendar.google.com"
    },
    {
      id: 4,
      title: "Cabana Costera Premium",
      type: "Cabana",
      tag: "Turismo premium",
      status: "Venta",
      priceUf: 5800,
      priceClp: 226000000,
      region: "Los Lagos",
      province: "Llanquihue",
      commune: "Puerto Varas",
      sector: "Ensenada",
      buildArea: 110,
      landArea: 1400,
      beds: 3,
      baths: 2,
      parking: 2,
      images: [
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80"
      ],
      description:
        "Cabana de diseno nordico con tinaja y terraza panoramica. Zona con alta demanda de arriendo turistico durante todo el ano y acceso a rutas escenicas.",
      videoUrl: "https://www.youtube.com/embed/sd7JjE2RP6A",
      mapUrl: "https://www.google.com/maps?q=Puerto%20Varas%2C%20Chile&output=embed",
      paymentOptions: [
        "Pago contado.",
        "Credito hipotecario turistico.",
        "Plan de pago mixto para inversionistas."
      ],
      agendaUrl: "https://calendar.google.com"
    },
    {
      id: 5,
      title: "Terreno Rural El Arrayan",
      type: "Terreno rural",
      tag: "Alta plusvalia",
      status: "Venta",
      priceUf: 2500,
      priceClp: 98000000,
      region: "La Araucania",
      province: "Malleco",
      commune: "Angol",
      sector: "Sector Trizano",
      buildArea: 0,
      landArea: 18000,
      beds: 0,
      baths: 0,
      parking: 0,
      images: [
        "https://images.unsplash.com/photo-1473447198193-8c9ecb3f0f64?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?auto=format&fit=crop&w=1200&q=80"
      ],
      description:
        "Terreno rural con topografia suave y acceso por camino principal. Factibilidad de subdivision predial para desarrollo de parcelas habitacionales.",
      videoUrl: "https://www.youtube.com/embed/8J4X6nQ4LSM",
      mapUrl: "https://www.google.com/maps?q=Angol%2C%20Chile&output=embed",
      paymentOptions: [
        "Contado.",
        "Permuta evaluable por departamento en Temuco.",
        "Credito directo segun monto de pie."
      ],
      agendaUrl: "https://calendar.google.com"
    },
    {
      id: 6,
      title: "Casa Familiar Jardin Austral",
      type: "Casa",
      tag: "Lista para habitar",
      status: "Venta",
      priceUf: 7900,
      priceClp: 308000000,
      region: "Los Lagos",
      province: "Osorno",
      commune: "Osorno",
      sector: "Barrio Oriente",
      buildArea: 190,
      landArea: 700,
      beds: 4,
      baths: 3,
      parking: 2,
      images: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?auto=format&fit=crop&w=1200&q=80"
      ],
      description:
        "Casa moderna en barrio consolidado, cercana a colegios y comercio. Incluye cocina integrada, patio interior y sala multiuso para teletrabajo.",
      videoUrl: "https://www.youtube.com/embed/W4fV9Q5NQ7k",
      mapUrl: "https://www.google.com/maps?q=Osorno%2C%20Chile&output=embed",
      paymentOptions: [
        "Credito hipotecario.",
        "Contado con ahorro en gastos operacionales.",
        "Pie en dos etapas durante proceso de escritura."
      ],
      agendaUrl: "https://calendar.google.com"
    }
  ];

  const refs = {
    grid: document.querySelector("#propertiesGrid"),
    noResults: document.querySelector("#noResults"),
    resultsMeta: document.querySelector("#resultsMeta"),
    filterForm: document.querySelector("#propertyFilterForm"),
    searchInput: document.querySelector("#searchInput"),
    regionSelect: document.querySelector("#regionSelect"),
    provinceSelect: document.querySelector("#provinceSelect"),
    communeSelect: document.querySelector("#communeSelect"),
    typeSelect: document.querySelector("#typeSelect"),
    clearFiltersBtn: document.querySelector("#clearFiltersBtn"),
    newsletterForm: document.querySelector("#newsletterForm"),
    newsletterEmail: document.querySelector("#newsletterEmail"),
    detailModalEl: document.querySelector("#propertyDetailModal"),
    detailBadge: document.querySelector("#detailBadge"),
    detailTitle: document.querySelector("#propertyDetailTitle"),
    detailLocation: document.querySelector("#detailLocation"),
    detailCarouselInner: document.querySelector("#detailCarouselInner"),
    detailDescription: document.querySelector("#detailDescription"),
    detailVideo: document.querySelector("#detailVideo"),
    detailMap: document.querySelector("#detailMap"),
    detailPriceUf: document.querySelector("#detailPriceUf"),
    detailPriceClp: document.querySelector("#detailPriceClp"),
    detailType: document.querySelector("#detailType"),
    detailAreas: document.querySelector("#detailAreas"),
    detailBeds: document.querySelector("#detailBeds"),
    detailBaths: document.querySelector("#detailBaths"),
    detailPayments: document.querySelector("#detailPayments"),
    detailWhatsapp: document.querySelector("#detailWhatsapp"),
    detailAgenda: document.querySelector("#detailAgenda"),
    toastEl: document.querySelector("#feedbackToast"),
    toastBody: document.querySelector("#feedbackToastBody")
  };

  const detailModal = new bootstrap.Modal(refs.detailModalEl);
  const feedbackToast = new bootstrap.Toast(refs.toastEl, { delay: 2800 });

  const state = {
    filtered: [...properties]
  };

  const formatCurrencyCLP = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0
  });

  const normalizeText = (value = "") =>
    value
      .toString()
      .normalize("NFD")
      .replace(/[^\w\s.-]/g, "")
      .toLowerCase()
      .trim();

  const getUniqueValues = (items, key) =>
    [...new Set(items.map((item) => item[key]))]
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b, "es"));

  const setSelectOptions = (select, values, defaultLabel = "Todas") => {
    const current = select.value;
    const optionsMarkup = values.map((value) => `<option value="${value}">${value}</option>`).join("");
    select.innerHTML = `<option value="">${defaultLabel}</option>${optionsMarkup}`;

    if (values.includes(current)) {
      select.value = current;
    }
  };

  const showToast = (message) => {
    refs.toastBody.textContent = message;
    feedbackToast.show();
  };

  const updateMeta = () => {
    refs.resultsMeta.textContent = `${state.filtered.length} propiedad(es) de ${properties.length} disponibles`;
  };

  const specsLine = (property) => {
    const builtText = property.buildArea > 0 ? `${property.buildArea} m2 const.` : "Sin construccion";
    const bedsText = property.beds > 0 ? `${property.beds} dorm.` : "Uso libre";

    return `
      <div class="property-specs">
        <span><i class="bi bi-aspect-ratio"></i>${property.landArea.toLocaleString("es-CL")} m2 terreno</span>
        <span><i class="bi bi-house"></i>${builtText}</span>
        <span><i class="bi bi-moon-stars"></i>${bedsText}</span>
      </div>
    `;
  };

  const propertyCardTemplate = (property) => `
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
          ${specsLine(property)}
          <button class="btn btn-outline-dark mt-auto" data-property-id="${property.id}">Ver mas detalle</button>
        </div>
      </div>
    </article>
  `;

  const renderProperties = () => {
    if (state.filtered.length === 0) {
      refs.grid.innerHTML = "";
      refs.noResults.classList.remove("d-none");
      updateMeta();
      return;
    }

    refs.grid.innerHTML = state.filtered.map(propertyCardTemplate).join("");
    refs.noResults.classList.add("d-none");
    updateMeta();
  };

  const updateDependentFilters = () => {
    const selectedRegion = refs.regionSelect.value;

    const provinceItems = properties.filter((property) => {
      if (!selectedRegion) {
        return true;
      }
      return property.region === selectedRegion;
    });

    const provinces = getUniqueValues(provinceItems, "province");
    setSelectOptions(refs.provinceSelect, provinces, "Todas");

    const currentProvince = refs.provinceSelect.value;

    const communeItems = properties.filter((property) => {
      const regionMatch = !selectedRegion || property.region === selectedRegion;
      const provinceMatch = !currentProvince || property.province === currentProvince;
      return regionMatch && provinceMatch;
    });

    const communes = getUniqueValues(communeItems, "commune");
    setSelectOptions(refs.communeSelect, communes, "Todas");
  };

  const applyFilters = () => {
    const searchTerm = normalizeText(refs.searchInput.value);
    const selectedRegion = refs.regionSelect.value;
    const selectedProvince = refs.provinceSelect.value;
    const selectedCommune = refs.communeSelect.value;
    const selectedType = refs.typeSelect.value;

    state.filtered = properties.filter((property) => {
      const searchableText = normalizeText(
        `${property.title} ${property.sector} ${property.region} ${property.province} ${property.commune} ${property.type}`
      );

      const searchMatch = !searchTerm || searchableText.includes(searchTerm);
      const regionMatch = !selectedRegion || property.region === selectedRegion;
      const provinceMatch = !selectedProvince || property.province === selectedProvince;
      const communeMatch = !selectedCommune || property.commune === selectedCommune;
      const typeMatch = !selectedType || property.type === selectedType;

      return searchMatch && regionMatch && provinceMatch && communeMatch && typeMatch;
    });

    renderProperties();
  };

  const getPropertyById = (propertyId) => properties.find((property) => property.id === Number(propertyId));

  const fillDetailCarousel = (images, title) => {
    refs.detailCarouselInner.innerHTML = images
      .map(
        (image, index) => `
        <div class="carousel-item ${index === 0 ? "active" : ""}">
          <img src="${image}" class="d-block w-100" alt="${title} ${index + 1}" loading="lazy" />
        </div>
      `
      )
      .join("");

    const carouselElement = document.querySelector("#detailCarousel");
    const existingCarousel = bootstrap.Carousel.getInstance(carouselElement);
    if (existingCarousel) {
      existingCarousel.dispose();
    }

    new bootstrap.Carousel(carouselElement, {
      interval: 3800,
      pause: "hover"
    });
  };

  const openDetailModal = (propertyId) => {
    const property = getPropertyById(propertyId);
    if (!property) {
      return;
    }

    refs.detailBadge.textContent = property.status;
    refs.detailTitle.textContent = property.title;
    refs.detailLocation.textContent = `${property.sector}, ${property.commune} - ${property.region}`;
    refs.detailDescription.textContent = property.description;

    refs.detailPriceUf.textContent = `UF ${property.priceUf.toLocaleString("es-CL")}`;
    refs.detailPriceClp.textContent = `${formatCurrencyCLP.format(property.priceClp)} aprox.`;

    refs.detailType.textContent = property.type;
    const builtAreaText = property.buildArea > 0 ? `${property.buildArea.toLocaleString("es-CL")} m2 construidos` : "Sin construccion";
    refs.detailAreas.textContent = `${builtAreaText} / ${property.landArea.toLocaleString("es-CL")} m2 terreno`;
    refs.detailBeds.textContent = property.beds > 0 ? `${property.beds} dormitorios` : "No aplica";
    refs.detailBaths.textContent = property.baths > 0 ? `${property.baths} banos` : "No aplica";

    refs.detailPayments.innerHTML = property.paymentOptions
      .map((option) => `<li class="list-group-item">${option}</li>`)
      .join("");

    refs.detailVideo.src = property.videoUrl;
    refs.detailMap.src = property.mapUrl;

    const whatsappMessage = encodeURIComponent(
      `Hola Daniela, me interesa la propiedad ${property.title} por UF ${property.priceUf.toLocaleString("es-CL")}. Quiero agendar una visita.`
    );

    refs.detailWhatsapp.href = `https://wa.me/56912345678?text=${whatsappMessage}`;
    refs.detailAgenda.href = property.agendaUrl;

    fillDetailCarousel(property.images, property.title);
    detailModal.show();
  };

  const resetFilters = () => {
    refs.filterForm.reset();
    updateDependentFilters();
    state.filtered = [...properties];
    renderProperties();
  };

  const setupFilters = () => {
    setSelectOptions(refs.regionSelect, getUniqueValues(properties, "region"), "Todas");
    setSelectOptions(refs.typeSelect, getUniqueValues(properties, "type"), "Todos");
    updateDependentFilters();
  };

  const setupEvents = () => {
    refs.filterForm.addEventListener("submit", (event) => {
      event.preventDefault();
      applyFilters();
    });

    refs.searchInput.addEventListener("input", () => {
      applyFilters();
    });

    refs.regionSelect.addEventListener("change", () => {
      updateDependentFilters();
      applyFilters();
    });

    refs.provinceSelect.addEventListener("change", () => {
      updateDependentFilters();
      applyFilters();
    });

    refs.communeSelect.addEventListener("change", applyFilters);
    refs.typeSelect.addEventListener("change", applyFilters);

    refs.clearFiltersBtn.addEventListener("click", () => {
      resetFilters();
      showToast("Filtros limpiados");
    });

    refs.grid.addEventListener("click", (event) => {
      const detailBtn = event.target.closest("[data-property-id]");
      if (!detailBtn) {
        return;
      }
      openDetailModal(detailBtn.dataset.propertyId);
    });

    refs.newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const emailValue = refs.newsletterEmail.value.trim();
      if (!emailValue || !refs.newsletterForm.checkValidity()) {
        refs.newsletterForm.classList.add("was-validated");
        showToast("Ingresa un correo valido para suscribirte.");
        return;
      }

      refs.newsletterForm.reset();
      refs.newsletterForm.classList.remove("was-validated");
      showToast("Suscripcion registrada. Te contactaremos pronto.");
    });

    refs.detailModalEl.addEventListener("hidden.bs.modal", () => {
      refs.detailVideo.src = "";
      refs.detailMap.src = "";
    });
  };

  const init = () => {
    setupFilters();
    setupEvents();
    renderProperties();
  };

  init();
})();
