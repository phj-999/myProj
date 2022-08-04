THREE.ThreeJs_Composer = function (_renderer, _scene, _camera) {
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    const selectedObjects = []
    // 后期处理
    const composer = new THREE.EffectComposer( _renderer )
    const  renderPass = new THREE.RenderPass( _scene, _camera )
    composer.addPass( renderPass )
   // 包围线
    const outlinePass = new THREE.OutlinePass( new THREE.Vector2( window.innerWidth, window.innerHeight ), _scene, _camera )
    outlinePass.edgeStrength = 5//包围线浓度
    outlinePass.edgeGlow = 0.5//边缘线范围
    outlinePass.edgeThickness = 2//边缘线浓度
    outlinePass.pulsePeriod = 2//包围线闪烁频率
    outlinePass.visibleEdgeColor.set( '#ffffff' )//包围线颜色
    outlinePass.hiddenEdgeColor.set( '#190a05' )//被遮挡的边界线颜色
    composer.addPass( outlinePass )
   // shader
    const effectFXAA = new THREE.ShaderPass( THREE.FXAAShader )
    effectFXAA.uniforms[ 'resolution' ].value.set( 1 / window.innerWidth, 1 / window.innerHeight )
    effectFXAA.renderToScreen = true
    composer.addPass( effectFXAA )

   // 大门关闭打开状态
   const door_state_left1 = true //默认是门是关闭的
   const door_state_right1 = true //默认是门是关闭的
   const door_state_left2 = true //默认是门是关闭的
   const door_state_right2 = true //默认是门是关闭的


    window.addEventListener('click', onMouseClick)

    function onMouseClick(event) {
        // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
        var x, y
        if (event.changedTouches) {
            x = event.changedTouches[0].pageX
            y = event.changedTouches[0].pageY
        } else {
            x = event.clientX
            y = event.clientY
        }
        mouse.x = (x / window.innerWidth) * 2 - 1
        mouse.y = - (y / window.innerHeight) * 2 + 1
        raycaster.setFromCamera( mouse, _camera )
        
        // 计算物体和射线的焦点 保存了鼠标点击处发出射线所依次经过的物体
        const intersects = raycaster.intersectObjects( [_scene], true )

        // 1.鼠标点击的地方啥都没有，就直接隐藏说明性标签
        if(intersects.length == 0){
            $("#label").attr("style","display:none")//隐藏说明性标签
            return
        }
        // 2.点击到了地面或者墙面， 不显示说明，并且把selectedObjects这个数组清空，
        // 这个数组将会存放我们选中的物体，方便之后添加发光特效。
        if(intersects[0].object.name == "地面" || (intersects[0].object.name == "") || (intersects[0].object.name == "墙面")){
            $("#label").attr("style","display:none")//隐藏说明性标签
            selectedObjects.pop()
        }else{
            // 3.点击到了门窗或者其他能够选中的物体
            // 显示说明（物体的名字），并且把selectedObjects这个数组清空后赋值。
            $("#label").attr("style","display:block")// 显示说明性标签
            $("#label").css({left: x, top: y-40})// 修改标签的位置
            $("#label").text(intersects[0].object.name)// 显示模型信息

            selectedObjects.pop()
            selectedObjects.push( intersects[0].object )
            outlinePass.selectedObjects = selectedObjects//给选中的线条和物体加发光特效
        }
        // 点击门，动画效果
        if (intersects[0].object.name == '左门1') {
            if (door_state_left1) {
                new TWEEN.Tween(intersects[0].object.rotation).to({
                    y: -0.5*Math.PI
                },5000).easing(TWEEN.Easing.Elastic.Out).onComplete(function() {}).start()
            door_state_left1 = false
            } else {
                new TWEEN.Tween(intersects[0].object.rotation).to({
                    y:0
                },5000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){
                }).start()
                door_state_left1 = true
            }
        } else if (intersects[0].object.name == "右门1") {
            if(door_state_right1){
                new TWEEN.Tween(intersects[0].object.rotation).to({
                    y: 0.5*Math.PI
                }, 5000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){
                }).start();
                door_state_right1 = false;
            }else{
                new TWEEN.Tween(intersects[0].object.rotation).to({
                    y: 0
                }, 5000).easing(TWEEN.Easing.Elastic.Out).onComplete(function(){
                }).start();
                door_state_right1 = true;
            }
        }

    }
    return composer
}