$(document).ready(inicio);

function inicio()
{
    $("#btn_ingresar").click(mostrar);
}

function mostrar()
{
    var ancho = parseInt($("#ancho").val());
    var alto = parseInt($("#alto").val());
    
    $("#ancho").val("");
    $("#alto").val("");
    
    if(isNaN(ancho) || ancho === "" || ancho <= 0 || isNaN(alto) || alto === "" || alto <= 0)
    {
        alert("Debe ingresar un número mayor a 0;");
    }
    else
    {
        $("#resultado").html("");
        
        for(var i = 0; i < alto; i++)
        {
            $("#resultado").append("<br />");

            for(var a = 0; a < ancho; a++)
            {
                $("#resultado").append("<span>▨</span>");
            }
        }
        
        $("#medidas").text("Medidas: " + ancho + "w. x " + alto + "h.");
    }
}