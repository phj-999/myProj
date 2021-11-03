const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect('mongodb://127.0.0.1:27017:27017/Tblog', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('数据库库链接成功')
    }).catch((err) => {
        console.error('数据库库链接失败', err);
    })
}