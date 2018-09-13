$(document).ready(function () {

    $('#search').on('click', function() {
        var term = $('#exampleFormControlInput1').val();
        var numRecords = $('#exampleFormControlSelect1').val();
        var starty = $('#startYear').val();
        starty = starty.splice('-');
        var endy = $('#stopYear').val();
        endy = endy.splice('-');

        var params = function (t, s='19010101', e='20180912') {
            var str = '';
            str = str + 'q=' + t + "&";
            str = str + 'page=1&';
            str = str + '=' + s.toString() + '&';
            str = str + '=' + e.toString() + '&';
            return str;
        }

        $.get({url: 'http://api.nytimes.com/svc/search/v2/articlesearch.json?'+ 
            params(term, starty, endy) +'&api-key=d3d1892e205f4db1af28105e7cbad45c'})

        .then(function (response) {
            var data = response.data;
        });

    });



});