document.addEventListener("DOMContentLoaded", function () {
    const sendButton = document.querySelector(".btn-primary");
    const alertBox = document.querySelector(".alert");
    alertBox.style.display = "none";

    sendButton.addEventListener("click", function () {
        const card = document.querySelector("#cardNumber");
        const cvc = document.querySelector("#cvc");
        const amount = document.querySelector("#amount");
        const first = document.querySelector("#firstName");
        const last = document.querySelector("#lastName");
        const city = document.querySelector("#city");
        const state = document.querySelector("#state");
        const postal = document.querySelector("#postalCode");
        const radio = document.querySelector('input[name="inlineRadioOptions"]:checked');

        if (
            !card.value ||
            !cvc.value ||
            !amount.value ||
            !first.value ||
            !last.value ||
            !city.value ||
            state.value === "0" ||
            !postal.value ||
            !radio
        ) {
            alertBox.style.display = "block";
        } else {
            alertBox.style.display = "none";
            alert("Formulario enviado correctamente");
        }
    });
});
