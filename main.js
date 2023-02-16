let art;
let showInfo;

// Function to get art info when image figure is clicked
/**
 * @param img_index
 * @param item_index
 * 
 * Function gets info from AIC using the image index of our gallery. Then
 * it finds the correct item_index inside of the JSON response data from AIC
 * which will produce a preview URL that will be used to display our selected art's info.
 * 
 */

async function clickedEvent(img_index, item_index) {
    let piece = document.getElementsByTagName('img')[img_index].attributes[2].value

    let headers = new Headers([
        ['Content-Type', 'application/json']
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${piece}`, {
        method: 'GET',
        headers: headers
    });

    let result = await fetch(request);

    let response = await result.json();
    let test = document.getElementById("test")
    test.innerHTML = ` ID: ${response.data.id}<br> Title: ${response.data.title}<br> Artist: ${response.data.artist_display}<br> Medium: ${response.data.medium_display}`
    console.log(response)
    // let art = response.pieces.items[item_index].preview_url
}

/**
 * @param id
 * @param event
 * 
 * id = image id for gallery image
 * event = Mouse event given by the action from our user
 * 
 * Our function will produce arts from the clickeEvent based on the index of the image.
 */

function getArt(id, event) {
    switch (id) {
        case 'fig1': { // "Anacreon with the Infants Bacchus and Cupid"
            event.stopPropagation();
            clickedEvent(0, 0)
            break;
        }
        case 'fig2': { // "Fantasy on the Death of Seneca"
            event.stopPropagation();
            clickedEvent(1, 0)
            break;
        }
        case 'fig3': { // "The Dragon Devouring the Companions of Cadmus"
            event.stopPropagation();
            clickedEvent(2, 0)
            break;
        }
        case 'fig4': { // "Portrait Head of Emperor Hadrian"
            event.stopPropagation();
            clickedEvent(3, 0)
            break;
        }
        case 'fig5': { // "Hercules and the Lernaean Hydra"
            event.stopPropagation();
            clickedEvent(4, 0)
            break;
        }
        case 'fig6': { // "Aureus (Coin) Portraying Emperor Marcus Aurelius"
            event.stopPropagation();
            clickedEvent(5, 0)
            break;
        }
        case 'fig7': { // "Seneca"
            event.stopPropagation();
            clickedEvent(6, 0)
            break;
        }
    }
}
