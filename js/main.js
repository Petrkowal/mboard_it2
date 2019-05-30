var interval;
var actualPhotoId = 0;
function findJSONObject(data, attr, value) {
    var obj;
    data.forEach(function (element) {
        if (element[attr] === value) {
            obj = element;
        }
    });
    return obj;
}

$(function () {
    $('#second h4').not('#chipset').next().after('<p>Pro více informací klikněte na sběrnici v obrázku.</p>');
    $('#info h3').nextUntil('h3').hide();
    $('#info h3').on('click', function () {
        if ($(this).nextUntil('h3').is(':hidden')) {
            $(this).css('border', '3px solid black');
        } else {
            $(this).css('border', 'none');
        }
        $(this).nextUntil('h3').toggle(500);
    });

    $('#info h4').nextUntil('h4').hide();
    $('#info h4').on('click', function () {
        $('.bus').css('fill', '#00f');
        $('text *').not('.chipsetsvg').css('fill', '#fff');
        $('rect').not('.bus').not('.chipsetsvg').css('fill', '#000');
        var id = $(this).attr('id');
        var idclass = '.' + id + 'svg';
        var idbus = '#' + id + 'bus';
        if ($(this).nextUntil('h4').is(':hidden')) {
            // Border u rozkliknutého h4
            $(this).css('border', '3px solid black');
            // zobrazení chipsetu (rámeček + text) 
            if (id == 'chipset') {
                $(idclass).show();
            } else {
                // barva textu a boxu u ostatních
                $('text' + idclass + ' *').css('fill', '#0f0');
                $('rect' + idclass).css('fill', '#f00');
                // $(idbus).css('fill', '#0f0');
                $(idbus).css('fill', '#0f0');
            }
        } else {
            // border - pryč
            $(this).css('border', 'none');
            // chipset schovat
            if (id == 'chipset') {
                $(idclass).hide();
            } else {
                $('text' + idclass + ' *').css('fill', '#fff');
                $('rect' + idclass).css('fill', '#000');
            }
        }
        $(this).nextUntil('h4').toggle(500);
        $('#second').children().not('h4').not($(this).nextUntil('h4')).hide(500);
        $('#second h4').not($(this)).css('border', 'none');

        if (id != 'chipset') {
            $('text *').not('.chipsetsvg').not('text' + idclass + ' *').css('fill', '#fff');
            $('rect').not('rect' + idclass).not('.bus').not('.chipsetsvg').css('fill', '#000');
            $('svg .chipsetsvg').hide();
        }
    });

    $('.chipsetsvg').hide();
    // BUS - SVG - Klikačka

    $('.bus').on('click', function () {
        var obj = findJSONObject(clanky, 'id', $(this).attr("id"));
        // MODAL
        $('#myModal h5').text(obj.head);
        $('#myModal .modal-body').text(obj.text);
        $('#myModal').modal();
    });


    function carImgs() {
        var out = '';
        var active;
        $.each(fotky, function (index, val) {
            if (index == 0) {
                active = ' active';
            }
            else {
                active = '';
            }
            out += '<div class="carousel-item' + active + '"><img src="img/' + val.file + '" alt="Motherboard ' + index + '"></div>';
            // out += '<div class="item"><img src="img/' + val.file + '" alt="Motherboard"></div>'
        });
        return out;
    }

    function carIndi() {
        var out = '';
        var first = '';
        $.each(fotky, function (idx, value) {
            if (idx == 0) {
                first = ' class="active"';
            }
            else {
                first = '';
            }
            out += '<li data-target="#carouselId" data-slide-to="' + idx + '"' + first + '></li>'
        })
        return out;
    }

    $('.carousel-indicators').append(carIndi());
    $('.carousel-inner').append(carImgs());
    // active u prvního
});