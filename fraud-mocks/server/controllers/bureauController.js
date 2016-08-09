var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

//var retryWithDoc = 0;

var bureauController = {
        
        ping: function(request, response) {
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            response.write(JSON.stringify({"status":"withdraw-api is UP [version: 0.0.21]"}));
            response.end();        
        },
        getParsedZipcode: function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            
            var result = {
                            "cpf": "62483579000",
                            "dob": "1964-09-29",
                            "age": "49",
                            "sign": "LIBRA",
                            "school": "",
                            "name": "MARIA JANETE DA SILVA NOVASKI",
                            "sex": "F",
                            "statusrf": "REGULAR",
                            "cars": [
                                {
                                    "year": "",
                                    "model": "",
                                    "renevam": ""
                                }
                            ],
                            "addresses": [
                                {
                                    "type_info": "PROSPECCAO",
                                    "neighbourhood": "ZONA NOVA",
                                    "cep": "95555000",
                                    "city": "CAPAO DA CANOA",
                                    "complement": "",
                                    "state": "RS",
                                    "location": "ANTONIO PRADO",
                                    "number": "714",
                                    "type": "RESIDENCIAL",
                                    "type_location": "R",
                                    "address_dt": "2012-09-11",
                                    "phones": [
                                        {
                                            "rec": "1",
                                            "ddd": "51",
                                            "number": "36252508",
                                            "type": "PROSPECCAO"
                                        }
                                    ]
                                },
                                {
                                    "type_info": "LOCALIZACAO",
                                    "neighbourhood": "SANTA LUZIA",
                                    "cep": "95555000",
                                    "city": "CAPAO DA CANOA",
                                    "complement": "",
                                    "state": "RS",
                                    "location": "GENERAL OSORIO",
                                    "number": "344",
                                    "type": "RESIDENCIAL",
                                    "type_location": "R",
                                    "address_dt": "2005-01-01",
                                    "phones": []
                                }
                            ],
                            "emails": [
                                "mj-novaski@uol.com.br"
                            ],
                            "profs": [
                                ""
                            ],
                            "incomes": [
                                ""
                            ],
                            "jobs": [
                                ""
                            ],
                            "fg_phones": [
                                "S"
                            ],
                            "fg_phones_hist": [
                                "N"
                            ],
                            "phones": [
                                {
                                    "dt": "2012-09-11",
                                    "ddd": "51",
                                    "number": "3625-2508",
                                    "type": "PROSPECCAO"
                                }
                            ]
                        };

            response.write(JSON.stringify(result));
            response.end();
        },
        
        getDni: function(request, response){
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            
            var result = {
                      "REPORTE": {
                        "CONSULTA": {
                          "Calificacion": "A",
                          "TELEFONOS": {
                            "TELEFONOS_POR_DNICUIT": "NO",
                            "TELEFONOS_POR_NOMBRE": "NO",
                            "TELEFONOS_POR_VECINOS": "NO",
                            "TELEFONOS_ADICIONALES": "NO",
                            "TELEFONOS_POR_DOMICILIO": "NO"
                          },
                          "VINCULOS": {
                            "OTROS_VINCULOS": {
                              "VINCULOS_BCRA": "NO",
                              "VINCULOS_AUTOMOTOR": "NO",
                              "VINCULOS_PROPIEDADES": "NO",
                              "VINCULOS_BANCARIOS": {
                                "Vinculo_Bancario": [
                                  {
                                    "CUIT": 23079502189,
                                    "Nombre": "FABARO MIGUEL ANGEL"
                                  },
                                  {
                                    "CUIT": 27057976263,
                                    "Nombre": "BALMACEDA ALICIA SUSANA"
                                  }
                                ]
                              },
                              "VINCULOS_BOLETINOFICIAL": "NO",
                              "VINCULOS_RELACIONES": "NO"
                            },
                            "VINCULOS_FAMILIARES": {
                              "Vinculo_Familiar": [
                                {
                                  "FechaNac": "24/11/1978",
                                  "DNI_CUIT": 20267915866,
                                  "Edad": 35,
                                  "Nombre": "FABARO PABLO JAVIER",
                                  "Vinculo": ""
                                },
                                {
                                  "FechaNac": "27/02/1947",
                                  "DNI_CUIT": 23079502189,
                                  "Edad": 67,
                                  "Nombre": "FABARO MIGUEL ANGEL",
                                  "Vinculo": ""
                                },
                                {
                                  "FechaNac": "22/01/1948",
                                  "DNI_CUIT": 27057976263,
                                  "Edad": 66,
                                  "Nombre": "BALMACEDA ALICIA SUSANA",
                                  "Vinculo": ""
                                },
                                {
                                  "FechaNac": "03/09/1976",
                                  "DNI_CUIT": 27254623593,
                                  "Edad": 37,
                                  "Nombre": "FABARO DANIELA KARI",
                                  "Vinculo": ""
                                }
                              ]
                            }
                          },
                          "CONSULTAS_DETALLE": {
                            "CONSULTA_DETALLE": {
                              "Usuario": "xml_mlibre - Trigo, Ronaldo",
                              "Empresa": "MercadoLibre S.R.L.",
                              "Rubro": "Empresas de Rubros Varios",
                              "FechaHora": "01/07/2014 16:38:20"
                            }
                          },
                          "DOMICILIOS": {
                            "OTROS_DOMICILIOS": "NO",
                            "DOMICILIOS_PADRON": {
                              "Padron_2011": "A GOMEZ 920(O) -    Pocito - San Juan",
                              "Padron_2009": "A GOMEZ 920(O) - - Pocito - San Juan",
                              "Padron_2013": "A GOMEZ 920(O) - - Pocito - San Juan"
                            },
                            "DOMICILIOS_BANCARIOS": "NO",
                            "DOMICILIOS_FISCALES": {
                              "DOMICILIO_FISCAL": "AGUSTIN GOMEZ (O) 920      - POCITO-ABERASTA (CP: 5427) - San Juan"
                            }
                          },
                          "DATOS_LABORALES": {
                            "IMPUESTOS_AUTONOMOS": {
                              "PagosEn12Meses": 0
                            },
                            "AUTONOMOS": "NO",
                            "RELACION_DEPENDENCIA": {
                              "EMPLEOS_ANTERIORES": {
                                "EMPRESA": [
                                  {
                                    "Actividad": "Codigo 809000: Enseñanza para adultos y servicios de enseñanza n.c.p.",
                                    "CUIT": 30707683895,
                                    "Estado": "BAJA",
                                    "Nivel": "Nivel 1 ($0 - $1500)",
                                    "Baja": "31/12/2009",
                                    "Empleados": 40,
                                    "Telefono": "(0264)422-4486",
                                    "Alta": "01/03/2009",
                                    "AltaFecha": 20090301,
                                    "Domicilio": "AV CORDOBA   (ESTE) 261 - SAN JUAN (CP: 5400)  - San Juan",
                                    "RazonSocial": "SAINT THOMAS  SRL"
                                  },
                                  {
                                    "Actividad": "Codigo 803200: Enseñanza universitaria excepto formación de posgrado",
                                    "CUIT": 30519376810,
                                    "Estado": "BAJA",
                                    "Nivel": "",
                                    "Baja": "31/03/2008",
                                    "Empleados": 1024,
                                    "Telefono": "(0266)443-2173",
                                    "Alta": "01/07/2007",
                                    "AltaFecha": 20070701,
                                    "Domicilio": "AV. I. DE LA ROZA OESTE 1516 - RIVADAVIA (CP: 5406)  - San Juan",
                                    "RazonSocial": "UNIVERSIDAD CATOLICA DE CUYO"
                                  }
                                ]
                              },
                              "EMPRESA": [
                                {
                                  "Actividad": "Codigo 809000: Enseñanza para adultos y servicios de enseñanza n.c.p.",
                                  "Condicion": "SERVICIOS COMUNES Mayor de 18 años",
                                  "Telefono": "",
                                  "Actividad_Empleado": "Res 71/99 SSS y otros",
                                  "Modalidad_Contrato": "A tiempo parcial: Indeterminado /permanente",
                                  "AltaFecha": 20140301,
                                  "Estado": "ALTA",
                                  "CUIT": 30707310037,
                                  "Nivel": "Nivel 1 ($0 - $1500)",
                                  "Baja": "-",
                                  "Empleados": 53,
                                  "Alta": "01/03/2014",
                                  "Domicilio": "AV CORDOBA ESTE 232 - SAN JUAN (CP: 5400)  - San Juan",
                                  "Zona": "San Juan",
                                  "RazonSocial": "ASOCIACION DE CULTURA SAINT JOHN S"
                                },
                                {
                                  "Actividad": "Codigo 751100: Servicios generales de la administración pública",
                                  "Condicion": "SERVICIOS COMUNES Mayor de 18 años",
                                  "Telefono": "",
                                  "Actividad_Empleado": "Docente de Prov incorporada/SIJP S/obra social nacional C/ART Dec 137/05",
                                  "Modalidad_Contrato": "Empleo público provincial",
                                  "AltaFecha": 20060501,
                                  "Estado": "ALTA",
                                  "CUIT": 30999015162,
                                  "Nivel": "Nivel 4 ($5000 - $10000)",
                                  "Baja": "-",
                                  "Empleados": 44494,
                                  "Alta": "01/05/2006",
                                  "Domicilio": "CENTRO CIVICO 2DO PISO NÚCLEO 8 EDIFICIO 0 Piso:2  S:N 8 - SAN JUAN (CP: 5400)  - San Juan",
                                  "Zona": "San Juan",
                                  "RazonSocial": "GOBIERNO DE LA PROVINCIA DE SAN JUAN ADMINISTRACION CENTRAL"
                                }
                              ]
                            },
                            "PAGOS_AUTONOMOS": "NO",
                            "APORTES_DOMESTICOS": "NO"
                          },
                          "SITUACION_FINANCIERA": {
                            "FACTURACION": {
                              "FACT_ANUAL": [
                                {
                                  "FactuDatos": "NO",
                                  "AÑO": 2011
                                },
                                {
                                  "FactuDatos": "NO",
                                  "AÑO": 2012
                                }
                              ]
                            },
                            "BANCOS_OPERA": {
                              "Banco": [
                                "BBVA BANCO FRANCES S.A. (C.A. $, C.A. $  Remuneracion)",
                                "BANCO DE SAN JUAN S.A. (Cta. Cte s/int)"
                              ]
                            }
                          },
                          "PARTICIPACIONES_SOCIETARIAS": "NO",
                          "Direccion": "AGUSTIN GOMEZ (O) 920",
                          "Provincia": "San Juan",
                          "DATOS_PARTICULARES": {
                            "DATO_PARTICULAR": {
                              "AnioNac": 1981,
                              "FechaNac": "07/02/1981",
                              "NroDoc": 28668558,
                              "Sexo": "F",
                              "Version": "EJEMPLAR B",
                              "Domicilio": "AGUSTIN GOMEZ (O) 920      -  -"
                            }
                          },
                          "CONSULTAS_REALIZADAS": {
                            "ConsultaSemestre": 1,
                            "EntidadSemestre": 1
                          },
                          "Localidad": "POCITO-ABERASTA",
                          "BIENES_PERSONALES": {
                            "PROPIEDADES": "NO",
                            "AUTOMOTORES": {
                              "AUTOMOTOR": {
                                "FechaTramite": 20130612,
                                "Modelo": "RENAULT SEDAN 5 PUERTAS SANDERO EXPRESSION 1.6 16V ABS",
                                "Patente": "MPS366",
                                "Año": 2013,
                                "PorcTitularidad": 100
                              }
                            }
                          },
                          "TransId": 49396823,
                          "CONSULTAS_RESUMEN": "NO",
                          "CUIL": 27286685582,
                          "SEXO": "F",
                          "OTRAS_MOROSIDADES": {
                            "MOROSIDAD_CREDPERS": "NO",
                            "ANTECEDENTES_MOROSIDAD": {
                              "Morosidad_24M": "-",
                              "Morosidad_Actual": "-",
                              "Morosidad_12M": "-"
                            },
                            "HISTOMOROSIDAD_CREDPERS": {
                              "HISTOMORA_CREDPERS": [
                                {
                                  "HistoDatos": "NO",
                                  "HistoAño": 2009
                                },
                                {
                                  "HistoDatos": "NO",
                                  "HistoAño": 2010
                                },
                                {
                                  "HistoDatos": "NO",
                                  "HistoAño": 2011
                                },
                                {
                                  "HistoDatos": "NO",
                                  "HistoAño": 2012
                                },
                                {
                                  "HistoDatos": "NO",
                                  "HistoAño": 2013
                                }
                              ],
                              "ULT_INFO_HISTOMOROSIDAD": {
                                "MES": 6,
                                "AÑO": 2014
                              }
                            }
                          },
                          "Nombre": "FABARO BALMACEDA NATACHA IVON",
                          "CP": 5427,
                          "OBSERVACIONES": "NO",
                          "MOROSIDAD_BCRA": {
                            "CHEQUES_RECHAZADOS": {
                              "Ultimos12M": "-",
                              "Actuales": "-",
                              "Ultimos24M": "-"
                            },
                            "ULT_INFO_BCRA": {
                              "MES": 3,
                              "AÑO": 2014
                            },
                            "QUIEBRAS_CONCURSOS": "NO",
                            "Situacion12M": "-",
                            "SituacionActual": "-",
                            "EMBARGOS": "NO",
                            "Situacion24M": "-",
                            "JUICIOS": "NO",
                            "HISTORICO_BCRA": "NO"
                          },
                          "CONSULTAS_TOTALES": {
                            "ConsultasMes": 0,
                            "ConsultasDia": 0,
                            "ConsultasAnio": 0
                          }
                        },
                        "RESULTADO": "OK",
                        "VERSION_XML": 2.25
                      }
                    };

            response.write(JSON.stringify(result));
            response.end();
        },

        getParsedZipOnline: function(request, response){
            
            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/bureau/parsed/(.*)/ziponline/(.*)\?info_detail=simple');
            uriRegExp.exec(pathname);
            var number = RegExp.$2;
            
            console.log("entrando a getParsedZipOnline: " + number);
            
            if (number == "222333") {
                response.writeHead(500, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify({"error":"not messges"}));
                response.end();
            }
            
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            
            
            if (number == "123") {
              response.write(JSON.stringify({"name":"Test 1", "status": "active"}));
            } else {

              response.write(JSON.stringify({"name":"Test 2", "status": "deactive"}));
            }
             
            response.end();
        },
        getBacenData: function(request, response){
            
            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/bureau/bacen/(.*)/(.*)');
            uriRegExp.exec(pathname);
            var type = RegExp.$2;
            var number = RegExp.$2;
            
            console.log("entrando a getBacenData: " + type + number);
            
            if (number == "222333") {
                response.writeHead(500, {
                    'Content-Type' : 'application/json; charset=utf-8'
                });
                response.write(JSON.stringify({"error":"not messges"}));
                response.end();
            }
            
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            
            
            if (number == "123") {
              response.write(JSON.stringify({"info_bacen":[{"current_bureau":{"name":"ziponline","priority":1},"data":{"name":"Test 1","cpf":"01234567890","status":"active","status_date":"2015-02-24"}}]}));
            } else {

              response.write(JSON.stringify({"info_bacen":[{"current_bureau":{"name":"ziponline","priority":1},"data":{"name":"Test 2","cpf":"01234567890","status":"deactive","status_date":"2015-02-24"}}]}));
            }
            
            response.end();
        },
        getBureauAML: function(request, response){
            
            response.writeHead(200, {
                'Content-Type' : 'application/json; charset=utf-8'
            });
            
            response.write(JSON.stringify({"identification":"30709259683","identification_type_orig":"cuit","identification_type":"0","name":"SZWARCMAN FABIAN ANGEL Y SZULMAISTER MARGARITA SH","address":"AMENABAR 2460","zip_code":"1428","geographic_zone_orig":"CIUDAD AUTONOMA DE BUENOS AIRES","geographic_zone":"C1000","business_code_orig":"475410","business_code":"05719","bureau":"afip"}));
           
            response.end();
        },

};

exports.getWhitelist = bureauController.getParsedZipcode;
exports.getDni = bureauController.getDni;
exports.ping = bureauController.ping;
exports.getBureauAML = bureauController.getBureauAML;

//Mappings
urlMapping.add ([{
     pattern: '^/bureau/parsed/(.*)/zipcode/(.*)?',
     action: {
         'GET':bureauController.getParsedZipcode          
    }       
 },{
     pattern: '^/bureau/parsed/(.*)/ziponline/(.*)',
     action: {
         'GET':bureauController.getParsedZipOnline         
    }       
 },{
     pattern: '^/bureau/bacen/(.*)/(.*)',
     action: {
         'GET':bureauController.getBacenData         
    }       
 },{
     pattern: '^/bureau/ping',
     action: {
         'GET':bureauController.ping          
    }       
 },{
     pattern: '^/burohisp/AR/rolinfodni',
     action: {
         'POST':bureauController.getDni         
    }       
 },{
     pattern: '^/bureau/mla/visa/(.*)/(.*)',
     action: {
         'GET':bureauController.getBureauAML         
    }       
 }]);

