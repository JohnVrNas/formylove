document.addEventListener("DOMContentLoaded", function () {
    // Carrossel de imagens
    const totalImages = 6; // Quantidade de imagens
    const container = document.getElementById("carousel-container");
    let currentIndex = 0;

    // Criar dinamicamente as imagens
    for (let i = 1; i <= totalImages; i++) {
        let img = document.createElement("img");
        img.src = `../img/nois${i}.jpg`; // Nome das imagens gerado automaticamente
        img.alt = `Imagem ${i}`;
        container.appendChild(img);
    }

    const images = document.querySelectorAll(".carousel-container img");
    images[currentIndex].classList.add("active");

    function showNextImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }
    setInterval(showNextImage, 6000);

    // Contador de tempo
    const startDate = new Date("2024-11-30T00:00:00");
    const timeCounter = document.getElementById("time-counter");

    function updateCounter() {
        const now = new Date();
        const diff = now - startDate;

        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44)); // Média de dias por mês
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        if (years >= 1) {
            timeCounter.innerHTML = `${years} ano${years > 1 ? 's' : ''}, ${months} mes${months > 1 ? 'es' : ''}, ${days} dia${days > 1 ? 's' : ''}, ${hours} hora${hours > 1 ? 's' : ''}, ${minutes} minuto${minutes > 1 ? 's' : ''} e ${seconds} segundo${seconds > 1 ? 's' : ''}`;
        } else {
            timeCounter.innerHTML = `${months} mes${months > 1 ? 'es' : ''}, ${days} dia${days > 1 ? 's' : ''}, ${hours} hora${hours > 1 ? 's' : ''}, ${minutes} minuto${minutes > 1 ? 's' : ''} e ${seconds} segundo${seconds > 1 ? 's' : ''}`;
        }
    }

    setInterval(updateCounter, 1000);
    updateCounter();

    // Criar corações animados
    function createHeart() {
        const heart = document.createElement("div");
        heart.innerHTML = "💗";
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

    setInterval(createHeart, 500);
});
