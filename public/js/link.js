//feito no react
function desvio(id_base){
    var paises = ['en-us','fr-ca','es-mx','pt-br'];
    var pais = parseInt(document.getElementById('seletor-'+id_base).value);
    var links = document.querySelector('#grupo-'+id_base);
    switch(parseInt(links.value)){
        case 1:
        case 5:
            window.open('https://store.playstation.com/'+paises[pais-1]+'/product/'+id_base);
            break;
        case 2:
            switch(pais){
                case 1:
                case 2:
                    window.open('https://store.playstation.com/'+paises[pais-1]+'/product/'+id_base);
                    break;
                case 3:
                case 4:
                    window.open('https://store.playstation.com/'+paises[pais-1]+'/product/'+links.getAttribute('br'));
                    break;
            }
            break;
        case 3:
            switch(pais){
                case 1:
                case 2:
                case 3:
                    window.open('https://store.playstation.com/'+paises[pais-1]+'/product/'+id_base);
                    break;
                case 4:
                    window.open('https://store.playstation.com/'+paises[pais-1]+'/product/'+links.getAttribute('br'));
                    break;
            }
            break;
        case 4:
            switch(pais){
                case 1:
                case 2:
                    window.open('https://store.playstation.com/'+paises[pais-1]+'/product/'+id_base);
                    break;
                case 3:
                    window.open('https://store.playstation.com/'+paises[pais-1]+'/product/'+links.getAttribute('mx'));
                    break;
                case 4:
                    window.open('https://store.playstation.com/'+paises[pais-1]+'/product/'+links.getAttribute('br'));
                    break;
            }
            break;
        
    }
}