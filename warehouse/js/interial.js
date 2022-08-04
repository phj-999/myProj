/**
 * @module
 * 添加库区与文字
 * 存放3D仓库显示模型
 */

var planeMat

const initMat = () => {
    // 高光网格材质
    planeMat = new THREE.MeshLambertMaterial()
    // 加载
    new THREE.TextureLoader().load('publlic/images/plane.png', function (map) {
        planeMat.map = map;
        planeMat.transparent = true;
        planeMat.opacity = 0.8;
        planeMat.needsUpdate = true;
    })
}

// 仓库
/**
 *  放置虚线框区域和库区名称 
 * @param {number} x和z是库区的位置
 * @param {number} width和length是库区的长度和宽度
 * @param  scene是场景
 * @param  name是库区的名字->库区英文ID$库区中文名
 * @param  textColor是显示文字的颜色(十六进制)
 * @param  font_size是字体的大小
 * @param  textposition是文字的位置
*/
const addArea=(x,z,width,length,scene,name,textColor,font_size,textposition)=>{
    // 平面几何体
    const planegeometry = new THREE.PlaneGeometry(width, length)
    const mesh = new THREE.Mesh(planegeometry, planeMat)
    mesh.position.set(x,1.5,z)
    mesh.rotation.x = -Math.PI / 2.0
    mesh.name = "库区"+"$"+name.split("$")[1]
    scene.add(mesh)

    // 加载JSON格式的字体
    const fontLoader = new THREE.FontLoader();
    fontLoader.load(
	// 资源URL
	'publlic/font/FZYaoTi_Regular.json',(font)=>{
        // 文本缓冲几何体
        const text =new THREE.TextGeometry(name.split("$")[1],{
            // 设定文字字体
            font:font,
            //尺寸
            size:font_size,
            //厚度
            height:0.01
        })
        text.computeBoundingBox()
        //3D文字材质 PBR物理材质
        const standardMaterial = new THREE.MeshStandardMaterial({color:"#" + textColor})
        const standardmesh =  new THREE.Mesh(text,standardMaterial)
        // 位置
        if(textposition == "左对齐"){
            standardmesh.position.x = x - width/2 + 10
        }else if(textposition == "居中"){
            standardmesh.position.x = x - 15
        }else if(textposition == "右对齐"){
            standardmesh.position.x = x + width/2 - 60
        }
        standardmesh.position.y = 1.3
        standardmesh.position.z = z + length/2 - 20
        standardmesh.rotation.x = -Math.PI / 2.0
        scene.add(standardmesh)
    }
  )
}