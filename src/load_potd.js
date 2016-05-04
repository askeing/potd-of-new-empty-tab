/**
 * Created by Askeing on 2016/5/4.
 */

var FEED_URL = "https://zh.wikipedia.org/w/api.php?action=featuredfeed&feed=potd&feedformat=atom";

var ret_html = "";

function update_logo() {
    var lga = $("#lga");
    if (lga) {
        lga.css("height", "auto");
        lga.html(ret_html);
    } else {
        var div_potd = $("<div id='potd'/>");
        $("#newtab-search-form").before(div_potd);
        div_potd.html(ret_html);
    }
}

$.get(FEED_URL, function (data) {
    var latest = Date.parse("1970-01-01");

    $(data).find("entry").each(function () {
        var el = $(this);

        var el_updated = Date.parse(el.find("updated").text());
        if (el_updated > latest) {
            latest = el_updated;
            ret_html = el.find("summary").text();
        }
    });

    update_logo();
});
