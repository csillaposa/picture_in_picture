const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//prompt to select media stream, pass to video element, then play
//https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture
async function selectMediaStream() {
    try {
        //to capture live stream contents
        //user can select what to play (getDisplayMedia())
        //it plays in the videoElement
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        //catch error here
    }
}

//https://css-tricks.com/an-introduction-to-the-picture-in-picture-web-api/
button.addEventListener('click', async () => {
    //disable button
    button.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    //reset button
    button.disabled = false;
});

//on load
selectMediaStream();