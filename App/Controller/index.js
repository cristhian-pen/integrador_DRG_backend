require('dotenv').config();
const logs = require('../Model/Logs/index');
const { insertAlta, insertAnaliCrit,
    insertBeneficiario, insertCid,
    insertCondAdquirida, insertCti,
    insertDRGRefinado, insertHosp,
    insertMedico, insertProc,
    insertCidSec, insertSupVent, insertDrgExp } = require('./Controller');

const api = require('../API/index');
const { authentication } = require('../API/Auth/index');

//API KEY
let KEY = process.env.KEY;

//Datas da json de envio dos dados
const data = new Date();
const date = data.toISOString().split('T')[0];

let object = {
    "dataAltaInicial": "2023-06-01",
    "dataAltaFinal": "2023-06-01",
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
                array[index].hospital.cnes,
            );

            await insertDRGRefinado(
                array[index].drgBrasilRefinado.codigo,
                array[index].drgBrasilRefinado.descricao,
                array[index].drgBrasilRefinado.tipo,
                array[index].drgBrasilRefinado.peso
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
            );

            await insertAlta(
                array[index].altaAdministrativa.numeroAtendimento,
                array[index].altaAdministrativa.numeroAutorizacao,
                array[index].altaAdministrativa.dataAutorizacao,
                array[index].altaAdministrativa.dataAtendimentoInicial,
                array[index].altaAdministrativa.dataAtendimentoFinal
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
            );

            await insertCid(
                array[index].cidPrincipal.codigo,
                array[index].cidPrincipal.descricao,
                array[index].cidPrincipal.sensivelCuidadoPrimario
            );

            const contador2 = array[index].cidSecundario

            for (let i = 0; i < contador2.length; i++) {

                //Acesso aos arrays do objeto
                if (i < contador) {
                    await insertCidSec(
                        contador2[i].codigo,
                        contador2[i].descricao

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

//Auth jwt
//Code here...

module.exports = { Integra, registerLogs, searchLogs };