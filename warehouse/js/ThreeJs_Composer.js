THREE.ThreeJs_Composer = function (_renderer, _scene, _camera) {
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    const selectObject = []

    window.addEventListener('click', onMouseClick)

    function onMouseClick(event) {
        // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
        var x, y
        if (event.changedTouches) {
            x = event.changedTouches[0].pageX;
            y = event.changedTouches[0].pageY;
        } else {
            x = event.clientX;
            y = event.clientY;
        }
        mouse.x = (x / window.innerWidth) * 2 - 1
        mouse.y = - (y / window.innerHeight) * 2 + 1
        raycaster.setFromCamera( mouse, _camera )
        
        // 计算物体和射线的焦点 保存了鼠标点击处发出射线所依次经过的物体
        const intersects = raycaster.intersectObjects( [_scene], true )

        // 1.鼠标点击的地方啥都没有，就直接隐藏说明性标签
        if(intersects.length == 0){
            $("#label").attr("style","display:none;");//隐藏说明性标签
            return;
        }
        // 2.点击到了地面或者墙面， 不显示说明，并且把selectedObjects这个数组清空，
        // 这个数组将会存放我们选中的物体，方便之后添加发光特效。
        if(intersects[0].object.name == "地面" || (intersects[0].object.name == "") || (intersects[0].object.name == "墙面")){
            $("#label").attr("style","display:none;");//隐藏说明性标签
            selectedObjects.pop();
        }else{
            // 3.点击到了门窗或者其他能够选中的物体
            // 显示说明（物体的名字），并且把selectedObjects这个数组清空后赋值。
            $("#label").attr("style","display:block;");// 显示说明性标签
            $("#label").css({left: x, top: y-40});// 修改标签的位置
            $("#label").text(intersects[0].object.name);// 显示模型信息

            selectedObjects.pop();
            selectedObjects.push( intersects[0].object );
        }

    }
}