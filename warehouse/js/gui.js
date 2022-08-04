const initGui = () => {
    var options = new function () {
        this.batchNo ='-货物--001box-';this.qty = 12;this.qtyUom ='kg';this.qty2 = 120;
    };
    var gui = new dat.GUI();
    gui.domElement.style = 'position:absolute;top:50px;left:0px;height:600px';
    gui.add(options, 'batchNo').name("物料批号：").listen();
    gui.add(options, 'qty').name("数量：").listen();
    gui.add(options, 'qtyUom').name("单位：").listen();
    gui.add(options, 'qty2').name("件数：").listen();
}
