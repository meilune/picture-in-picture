const video = document.getElementById("video");
const appButton = document.getElementById("button");

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = mediaStream;
        video.onloadedmetadata = () => {
            video.play();
        }
    } catch (error) {
        console.log(`This is the Select Media error: ${error}`);
    }
}

appButton.addEventListener("click", async () => {
    //Disable the button;
    appButton.disabled = true;
    //Start Picture in Picture
    await video.requestPictureInPicture();
    //Reset the button
    appButton.disabled = false;
});

selectMediaStream();
