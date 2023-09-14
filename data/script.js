function submitData() {
    var sliderValue = document.getElementById('slider').value;
    var selectedColor = document.getElementById('colorDropdown').value;
    fetch(`/submit?sliderValue=${sliderValue}&selectedColor=${selectedColor}`);
  }

  
  
  