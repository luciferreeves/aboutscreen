$(document).ready(function(){
    const os = require('os');
    const si = require('systeminformation');
    $('#ram').html((os.totalmem())/(1024*1024*1024))
    si.cpu(function(data) {
        $('#manufacturer').html(data.manufacturer)
        $('#model').html(data.brand)
    });
    si.graphics(function(data) {
        console.log(data)
        $('#resx').html(data.displays[0].resolutionx)
        $('#resy').html(data.displays[0].resolutiony)
        $('#display').html(data.displays[0].model)
        $('#graphics').html(data.controllers[0].model)
    });
    $('#cores').html((os.cpus().length))
    $('#speed').html((os.cpus()[0].speed)/1000)
    $('#type').html(os.arch())
});

const shell = require('electron').shell;

// assuming $ is jQuery
$(document).on('click', 'a[href^="http"]', function(event) {
    event.preventDefault();
    shell.openExternal(this.href);
});


(function () {
    // Retrieve remote BrowserWindow
    const {BrowserWindow} = require('electron').remote

    function init() {
        // Close app
        document.getElementById("close").addEventListener("click", (e) => {
            var window = BrowserWindow.getFocusedWindow();
            window.close();
        });
    };

    document.onreadystatechange =  () => {
        if (document.readyState == "complete") {
            init();
        }
    };
})();