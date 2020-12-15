
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * This async function use fetch to make request DOG API
 * bring current, hourly, week information and exclude minutely and alerts
 * @param All parameters are requerided
 */
const dogAPIRequest = async () => {
    //"https://api.thedogapi.com/v1/breeds"
    const basePathAPI = "https://api.thedogapi.com";
    let path = `${basePathAPI}/v1/breeds`;
    console.log(path);
    return await fetch(path,{});
}

const callDogAPI = async() => {
    try {
        let dogAPIResponse = dogAPIRequest();
        console.log(dogAPIResponse);
        dogAPIResponse
            .then((response) => {
                console.log(response);
                return (response.json());
            })
            .then((data) => {
                console.log(data);
                let index =  getRandomInt(0, data.length);
                displayModal(data[index]);
            })
            .catch(error => console.error(error));
    } catch(error) {
        console.error(error);
    }
};



const displayModal = (dog) => {
    // Get the modal
    let modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal
    let modalImg = document.getElementById("imgModal");
    console.log(dog);
    modal.style.display = "block";
    modalImg.src = dog.image.url;
}


Array.from(document.querySelectorAll(".greensquare")).forEach(square =>
    square.addEventListener("click", callDogAPI) );


document.querySelector(".modal-close").addEventListener("click", () => {
    let modal = document.getElementById("myModal");
    let modalImg = document.getElementById("imgModal");
    modalImg.src = "";
    modal.style.display = "none";
});