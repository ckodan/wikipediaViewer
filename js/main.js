$(document).ready(function() {
    $("#polje").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#btn").click();
        }
    });
    $('#btn').click(function() {
        var searchString = $('.polje').val();
        $.ajax({url: "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+searchString, success: function(result){
            var searchResult = JSON.stringify(result);
            var pogodak = result.query.pages;
            
            var t1d = (pogodak[Object.keys(pogodak)[0]].title);
            var pid1d = (pogodak[Object.keys(pogodak)[0]].pageid);
            var e1d = (pogodak[Object.keys(pogodak)[0]].extract);
            
            var t2d = (pogodak[Object.keys(pogodak)[1]].title);
            var pid2d = (pogodak[Object.keys(pogodak)[1]].pageid);
            var e2d = (pogodak[Object.keys(pogodak)[1]].extract);
            
            var t3d = (pogodak[Object.keys(pogodak)[2]].title);
            var pid3d =(pogodak[Object.keys(pogodak)[2]].pageid);
            var e3d = (pogodak[Object.keys(pogodak)[2]].extract);
            
            var t4d = (pogodak[Object.keys(pogodak)[3]].title);
            var pid4d = (pogodak[Object.keys(pogodak)[3]].pageid);
            var e4d = (pogodak[Object.keys(pogodak)[3]].extract);
            
            var t5d = (pogodak[Object.keys(pogodak)[4]].title);
            var pid5d = (pogodak[Object.keys(pogodak)[4]].pageid);
            var e5d = (pogodak[Object.keys(pogodak)[4]].extract);
            
            var t6d = (pogodak[Object.keys(pogodak)[5]].title);
            var pid6d = (pogodak[Object.keys(pogodak)[5]].pageid);
            var e6d = (pogodak[Object.keys(pogodak)[5]].extract);
            
            var t7d = (pogodak[Object.keys(pogodak)[6]].title);
            var pid7d = (pogodak[Object.keys(pogodak)[6]].pageid);
            var e7d = (pogodak[Object.keys(pogodak)[6]].extract);
            
            var t8d = (pogodak[Object.keys(pogodak)[7]].title);
            var pid8d = (pogodak[Object.keys(pogodak)[7]].pageid);
            var e8d = (pogodak[Object.keys(pogodak)[7]].extract);
            
            var t9d = (pogodak[Object.keys(pogodak)[8]].title);
            var pid9d = (pogodak[Object.keys(pogodak)[8]].pageid);
            var e9d = (pogodak[Object.keys(pogodak)[8]].extract);
            
            var t10d = (pogodak[Object.keys(pogodak)[9]].title);
            var pid10d = (pogodak[Object.keys(pogodak)[9]].pageid);
            var e10d = (pogodak[Object.keys(pogodak)[9]].extract);              

            $('.pid1d').attr("href", "https://en.wikipedia.org/?curid=" + pid1d);
            $('.t1d').text(t1d);
            $('.e1d').text(e1d);

            $('.pid2d').attr("href", "https://en.wikipedia.org/?curid=" + pid2d);
            $('.t2d').text(t2d);
            $('.e2d').text(e2d);

            $('.pid3d').attr("href", "https://en.wikipedia.org/?curid=" + pid3d);
            $('.t3d').text(t3d);
            $('.e3d').text(e3d);

            $('.pid4d').attr("href", "https://en.wikipedia.org/?curid=" + pid4d);
            $('.t4d').text(t4d);
            $('.e4d').text(e4d);

            $('.pid5d').attr("href", "https://en.wikipedia.org/?curid=" + pid5d);
            $('.t5d').text(t5d);
            $('.e5d').text(e5d);

            $('.pid6d').attr("href", "https://en.wikipedia.org/?curid=" + pid6d);
            $('.t6d').text(t6d);
            $('.e6d').text(e6d);

            $('.pid7d').attr("href", "https://en.wikipedia.org/?curid=" + pid7d);
            $('.t7d').text(t7d);
            $('.e7d').text(e7d);

            $('.pid8d').attr("href", "https://en.wikipedia.org/?curid=" + pid8d);
            $('.t8d').text(t8d);
            $('.e8d').text(e8d);

            $('.pid9d').attr("href", "https://en.wikipedia.org/?curid=" + pid9d);
            $('.t9d').text(t9d);
            $('.e9d').text(e9d);

            $('.pid10d').attr("href", "https://en.wikipedia.org/?curid=" + pid10d);
            $('.t10d').text(t10d);
            $('.e10d').text(e10d);            

        }});          
    });
});

function showResults() {
    $('.results').show();
}
// TODO REFACTOR
