// 创建墙壁纹理
function createWallTexture() {
    matArrayA.push(new THREE.MeshPhongMaterial({ color: 0xafc0ca }));  //前  0xafc0ca :灰色
    matArrayA.push(new THREE.MeshPhongMaterial({ color: 0xafc0ca }));  //后
    matArrayA.push(new THREE.MeshPhongMaterial({ color: 0xd6e4ec }));  //上  0xd6e4ec： 偏白色
    matArrayA.push(new THREE.MeshPhongMaterial({ color: 0xd6e4ec }));  //下
    matArrayA.push(new THREE.MeshPhongMaterial({ color: 0xafc0ca }));  //左    0xafc0ca :灰色
    matArrayA.push(new THREE.MeshPhongMaterial({ color: 0xafc0ca }));  //右

    matArrayB.push(new THREE.MeshPhongMaterial({ color: 0xafc0ca }));  //前  0xafc0ca :灰色
    matArrayB.push(new THREE.MeshPhongMaterial({ color: 0x9cb2d1 }));  //后  0x9cb2d1：淡紫
    matArrayB.push(new THREE.MeshPhongMaterial({ color: 0xd6e4ec }));  //上  0xd6e4ec： 偏白色
    matArrayB.push(new THREE.MeshPhongMaterial({ color: 0xd6e4ec }));  //下
    matArrayB.push(new THREE.MeshPhongMaterial({ color: 0xafc0ca }));  //左   0xafc0ca :灰色
    matArrayB.push(new THREE.MeshPhongMaterial({ color: 0xafc0ca }));  //右
}
