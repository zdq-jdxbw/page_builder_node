'use strict';

module.exports = app => {
  const { STRING, UUID, DataTypes } = app.Sequelize;
  const User = app.model.define(
    'user',
    { id: {
      // eslint-disable-next-line no-undef
      type: UUID,
      unique: true,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    name: STRING(30),
    account: STRING(11),
    password: STRING(30),
    },
    { timestamps: false }
  );

  User.associate = function() {
    app.model.User.hasMany(app.model.Template, {
      foreignKey: 'user_id',
    });
  };
  // User.sync({ force: true });

  return User;
};
