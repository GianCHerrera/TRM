const {DataTypes} = require('sequelize')
module.exports = (sequelize)=>{
    sequelize.define('history',{
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
          },
        amount:{
            type: DataTypes.STRING,
            allowNull: false
        },
        since_date:{
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        expiration_date:{
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    })
}