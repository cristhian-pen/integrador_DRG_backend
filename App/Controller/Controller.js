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
const insertBeneficiario = async (cdPac, plano, nasc, sexo, idadeAnos, idadeDias, idadeMeses, part, rn, dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {

    await beneficiario.create({
        cd_paciente: cdPac,
        plano: plano,
        dt_nascimento: nasc,
        sexo: sexo,
        idadeAnos: idadeAnos,
        particular: part,
        rn: rn,
        idadeMeses: idadeMeses,
        idadeDias: idadeDias,
        dataIntegracaoIni: dataIntegracaoIni,
        dataIntegracaoFin: dataIntegracaoFin,
        sn_integra: snIntegra
    });

}

const insertCid = async (cdCid, desc, sensCuid, dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    await cidPrincipal.create({
        cd_cid: cdCid,
        descricao: desc,
        sensivelCuidadoPrimario: sensCuid,
        dataIntegracaoIni: dataIntegracaoIni,
        dataIntegracaoFin: dataIntegracaoFin,
        sn_integra: snIntegra
    });
}

const insertCidSec = async (cdSec, descSec, dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    await cidSecundario.create({
        cd_cid_sec: cdSec,
        desc_cid_sec: descSec,
        dataIntegracaoIni: dataIntegracaoIni,
        dataIntegracaoFin: dataIntegracaoFin,
        sn_integra: snIntegra
    });
}

const insertAlta = async (nmAtend, nmAut, dtAut, dtAltInicial, dtAtendFinal, dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    await altaAdministrativa.create({
        numeroAtendimento: nmAtend,
        numeroAutorizacao: nmAut,
        dataAutorizacao: dtAut,
        dataAtendimentoInicial: dtAltInicial,
        dataAtendimentoFinal: dtAtendFinal,
        dataIntegracaoIni: dataIntegracaoIni,
        dataIntegracaoFin: dataIntegracaoFin,
        sn_integra: snIntegra
    })
};

const insertAnaliCrit = async (dtAnali, analiCrit, dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    await analiseCritica.create({
        dataAnalise: dtAnali,
        analiseCritica: analiCrit,
        dataIntegracaoIni: dataIntegracaoIni,
        dataIntegracaoFin: dataIntegracaoFin,
        sn_integra: snIntegra
    });
}

const insertCondAdquirida = async (cdCondAdq, desc, dtOcor, dtManifest, grave, dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    await condicaoAdquirida.create({
        codigo: cdCondAdq,
        descricao: desc,
        dataOcorrencia: dtOcor,
        dataManifestacao: dtManifest,
        grave: grave,
        dataIntegracaoIni: dataIntegracaoIni,
        dataIntegracaoFin: dataIntegracaoFin,
        sn_integra: snIntegra
    });
}

const insertCti = async (dtIni, dtFin, condAlt, tp, perPrevAlta, perReal, dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    await cti.create({
        dt_inicial: dtIni,
        dt_final: dtFin,
        condicaoAlta: condAlt,
        tip: tp,
        permanenciaPrevistaNaAlta: perPrevAlta,
        permanenciaReal: perReal,
        dataIntegracaoIni: dataIntegracaoIni,
        dataIntegracaoFin: dataIntegracaoFin,
        sn_integra: snIntegra
    });
}

const insertDRGRefinado = async (cd, desc, tp, peso, dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    await drgBrasilRefinado.create({
        codigo: cd,
        descricao: desc,
        tipo: tp,
        peso: peso,
        dataIntegracaoIni: dataIntegracaoIni,
        dataIntegracaoFin: dataIntegracaoFin,
        sn_integra: snIntegra
    });
}

const insertHosp = async (idHosp, nmHosp, cnes, dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    await hospital.create({
        id_hospital: idHosp,
        nomeHospital: nmHosp,
        cnes: cnes,
        dataIntegracaoIni: dataIntegracaoIni,
        dataIntegracaoFin: dataIntegracaoFin,
        sn_integra: snIntegra
    });
}

const insertMedico = async (nmMed, ufMed, crm, espMed, medRes, atuacao, dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    await medico.create({
        nome: nmMed,
        uf: ufMed,
        crm: crm,
        especialidade: espMed,
        medicoResponsavel: medRes,
        tipAtuacao: atuacao,
        dataIntegracaoIni: dataIntegracaoIni,
        dataIntegracaoFin: dataIntegracaoFin,
        sn_integra: snIntegra
    });
}

const insertProc = async (cdProc, nmProc, port, dtExec, dtExecFinal, dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    await procedimento.create({
        cd_procedimento: cdProc,
        nm_procedimento: nmProc,
        porte: port,
        dtExecucao: dtExec,
        dtExecucaoFinal: dtExecFinal,
        dataIntegracaoIni: dataIntegracaoIni,
        dataIntegracaoFin: dataIntegracaoFin,
        sn_integra: snIntegra
    });
}

//Sempre vem vazio tratar porsterior
const insertRN = async (pesoRn, idadeRn, sexoRn, nascVivo, tocoTra, apgar, apgarQuintoMin, alta48Hrs, dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    await rn.create({
        pesoNascimento: pesoRn,
        idadeGestacional: idadeRn,
        sexo: sexoRn,
        nascidoVivo: nascVivo,
        tocotraumatismo: tocoTra,
        apgar: apgar,
        apgarQuintoMinuto: apgarQuintoMin,
        alta48Horas: alta48Hrs,
        dataIntegracaoIni: dataIntegracaoIni,
        dataIntegracaoFin: dataIntegracaoFin,
        sn_integra: snIntegra
    });
}


const insertSupVent = async (tpSupVent, localSupVent, dtIni, dtFin, dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    await suporteVentilatorio.create({
        tipo: tpSupVent,
        local: localSupVent,
        dataInicial: dtIni,
        dataFinal: dtFin,
        dataIntegracaoIni: dataIntegracaoIni,
        dataIntegracaoFin: dataIntegracaoFin,
        sn_integra: snIntegra
    })
}

const insertDrgExp = async (id, sitDrg, carIntDgr,
    nrOpDrg, nrRegDrg, nrAteDrg, nrAutDrg, dtIntDrg,
    dtAltaDrg, condAtlDrg, dtAutDrg, intOutDrg, hospAntDrg,
    reitDrg, recDrg, dtPrevDrg, permPrevIntDrg, permPrevAltDrg,
    permRealDrg, percDrg, procDrg, ventMecDrg, dtCadDrg,
    usuCadDrg, usuCadAltDrg, dtUltAltDrg, usuUltAltDrg,
    corrRegAlt, usuCorDrg, dtUltRecDrg, leitoDrg, condAdqPaiDrg,
    estadoDrg, cidadeDrg
    , dataIntegracaoIni, dataIntegracaoFin, snIntegra) => {
    index.create({
        id_integracao: id,
        situacao: sitDrg,
        caraterInternacao: carIntDgr,
        numeroOperadora: nrOpDrg,
        numeroRegistro: nrRegDrg,
        numeroAtendimento: nrAteDrg,
        numeroAutorizacao: nrAutDrg,
        dataInternacao: dtIntDrg,
        dataAlta: dtAltaDrg,
        condicaoAlta: condAtlDrg,
        dataAutorizacao: dtAutDrg,
        internadoOutrasVezes: intOutDrg,
        hospitalInternacaoAnterior: hospAntDrg,
        reinternacao: reitDrg,
        recaida: recDrg,
        dataPrevistaAlta: dtPrevDrg,
        permanenciaPrevistaNaInternacao: permPrevIntDrg,
        permanenciaPrevistaNaAlta: permPrevAltDrg,
        permanenciaReal: permRealDrg,
        percentil: percDrg,
        procedencia: procDrg,
        ventilacaoMecania: ventMecDrg,
        dataCadastro: dtCadDrg,
        usuarioCadastro: usuCadDrg,
        usuarioCadastroAlta: usuCadAltDrg,
        dataUltimaAlteracao: dtUltAltDrg,
        usuadrioUltAlt: usuUltAltDrg,
        correcaoRegistro: corrRegAlt,
        usuarioCorrecao: usuCorDrg,
        dataUltimoRecalculo: dtUltRecDrg,
        leito: leitoDrg,
        condicaoAdquiridaGrave: condAdqPaiDrg,
        estado: estadoDrg,
        cidade: cidadeDrg,
        dataIntegracaoIni: dataIntegracaoIni,
        dataIntegracaoFin: dataIntegracaoFin,
        sn_integra: snIntegra
    });
}

module.exports = {
    insertAlta,
    insertAnaliCrit,
    insertBeneficiario,
    insertCid,
    insertCondAdquirida,
    insertCti,
    insertDRGRefinado,
    insertHosp,
    insertMedico,
    insertProc,
    insertRN,
    insertSupVent,
    insertCidSec,
    insertDrgExp
}