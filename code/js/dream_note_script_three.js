$('.content').on('mousemove', function(e){
  /*$('.effectmouse').draggable({ containment: ".menu", scroll: false, axis: "x" });*/
    $('.effectmouse').css({
       left:  e.pageX -17.5,
       top:   e.pageY - 3
    });
})

$('.cross').mouseenter(function(){
  $('.effectmouse').addClass('exiteffect');
});

$('.cross').mouseleave(function(){
  $('.effectmouse').removeClass('exiteffect');
});

$('.menu, .line, .cross').mouseleave(function(){
  $('.effectmouse').fadeOut(100);
});

$('.menu, .line, .cross').mouseenter(function(){
  $('.effectmouse').fadeIn(100);
});

$('#file').click(function(){
  $('.submenu').animate({opacity: ['toggle','swing']}, 150);
});

$('.sm-btn').click(function(){
  $('.submenu').animate({opacity: ['toggle','swing']}, 150);
});

$('#open').click(function(){
  $('#myFile').click();
  $('.loadfilequestion').animate({opacity: ['toggle','swing']}, 200);
  $('.loadfilequestion > .dialog').addClass('show-dia');
});

$('.loadfilequestion-no').click(function(){
  $('.loadfilequestion').animate({opacity: ['toggle','swing']}, 200);
  $('.loadfilequestion > .dialog').removeClass('show-dia');
});

$('.savefile-no').click(function(){
  $('.savefile').animate({opacity: ['toggle','swing']}, 200);
  $('.savefile > .dialog').removeClass('show-dia');
});

$('#myTextArea').click(function(){
  if ($('.submenu').css('display', 'none')) {
    // Nothing
  } else {
    $('.submenu').animate({opacity: ['0','swing']}, 200);
  }
});

$('#clear').click(function(){
  $('textarea').val('');
});

$('#savedialg').click(function(){
  $('.savefile').animate({opacity: ['toggle','swing']}, 200);
  $('.savefile > .dialog').addClass('show-dia');
});

$('#save').click(function(){
  $('.savefile').animate({opacity: ['toggle','swing']}, 200);
  $('.savefile > .dialog').removeClass('show-dia');
});

$('#ok').click(function(){
  var file = document.getElementById("myFile").files[0];
  var reader = new FileReader();
  reader.onload = function (e) {
    var textArea = document.getElementById("myTextArea");
    textArea.value = e.target.result;
  };
  reader.readAsText(file);
  $('.loadfilequestion').animate({opacity: ['toggle','swing']}, 200)
  $('.loadfilequestion > .dialog').removeClass('show-dia');
});


$( function() {
  $( ".content" ).draggable({ handle: ".bar" });
});


 function saveTextAsFile()
        {
          var filename = document.getElementById('filename').value;  
          var textToWrite = document.getElementById('myTextArea').value;
            var textFileAsBlob = new Blob([textToWrite], {type:'text\n'});
            var fileNameToSaveAs = filename+".txt";
        
            var downloadLink = document.createElement("a");
            downloadLink.download = fileNameToSaveAs;
            downloadLink.innerHTML = "Download File";
            if (window.webkitURL != null)
            {
                // Chrome allows the link to be clicked
                // without actually adding it to the DOM.
                downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
            }
            else
            {
                // Firefox requires the link to be added to the DOM
                // before it can be clicked.
                downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
                downloadLink.onclick = destroyClickedElement;
                downloadLink.style.display = "none";
                document.body.appendChild(downloadLink);
            }
        
            downloadLink.click();
        }
    
        var button = document.getElementById('save');
        button.addEventListener('click', saveTextAsFile);