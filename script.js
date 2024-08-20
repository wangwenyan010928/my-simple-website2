function updateAddress() {
    fetch('http://127.0.0.1:5000/get_address')
        .then(response => response.json())
        .then(data => {
            document.getElementById('address').textContent = "地址: " + data.address;
            document.getElementById('footer-address').textContent = data.address;
        })
        .catch(error => {
            console.error('Error fetching address:', error);
            document.getElementById('address').textContent = "地址: 加载失败";
        });
}

// Update address every 5 seconds
setInterval(updateAddress, 5000);

// Immediately update address on page load
updateAddress();
