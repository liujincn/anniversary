module.exports = function () {

        var clipboard = new ClipboardJS('.copy-btn');

        clipboard.on('success', function (e) {
            alert('复制成功')
        });

        clipboard.on('error', function (e) {
            console.log(e);
        });

}
