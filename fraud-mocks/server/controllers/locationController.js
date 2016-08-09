var url = require('url');
var resourceManager = require("../services/resourceManager");
var jsonHandler = require("../services/jsonHandler");
var urlMapping = require("../urlMapping");

var locationController = {
  
        getState : function(request,response){
            var countryId = getResourceParameter(request);
            resourceManager.getResource('countries', countryId, response);
        },
        
        getCity : function(request,response){
            var stateId = getResourceParameter(request);
            resourceManager.getResource('states', stateId, response);
        },

        getCityInfo : function(request,response){
            var cityId = getResourceParameter(request);
            savingCities();
            resourceManager.getResource('cities', cityId, response);
        },
        getZipCode : function(request, response){

            // extract data from url
            var pathname = url.parse(request.url).pathname;
            var uriRegExp = new RegExp('/countries/.*/zip_codes/(\\w+)');
            uriRegExp.exec(pathname);
            
            var zip_code = RegExp.$1;
            
            if (zip_code == 5700) {
              // mode = me1
              response.writeHead(200, {
                  'Content-Type' : 'application/json; charset=utf-8'
              });
              response.write(JSON.stringify({  "zip_code": "5700", "city":  {    "id": null, "name": null  },  "state": {    "id": "AR-D",    "name": "San Luis"},  "country": {  "id": "AR", "name": "Argentina"}}));
            }
            else{
                if (zip_code == 30880180) {
                  // mode = me1
                  response.writeHead(200, {
                      'Content-Type' : 'application/json; charset=utf-8'
                  });
                  response.write(JSON.stringify({"zip_code": "30880180",    "city": {"id": "TUxCQ0JFTGU0ODdm", "name": "BeloHorizonte"},    "state": {"id": "BR-MG", "name": "MinasGerais"},    "country": {"id": "BR", "name": "Brasil"},    "extended_attributes": {"address": "Palestina", "owner_name": null, "zip_code_type": {"type": "LO", "description": "Logradouro"}, "city_type": "CP", "city_name": "BeloHorizonte", "version": null}}));
                }
                else {
                  /* not found (la orden no tiene shipping asociado) */
                  response.writeHead(404, {
                      'Content-Type' : 'application/json; charset=utf-8'
                  });
                  response.write(JSON.stringify({"message":"Not found shipping for preferenceId: "+zip_code,"error":"not_found_shipping_for_preference_id","status":404,"cause":null}));
                }
            }
           response.end();
        }
};

function getResourceParameter(request){
    var pathname = url.parse(request.url).pathname;
    var uriRegExp = new RegExp('/.*/(.+)');
    uriRegExp.exec(pathname);
    var key = RegExp.$1;
    return key;
}


var mlaStates = [{"id": "AR-B","name": "Buenos Aires"},{"id": "AR-C","name": "Capital Federal"},{"id": "AR-K","name": "Catamarca"},{"id": "AR-H","name": "Chaco"},{"id": "AR-U","name": "Chubut"},{"id":"AR-W","name":"Corrientes"},{"id":"AR-X","name":"Córdoba"},{"id":"AR-E","name":"Entre Ríos"},{"id":"AR-P","name":"Formosa"},{"id":"AR-Y","name":"Jujuy"},{"id":"AR-L","name":"La Pampa"},{"id":"AR-F","name":"La Rioja"},{"id":"AR-M","name":"Mendoza"},{"id":"AR-N","name":"Misiones"},{"id":"AR-Q","name":"Neuquén"},{"id":"AR-R","name":"Río Negro"},{"id":"AR-A","name":"Salta"},{"id":"AR-J","name":"San Juan"},{"id":"AR-D","name":"San Luis"},{"id":"AR-Z","name":"Santa Cruz"},{"id":"AR-S","name":"Santa Fe"},{"id":"AR-G","name":"Santiago del Estero"},{"id":"AR-V","name":"Tierra del Fuego"},{"id":"AR-T","name":"Tucumán"}];

var baCities = [{"id":"TUxBQzI1RDIwMzQ","name":"25 de Mayo"},{"id":"TUxBQzlERTU5MTA","name":"9 de Julio"},{"id":"TUxBQ0FETzQ2Nzc","name":"Adolfo Alsina"},{"id":"TUxBQ0FETzY3Mjk","name":"Adolfo Gonzales Chaves"},{"id":"TUxBQ0FHVWE1Yjkz","name":"Aguas Verdes"},{"id":"TUxBQ0FMQjYwODM","name":"Alberti"},{"id":"TUxBQ0FMTWlyYW50","name":"Almirante Brown"},{"id":"TUxBQ0FSUjM5OTg","name":"Arrecifes"},{"id":"TUxBQ0FWRTc5OTQ1","name":"Avellaneda"},{"id":"TUxBQ0FZQTc2MzA","name":"Ayacucho"},{"id":"TUxBQ0FaVTgxMjA","name":"Azul"},{"id":"TUxBQ0JBSDI0OTNk","name":"Bahía Blanca"},{"id":"TUxBQ0JBTDk4NTE","name":"Balcarce"},{"id":"TUxBQ0JBUjg3ODU","name":"Baradero"},{"id":"TUxBQ0JFTjM2ODE","name":"Benito Juárez"},{"id":"TUxBQ0JFUjYyYWU3","name":"Berazategui"},{"id":"TUxBQ0JFUjM2OTI","name":"Berisso"},{"id":"TUxBQ0JPTDc5MjI","name":"Bolívar"},{"id":"TUxBQ0JSQTk0Mjg","name":"Bragado"},{"id":"TUxBQ0JSQTgxMjU","name":"Brandsen"},{"id":"TUxBQ0NBTTQ1Mjc","name":"Campana"},{"id":"TUxBQ0NBUDExMTI","name":"Capitán Sarmiento"},{"id":"TUxBQ0NBUjJmZDQx","name":"Cariló"},{"id":"TUxBQ0NBUjQ1MTE","name":"Carlos Casares"},{"id":"TUxBQ0NBUjc2Mzc","name":"Carlos Tejedor"},{"id":"TUxBQ0NBUjgwNjE","name":"Carmen de Areco"},{"id":"TUxBQ0NBUzE3NTU5Mg","name":"Caseros"},{"id":"TUxBQ0NBUzM1NDM","name":"Castelli"},{"id":"TUxBQ0NBTjk4NTM","name":"Cañuelas"},{"id":"TUxBQ0NIQTkwNjU","name":"Chacabuco"},{"id":"TUxBQ0NIQTI5MTkx","name":"Chapadmalal"},{"id":"TUxBQ0NIQTE1OTU","name":"Chascomús"},{"id":"TUxBQ0NISTc3MjA","name":"Chivilcoy"},{"id":"TUxBQ0NPTDI0MDA","name":"Colón"},{"id":"TUxBQ0NPUjI0ODI","name":"Coronel Dorrego"},{"id":"TUxBQ0NPUjQwMDE","name":"Coronel Pringles"},{"id":"TUxBQ0NPUjk4ODc","name":"Coronel Rosales"},{"id":"TUxBQ0NPUjIyNTc","name":"Coronel Suárez"},{"id":"TUxBQ0NPU3RhZXNt","name":"Costa Esmeralda"},{"id":"TUxBQ0NPUzRjYmM1","name":"Costa del Este"},{"id":"TUxBQ0RBSTUyMjg","name":"Daireaux"},{"id":"TUxBQ0RPTDI0MjU","name":"Dolores"},{"id":"TUxBQ0VOUzc1MDM","name":"Ensenada"},{"id":"TUxBQ0VTQzQ3YTc0","name":"Escobar"},{"id":"TUxBQ0VTVGViYW5l","name":"Esteban Echeverría"},{"id":"TUxBQ0VYQTQ0NjU","name":"Exaltación de la Cruz"},{"id":"TUxBQ0VaRWl6YQ","name":"Ezeiza"},{"id":"TUxBQ0ZMTzYyNTZl","name":"Florencio Varela"},{"id":"TUxBQ0ZMTzY5NDA","name":"Florentino Ameghino"},{"id":"TUxBQ0dFTjczNjY","name":"General Alvarado"},{"id":"TUxBQ0dFTjQzMDg","name":"General Alvear"},{"id":"TUxBQ0dFTjQzNjU","name":"General Arenales"},{"id":"TUxBQ0dFTjI1ODU","name":"General Belgrano"},{"id":"TUxBQ0dFTjEzMTA","name":"General Guido"},{"id":"TUxBQ0dFTjk4NjQ","name":"General La Madrid"},{"id":"TUxBQ0dFTjM1MTI","name":"General Las Heras"},{"id":"TUxBQ0dFTjkwODA","name":"General Lavalle"},{"id":"TUxBQ0dFTjU2MTY","name":"General Madariaga"},{"id":"TUxBQ0dFTjUwMzQ","name":"General Pinto"},{"id":"TUxBQ0dFTjYzNDM","name":"General Pueyrredón"},{"id":"TUxBQ0dFTjY4NTg","name":"General Rodríguez"},{"id":"TUxBQ0dFTmVyYWxz","name":"General San Martín"},{"id":"TUxBQ0dFTjk3MzM","name":"General Viamonte"},{"id":"TUxBQ0dFTjI1NTA","name":"General Villegas"},{"id":"TUxBQ0dVQTkxOTk","name":"Guaminí"},{"id":"TUxBQ0hJUDM2Nzc","name":"Hipólito Yrigoyen"},{"id":"TUxBQ0hVUmxpbmdo","name":"Hurlingham"},{"id":"TUxBQ0lUVTNjNDFm","name":"Ituzaingó"},{"id":"TUxBQ0pPU2VjcGF6","name":"José C. Paz"},{"id":"TUxBQ0pVTjE5NjM","name":"Junín"},{"id":"TUxBQ0xBWjQ4YTQz","name":"La Lucila del Mar"},{"id":"TUxBQ0xBTWF0YW56","name":"La Matanza"},{"id":"TUxBQ0xBUDIxODU","name":"La Plata"},{"id":"TUxBQ0xBUGxhdGE","name":"La Plata"},{"id":"TUxBQ0xBTmJjYzE4","name":"Lanús"},{"id":"TUxBQ0xBUDY1NzA","name":"Laprida"},{"id":"TUxBQ0xBUzI5MTE","name":"Las Flores"},{"id":"TUxBQ0xBUzUxYzJk","name":"Las Toninas"},{"id":"TUxBQ0xFQTg5NTU","name":"Leandro N. Alem"},{"id":"TUxBQ0xJTjU4Njg","name":"Lincoln"},{"id":"TUxBQ0xPQjY1NDc","name":"Lobería"},{"id":"TUxBQ0xPQjgxNzk","name":"Lobos"},{"id":"TUxBQ0xPTWMwNjk3","name":"Lomas de Zamora"},{"id":"TUxBQ0xVSjI0NTE","name":"Luján"},{"id":"TUxBQ01BRzYxMjU","name":"Magdalena"},{"id":"TUxBQ01BSTMzMDE","name":"Maipú"},{"id":"TUxBQ01BTHZpbmFz","name":"Malvinas Argentinas"},{"id":"TUxBQ01BUjE5OTI5","name":"Mar Azul"},{"id":"TUxBQ01BUjY5NzU","name":"Mar Chiquita"},{"id":"TUxBQ01BUjNmZDhl","name":"Mar de Ajo"},{"id":"TUxBQ01BUjkyY2Y2","name":"Mar de las Pampas"},{"id":"TUxBQ01BUjU2MGMw","name":"Mar del Plata"},{"id":"TUxBQ01BUmMxY2My","name":"Mar del Sur"},{"id":"TUxBQ01BUjYzZWE3","name":"Mar del Tuyu"},{"id":"TUxBQ01BUjk5Njc","name":"Marcos Paz"},{"id":"TUxBQ01FUjM1OTc","name":"Mercedes"},{"id":"TUxBQ01FUmUyYWZl","name":"Merlo"},{"id":"TUxBQ01JUjczYTE4","name":"Miramar"},{"id":"TUxBQ01PTjk0NDM","name":"Monte"},{"id":"TUxBQ01PTjY0MzY","name":"Monte Hermoso"},{"id":"TUxBQ01PUmViMTE3","name":"Moreno"},{"id":"TUxBQ01PUmI1NTBj","name":"Morón"},{"id":"TUxBQ05BVjEwODk","name":"Navarro"},{"id":"TUxBQ05FQzQ0NTY","name":"Necochea"},{"id":"TUxBQ05FQ2Q3Y2I3","name":"Necochea"},{"id":"TUxBQ09MQTY2MTY","name":"Olavarría"},{"id":"TUxBQ09TVGYzNTVm","name":"Ostende"},{"id":"TUxBQ1BBVDgxMDI","name":"Patagones"},{"id":"TUxBQ1BFSDMwODM","name":"Pehuajó"},{"id":"TUxBQ1BFTDQ0NTU","name":"Pellegrini"},{"id":"TUxBQ1BFUjkwNjY","name":"Pergamino"},{"id":"TUxBQ1BJTDE3NDk","name":"Pila"},{"id":"TUxBQ1BJTDQ3NDE","name":"Pilar"},{"id":"TUxBQ1BJTGFyMTIz","name":"Pilar"},{"id":"TUxBQ1BJTmM0NmE5","name":"Pinamar"},{"id":"TUxBQ1BSRXNpZGVu","name":"Presidente Perón"},{"id":"TUxBQ1BVTjI4Nzg","name":"Punta Indio"},{"id":"TUxBQ1BVQTE4NjE","name":"Puán"},{"id":"TUxBQ1FVSWI1MzY","name":"Quilmes"},{"id":"TUxBQ1JBTTkwMTY","name":"Ramallo"},{"id":"TUxBQ1JBVTM0NjA","name":"Rauch"},{"id":"TUxBQ1JJVjI3MzM","name":"Rivadavia"},{"id":"TUxBQ1JPSjk3NTU","name":"Rojas"},{"id":"TUxBQ1JPUTQ1Mjc","name":"Roque Pérez"},{"id":"TUxBQ1NBQTU1NTA","name":"Saavedra"},{"id":"TUxBQ1NBTDU2ODA","name":"Saladillo"},{"id":"TUxBQ1NBTDY5MDE","name":"Salliqueló"},{"id":"TUxBQ1NBTDIwNzA","name":"Salto"},{"id":"TUxBQ1NBTjgxODQ","name":"San Andrés de Giles"},{"id":"TUxBQ1NBTjc1MDE","name":"San Antonio de Areco"},{"id":"TUxBQ1NBTjI2NGMw","name":"San Bernardo"},{"id":"TUxBQ1NBTjIzNDc","name":"San Cayetano"},{"id":"TUxBQ1NBTmJkMjMw","name":"San Clemente"},{"id":"TUxBQ1NBTjQ0ZWIy","name":"San Fernando"},{"id":"TUxBQ1NBTjg4ZmJk","name":"San Isidro"},{"id":"TUxBQ1NBTm1pZ3VlbA","name":"San Miguel"},{"id":"TUxBQ1NBTjk0NDE","name":"San Nicolás"},{"id":"TUxBQ1NBTjExMTU","name":"San Pedro"},{"id":"TUxBQ1NBTjc3NjQ","name":"San Vicente"},{"id":"TUxBQ1NBTmYwZTdl","name":"Santa Clara del Mar"},{"id":"TUxBQ1NBTmEzYjlm","name":"Santa Teresita"},{"id":"TUxBQ1NVSTQ3NDY","name":"Suipacha"},{"id":"TUxBQ1RBTjUxMTE","name":"Tandil"},{"id":"TUxBQ1RBUDk1NTk","name":"Tapalqué"},{"id":"TUxBQ1RJRzk0ZjQw","name":"Tigre"},{"id":"TUxBQ1RPUjk1MDE","name":"Tordillo"},{"id":"TUxBQ1RPUjI0OTI","name":"Tornquist"},{"id":"TUxBQ1RSRTExMTI","name":"Trenque Lauquen"},{"id":"TUxBQ1RSRTEwNDE","name":"Tres Arroyos"},{"id":"TUxBQ1RSRTQxMTI","name":"Tres Lomas"},{"id":"TUxBQ1RSRTMxODE5NA","name":"Tres de febrero"},{"id":"TUxBQ1ZBTDM4MGFj","name":"Valeria del Mar"},{"id":"TUxBQ1ZJQ2E3MTQz","name":"Vicente López"},{"id":"TUxBQ1ZJTGU4OGM3","name":"Villa Gesell"},{"id":"TUxBQ1ZJTDc5Njk","name":"Villarino"},{"id":"TUxBQ1pBUjQ1OTM","name":"Zárate"}];
var tuCities = [{"id":"TUxBQ0JVUjIwNTc","name":"Burruyacú"},{"id":"TUxBQ0NISTMyNjI","name":"Chicligasta"},{"id":"TUxBQ0NSVTQ1MzQ","name":"Cruz Alta"},{"id":"TUxBQ0ZBTTEzOTU","name":"Famaillá"},{"id":"TUxBQ0dSQTU4Nzc","name":"Graneros"},{"id":"TUxBQ0pVQWM4MjE4","name":"Juan Bautista Alberdi"},{"id":"TUxBQ0xBQzY1NDQ","name":"La Cocha"},{"id":"TUxBQ0xFQTM3MzM","name":"Leales"},{"id":"TUxBQ0xVTDUxNTk","name":"Lules"},{"id":"TUxBQ01PTjc0ZTk1","name":"Monteros"},{"id":"TUxBQ1JJTzM1MjY","name":"Río Chico"},{"id":"TUxBQ1NBTmMyZjY5","name":"San Miguel de Tucumán"},{"id":"TUxBQ1NJTTQwMDQ","name":"Simoca"},{"id":"TUxBQ1RBRjFlMTNk","name":"Tafí Viejo"},{"id":"TUxBQ1RBRjY2MTJi","name":"Tafí del Valle"},{"id":"TUxBQ1RSQTgyMTM","name":"Trancas"},{"id":"TUxBQ1lFUjgyOWU0","name":"Yerba Buena"}];
var sgCities = [{"id":"TUxBQ0FHVTgwNjc","name":"Aguirre"},{"id":"TUxBQ0FMQjE3MDc","name":"Alberdi"},{"id":"TUxBQ0FUQTE1ODc","name":"Atamisqui"},{"id":"TUxBQ0FWRTQxMzA","name":"Avellaneda"},{"id":"TUxBQ0JFTDIwMTU","name":"Belgrano"},{"id":"TUxBQ0NITzUyMzk","name":"Choya"},{"id":"TUxBQ0NPUDM4ODM","name":"Copo"},{"id":"TUxBQ0ZJRzI5MzQ","name":"Figueroa"},{"id":"TUxBQ0dFTjg2OTA","name":"General Taboada"},{"id":"TUxBQ0dVQTc0NDA","name":"Guasayán"},{"id":"TUxBQ0pJTTI1Nzg","name":"Jiménez"},{"id":"TUxBQ0pVQTEzMzI","name":"Juan F. Ibarra"},{"id":"TUxBQ0xBWjMyY2Jk","name":"La Banda"},{"id":"TUxBQ0xPUjUwMTQ","name":"Loreto"},{"id":"TUxBQ01PUjQ0ODc","name":"Moreno"},{"id":"TUxBQ1BFTDg0NDA","name":"Pellegrini"},{"id":"TUxBQ1FVRTY2NTY","name":"Quebrachos"},{"id":"TUxBQ1JJVjI3Mzc","name":"Rivadavia"},{"id":"TUxBQ1JPQjI2MjY","name":"Robles"},{"id":"TUxBQ1NBTDE3MjM","name":"Salavina"},{"id":"TUxBQ1NBTjcwMTk","name":"San Martín"},{"id":"TUxBQ1NBTmIwNDdm","name":"Santiago del Estero"},{"id":"TUxBQ1NBUjI4OTc","name":"Sarmiento"},{"id":"TUxBQ1NJTDcxNjQ","name":"Silípica"},{"id":"TUxBQ1RFUjM4ODU1","name":"Termas de Río Hondo"},{"id":"TUxBQ1ZJTDM5ODdk","name":"Villa General Mitre"},{"id":"TUxBQ1ZJTGI4YjBi","name":"Villa Ojo de Agua"}];


function savingCities(){
    saveAllCitiesForState(baCities,"AR-B");
    saveAllCitiesForState(tuCities,"AR-T");
    saveAllCitiesForState(sgCities,"AR-G");
}

function saveAllCitiesForState(cityCollection,id){
    var ciudad;
    for(i=0;i < cityCollection.length;i++){
        ciudad = cityCollection[i];
        saveCity(ciudad,id);
    }
}

function saveCity(city,id){
    var cityKey = city["id"];
    var cityName = city["name"];
    saveCityresource(cityKey,cityName,id);
}

function saveCityresource(key,name,id){
    resourceManager.saveTemporalResource('cities', key, -1,{"id":key,"name":name,"state":state(id),
         "country":{"id":"AR","name":"Argentina"},"geo_information":{"location":{"latitude":-35.433651,"longitude":-60.1666183}}});
}

function state(id){
    var stateObject = {};
if(id == "AR-B"){
    stateObject = {"id":id,"name":"Buenos Aires"};       
}else if(id == "AR-T"){
    stateObject = {"id":id,"name":"Tucumán"};
}else if(id == "AR-G"){
    stateObject = {"id":id,"name":"Santiago del Estero"};
}
return stateObject;
}


resourceManager.saveTemporalResource('countries', "AR", -1, {"id": "AR","name": "Argentina","locale": "es_AR","currency_id": "ARS","decimal_separator": ",","thousands_separator": ".","time_zone": "GMT-03:00","geo_information":{"location":{"latitude": -38.416097,"longitude": -63.616672}},"states":mlaStates});
resourceManager.saveTemporalResource('states', "AR-B", -1, {"id":"AR-B","name":"Buenos Aires","country":{"id":"AR","name":"Argentina"},"geo_information":{"location":{"latitude":-37.2017285,"longitude":-59.8410697}}, "cities" : baCities});
resourceManager.saveTemporalResource('states', "AR-T", -1, {"id":"AR-T","name":"Tucumán","country":{"id":"AR","name":"Argentina"},"geo_information":{"location":{"latitude":-26.9468463,"longitude":-65.2857082}},"cities": tuCities});
resourceManager.saveTemporalResource('states', "AR-G", -1, {"id":"AR-G","name":"Santiago del Estero","country":{"id":"AR","name":"Argentina"},"geo_information":{"location":{"latitude":-28.186577,"longitude":-63.580611}},"cities": sgCities});

exports.getState = locationController.getState;
exports.getCity = locationController.getCity;
exports.getCityInfo = locationController.getCityInfo;
exports.getZipCode = locationController.getZipCode;

// Mappings
urlMapping.add ([ {
        pattern: '^/countries/.*/zip_codes/(\\w+)$',
        action: {
            'GET':locationController.getZipCode
        },
    }, {
        pattern: '^/countries/.*$',
        action: {
            'GET':locationController.getState
        }
    }, {
        pattern: '^/states/.*$',
        action: {
            'GET':locationController.getCity
        }
    }, {
        pattern: '^/cities/(\\w+)$',
        action: {
            'GET':locationController.getCityInfo
        }
    }]);