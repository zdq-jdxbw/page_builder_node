'use strict';


module.exports = app => {
  const { STRING, UUID, DataTypes, TEXT } = app.Sequelize;
  const Template = app.model.define(
    'template',
    { id: {
      // eslint-disable-next-line no-undef
      type: UUID,
      unique: true,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    tempName: STRING(30),
    content: TEXT,
    userId: UUID,
    },
    { timestamps: false }
  );

  Template.associate = function() {
    app.model.Template.belongsTo(app.model.User);
  };

  // Template.sync({ force: true });

  return Template;
};
