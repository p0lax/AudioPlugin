function getAudio() {

    var musicEls = document.querySelectorAll("#content .audio:not([passed])"),
        musicElsLength = musicEls.length;

    for (var i = 0; i < musicElsLength; i += 1) {

        var _mp3_ = musicEls[i].getElementsByTagName("input")[0].value.split("?")[0], // get audio url
            _b_ = musicEls[i].getElementsByTagName("b")[0],
            _t_ = musicEls[i].getElementsByClassName('play_new')[0].offsetTop + "px",
            span = musicEls[i].getElementsByTagName('span')[0],
            ispan = span.innerHTML,
            _a_ = document.createElement("a");

        if (span.children[0]) {
            ispan = span.children[0].innerHTML;
        }

        _a_.href = _mp3_;
        _a_.download = trim(_b_.children[0].innerHTML + "-" + ispan) + ".mp3";
        _a_.title = 'Download ' + _b_.children[0].innerHTML + "-" + ispan;
        _a_.draggable = "true";
        _a_.innerHTML = '<span style="cursor:pointer; padding:6px; width:16px; height:16px; background-color:#5F7D9D; color:#fff; border-radius: 10px;"><img src="http://st0.vk.me/images/icons/darr.gif" /></span>';
        _a_.setAttribute('style', "position: absolute; left: 30px; z-index: 10;" + "top: " + _t_);
        musicEls[i].insertBefore(_a_, musicEls[i].firstChild);
        _b_.style.paddingLeft = "27px";
        musicEls[i].setAttribute('passed', "");
    }
}

function audio() {

    var main_div = document.getElementsByClassName("area clear_fix");

    for (var i = 0; i < main_div.length; i++) {
        if (main_div[i].parentNode.firstChild.href) {
            main_div[i].parentNode.firstChild.style.top = main_div[i].getElementsByClassName('play_new')[0].offsetTop + "px";
            continue;
        }

        var _mp3_ = main_div[i].getElementsByTagName("input")[0].value.split(",")[0];
        var _b_ = main_div[i].getElementsByTagName("b")[0];
        var _top_ = document.getElementById(main_div[0].parentNode.id.replace('audio', 'play')).offsetTop + "px";
        var _t_ = main_div[i].getElementsByClassName('play_new')[0].offsetTop + "px";
        var span = main_div[i].getElementsByTagName('span')[0];
        var ispan = span.innerHTML;
        if (span.children[0]) {
            var ispan = span.children[0].innerHTML;
        }
        var _a_ = document.createElement("a");
        _a_.href = _mp3_.substring(0, _mp3_.indexOf('.mp3') + 4);
        _a_.download = trim(_b_.children[0].innerHTML + "-" + ispan) + ".mp3";
        _a_.title = 'Скачать ' + _b_.children[0].innerHTML + "-" + ispan;
        _a_.draggable = "true";
        _a_.innerHTML = '<span style="cursor:copy;padding:6px;width:16px;height:16px;background-color:#5F7D9D;color:#fff;border-radius:2px;"><img src="http://st0.vk.me/images/icons/darr.gif" /></span>';
        _a_.style.zIndex = "10";
        _a_.style.left = "30px";
        _a_.style.top = _t_;
        _a_.style.position = "absolute";
        main_div[i].parentNode.insertBefore(_a_, main_div[i].parentNode.firstChild);
        _b_.style.paddingLeft = "27px";
    }
}


function videovk() {
    if (document.getElementsByClassName("video_box_wrap")[0] && !document.getElementById('downloadvideo') && document.getElementById('video_player').tagName != 'IFRAME') {
        var invideo = "";
        var obj = new Object();
        var name = new Array();
        var content = new Array();
        var fl = encodeURI(unescape(document.getElementsByClassName("video_box_wrap")[0].innerHTML.split(" ")[8].split('"')[1].replace(/amp;/g, "")));
        var flvars = fl.split("&");
        for (var c = 0; c <= flvars.length - 1; c++) {
            name[c] = flvars[c].split("=")[0];
            content[c] = flvars[c].split("=")[1];
        }
        for (var c2 = 0; c2 <= name.length; c2++) {
            obj[name[c2]] = content[c2];
        }
        var countvid = 0;
        if (obj.url240) {
            countvid += 1;
            var invideo = invideo + vv(obj.url240, '240', countvid, obj.md_title);
        }
        if (obj.url360) {
            countvid += 1;
            var invideo = invideo + vv(obj.url360, '360', countvid, obj.md_title);
        }
        if (obj.url480) {
            countvid += 1;
            var invideo = invideo + vv(obj.url480, '480', countvid, obj.md_title);
        }
        if (obj.url720) {
            countvid += 1;
            var invideo = invideo + vv(obj.url720, '720', countvid, obj.md_title);
        }

        if (obj.cache240) {
            countvid += 1;
            invideo = invideo + vv(obj.cache240, '240', countvid, obj.md_title);
        }
        if (obj.cache360) {
            countvid += 1;
            invideo = invideo + vv(obj.cache360, '360', countvid, obj.md_title);
        }
        if (obj.cache480) {
            countvid += 1;
            invideo = invideo + vv(obj.cache480, '480', countvid, obj.md_title);
        }
        if (obj.cache720) {
            countvid += 1;
            invideo = invideo + vv(obj.cache720, '720', countvid, obj.md_title);
        }
        var videodownloader = document.createElement("div");
        videodownloader.style.height = "auto";
        videodownloader.style.width = "auto";
        videodownloader.id = "downloadvideo";
        videodownloader.style.paddingBottom = "5px";
        videodownloader.innerHTML = invideo;
        document.getElementById("mv_narrow").insertBefore(videodownloader, document.getElementById("mv_narrow").firstChild);
    }
}


function utf8_decode(utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;
    while (i < utftext.length) {
        c = utftext.charCodeAt(i);
        if (c < 128) {
            string += String.fromCharCode(c);
            i++;
        }
        else if ((c > 191) && (c < 224)) {
            c2 = utftext.charCodeAt(i + 1);
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
        }
        else {
            c2 = utftext.charCodeAt(i + 1);
            c3 = utftext.charCodeAt(i + 2);
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        }
    }
    return string;
}


function trim(str) {
    return str.replace(/^[\s]+/, "").replace(/[\s]+$/, "");
}


function vv(a, b, c, d) {
    if (c % 2 != 0) {
        var p1 = "<p>";
        var p2 = "";
    }
    if (c % 2 == 0) {
        var p1 = "";
        var p2 = "</p>";
    }
    return p1 + "<a style='color:white;background-color:#2F5879;padding:5px 5px 2px 5px; border:#395A7C;' " +
        " draggable='true'  title='Скачать: " + utf8_decode(trim(decodeURIComponent(d))) + "' download='" + utf8_decode(trim(decodeURIComponent(d))) + "." + a.substr(-3) + "' href='" + a + "'>" + b + " (" + a.substr(-3) + ")</a> " + p2;
}

setInterval(function () {
    if (window.location.href.indexOf('vk.com') > 1) {
        if (document.getElementById('video_player') && document.getElementById("mv_narrow")) {
            videovk();
        }
        if (document.getElementsByClassName("area clear_fix").length != 0) {
            getAudio();
        }
    }
}, 1000);