const uploader = document.getElementById("uploader");
const uploader_input = document.getElementById("uploader-input");
const uploader_text = document.getElementById("uploader-text");
const upload_form = document.getElementById("upload-form");
const base64URL = document.getElementById("base64URL");

//click on upload area

uploader.addEventListener("click", (e) => {
  uploader_input.click();
});

uploader_input.addEventListener("change", (e) => {
  uploadImage(uploader_input.files[0]);
});

//drag and drop

uploader.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploader.style.borderStyle = "dashed";
});

uploader.addEventListener("dragleave", (e) => {
  e.preventDefault();
  uploader.style.borderStyle = "solid";
});

uploader.addEventListener("drop", (e) => {
  e.preventDefault();

  if (e.dataTransfer.files.length) {
    uploadImage(e.dataTransfer.files[0]);
  }
});

function uploadImage(image) {
  uploader_text.innerText = "Uploading...";

  const reader = new FileReader();
  reader.readAsDataURL(image);

  reader.onload = (event) => {
    const result = event.target.result;

    base64URL.value = result;
    setTimeout(() => {
      uploader_text.innerText = "Image uploaded";
    }, 5000);

    upload_form.submit();
  };
}
