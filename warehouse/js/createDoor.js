//  安装大门-left
function createLeftDoor(width, height, depth, angle, x, y, z, name) {
    const loader = new THREE.TextureLoader()
    loader.load('publlic/images/door_left.png', (texture) => {
        const doorgeometry = new THREE.BoxGeometry(width, height, depth)
        doorgeometry.translate(50, 0, 0)
        doorgeometry.opacity = 1.0
        const doormaterial = new THREE.MeshBasicMaterial({ map: texture, color: 0xffffff, transparent: true })

        const doorleft = new THREE.Mesh(doorgeometry, doormaterial)
        doorleft.position.set(x, y, z);
        doorleft.rotation.y += angle * Math.PI //-逆时针旋转,+顺时针
        doorleft.name = name
        scene.add(doorleft)
    })
}

//  安装大门-right

function createRightDoor(width, height, depth, angle, x, y, z, name) {
    var loader = new THREE.TextureLoader()
    loader.load("publlic/images/door_right.png", (texture) => {
        const doorgeometry = new THREE.BoxGeometry(width, height, depth)
        doorgeometry.translate(-50, 0, 0)
        doorgeometry.opacity = 1.0

        const doormaterial = new THREE.MeshBasicMaterial({ map: texture, color: 0xffffff, transparent: true })

        const door = new THREE.Mesh(doorgeometry, doormaterial)
        door.position.set(x, y, z)
        door.rotation.y += angle * Math.PI //-逆时针旋转,+顺时针
        door.name = name
        scene.add(door)
    })
}
