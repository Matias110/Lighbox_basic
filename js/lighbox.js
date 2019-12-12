 var lightbox = $("<div class='lightbox'></div>");
 var img = $("<img>");
 //Generamos un nudo lighbox
 $('body').append(lightbox);
 lightbox.append(img);
 $('.gallery li').click(function(e) {
     //preventDefault hace que no se generel el evento
     e.preventDefault();
     //Obtenemos la ruta imagen;
     var src = $(this).children('img').attr("src");
     /*Remplazamos la ruta*/
     img.attr('src', src);
     // Mostrar el modal
     lightbox.fadeIn('fast');
     //Cerrar el modal
     lightbox.click(function() {
         lightbox.fadeOut('slow');
     });
 });