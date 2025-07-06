$(document).ready(() => {
    $('#onload').html('Página carregada.');  
    $(window).scroll(() => {
        $('#scroll').html('Scroll acionado.');
    });    
    $(window).resize(() => {
        $('#resize').html('Página redimensionada.').css('background-color', 'red');
    });
    $('#btn1').mousedown(() => {
        $('#div1').css('background-color', 'green');
    });
    $('#btn1').mouseup(() => {
        $('#div1').css('background-color', 'blue');

    });
    $('#btn2').dblclick(() => {
        $('#div1').css('background-color', 'gray');
        
    });
    $('#div1').mousemove(() => {
        $('#div1').css('background-color', 'yellow');

    });
    $('#div1').mousemove((e) => {
        $('#resultadoDiv').html('X: ' + e.offsetX + ' Y: ' + e.offsetY);
    });
    $('#divExterna').mouseover(() => {
        $('#resultadoDiv1').html('Entrou');
    });
    $('#divExterna').mouseenter(() => {
        $('#divExterna').css('background-color', 'red');
    });
    $('#divExterna').mouseout(() => {
        $('#resultadoDiv1').html('Saiu');
    });
    $('#divExterna').mouseleave(() => {
        $('#divExterna').css('background-color', 'blue');
    });
    $('#divInterna').mouseover(() => {
        $('#resultadoDiv2').html('Entrou');
    });
    $('#divInterna').mouseenter(() => {
        $('#divInterna').css('background-color', 'yellow');
    });
    $('#divInterna').mouseout(() => {
        $('#resultadoDiv2').html('Saiu');
    });
    $('#divInterna').mouseleave(() => {
        $('#divInterna').css('background-color', 'purple');
    });
    $('#teclado').keyup((e) => {
        if (e.keyCode < 49 || e.keyCode > 52) {
            let txt = $(e.target).val();
            txt = txt.slice(0, -1);
            $(e.target).val(txt);
        }
    });
    // $('#teclado').keyup((e) => {
    //     $('#resultadoTecla').html('Tecla liberada.');
    //     if(e.keyCode == 13) {
    //         let txt = $(e.target).val();
    //         $('#resultadoTecla').html(txt);
    //         $(e.target).val('');
    //     };
    // });
    $('#nome').focus((e) => {
        console.log('Esse elemento html recebeu o foco (nome)');
        $(e.target).addClass('inputFocado');
    });
    $('#email').focus((e) => {
        console.log('Esse elemento html recebeu o foco (email)');
        $(e.target).addClass('inputFocado');
    });
    $('#nome').blur((e) => {
        console.log('Esse elemento html perdeu o foco (nome)');
        $(e.target).removeClass('inputFocado');
    });
    $('#email').blur((e) => {
        console.log('Esse elemento html perdeu o foco (email)');
        $(e.target).removeClass('inputFocado');
    });
    $('#opcao').change((e) => {
        console.log($(e.target).val());
    });
    $('#form').submit((e) => {
        e.preventDefault();
        console.log('Formulário enviado.');
    });
    $('a').click((e) => {
        e.preventDefault();
    })
});