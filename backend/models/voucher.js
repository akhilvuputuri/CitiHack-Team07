module.exports = (sequelize, DataTypes) => {
  const Voucher = sequelize.define("Voucher", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
    },
    claimable: {
      type: DataTypes.STRING,
    },
    value: {
      type: DataTypes.STRING,
    },
    cost: {
      type: DataTypes.DECIMAL(10, 2),
    },
    expiry: {
      type: DataTypes.DATE,
    },
    redeemed: {
      type: DataTypes.BOOLEAN,
    },
    description: {
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.DECIMAL(10, 2)
    },
    imageUrl: {
      type: DataTypes.TEXT,
    },
    shopName: {
      type: DataTypes.TEXT,
    },
    qrCodeText: {
      type: DataTypes.TEXT,
    },
  });

  Voucher.associate = (models) => {
    // associations can be defined here
    Voucher.belongsTo(models.User, {
      foreignKey: "userId",
      targetKey: "id",
    });
  };

  return Voucher;
};
