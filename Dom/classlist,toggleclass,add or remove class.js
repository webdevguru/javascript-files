<button id="myButton">Click me</button>

<script>
  const button = document.getElementById('myButton');
  
  button.addEventListener('click', () => {
    // Add or remove the 'active' class when button is clicked
    button.classList.toggle('active');

    // Add a 'clicked' class
    button.classList.add('clicked');

    // Remove the 'inactive' class
    button.classList.remove('inactive');
  });
</script>
