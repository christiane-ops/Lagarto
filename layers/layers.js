var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AG_LAGARTO_23t_1 = new ol.format.GeoJSON();
var features_AG_LAGARTO_23t_1 = format_AG_LAGARTO_23t_1.readFeatures(json_AG_LAGARTO_23t_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AG_LAGARTO_23t_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AG_LAGARTO_23t_1.addFeatures(features_AG_LAGARTO_23t_1);
var lyr_AG_LAGARTO_23t_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AG_LAGARTO_23t_1, 
                style: style_AG_LAGARTO_23t_1,
                popuplayertitle: "AG_LAGARTO_23t",
                interactive: true,
                    title: '<img src="styles/legend/AG_LAGARTO_23t_1.png" /> AG_LAGARTO_23t'
                });
var format_280350005000002_2 = new ol.format.GeoJSON();
var features_280350005000002_2 = format_280350005000002_2.readFeatures(json_280350005000002_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280350005000002_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280350005000002_2.addFeatures(features_280350005000002_2);
var lyr_280350005000002_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280350005000002_2, 
                style: style_280350005000002_2,
                popuplayertitle: "280350005000002",
                interactive: true,
                    title: '<img src="styles/legend/280350005000002_2.png" /> 280350005000002'
                });
var format_280710505000060_3 = new ol.format.GeoJSON();
var features_280710505000060_3 = format_280710505000060_3.readFeatures(json_280710505000060_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280710505000060_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280710505000060_3.addFeatures(features_280710505000060_3);
var lyr_280710505000060_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280710505000060_3, 
                style: style_280710505000060_3,
                popuplayertitle: "280710505000060",
                interactive: true,
                    title: '<img src="styles/legend/280710505000060_3.png" /> 280710505000060'
                });
var format_280580205000036_4 = new ol.format.GeoJSON();
var features_280580205000036_4 = format_280580205000036_4.readFeatures(json_280580205000036_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280580205000036_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280580205000036_4.addFeatures(features_280580205000036_4);
var lyr_280580205000036_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280580205000036_4, 
                style: style_280580205000036_4,
                popuplayertitle: "280580205000036",
                interactive: true,
                    title: '<img src="styles/legend/280580205000036_4.png" /> 280580205000036'
                });
var format_280740205000120_5 = new ol.format.GeoJSON();
var features_280740205000120_5 = format_280740205000120_5.readFeatures(json_280740205000120_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280740205000120_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280740205000120_5.addFeatures(features_280740205000120_5);
var lyr_280740205000120_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280740205000120_5, 
                style: style_280740205000120_5,
                popuplayertitle: "280740205000120",
                interactive: true,
                    title: '<img src="styles/legend/280740205000120_5.png" /> 280740205000120'
                });
var format_280740205000119_6 = new ol.format.GeoJSON();
var features_280740205000119_6 = format_280740205000119_6.readFeatures(json_280740205000119_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280740205000119_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280740205000119_6.addFeatures(features_280740205000119_6);
var lyr_280740205000119_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280740205000119_6, 
                style: style_280740205000119_6,
                popuplayertitle: "280740205000119",
                interactive: true,
                    title: '<img src="styles/legend/280740205000119_6.png" /> 280740205000119'
                });
var format_280710505000072_7 = new ol.format.GeoJSON();
var features_280710505000072_7 = format_280710505000072_7.readFeatures(json_280710505000072_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280710505000072_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280710505000072_7.addFeatures(features_280710505000072_7);
var lyr_280710505000072_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280710505000072_7, 
                style: style_280710505000072_7,
                popuplayertitle: "280710505000072",
                interactive: true,
                    title: '<img src="styles/legend/280710505000072_7.png" /> 280710505000072'
                });
var format_280580205000010_8 = new ol.format.GeoJSON();
var features_280580205000010_8 = format_280580205000010_8.readFeatures(json_280580205000010_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280580205000010_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280580205000010_8.addFeatures(features_280580205000010_8);
var lyr_280580205000010_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280580205000010_8, 
                style: style_280580205000010_8,
                popuplayertitle: "280580205000010",
                interactive: true,
                    title: '<img src="styles/legend/280580205000010_8.png" /> 280580205000010'
                });
var format_280350005000093_9 = new ol.format.GeoJSON();
var features_280350005000093_9 = format_280350005000093_9.readFeatures(json_280350005000093_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280350005000093_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280350005000093_9.addFeatures(features_280350005000093_9);
var lyr_280350005000093_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280350005000093_9, 
                style: style_280350005000093_9,
                popuplayertitle: "280350005000093",
                interactive: true,
                    title: '<img src="styles/legend/280350005000093_9.png" /> 280350005000093'
                });
var format_280350005000080_10 = new ol.format.GeoJSON();
var features_280350005000080_10 = format_280350005000080_10.readFeatures(json_280350005000080_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280350005000080_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280350005000080_10.addFeatures(features_280350005000080_10);
var lyr_280350005000080_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280350005000080_10, 
                style: style_280350005000080_10,
                popuplayertitle: "280350005000080",
                interactive: true,
                    title: '<img src="styles/legend/280350005000080_10.png" /> 280350005000080'
                });
var format_280710505000099_11 = new ol.format.GeoJSON();
var features_280710505000099_11 = format_280710505000099_11.readFeatures(json_280710505000099_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280710505000099_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280710505000099_11.addFeatures(features_280710505000099_11);
var lyr_280710505000099_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280710505000099_11, 
                style: style_280710505000099_11,
                popuplayertitle: "280710505000099",
                interactive: true,
                    title: '<img src="styles/legend/280710505000099_11.png" /> 280710505000099'
                });
var group_CENFE_SETEMBRO_PNADC_OUT = new ol.layer.Group({
                                layers: [lyr_280350005000080_10,lyr_280710505000099_11,],
                                fold: "open",
                                title: "CENFE_SETEMBRO_PNADC_OUT"});
var group_CNEFE_OUTUBRO_PNADC_NOV = new ol.layer.Group({
                                layers: [lyr_280350005000093_9,],
                                fold: "open",
                                title: "CNEFE_OUTUBRO_PNADC_NOV"});
var group_CNEFE_NOVEMBRO_PNADC_DEZ = new ol.layer.Group({
                                layers: [lyr_280580205000036_4,lyr_280740205000120_5,lyr_280740205000119_6,lyr_280710505000072_7,lyr_280580205000010_8,],
                                fold: "open",
                                title: "CNEFE_NOVEMBRO_PNADC_DEZ"});
var group_CNEFE_DEZEMBRO_PNADC_JAN = new ol.layer.Group({
                                layers: [lyr_280350005000002_2,lyr_280710505000060_3,],
                                fold: "open",
                                title: "CNEFE_DEZEMBRO_PNADC_JAN"});

lyr_OSMStandard_0.setVisible(true);lyr_AG_LAGARTO_23t_1.setVisible(true);lyr_280350005000002_2.setVisible(true);lyr_280710505000060_3.setVisible(true);lyr_280580205000036_4.setVisible(true);lyr_280740205000120_5.setVisible(true);lyr_280740205000119_6.setVisible(true);lyr_280710505000072_7.setVisible(true);lyr_280580205000010_8.setVisible(true);lyr_280350005000093_9.setVisible(true);lyr_280350005000080_10.setVisible(true);lyr_280710505000099_11.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_AG_LAGARTO_23t_1,group_CNEFE_DEZEMBRO_PNADC_JAN,group_CNEFE_NOVEMBRO_PNADC_DEZ,group_CNEFE_OUTUBRO_PNADC_NOV,group_CENFE_SETEMBRO_PNADC_OUT];
lyr_AG_LAGARTO_23t_1.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280350005000002_2.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280710505000060_3.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280580205000036_4.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280740205000120_5.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280740205000119_6.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280710505000072_7.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280580205000010_8.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280350005000093_9.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280350005000080_10.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280710505000099_11.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_AG_LAGARTO_23t_1.set('fieldImages', {'COD_SETOR': 'TextEdit', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280350005000002_2.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280710505000060_3.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280580205000036_4.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280740205000120_5.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280740205000119_6.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280710505000072_7.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280580205000010_8.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280350005000093_9.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280350005000080_10.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280710505000099_11.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_AG_LAGARTO_23t_1.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280350005000002_2.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280710505000060_3.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280580205000036_4.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280740205000120_5.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280740205000119_6.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280710505000072_7.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280580205000010_8.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280350005000093_9.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280350005000080_10.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280710505000099_11.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280710505000099_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});