(function () {

    var names = ["Yeshwaanth", "Sanjay", "Hari", "Sharath", "Ram", "Sam", "Ravi", "Arun", "Vijay", "Tony"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        byeSpeaker(names[i]);
      }
      else {
        helloSpeaker(names[i]);
      }
    }
    
    })();