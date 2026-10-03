// ========================================
// FILTRO DE PROYECTOS
// ========================================

const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Quitar active de todos
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Activar botón seleccionado
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        projects.forEach(project => {

            const category = project.getAttribute("data-category");

            if (filter === "todos" || category === filter) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });

    });

});


// ========================================
// BOTÓN VOLVER ARRIBA
// ========================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


// Al hacer clic, subir al inicio

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ========================================
// ANIMACIÓN DE ENTRADA
// ========================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);

});