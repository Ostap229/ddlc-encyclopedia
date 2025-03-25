document.addEventListener("DOMContentLoaded", function () {
    // Плавное появление страницы после загрузки
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 0.5s";
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 50);

    // Плавный переход между страницами
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            const targetPage = this.getAttribute("href");

            // Проверяем, не является ли ссылка якорем или внешней
            if (!targetPage.startsWith("#") && !this.target) {
                event.preventDefault();

                // Плавное исчезновение перед переходом
                document.body.style.opacity = 0;
                setTimeout(() => {
                    window.location.href = targetPage;
                }, 500);
            }
        });
    });

    // Эффект появления при скролле
    const elements = document.querySelectorAll(".scroll-reveal");

    function checkVisibility() {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Запуск при загрузке страницы
});
