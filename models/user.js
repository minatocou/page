/**
 * Created by page.xia on 16/11/24.
 */
module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define('user', {
            id: {type:sequelize.STRING,primaryKey: true, comment:'id'},
            username:{type:sequelize.STRING,allowNull:false,unique:true,comment:'用户名'},
            password:{type:sequelize.STRING,allowNull:false,comment:'密码'},
            status:{type:sequelize.BOOLEAN,defaultValue: true,allowNull:false,comment:'当前用户状态'},
        },
        //timestamp: true,
        
    )
    //创建默认数据
    // user.sync({force: true}).then(function () {
    //     // 已创建数据表
    //     return user.create({
    //         firstName: 'John',
    //         lastName: 'Hancock'
    //     });
    // });
}