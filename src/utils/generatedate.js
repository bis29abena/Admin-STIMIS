export function generateDates() {
    var months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];
    
      var currentDate = new Date();
      var currentYear = currentDate.getFullYear();
      var currentMonth = currentDate.getMonth(); // Month is 0-indexed (0 = January, 11 = December)
      var numberOfDays = new Date(currentYear, currentMonth + 1, 0).getDate(); // Get the number of days in the current month
    
      var formattedDates = [];
    
      for (var day = 1; day <= numberOfDays; day++) {
        var date = new Date(currentYear, currentMonth, day);
        var formattedDate = day + " " + months[currentMonth] + " " + currentYear;
        formattedDates.push(formattedDate);
      }
    
      return formattedDates;
  }