function displayRandomInvoiceFields(randomData) {
    const randomInvoiceFieldsSection = document.getElementById('randomInvoiceFields');
    randomInvoiceFieldsSection.innerHTML = '';
  
    Object.keys(randomData).forEach(key => {
      const row = document.createElement('div');
      row.classList.add('mb-2');
      row.innerHTML = `<strong>${key}:</strong> <input type="text" id="${key}" value="${randomData[key]}" class="form-control">`;
      randomInvoiceFieldsSection.appendChild(row);
    });
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
  
        const randomData = generateRandomInvoiceData(); // Generate random data
        displayRandomInvoiceFields(randomData); // Display random invoice fields for modification
        output.innerHTML = ''; // Clear any previous text output
      };
      reader.readAsDataURL(file);
    } else {
      output.innerHTML = 'Please select an image file.';
    }
  }
  
  function generateRandomInvoiceData() {
    return {
      InvoiceNumber: getRandomString(),
      InvoiceDate: getRandomDate(),
      VendorID: getRandomNumber(100, 999),
      PaymentTerms: 'Net 30',
      InvoiceStatus: 'Paid',
      TotalAmountDue: getRandomNumber(1000, 5000).toFixed(2),
      Currency: 'USD',
      PaymentInstructions: 'Pay via bank transfer'
      // Add more fields as per the extracted data
    };
  }
  
  // Rest of the functions remain unchanged
  