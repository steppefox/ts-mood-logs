import Sequelize, { Model } from 'sequelize';
import { sequelize } from './index';

export class Mood extends Model {}

Mood.init({
    score: Sequelize.INTEGER.UNSIGNED,
    tags: Sequelize.TEXT,
    think: Sequelize.TEXT,
    place: Sequelize.STRING,
}, {
    sequelize,
    modelName: 'mood'
});
