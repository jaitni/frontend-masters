let button = document.querySelector('.load');
let imageContainer = document.querySelector('.image-container');
button.addEventListener('click', buttonClick);

function buttonClick() {
    const apiCall = fetch('https://dog.ceo/api/breeds/image/random');
    apiCall
        .then(function (response) {
            const apiResponse = response.json();
            return apiResponse;
        })
        .then(function (responseReceived) {
            receivedMessage = responseReceived.message;
            showImage(receivedMessage);
        })
}

function showImage(receivedMessage) {
    const image = document.createElement("img");
    image.src = receivedMessage;
    image.alt = "Dog";
    imageContainer.append(image);
}
