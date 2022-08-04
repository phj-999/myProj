// 货架
class shelf {
    constructor(storageZoneId, shelfId, shelfName, planeLength, planeWidth, planeHeight, holderLength, holderWidth, holderHeight, positionX, positionY, positionZ,
        layerNum, columnNum) {
        this.storageZoneId = storageZoneId;
        this.shelfId = shelfId;
        this.shelfName = shelfName;
        this.planeLength = planeLength;
        this.planeWidth = planeWidth;
        this.planeHeight = planeHeight;
        this.holderLength = holderLength;
        this.holderWidth = holderWidth;
        this.holderHeight = holderHeight;
        this.positionX = positionX;
        this.positionY = positionY;
        this.positionZ = positionZ;
        this.layerNum = layerNum;
        this.columnNum = columnNum;
    }
//根据货架编码获取货架对象
 getShelfById(shelfId) {
    for(var i = 0; i < shelfSize; i++){
        if(shelfList[i].shelfId == shelfId){
            return shelfList[i];
        }
    }
   }

   
}