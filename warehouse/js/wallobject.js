

// 创建了一个数组objects_cube来存放要挖去的内容
const returnWallObject = (width, height, depth, angle, material, x, y, z, name) => {
    const cubeGeometry = new THREE.BoxGeometry(width, height, depth)
    const cube = new THREE.Mesh(cubeGeometry, material)
    cube.position.x = x;
    cube.position.y = y;
    cube.position.z = z;
    cube.rotation.y += angle * Math.PI;
    cube.name = name;
    return cube;
}