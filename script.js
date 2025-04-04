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

function createPetCard(pet) {
    return `
        <div class="pet-card">
            <img src="${pet.image}" alt="${pet.name}" onerror="this.src='https://place-hold.it/300x300/666/fff/000.jpeg&text=No+Image'">
            <h3>${pet.name}</h3>
            <p>${pet.breed}, ${pet.age}</p>
            <p>${pet.description}</p>
            <button class="donate-btn">Donate Now</button>
        </div>
    `;
}

function displayPets() {
    const petsGrid = document.getElementById('petsGrid');
    const loading = document.getElementById('loading');
    
    loading.style.display = 'none';
    petsGrid.innerHTML = pets.map(pet => createPetCard(pet)).join('');
}

document.addEventListener('DOMContentLoaded', displayPets);
