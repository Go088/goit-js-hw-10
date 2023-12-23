import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const fulfillRadio = document.querySelector('input[value="fulfilled"]');
const rejectRadio = document.querySelector('input[value="rejected"]');
const input = document.querySelector('input[name="delay"]');


form.addEventListener("submit", event => {
    event.preventDefault();
    const delay = parseInt(input.value);
    
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fulfillRadio.checked) {
                resolve (delay)
            } else if (rejectRadio.checked) {
                reject (delay)
            }
        }, delay);
    })

    promise.then((delay) => {
        iziToast.show({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: "topRight",
        messageSize: "16",
        backgroundColor: "#59A10D",
        messageColor: "#FFF"
});
    }).catch((delay) => {
        iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`,
        position: "topRight",
        messageSize: "16",
        backgroundColor: "#EF4040",
        messageColor: "#FFF"
});
    });
});

    
