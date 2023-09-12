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


//Criação de tabelas
/* rn.sync();
altaAdministrativa.sync();
cidSecundario.sync();
analiseCritica.sync();
beneficiario.sync();
cidPrincipal.sync()
condicaoAdquirida.sync();
cti.sync();
drgBrasilRefinado.sync();
medico.sync();
procedimento.sync();
suporteVentilatorio.sync();
index.sync();
hospital.sync(); */


//Relacionamento das tabelas
/* beneficiario.hasMany(procedimento);
beneficiario.belongsToMany(condicaoAdquirida, { through: 'codigo', foreignKey: 'cd_paciente' });
beneficiario.belongsTo(leito, { foreignKey: 'id_leito' });
beneficiario.belongsTo(altaAdministrativa, { foreignKey: 'id_alta' });
beneficiario.belongsTo(cti, { foreignKey: 'id_cti' });
beneficiario.belongsTo(rn, { foreignKey: 'id_rn' });
beneficiario.belongsTo(cidPrincipal, { foreignKey: 'codigo_cti' });
medico.belongsTo(beneficiario, { foreignKey: 'id_medico' });
medico.hasMany(procedimento);
leito.belongsTo(suporteVentilatorio, { foreignKey: 'id_supVent' });
leito.belongsTo(cti, { foreignKey: 'id_cti' });
rn.belongsTo(altaAdministrativa, { foreignKey: 'id_alta' });
condicaoAdquirida.belongsToMany(beneficiario, { through: 'codigo', foreignKey: 'codigo' }); */