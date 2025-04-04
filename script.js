const pets = [
    {
        name: "Max",
        breed: "Labrador",
        age: "2 years",
        description: "Friendly and energetic Labrador who loves to play fetch and swim.",
        image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=500",
        url: "#"
    },
    {
        name: "Luna",
        breed: "Persian Cat",
        age: "1 year",
        description: "Sweet and gentle Persian cat who enjoys cuddling and peaceful environments.",
        image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=500",
        url: "#"
    },
    {
        name: "Rocky",
        breed: "German Shepherd",
        age: "3 years",
        description: "Intelligent and loyal German Shepherd, great with families and training.",
        image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=500",
        url: "#"
    }
];

function createPetCard(pet, index) {
    return `
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300" 
             data-aos="fade-up" 
             data-aos-delay="${index * 100}">
            <figure class="px-4 pt-4 overflow-hidden">
                <img src="${pet.image}" alt="${pet.name}" 
                    class="rounded-xl h-48 w-full object-cover transform hover:scale-110 transition-transform duration-500"
                    onerror="this.src='https://place-hold.it/300x300/666/fff/000.jpeg&text=No+Image'">
            </figure>
            <div class="card-body">
                <h3 class="card-title">${pet.name}</h3>
                <p class="text-gray-600">${pet.breed}, ${pet.age}</p>
                <p class="text-sm">${pet.description}</p>
                <div class="card-actions justify-end mt-4">
                    <button class="btn btn-primary animate__animated hover:animate__pulse">Adopt Now</button>
                </div>
            </div>
        </div>
    `;
}

function displayPets() {
    const petsGrid = document.getElementById('petsGrid');
    if (petsGrid) {
        petsGrid.innerHTML = pets.map((pet, index) => createPetCard(pet, index)).join('');
        console.log('Pets displayed:', pets.length);
    } else {
        console.error('Pets grid element not found');
    }
}

// Move event listeners to top level
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true
    });
    
    // Display pets immediately when DOM loads
    displayPets();
    
    // Setup form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;

            // Validate name
            const name = document.getElementById('name');
            const nameError = document.getElementById('nameError');
            if (!name.value.trim()) {
                nameError.classList.remove('hidden');
                isValid = false;
            } else {
                nameError.classList.add('hidden');
            }

            // Validate email
            const email = document.getElementById('email');
            const emailError = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim() || !emailRegex.test(email.value)) {
                emailError.classList.remove('hidden');
                isValid = false;
            } else {
                emailError.classList.add('hidden');
            }

            // Validate message
            const message = document.getElementById('message');
            const messageError = document.getElementById('messageError');
            if (!message.value.trim()) {
                messageError.classList.remove('hidden');
                isValid = false;
            } else {
                messageError.classList.add('hidden');
            }

            if (isValid) {
                // Handle form submission
                console.log('Form submitted successfully');
                this.reset();
            }
        });
    }
    
    // Setup button animations
    document.addEventListener('click', (e) => {
        if (e.target.matches('.btn-primary')) {
            e.target.classList.add('animate__animated', 'animate__bounce');
            setTimeout(() => {
                e.target.classList.remove('animate__animated', 'animate__bounce');
            }, 1000);
        }
    });
});
