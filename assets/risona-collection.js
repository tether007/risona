document.addEventListener("DOMContentLoaded", () => {

    document
        .querySelectorAll(".risona-toolbar__button")
        .forEach(button => {

            button.addEventListener("click", () => {

                const item = button.parentElement;

                document
                    .querySelectorAll(".risona-toolbar__item")
                    .forEach(el => {

                        if (el !== item) {
                            el.classList.remove("active");
                        }

                    });

                item.classList.toggle("active");

            });

        });

    document.addEventListener("click", e => {

        if (!e.target.closest(".risona-toolbar")) {

            document
                .querySelectorAll(".risona-toolbar__item")
                .forEach(el => el.classList.remove("active"));

        }

    });

});

document.querySelectorAll(".risona-filter-search").forEach(input => {

    input.addEventListener("input", () => {

        const value = input.value.toLowerCase();

        const filter = input.closest(".risona-filter");

        filter.querySelectorAll("[data-filter-option]").forEach(option => {

            option.style.display =
                option.innerText.toLowerCase().includes(value)
                    ? "flex" : "none";

        });

    });

});

document.querySelectorAll(".risona-show-more").forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.closest(".risona-filter");

        filter.querySelectorAll(".risona-hidden").forEach(item => {

            item.classList.remove("risona-hidden");

        });

        button.remove();

    });

});

document.addEventListener("change", e => {

    if (!e.target.closest("#FacetFiltersForm")) return;

    document
        .getElementById("FacetFiltersForm")
        .dispatchEvent(
            new Event("input", {
                bubbles: true
            })
        );

});