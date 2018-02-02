**注意**electron使用ffi调用dll，需要根据版本rebuild，[官方文档](https://github.com/electron/electron/blob/v0.37.2/docs/tutorial/using-native-node-modules.md#using-native-node-modules).

target是electron版本。
```bash
cd node_modules/ffi
node-gyp rebuild -target=1.7.12 -arch=x64 -dist-url=https://atom.io/download/atom-shell

cd node_modules/ref
node-gyp rebuild -target=1.7.12 -arch=x64 -dist-url=https://atom.io/download/atom-shell
```
[dll项目](https://github.com/gaohuijue/Ffi_Test)