function openDropdown(index) {
  console.log('Hello');
  document.getElementById("drpdwnA").classList.toggle("show");
  console.log('Showed');
  window.onclick = function(e) {
    if (!e.target.matches('.dropButton')) {
    var myDropdown = document.getElementById("drpDwn");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    } 
  }
}

// Close the dropdown if the user clicks outside of it