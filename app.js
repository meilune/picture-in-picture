const video = document.getElementById("video");
const appButton = document.getElementById("button");

console.log("Hello");

  // Hide button if Picture-in-Picture is not supported or disabled.
//  appButton.hidden = !document.pictureInPictureEnabled || video.disablePictureInPicture;

  appButton.addEventListener("click", async () => {
    // If there is no element in Picture-in-Picture yet, let’s request
    // Picture-in-Picture for the video, otherwise leave it.
    try {
      if (document.pictureInPictureElement) {

        await document.exitPictureInPicture();
      } else {
        video.hidden = false;
        appButton.hidden = true;
        await video.requestPictureInPicture();
      }
    } catch (err) {
      // Video failed to enter/leave Picture-in-Picture mode.
      console.log(err);
    }
  });