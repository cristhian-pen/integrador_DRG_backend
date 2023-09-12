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
const insertBeneficiario = async (cdPac, plano, nasc, sexo, idadeAnos, idadeDias, idadeMeses, part, rn) => {

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
    });

}

const insertCid = async (cdCid, desc, sensCuid) => {
    await cidPrincipal.create({
        cd_cid: cdCid,
        descricao: desc,
        sensivelCuidadoPrimario: sensCuid
    });
}

const insertCidSec = async (cdSec, descSec) => {
    await cidSecundario.create({
        cd_cid_sec: cdSec,
        desc_cid_sec: descSec
    });
}

const insertAlta = async (nmAtend, nmAut, dtAut, dtAltInicial, dtAtendFinal) => {
    await altaAdministrativa.create({
        numeroAtendimento: nmAtend,
        numeroAutorizacao: nmAut,
        dataAutorizacao: dtAut,
        dataAtendimentoInicial: dtAltInicial,
        dataAtendimentoFinal: dtAtendFinal,
    })
};

const insertAnaliCrit = async (dtAnali, analiCrit) => {
    await analiseCritica.create({
        dataAnalise: dtAnali,
        analiseCritica: analiCrit,
    });
}

const insertCondAdquirida = async (cdCondAdq, desc, dtOcor, dtManifest, grave) => {
    await condicaoAdquirida.create({
        codigo: cdCondAdq,
        descricao: desc,
        dataOcorrencia: dtOcor,
        dataManifestacao: dtManifest,
        grave: grave,
    });
}

const insertCti = async (dtIni, dtFin, condAlt, tp, perPrevAlta, perReal) => {
    await cti.create({
        dt_inicial: dtIni,
        dt_final: dtFin,
        condicaoAlta: condAlt,
        tip: tp,
        permanenciaPrevistaNaAlta: perPrevAlta,
        permanenciaReal: perReal
    });
}

const insertDRGRefinado = async (cd, desc, tp, peso) => {
    await drgBrasilRefinado.create({
        codigo: cd,
        descricao: desc,
        tipo: tp,
        peso: peso,
    });
}

const insertHosp = async (idHosp, nmHosp, cnes) => {
    await hospital.create({
        id_hospital: idHosp,
        nomeHospital: nmHosp,
        cnes: cnes
    });
}

const insertMedico = async (nmMed, ufMed, crm, espMed, medRes, atuacao) => {
    await medico.create({
        nome: nmMed,
        uf: ufMed,
        crm: crm,
        especialidade: espMed,
        medicoResponsavel: medRes,
        tipAtuacao: atuacao,
    });
}

const insertProc = async (cdProc, nmProc, port, dtExec, dtExecFinal) => {
    await procedimento.create({
        cd_procedimento: cdProc,
        nm_procedimento: nmProc,
        porte: port,
        dtExecucao: dtExec,
        dtExecucaoFinal: dtExecFinal,
    });
}

//Sempre vem vazio tratar porsterior
const insertRN = async (pesoRn, idadeRn, sexoRn, nascVivo, tocoTra, apgar, apgarQuintoMin, alta48Hrs) => {
    await rn.create({
        pesoNascimento: pesoRn,
        idadeGestacional: idadeRn,
        sexo: sexoRn,
        nascidoVivo: nascVivo,
        tocotraumatismo: tocoTra,
        apgar: apgar,
        apgarQuintoMinuto: apgarQuintoMin,
        alta48Horas: alta48Hrs,
    });
}


const insertSupVent = async (tpSupVent, localSupVent, dtIni, dtFin) => {
    await suporteVentilatorio.create({
        tipo: tpSupVent,
        local: localSupVent,
        dataInicial: dtIni,
        dataFinal: dtFin,
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
) => {
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