document.querySelectorAll(".navList").forEach(function(element) {
    element.addEventListener('click', function() {
      
      document.querySelectorAll(".navList").forEach(function(e) {
        e.classList.remove('active');
    });

      
      this.classList.add('active');
  
      
      var index = Array.from(this.parentNode.children).indexOf(this);
  
      
      document.querySelectorAll(".data-table").forEach(function(table) {
        table.style.display = 'none';
      });
  
      
      var tables = document.querySelectorAll(".data-table");
      if (tables.length > index) {
        tables[index].style.display = 'block';
      }
    });
  });
  