const randomButton = document.querySelector("#random-button");
const resetButton = document.querySelector("#reset-button");

randomButton.addEventListener("click", function () {
    alert("heeyyy vamos a crear un outfit aleatorio");
});

resetButton.addEventListener("click", function () {
    alert("Tu outfit se ha reiniciado jijiji");
});

const categoryButtons = document.querySelectorAll(".category-button");
const wardrobeItems = document.querySelector("#wardrobe-items");
const topsLayer = document.querySelector("#tops-layer");
const bottomsLayer = document.querySelector("#bottoms-layer");

function showItems(category) {
    const items = outfitData[category] || [];

    wardrobeItems.innerHTML = "";

    if (items.length === 0) {
        wardrobeItems.innerHTML =
            "<p>Todavía no hay prendas en esta categoría</p>";
        return;
    }

    items.forEach(function (item) {
        const itemButton = document.createElement("button");

        itemButton.type = "button";
        itemButton.className = "wardrobe-item";
        itemButton.textContent = `${item.emoji} ${item.name}`;

        if (category === "tops") {
            itemButton.addEventListener("click", function () {
                if (!item.image) {
                    alert("Esta prenda todavía no tiene una imagen");
                    return;
                }

                topsLayer.src = item.image;
                topsLayer.alt = item.name;
                topsLayer.hidden = false;
            });
        }
        if (category === "bottoms") {
            itemButton.addEventListener("click", function () {
                if (!item.image) {
                    alert("Esta prenda todavía no tiene una imagen");
                    return;
                }

                bottomsLayer.src = item.image;
                bottomsLayer.alt = item.name;
                bottomsLayer.hidden = false;
            });
        }

        wardrobeItems.appendChild(itemButton);
    });
}

categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        categoryButtons.forEach(function (categoryButton) {
            categoryButton.classList.remove("active");
        });

        button.classList.add("active");

        const selectedCategory = button.dataset.category;
        showItems(selectedCategory);
    });
});

showItems("tops");

