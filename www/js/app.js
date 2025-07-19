function validar()
{
    var clave_nueva=$('#clave_nueva').val();
    var clave_nueva_2=$('#clave_nueva_2').val();
    if(clave_nueva!=clave_nueva_2)
    {
        alert("La nueva clave y su repeticion deben coincidir");
        $('#clave_nueva_2').val('');
    }
}

function validar2()
    {
            var clave=$('#clave').val();
            var clave2=$('#clave2').val();
            if(clave!=clave2)
            {
                    alert('La clave y su confirmación deben coincidir');
                    $('#clave').val('');
                    $('#clave2').val('');
            }
    }
