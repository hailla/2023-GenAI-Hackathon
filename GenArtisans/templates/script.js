function previewImage(event) {
  const file = event.target.files[0];
  const uploadedImage = document.getElementById('uploadedImage');

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      uploadedImage.src = e.target.result;
      uploadedImage.classList.remove('d-none'); // Show the image element
    };

    reader.readAsDataURL(file);
  }
}

function extractData() {
  const fileInput = document.getElementById('fileInput');
  const output = document.getElementById('output');
  const imagePreview = document.getElementById('uploadedImage');

  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const imageURL = event.target.result;
      imagePreview.src = imageURL;
      imagePreview.classList.remove('d-none'); // Show the uploaded image
      output.innerHTML = ''; // Clear any previous text output
    };
    reader.readAsDataURL(file);
  } else {
    output.innerHTML = 'Please select an image file.';
  }
}
