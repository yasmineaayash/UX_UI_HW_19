console.log("test1");
$(".navlink").hover(function(){
    $(this).css("color", "black");
  },
  function(){
    $(this).css("color", "#DFCFD2");
  });

  $(".workimages").hover(function(){
    $(this).css("width","75%");
  },
  function(){
    $(this).css("width", "70%");
  }); 

  function changeText(element) {
    element.innerHTML = "It's nice to meet you! ";
  }
  
  function restoreText(element) {
    element.innerHTML = "Hi, I'm Yasmine Ayash";
  }
  