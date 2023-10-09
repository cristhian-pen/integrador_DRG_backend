require('dotenv').config();
const logs = require('../Model/Logs/index');
const { insertAlta, insertAnaliCrit,
    insertBeneficiario, insertCid,
    insertCondAdquirida, insertCti,
    insertDRGRefinado, insertHosp,
    insertMedico, insertProc,
    insertCidSec, insertSupVent, insertDrgExp } = require('./Controller');

const { deleteAlta, deleteAnaliCrit,
    deleteBeneficiario, deleteCid,
    deleteCondAdquirida, deleteCti,
    deleteDRGRefinado, deleteHosp,
    deleteMedico, deleteProc,
    deleteCidSec, deleteSupVent, deleteDrgExp } = require('./deleteController');

const api = require('../API/index');
const { authentication } = require('../API/Auth/index');
const snIntegra = 'S'


//API KEY
let KEY = process.env.KEY;

//Datas da json de envio dos dados
const data = new Date();
const date = data.toISOString().split('T')[0];


//Fix: O cliente pediu para alterar o json de retorno com o filtro dataCAdastroAlta.
let object = {
    "dataCadastroAltaInicial": `${date}`,
    "dataCadastroAltaFinal": `${date}`,
    "page": 1
}

async function Integra(req, res) {

    //Geração do token de autenticação
    var token = await authentication();

    try {
        //Consumo e importação dos dados da api drg
        const dados = await api.post('/search', object, {
            headers: {
                Authorization: token,
                'x-api-key': KEY,
            }
        });

        //atribuição do array a uma variavel
        const array = dados.data.items;

        //Variavel utilizada para controlar o acesso aos arrays
        const contador = dados.data.total;

        //Armazenamento dos dados nas tabelas
        for (var index = 0; index < contador; index++) {

            await insertHosp(
                array[index].hospital.codigo,
                array[index].hospital.nome,
                array[index].hospital.cnes
                , date,
                date



            );

            await insertDRGRefinado(
                array[index].drgBrasilRefinado.codigo,
                array[index].drgBrasilRefinado.descricao,
                array[index].drgBrasilRefinado.tipo,
                array[index].drgBrasilRefinado.peso
                , date,
                date


            );

            await insertDrgExp(
                array[index].id,
                array[index].situacao,
                array[index].caraterInternacao,
                array[index].numeroOperadora,
                array[index].numeroRegistro,
                array[index].numeroAtendimento,
                array[index].numeroAutorizacao,
                array[index].dataInternacao,
                array[index].dataAlta,
                array[index].condicaoAlta,
                array[index].dataAutorizacao,
                array[index].internadoOutrasVezes,
                array[index].hospitalInternacaoAnterior,
                array[index].reinternacao,
                array[index].recaida,
                array[index].dataPrevistaAlta,
                array[index].permanenciaPrevistaNaInternacao,
                array[index].permanenciaPrevistaNaAlta,
                array[index].permanenciaReal,
                array[index].ventilacaoMecanica,
                array[index].dataCadastro,
                array[index].usuarioCadastro,
                array[index].usuarioCadastroAlta,
                array[index].dataUltimaAlteracao,
                array[index].usuarioUltimaAlteracao,
                array[index].correcaoRegistro,
                array[index].usuarioCorrecao,
                array[index].dataUltimoRecalculo,
                array[index].leito,
                array[index].condicaoAdquiridaGrave,
                array[index].estado,
                array[index].cidade
                , date,
                date


            );

            await insertAlta(
                array[index].altaAdministrativa.numeroAtendimento,
                array[index].altaAdministrativa.numeroAutorizacao,
                array[index].altaAdministrativa.dataAutorizacao,
                array[index].altaAdministrativa.dataAtendimentoInicial,
                array[index].altaAdministrativa.dataAtendimentoFinal
                , date,
                date


            );

            await insertBeneficiario(
                array[index].beneficiario.codigoPaciente,
                array[index].beneficiario.plano,
                array[index].beneficiario.dataNascimento,
                array[index].beneficiario.sexo,
                array[index].beneficiario.idadeEmAnos,
                array[index].beneficiario.idadeEmDias,
                array[index].beneficiario.idadeEmMeses,
                array[index].beneficiario.particular,
                array[index].beneficiario.recemNascido,
                date,
                date


            );

            await insertCid(
                array[index].cidPrincipal.codigo,
                array[index].cidPrincipal.descricao,
                array[index].cidPrincipal.sensivelCuidadoPrimario
                , date,
                date


            );

            const contador2 = array[index].cidSecundario

            for (let i = 0; i < contador2.length; i++) {

                //Acesso aos arrays do objeto
                if (i < contador) {
                    await insertCidSec(
                        contador2[i].codigo,
                        contador2[i].descricao
                        , date,
                        date


                    );
                }
            }
            //----

            const contador3 = array[index].analiseCritica

            for (let i = 0; i < contador3.length; i++) {

                //Acesso aos arrays do objeto
                if (i < contador) {
                    await insertAnaliCrit(
                        contador3[i].dataAnalise,
                        contador3[i].analiseCritica,
                        date,
                        date


                    );
                }
            }
            //---

            const contador4 = array[index].condicaoAdquirida
            for (let i = 0; i < contador4.length; i++) {

                //Acesso aos arrays do objeto
                if (i < contador) {
                    await insertCondAdquirida(
                        contador4[i].codigo,
                        contador4[i].descricao,
                        contador4[i].dataManifestacao,
                        contador4[i].medico,
                        contador4[i].grave
                        , date,
                        date


                    );
                }
            }

            //---

            const contador5 = array[index].cti
            for (let i = 0; i < contador5.length; i++) {

                //Acesso aos arrays do objeto
                if (i < contador) {
                    await insertCti(
                        contador5[i].dataInicial,
                        contador5[i].dataFinal,
                        contador5[i].condicaoAlta,
                        contador5[i].tipo,
                        contador5[i].permanenciaPrevistaNaAlta,
                        contador5[i].permanenciaReal,
                        date,
                        date


                    );
                }
            }
            //---

            const contador6 = array[index].medico
            for (let i = 0; i < contador6.length; i++) {

                //Acesso aos arrays do objeto
                if (i < contador) {
                    await insertMedico(
                        contador6[i].nome,
                        contador6[i].uf,
                        contador6[i].crm,
                        contador6[i].especialidade,
                        contador6[i].medicoResponsavel,
                        contador6[i].tipoAtuacao
                        , date,
                        date


                    );
                }
            }

            //--

            const contador7 = array[index].procedimento

            for (let i = 0; i < contador7.length; i++) {

                //Acesso aos arrays do objeto
                if (i < contador) {
                    await insertProc(
                        contador7[i].codigo,
                        contador7[i].nome,
                        contador7[i].porte,
                        contador7[i].dataExecucao,
                        contador7[i].dataExecucaoFinal
                        , date,
                        date


                    );
                }
            }
            //--

            const contador8 = array[index].suporteVentilatorio

            for (let i = 0; i < contador8.length; i++) {

                //Acesso aos arrays do objeto
                if (i < contador) {
                    await insertSupVent(
                        contador8[i].tipo,
                        contador8[i].local,
                        contador8[i].dataInicial,
                        contador8[i].dataFinal,
                        date,
                        date
                    );
                }
            }
            //await insertRN()
        }


        //Retorna mensagem de OK
        res.json({
            message: "Dados integrados"
        });

    } catch (error) {

        //Retorna erro no console
        console.log("Error: " + error);

        //Tratamento de exeptions da API
        if (!token || !KEY) {
            res.status(401).send({
                message: "Dados não integrados, você não esta autorizado!"
            })
        }
        else {
            res.status(500).send({
                message: "Dados não integrados, entre em contato com o desenvolvedor!"
            });
        }
    }

}


//Feature de integração manual solicitado pelo cliente

async function ManualIntegra(req, res) {

    const { dataAltaIni, dataAltaFin, page } = req.body;

    const objectManual = {
        "dataAltaInicial": `${dataAltaIni}`,
        "dataAltaFinal": `${dataAltaFin}`,
        "page": `${page}`
    }

    //Geração do token de autenticação
    var token = await authentication();
    try {

        //Consumo e importação dos dados da api drg
        const dados = await api.post('/search', objectManual, {
            headers: {
                Authorization: token,
                'x-api-key': KEY,
            }
        });

        //atribuição do array a uma variavel
        const array = dados.data.items;

        //Variavel utilizada para controlar o acesso aos arrays
        const contador = dados.data.total;

        //Armazenamento dos dados nas tabelas
        for (var index = 0; index < contador; index++) {

            await insertHosp(
                array[index].hospital.codigo,
                array[index].hospital.nome,
                array[index].hospital.cnes
                , dataAltaIni,
                dataAltaFin,
                snIntegra
            );

            await insertDRGRefinado(
                array[index].drgBrasilRefinado.codigo,
                array[index].drgBrasilRefinado.descricao,
                array[index].drgBrasilRefinado.tipo,
                array[index].drgBrasilRefinado.peso
                , dataAltaIni,
                dataAltaFin,
                snIntegra
            );

            await insertDrgExp(
                array[index].id,
                array[index].situacao,
                array[index].caraterInternacao,
                array[index].numeroOperadora,
                array[index].numeroRegistro,
                array[index].numeroAtendimento,
                array[index].numeroAutorizacao,
                array[index].dataInternacao,
                array[index].dataAlta,
                array[index].condicaoAlta,
                array[index].dataAutorizacao,
                array[index].internadoOutrasVezes,
                array[index].hospitalInternacaoAnterior,
                array[index].reinternacao,
                array[index].recaida,
                array[index].dataPrevistaAlta,
                array[index].permanenciaPrevistaNaInternacao,
                array[index].permanenciaPrevistaNaAlta,
                array[index].permanenciaReal,
                array[index].ventilacaoMecanica,
                array[index].dataCadastro,
                array[index].usuarioCadastro,
                array[index].usuarioCadastroAlta,
                array[index].dataUltimaAlteracao,
                array[index].usuarioUltimaAlteracao,
                array[index].correcaoRegistro,
                array[index].usuarioCorrecao,
                array[index].dataUltimoRecalculo,
                array[index].leito,
                array[index].condicaoAdquiridaGrave,
                array[index].estado,
                array[index].cidade
                , dataAltaIni,
                dataAltaFin,
                snIntegra
            );

            await insertAlta(
                array[index].altaAdministrativa.numeroAtendimento,
                array[index].altaAdministrativa.numeroAutorizacao,
                array[index].altaAdministrativa.dataAutorizacao,
                array[index].altaAdministrativa.dataAtendimentoInicial,
                array[index].altaAdministrativa.dataAtendimentoFinal
                , dataAltaIni,
                dataAltaFin,
                snIntegra
            );

            await insertBeneficiario(
                array[index].beneficiario.codigoPaciente,
                array[index].beneficiario.plano,
                array[index].beneficiario.dataNascimento,
                array[index].beneficiario.sexo,
                array[index].beneficiario.idadeEmAnos,
                array[index].beneficiario.idadeEmDias,
                array[index].beneficiario.idadeEmMeses,
                array[index].beneficiario.particular,
                array[index].beneficiario.recemNascido,
                dataAltaIni,
                dataAltaFin,
                snIntegra
            );

            await insertCid(
                array[index].cidPrincipal.codigo,
                array[index].cidPrincipal.descricao,
                array[index].cidPrincipal.sensivelCuidadoPrimario
                , dataAltaIni,
                dataAltaFin,
                snIntegra
            );

            const contador2 = array[index].cidSecundario

            for (let i = 0; i < contador2.length; i++) {

                //Acesso aos arrays do objeto
                if (i < contador) {
                    await insertCidSec(
                        contador2[i].codigo,
                        contador2[i].descricao
                        , dataAltaIni,
                        dataAltaFin,
                        snIntegra
                    );
                }
            }
            //----

            const contador3 = array[index].analiseCritica

            for (let i = 0; i < contador3.length; i++) {

                //Acesso aos arrays do objeto
                if (i < contador) {
                    await insertAnaliCrit(
                        contador3[i].dataAnalise,
                        contador3[i].analiseCritica,
                        dataAltaIni,
                        dataAltaFin,
                        snIntegra
                    );
                }
            }
            //---

            const contador4 = array[index].condicaoAdquirida
            for (let i = 0; i < contador4.length; i++) {

                //Acesso aos arrays do objeto
                if (i < contador) {
                    await insertCondAdquirida(
                        contador4[i].codigo,
                        contador4[i].descricao,
                        contador4[i].dataManifestacao,
                        contador4[i].medico,
                        contador4[i].grave
                        , dataAltaIni,
                        dataAltaFin,
                        snIntegra
                    );
                }
            }

            //---

            const contador5 = array[index].cti
            for (let i = 0; i < contador5.length; i++) {

                //Acesso aos arrays do objeto
                if (i < contador) {
                    await insertCti(
                        contador5[i].dataInicial,
                        contador5[i].dataFinal,
                        contador5[i].condicaoAlta,
                        contador5[i].tipo,
                        contador5[i].permanenciaPrevistaNaAlta,
                        contador5[i].permanenciaReal,
                        dataAltaIni,
                        dataAltaFin,
                        snIntegra
                    );
                }
            }
            //---

            const contador6 = array[index].medico
            for (let i = 0; i < contador6.length; i++) {

                //Acesso aos arrays do objeto
                if (i < contador) {
                    await insertMedico(
                        contador6[i].nome,
                        contador6[i].uf,
                        contador6[i].crm,
                        contador6[i].especialidade,
                        contador6[i].medicoResponsavel,
                        contador6[i].tipoAtuacao
                        , dataAltaIni,
                        dataAltaFin,
                        snIntegra
                    );
                }
            }

            //--

            const contador7 = array[index].procedimento

            for (let i = 0; i < contador7.length; i++) {

                //Acesso aos arrays do objeto
                if (i < contador) {
                    await insertProc(
                        contador7[i].codigo,
                        contador7[i].nome,
                        contador7[i].porte,
                        contador7[i].dataExecucao,
                        contador7[i].dataExecucaoFinal
                        , dataAltaIni,
                        dataAltaFin,
                        snIntegra
                    );
                }
            }
            //--

            const contador8 = array[index].suporteVentilatorio

            for (let i = 0; i < contador8.length; i++) {

                //Acesso aos arrays do objeto
                if (i < contador) {
                    await insertSupVent(
                        contador8[i].tipo,
                        contador8[i].local,
                        contador8[i].dataInicial,
                        contador8[i].dataFinal,
                        dataAltaIni,
                        dataAltaFin,
                        snIntegra
                    );
                }
            }
            //await insertRN()

        }

        //Retorna mensagem de OK
        res.json({
            message: "Dados integrados"
        });

    } catch (error) {

        //Retorna erro no console
        console.log("Error: " + error);

        //Tratamento de exeptions da API
        if (!token || !KEY) {
            res.status(401).send({
                message: "Dados não integrados, você não esta autorizado!"
            })
        }
        else {
            res.status(500).send({
                message: "Dados não integrados, entre em contato com o desenvolvedor!"
            });
        }

    }

}



async function deletaIntegra(req, res) {

    const { dataIntegracaoIni, dataIntegracaoFin } = req.body;

    await deleteHosp(dataIntegracaoIni, dataIntegracaoFin, snIntegra);

    await deleteDRGRefinado(dataIntegracaoIni, dataIntegracaoFin, snIntegra);

    await deleteDrgExp(dataIntegracaoIni, dataIntegracaoFin, snIntegra);

    await deleteAlta(dataIntegracaoIni, dataIntegracaoFin, snIntegra);

    await deleteBeneficiario(dataIntegracaoIni, dataIntegracaoFin, snIntegra);

    await deleteCid(dataIntegracaoIni, dataIntegracaoFin, snIntegra);

    await deleteCidSec(dataIntegracaoIni, dataIntegracaoFin, snIntegra);

    await deleteAnaliCrit(dataIntegracaoIni, dataIntegracaoFin, snIntegra);

    await deleteCondAdquirida(dataIntegracaoIni, dataIntegracaoFin, snIntegra);

    await deleteCti(dataIntegracaoIni, dataIntegracaoFin, snIntegra);

    await deleteMedico(dataIntegracaoIni, dataIntegracaoFin, snIntegra);

    await deleteProc(dataIntegracaoIni, dataIntegracaoFin, snIntegra);

    await deleteSupVent(dataIntegracaoIni, dataIntegracaoFin, snIntegra);

    //Retorna mensagem de OK
    res.json({
        message: "Dados deletados"
    });

}


//Area de Logs do sistema
const registerLogs = async (req, res) => {
    const { message } = req.params;

    logs.create({
        LOGS: message
    })
    try {
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
    }
}

const searchLogs = async (req, res) => {

    const info = await logs.findAll({
        attributes: ['id', 'LOGS']
    });
    try {
        res.json({
            info
        })
    } catch (error) {
        res.sendStatus(404).json({ message: 'NotFound' })
    }

}


//Proxima feature da aplicação sera autenticação jwt
//Code here...

module.exports = { registerLogs, searchLogs, ManualIntegra, deletaIntegra, Integra };