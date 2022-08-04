/**
 * @module
 * 添加库区与文字
 * 存放3D仓库显示模型
 */

var planeMat, RackMat, RackMat2
//货位信息
var storageUnitSize = 0, storageUnitList = []
//货架信息
var shelfSize = 0, shelfList = []

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
const addArea = (x, z, width, length, scene, name, textColor, font_size, textposition) => {
    // 平面几何体
    const planegeometry = new THREE.PlaneGeometry(width, length)
    const mesh = new THREE.Mesh(planegeometry, planeMat)
    mesh.position.set(x, 1.5, z)
    mesh.rotation.x = -Math.PI / 2.0
    mesh.name = "库区" + "$" + name.split("$")[1]
    scene.add(mesh)

    // 加载JSON格式的字体
    const fontLoader = new THREE.FontLoader();
    fontLoader.load(
        // 资源URL
        'publlic/font/FZYaoTi_Regular.json', (font) => {
            // 文本缓冲几何体
            const text = new THREE.TextGeometry(name.split("$")[1], {
                // 设定文字字体
                font: font,
                //尺寸
                size: font_size,
                //厚度
                height: 0.01
            })
            text.computeBoundingBox()
            //3D文字材质 PBR物理材质
            const standardMaterial = new THREE.MeshStandardMaterial({ color: "#" + textColor })
            const standardmesh = new THREE.Mesh(text, standardMaterial)
            // 位置
            if (textposition == "左对齐") {
                standardmesh.position.x = x - width / 2 + 10
            } else if (textposition == "居中") {
                standardmesh.position.x = x - 15
            } else if (textposition == "右对齐") {
                standardmesh.position.x = x + width / 2 - 60
            }
            standardmesh.position.y = 1.3
            standardmesh.position.z = z + length / 2 - 20
            standardmesh.rotation.x = -Math.PI / 2.0
            scene.add(standardmesh)
        }
    )
}

/** 放置单层货架 */
const addRack = (x, y, z, plane_x, plane_y, plane_z, holder_x, holder_y, holder_z, scene, name, num) => {
    const plane = new THREE.BoxGeometry(plane_x, plane_y, plane_z / num)
    const gz = []
    for (let i = 0; i < num; i++) {
        gz.push(z + plane_z / num / 2 + (plane_z / num) * i)
        let obj = new THREE.Mesh(plane, RackMat)
        obj.position.set(x, y, gz[i])
        let msg = name + "$" + (2 - i)

        let storageUnitId = msg.split("$")[1] + "$" + msg.split("$")[3] + "$" + msg.split("$")[4]
        //添加货位
        let storageUnit_obj = new storageUnit(msg.split("$")[0], msg.split("$")[1], msg.split("$")[2], msg.split("$")[3], msg.split("$")[4],
            x, y, gz[i], storageUnitId)
        storageUnitList.push(storageUnit_obj)
        storageUnitSize++

        var Unit = new storageUnit().getStorageUnitById(msg.split("$")[1], msg.split("$")[3], msg.split("$")[4])
        obj.name = "货位" + "$" + Unit.storageUnitId
        scene.add(obj)
    }
    let holder = new THREE.BoxGeometry(holder_x, holder_y, holder_z)
    let obj2 = new THREE.Mesh(holder, RackMat2)
    let obj3 = new THREE.Mesh(holder, RackMat2)
    let obj4 = new THREE.Mesh(holder, RackMat2)
    let obj5 = new THREE.Mesh(holder, RackMat2)

    obj2.position.set(x - plane_x / 2 + holder_x / 2, y - holder_y / 2 - plane_y / 2, z + holder_z / 2)
    obj3.position.set(x + plane_x / 2 - holder_x / 2, y - holder_y / 2 - plane_y / 2, z + holder_z / 2)
    obj4.position.set(x - plane_x / 2 + holder_x / 2, y - holder_y / 2 - plane_y / 2, z + plane_z - holder_z / 2)
    obj5.position.set(x + plane_x / 2 - holder_x / 2, y - holder_y / 2 - plane_y / 2, z + plane_z - holder_z / 2)
    scene.add(obj2); scene.add(obj3); scene.add(obj4); scene.add(obj5)

}

/** 放置一叠货架 */
/** stack_num 货架的叠数 */
const addStackOfRack = (x, y, z, plane_x, plane_y, plane_z, holder_x, holder_y, holder_z, scene, name, num, stack_num) => {
    for (var i = 0; i < stack_num; i++) {
        addRack(x, y * (i + 1), z, plane_x, plane_y, plane_z, holder_x, holder_y, holder_z, scene, name + "$" + (i + 1), num);
    }
}



/** 根据货架配置添加货架 */
const addShelf = (scene) => {
    var shelf_list = new Array();
    shelf_list.push({ StorageZoneId: 'Z1', shelfId: 'A2', shelfName: '货架A2', x: 0, y: 27, z: 0 });
    shelfSize = shelf_list.length;
    for (var i = 0; i < shelfSize; i++) {
        var shelf_obj = new shelf(shelf_list[i].StorageZoneId,
            shelf_list[i].shelfId,
            shelf_list[i].shelfName,
            PLANE_LENGTH, PLANE_WIDTH, PLANE_HEIGHT,
            HOLDER_LENGTH, HOLDER_WIDTH, HOLDER_HEIGHT,
            shelf_list[i].x,
            shelf_list[i].y,
            shelf_list[i].z,
            LAYER_NUM, COLUMN_NUM);
        shelfList.push(shelf_obj);
    }

    for (var i = 0; i < shelfSize; i++) {
        addStackOfRack(shelfList[i].positionX, shelfList[i].positionY, shelfList[i].positionZ, shelfList[i].planeLength, shelfList[i].planeHeight, shelfList[i].planeWidth, shelfList[i].holderLength, shelfList[i].holderHeight, shelfList[i].holderWidth, scene, shelfList[i].storageZoneId + "$" + shelfList[i].shelfId + "$" + shelfList[i].shelfName, shelfList[i].columnNum, shelfList[i].layerNum);
    }
}