(() => {
  const properties = Array.isArray(window.PROPERTIES_DATA) ? window.PROPERTIES_DATA : [];
  if (!properties.length) {
    console.error("No se encontraron datos de propiedades.");
    return;
  }

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
    toastEl: document.querySelector("#feedbackToast"),
    toastBody: document.querySelector("#feedbackToastBody")
  };

  const feedbackToast = refs.toastEl ? new bootstrap.Toast(refs.toastEl, { delay: 2800 }) : null;

  const state = {
    filtered: [...properties]
  };

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
    if (!feedbackToast || !refs.toastBody) {
      return;
    }

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
          <a class="btn btn-outline-dark mt-auto" href="detalle.html?id=${property.id}">Ver mas detalle</a>
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

    refs.searchInput.addEventListener("input", applyFilters);

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

    if (refs.newsletterForm) {
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
    }
  };

  const init = () => {
    setupFilters();
    setupEvents();
    renderProperties();
  };

  init();
})();
