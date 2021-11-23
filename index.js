//inicio index//
function start(){
    return location = ('./escolha.html')
}
//final index//

//inicio fase 1//
function fase1(){
    var destino = prompt('O que devemos fazer?\n Digie 1 para começar a busca.\n Digite 2 para deixar para depois.');
    if(destino == '1'){
        return location = ('../fase2/fase_2.html');
    }else if (destino  == '2'){
        return location = ('./gameover_fase1.html');
    } else{
        return fase1()
    }
}
//final fase 1//

//game over fase 1//
function gameOver1(){
    return location = ('./fase_1.html')
}
//game over fase 1//

//inicio fase2//
function fase2(){
    var destino = prompt('O que devemos fazer?\n Digie 1 para zarpar.\n Digite 2 beber um pouco');
    if(destino == '1'){
        return location = ('../fase3/fase_3.html');
    }else if (destino  == '2'){
        return location = ('./gameover_fase2.html');
    } else{
        return fase2()
    }
}
//final fase2//

//game over fase 2//
function gameOver2(){
    return location = ('../fase1/fase_1.html')
}
//game over fase 2//

//inicio fase3//
function fase3(){
    var destino = prompt('O que devemos fazer?\n Digite 1 para ficar e lutar.\n Digite 2 para fugir.');
    if(destino =='1'){
        return location = ('./gameover_fase3.html');
    }else if( destino == '2'){
        return location = ('../fase4/fase_4.html');
    }else{
        return fase3()
    }
}
//final fase3//

//game over fase 3//
function gameOver3(){
    return location = ('../fase1/fase_1.html')
}
//game over fase 3//


//inicio fase4//
function fase4(){
    var destino = prompt('O que devemos fazer?\n Digite 1 para começar pelo centro de ilha.\n Digite 2 começar pela praia.');
    if(destino =='1'){
        return location = ('./gameover_fase4.html');
    }else if( destino == '2'){
        return location = ('../fase4/final.html');
    }else{
        return fase4()
    }
}
//final fase 4//

//game over 4//
function gameOver4(){
    return location = ('../fase1/fase_1.html')
}
//game over4//

function final(){
    return location = ('../index.html')
}