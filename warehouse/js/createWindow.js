//创建窗户
const createWindow = (width, height, depth, angle, x, y, z, name) => {
    const loader = new THREE.TextureLoader()
    
    loader.load("publlic/images/windows.png",function(texture){
        const windowgeometry = new THREE.BoxGeometry(width, height, depth)     
       
        const windowmaterial = new THREE.MeshBasicMaterial({
            map:texture,
            color:0xffffff,
            opacity:1.0,
            transparent:true
        })

        const window = new THREE.Mesh( windowgeometry,windowmaterial)
        window.position.set(x, y, z)
        window.rotation.y += angle*Math.PI  //-逆时针旋转,+顺时针
        window.name = name
        scene.add(window)
    });
 }