// Fetch data from the API endpoint
fetch('/products') // Replace '/products' with the actual API endpoint provided by your backend
  .then(response => response.json())
  .then(data => {
    const productList = document.getElementById('product-list');

    // Loop through the data and create list items for each product
    data.forEach(product => {
      const listItem = document.createElement('li');
      listItem.textContent = `${product.name} - ${product.price}`;
      productList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
