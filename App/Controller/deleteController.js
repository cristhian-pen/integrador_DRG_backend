const rn = require('../Model/rn');
const altaAdministrativa = require('../Model/altaAdm');
const cidSecundario = require('../Model/cidSec');
const analiseCritica = require('../Model/analiseCrit');
const beneficiario = require('../Model/beneficiario');
const cidPrincipal = require('../Model/cidPrinc');
const condicaoAdquirida = require('../Model/condAdquirida');
const cti = require('../Model/cti');
const drgBrasilRefinado = require('../Model/drgRefinado');
const medico = require('../Model/medico');
const procedimento = require('../Model/procedimento');
const suporteVentilatorio = require('../Model/supVent');
const index = require('../Model/index'); //faltou esse
const hospital = require('../Model/hospital');


//Modulo de querys dos dados
const deleteBeneficiario = async (dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {

    await beneficiario.sequelize.query(`DELETE FROM beneficiario WHERE dataIntegracaoIni = '${dataIntegracaoIni}' AND dataIntegracaoFin = '${dataIntegracaoFin}' AND sn_integra = '${snIntegra}'`);

}

const deleteCid = async (dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    await cidPrincipal.sequelize.query(`DELETE FROM beneficiario WHERE dataIntegracaoIni = '${dataIntegracaoIni}' AND dataIntegracaoFin = '${dataIntegracaoFin}' AND sn_integra = '${snIntegra}'`);;
}

const deleteCidSec = async (dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    await cidSecundario.sequelize.query(`DELETE FROM beneficiario WHERE dataIntegracaoIni = '${dataIntegracaoIni}' AND dataIntegracaoFin = '${dataIntegracaoFin}' AND sn_integra = '${snIntegra}'`);
}

const deleteAlta = async (dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    await altaAdministrativa.sequelize.query(`DELETE FROM beneficiario WHERE dataIntegracaoIni = '${dataIntegracaoIni}' AND dataIntegracaoFin = '${dataIntegracaoFin}' AND sn_integra = '${snIntegra}'`);
};

const deleteAnaliCrit = async (dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    await analiseCritica.sequelize.query(`DELETE FROM beneficiario WHERE dataIntegracaoIni = '${dataIntegracaoIni}' AND dataIntegracaoFin = '${dataIntegracaoFin}' AND sn_integra = '${snIntegra}'`);
}

const deleteCondAdquirida = async (dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    await condicaoAdquirida.sequelize.query(`DELETE FROM beneficiario WHERE dataIntegracaoIni = '${dataIntegracaoIni}' AND dataIntegracaoFin = '${dataIntegracaoFin}' AND sn_integra = '${snIntegra}'`);
}

const deleteCti = async (dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    await cti.sequelize.query(`DELETE FROM beneficiario WHERE dataIntegracaoIni = '${dataIntegracaoIni}' AND dataIntegracaoFin = '${dataIntegracaoFin}' AND sn_integra = '${snIntegra}'`);
}

const deleteDRGRefinado = async (dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    await drgBrasilRefinado.sequelize.query(`DELETE FROM beneficiario WHERE dataIntegracaoIni = '${dataIntegracaoIni}' AND dataIntegracaoFin = '${dataIntegracaoFin}' AND sn_integra = '${snIntegra}'`);
}

const deleteHosp = async (dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    await hospital.sequelize.query(`DELETE FROM beneficiario WHERE dataIntegracaoIni = '${dataIntegracaoIni}' AND dataIntegracaoFin = '${dataIntegracaoFin}' AND sn_integra = '${snIntegra}'`);
}

const deleteMedico = async (dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    await medico.sequelize.query(`DELETE FROM beneficiario WHERE dataIntegracaoIni = '${dataIntegracaoIni}' AND dataIntegracaoFin = '${dataIntegracaoFin}' AND sn_integra = '${snIntegra}'`);
}

const deleteProc = async (dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    await procedimento.sequelize.query(`DELETE FROM beneficiario WHERE dataIntegracaoIni = '${dataIntegracaoIni}' AND dataIntegracaoFin = '${dataIntegracaoFin}' AND sn_integra = '${snIntegra}'`);
}

//Sempre vem vazio tratar porsterior
const deleteRN = async (dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    await rn.sequelize.query(`DELETE FROM beneficiario WHERE dataIntegracaoIni = '${dataIntegracaoIni}' AND dataIntegracaoFin = '${dataIntegracaoFin}' AND sn_integra = '${snIntegra}'`);
}


const deleteSupVent = async (dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    await suporteVentilatorio.sequelize.query(`DELETE FROM beneficiario WHERE dataIntegracaoIni = '${dataIntegracaoIni}' AND dataIntegracaoFin = '${dataIntegracaoFin}' AND sn_integra = '${snIntegra}'`);
}

const deleteDrgExp = async (dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    index.sequelize.query(`DELETE FROM beneficiario WHERE dataIntegracaoIni = '${dataIntegracaoIni}' AND dataIntegracaoFin = '${dataIntegracaoFin}' AND sn_integra = '${snIntegra}'`);
}

module.exports = {
    deleteAlta,
    deleteAnaliCrit,
    deleteBeneficiario,
    deleteCid,
    deleteCondAdquirida,
    deleteCti,
    deleteDRGRefinado,
    deleteHosp,
    deleteMedico,
    deleteProc,
    deleteRN,
    deleteSupVent,
    deleteCidSec,
    deleteDrgExp
}