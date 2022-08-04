//创建货位对象
class storageUnit {
    constructor(storageZoneId, shelfId, shelfName,
        inLayerNum, inColumnNum,
        positionX, positionY, positionZ, storageUnitId) {
        this.storageZoneId = storageZoneId;
        this.shelfId = shelfId;
        this.shelfName = shelfName;
        this.inLayerNum = inLayerNum;
        this.inColumnNum = inColumnNum;
        this.positionX = positionX;
        this.positionY = positionY;
        this.positionZ = positionZ;
        this.storageUnitId = storageUnitId;
    }
    //根据货架ID、层数、列数获取货位对象
    getStorageUnitById(shelfId, inLayerNum, inColumnNum) {
        for (var i = 0; i < storageUnitSize; i++) {
            if (storageUnitList[i].shelfId == shelfId && storageUnitList[i].inLayerNum == inLayerNum && storageUnitList[i].inColumnNum == inColumnNum) {
                return storageUnitList[i];
            }
        }
    }
    //根据库位编码获取货位对象
    getStorageUnitByUnitId(storageUnitId) {
        for (var i = 0; i < storageUnitSize; i++) {
            if (storageUnitList[i].storageUnitId == storageUnitId) {
                return storageUnitList[i];
            }
        }
    }

}



