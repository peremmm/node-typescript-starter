import SequelizeConnection from '../configuration';
import Department from './department';

const sequelize = SequelizeConnection.getInstance();

// Initialize Models
Department.initModel(sequelize);

export const db = {
    sequelize,
    Department
};
