/**
 * Created by gaohuijue on 2018/2/2.
 */
const fs = require('fs')
const path = require('path')
fs.readdirSync('./app').forEach(function (exeBase) {
    exeBase = path.join('./app', exeBase);
    const exeNativePath = path.join(exeBase, 'native')
    fs.mkdir(exeNativePath, function () {
        fs.readdirSync('./native').forEach(function (file) {
            const src = path.join('./native', file)
            const dest = path.join(exeNativePath, file)
            fs.copyFileSync(src, dest)
        })
    })
});
