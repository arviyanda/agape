var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_aksesibilitas_univunion_1 = new ol.format.GeoJSON();
var features_aksesibilitas_univunion_1 = format_aksesibilitas_univunion_1.readFeatures(json_aksesibilitas_univunion_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aksesibilitas_univunion_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univunion_1.addFeatures(features_aksesibilitas_univunion_1);
var lyr_aksesibilitas_univunion_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univunion_1, 
                style: style_aksesibilitas_univunion_1,
                popuplayertitle: 'aksesibilitas_univ — union',
                interactive: true,
                title: '<img src="styles/legend/aksesibilitas_univunion_1.png" /> aksesibilitas_univ — union'
            });
var format_univ_surabaya_2 = new ol.format.GeoJSON();
var features_univ_surabaya_2 = format_univ_surabaya_2.readFeatures(json_univ_surabaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_univ_surabaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_univ_surabaya_2.addFeatures(features_univ_surabaya_2);
var lyr_univ_surabaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_univ_surabaya_2, 
                style: style_univ_surabaya_2,
                popuplayertitle: 'univ_surabaya',
                interactive: true,
                title: '<img src="styles/legend/univ_surabaya_2.png" /> univ_surabaya'
            });
var format_PTNINSURABAYA_3 = new ol.format.GeoJSON();
var features_PTNINSURABAYA_3 = format_PTNINSURABAYA_3.readFeatures(json_PTNINSURABAYA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTNINSURABAYA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTNINSURABAYA_3.addFeatures(features_PTNINSURABAYA_3);
var lyr_PTNINSURABAYA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTNINSURABAYA_3, 
                style: style_PTNINSURABAYA_3,
                popuplayertitle: 'PTN IN SURABAYA',
                interactive: true,
                title: '<img src="styles/legend/PTNINSURABAYA_3.png" /> PTN IN SURABAYA'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_aksesibilitas_univunion_1.setVisible(true);lyr_univ_surabaya_2.setVisible(true);lyr_PTNINSURABAYA_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_aksesibilitas_univunion_1,lyr_univ_surabaya_2,lyr_PTNINSURABAYA_3];
lyr_aksesibilitas_univunion_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_univ_surabaya_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Deskripsi Univ_QS WUR': 'Deskripsi Univ_QS WUR', 'Deskripsi Univ_Didirikan': 'Deskripsi Univ_Didirikan', 'Deskripsi Univ_Fakultas': 'Deskripsi Univ_Fakultas', });
lyr_PTNINSURABAYA_3.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Deskripsi Univ_QS WUR': 'Deskripsi Univ_QS WUR', 'Deskripsi Univ_Didirikan': 'Deskripsi Univ_Didirikan', 'Deskripsi Univ_Fakultas': 'Deskripsi Univ_Fakultas', 'foto': 'foto', });
lyr_aksesibilitas_univunion_1.set('fieldImages', {'fid': '', 'Access': '', });
lyr_univ_surabaya_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Deskripsi Univ_QS WUR': 'TextEdit', 'Deskripsi Univ_Didirikan': 'TextEdit', 'Deskripsi Univ_Fakultas': 'TextEdit', });
lyr_PTNINSURABAYA_3.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Deskripsi Univ_QS WUR': 'TextEdit', 'Deskripsi Univ_Didirikan': 'TextEdit', 'Deskripsi Univ_Fakultas': 'TextEdit', 'foto': 'ExternalResource', });
lyr_aksesibilitas_univunion_1.set('fieldLabels', {'fid': 'no label', 'Access': 'no label', });
lyr_univ_surabaya_2.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'inline label - always visible', 'Kampus': 'inline label - always visible', 'Deskripsi Univ_QS WUR': 'no label', 'Deskripsi Univ_Didirikan': 'no label', 'Deskripsi Univ_Fakultas': 'no label', });
lyr_PTNINSURABAYA_3.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'hidden field', 'Kampus': 'inline label - always visible', 'Deskripsi Univ_QS WUR': 'inline label - always visible', 'Deskripsi Univ_Didirikan': 'inline label - always visible', 'Deskripsi Univ_Fakultas': 'header label - always visible', 'foto': 'no label', });
lyr_PTNINSURABAYA_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});