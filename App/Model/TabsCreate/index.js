const rn = require('../rn');
const altaAdministrativa = require('../altaAdm');
const cidSecundario = require('../cidSec');
const analiseCritica = require('../analiseCrit');
const beneficiario = require('../beneficiario');
const cidPrincipal = require('../cidPrinc');
const condicaoAdquirida = require('../condAdquirida');
const cti = require('../cti');
const drgBrasilRefinado = require('../drgRefinado');
const medico = require('../medico');
const procedimento = require('../procedimento');
const suporteVentilatorio = require('../supVent');
const index = require('../index'); //faltou esse
const hospital = require('../hospital');
const logs = require('../Logs/index');

module.exports = Relationship = () => {

    //Criação das tabelas
    /* rn.sync({ force: true });
    altaAdministrativa.sync({ force: true });
    cidPrincipal.sync({ force: true });
    analiseCritica.sync({ force: true });
    beneficiario.sync({ force: true });
    cidPrincipal.sync({ force: true });
    cidSecundario.sync({ force: true });
    condicaoAdquirida.sync({ force: true });
    cti.sync({ force: true });
    drgBrasilRefinado.sync({ force: true });
    medico.sync({ force: true });
    procedimento.sync({ force: true });
    suporteVentilatorio.sync({ force: true });
    index.sync({ force: true });
    hospital.sync({ force: true });
    logs.sync({ force: true }); */


    //Relacionamento das tabelas
    //const proc_beneficiario = db.define('PROC_BENEFICIARIO', {});
    //proc_beneficiario.sync();

    // 1:1
    /*
        hospital.hasOne(beneficiario, { constraints: true, foreignKey: 'id_beneficiario' }); 
        beneficiario.belongsTo(hospital, { constraints: true, foreignKey: 'id_beneficiario' });
        beneficiario.hasOne(altaAdministrativa, { foreignKey: 'id_beneficiario' });
        altaAdministrativa.belongsTo(beneficiario, { foreignKey: 'id_beneficiario' });
        beneficiario.hasOne(suporteVentilatorio, { foreignKey: 'id_beneficiario' });
        suporteVentilatorio.belongsTo(beneficiario, { foreignKey: 'id_beneficiario' });
        procedimento.hasMany(medico, { foreignKey: 'id_procedimento' });
        medico.belongsTo(procedimento, { foreignKey: 'id_procedimento' });
        cti.hasOne(medico, { foreignKey: 'id_cti' });
        medico.belongsTo(cti, { foreignKey: 'id_cti' });
        cti.hasOne(hospital, { foreignKey: 'id_cti' });
        hospital.belongsTo(cti, { foreignKey: 'id_cti' });
    
        //1:n
        beneficiario.hasMany(medico, { foreignKey: 'id_beneficiario' });
        beneficiario.hasMany(cidSecundario, { foreignKey: 'id_beneficiario' });
        beneficiario.hasMany(cti, { foreignKey: 'id_beneficiario' });
        beneficiario.hasMany(condicaoAdquirida, { foreignKey: 'id_beneficiario' });
        beneficiario.hasMany(analiseCritica, { foreignKey: 'id_beneficiario' });
    
        //n:n
        beneficiario.belongsToMany(procedimento, {
            as: 'beneficiarios',
            through: proc_beneficiario,
            foreignKey: 'id_beneficiario',
            otherKey: 'id_procedimento'
        });
        procedimento.belongsToMany(beneficiario, {
            as: 'procedimentos',
            through: proc_beneficiario,
            foreignKey: 'id_procedimento',
            otherKey: 'id_beneficiario'
        });
    	
    */
}


