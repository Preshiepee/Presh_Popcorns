// Function to handle "Order Now" button click
function orderProduct(productName) {
    // Automatically fill in the product input field
    document.getElementById('selectedProduct').value = productName;
    
    // Smoothly scroll down to the contact/order form
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Handle Form Submission and redirect to WhatsApp
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop the page from refreshing
    
    // Replace this with your actual WhatsApp business phone number (include country code, no + or spaces)
    const phoneNumber = "2348162134867"; 
    
    const name = document.getElementById('name').value;
    const product = document.getElementById('selectedProduct').value;
    const details = document.getElementById('details').value;
    
    // Construct the custom WhatsApp text message
    const message = `Hello! I would like to place an order.%0A%0A` + 
                    `*Name:* ${encodeURIComponent(name)}%0A` + 
                    `*Product:* ${encodeURIComponent(product)}%0A` + 
                    `*Additional Details:* ${encodeURIComponent(details)}`;
    
    // Open WhatsApp in a new tab with the pre-filled text
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
});