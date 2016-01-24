
(function () {
    var iosIcons = document.getElementById('icons-ios');
    var androidIcons = document.getElementById('icons-android');
    var icons = document.querySelectorAll('.icons-preview .ion');

    iosIcons.addEventListener('click', function (ev) {
        iosIcons.classList.add('active');
        androidIcons.classList.remove('active');
        setMode('ios');
    });

    androidIcons.addEventListener('click', function (ev) {
        iosIcons.classList.remove('active');
        androidIcons.classList.add('active');
        setMode('md');
    });

    function setMode(mode) {
        for (var i = 0; i < icons.length; i++) {
            if (mode == 'ios') {
                icons[i].className = icons[i].className.replace('-md-', '-ios-') + '-outline';
            } else {
                icons[i].className = icons[i].className.replace('-ios-', '-md-').replace('-outline', '');
            }
        }
    }

    setMode('ios');
})();