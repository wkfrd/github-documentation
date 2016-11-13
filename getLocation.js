function getText() {
    var text = (document.all) ? document.selection.createRange().text : document.getSelection();
    return text;
}

document.onmouseup = function() {
    console.log(getText());
};
