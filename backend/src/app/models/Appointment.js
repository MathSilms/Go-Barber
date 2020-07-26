import Sequelize, { Model } from 'sequelize';

class Appointment extends Model {
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
        user_id: Sequelize.INTEGER,
        provider_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreingKey: 'user_id', as: 'user' });
    this.belongsTo(models.User, { foreingKey: 'provider_id', as: 'provider' });
  }
}

export default Appointment;
