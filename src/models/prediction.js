const {DataTypes, Sequelize} = require('sequelize')
module.exports = (sequelize)=>{
    sequelize.define('prediction',{
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
          },
          date:{
            type: DataTypes.DATEONLY,
            allowNull: false
          },
          amount:{
            type: DataTypes.STRING,
            allowNull: false
          },
          real_amount:{
            type: DataTypes.STRING,
            allowNull: false
          }
    })
}