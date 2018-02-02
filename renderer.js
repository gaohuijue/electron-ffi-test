const ffi = require('ffi')
const demo = ffi.Library('./native/Ffi_Test', {
    'say_hello': ['string', []],
    'register_listener': ['void', ['pointer']],
    'fire': ['void', []]
})
const logView = document.getElementById('logView')
document.getElementById('btn').onclick = function () {
    logView.innerHTML += `${demo.say_hello()}<br/>`
}

const listener1 = ffi.Callback('void', ['string', 'string'],
    function (name, code) {
        console.log('listener1', name, code);
    }),
    listener2 = ffi.Callback('void', ['string', 'string'],
        function (name, code) {
            console.log('listener2', name, code);
        });
// make an extra reference to callback to avoid GC.
process.on('exit', function () {
    listener1
    listener2
});

demo.register_listener(listener1);
demo.register_listener(listener2);
demo.fire();
