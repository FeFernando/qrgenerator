document.addEventListener("DOMContentLoaded", function(){ 



document.getElementById("createQr").addEventListener("click", generate);
document.getElementById("downloadQr").addEventListener("click", downloadQR);


function generate() {
    let textUrl = document.getElementById("urlQrCode").value;
    let qrContainer = document.getElementById("qrcode");
    qrContainer.innerHTML = "";
    let downloadBtn = document.getElementById("downloadQr");

     new QRCode(qrContainer, {
        text: textUrl,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

    setTimeout (() => {
        downloadBtn.style.display = "block"
    }, 500);

}

function downloadQR() {
    let qrCanvas = document.querySelector("#qrcode canvas");

    if (!qrCanvas) {
        alert("Gere um QR Code primeiro!");
        return;
    }

    let qrImage = qrCanvas.toDataURL("image/png"); // Converte para PNG

    let link = document.createElement("a");
    link.href = qrImage;
    link.download = "qrcode.png"; // Nome do arquivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
})