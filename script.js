document.getElementById('book').addEventListener('click', function() {
    if (this.classList.contains('close')) {
      this.classList.remove('close');
      this.classList.add('open');
    } else if (this.classList.contains('open')) {
      this.classList.remove('open');
      this.classList.add('open2');
    } else if (this.classList.contains('open2')) {
      this.classList.remove('open2');
      this.classList.add('close');
    }
  });
  