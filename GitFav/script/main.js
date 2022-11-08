import { elements } from "./elements.js";
import { FavInterface } from "./Favorites.js";

const { 
    addButton, 
    usernameInput 
} = elements

const fav = new FavInterface('#app');

addButton.addEventListener('click', (async () => {
    let userData = {};
    try {
        userData = await fav.search(usernameInput.value)
    } catch(err) {
        alert(err.message)
        return;
    }

    fav.add(userData)
    fav.update();

}));
