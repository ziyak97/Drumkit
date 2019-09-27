// Other than the keydown event I can use touch and click events too I,ll
// just have to slightly change the function i used for keydown

const keys = document.querySelectorAll('.key'); // selecting all the keys from key class

// This is just what to do when the keydown event is called
window.addEventListener('keydown', e => {
    const keyCode = e.keyCode; // saving the keyCode of every key pressed
    const key = document.querySelector(`div.key-${keyCode}`); // selecting class for keys using template literals
    const audio = document.querySelector(`audio.key-${keyCode}`); // selecting class for audio using template literals
    if(!audio) return; // exiting function incase key pressed is not present
    audio.currentTime = 0; // setting play time to zero so I press the key multiple time and make the audio overlap
    audio.play(); // playing audio
    key.classList.add('playing'); // adding playing class for transition effect
});

// Removing Transition using transitionend event
// I could have just used setTimeout but i would have to change that everytime I
// made any changes to the transition value in the CSS
// This will adapt to any transition value
keys.forEach(key => key.addEventListener('transitionend', e => {
    // in my devtools I got plenty of events cause of all the different propeties I transformed
    // box-shadow, transform, etc
    // all took 0.07 seconds cause of my CSS transform propery(if they ended at different times I'd select the
    // property with the highest transition value, selected transform propertyName but could select any of the others)
    if(e.propertyName !== 'transform') return; // if the event doesn't have a propery name of transform I'll exit
    key.classList.remove('playing'); // removing the playing class
}));