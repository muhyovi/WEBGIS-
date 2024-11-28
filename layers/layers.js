var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_wilayahadm_kelurahantangsel_1 = new ol.format.GeoJSON();
var features_wilayahadm_kelurahantangsel_1 = format_wilayahadm_kelurahantangsel_1.readFeatures(json_wilayahadm_kelurahantangsel_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wilayahadm_kelurahantangsel_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wilayahadm_kelurahantangsel_1.addFeatures(features_wilayahadm_kelurahantangsel_1);
var lyr_wilayahadm_kelurahantangsel_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wilayahadm_kelurahantangsel_1, 
                style: style_wilayahadm_kelurahantangsel_1,
                popuplayertitle: "wilayah adm_kelurahantangsel",
                interactive: true,
                title: '<img src="styles/legend/wilayahadm_kelurahantangsel_1.png" /> wilayah adm_kelurahantangsel'
            });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/Jalan_2.png" /> Jalan'
            });
var format_Meninggal_3 = new ol.format.GeoJSON();
var features_Meninggal_3 = format_Meninggal_3.readFeatures(json_Meninggal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Meninggal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Meninggal_3.addFeatures(features_Meninggal_3);
var lyr_Meninggal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Meninggal_3, 
                style: style_Meninggal_3,
                popuplayertitle: "Meninggal",
                interactive: true,
                title: '<img src="styles/legend/Meninggal_3.png" /> Meninggal'
            });
var format_ODP_Tangsel_4 = new ol.format.GeoJSON();
var features_ODP_Tangsel_4 = format_ODP_Tangsel_4.readFeatures(json_ODP_Tangsel_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ODP_Tangsel_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ODP_Tangsel_4.addFeatures(features_ODP_Tangsel_4);
var lyr_ODP_Tangsel_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ODP_Tangsel_4, 
                style: style_ODP_Tangsel_4,
                popuplayertitle: "ODP_Tangsel",
                interactive: true,
                title: '<img src="styles/legend/ODP_Tangsel_4.png" /> ODP_Tangsel'
            });
var format_PDP_Tangsel_5 = new ol.format.GeoJSON();
var features_PDP_Tangsel_5 = format_PDP_Tangsel_5.readFeatures(json_PDP_Tangsel_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PDP_Tangsel_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDP_Tangsel_5.addFeatures(features_PDP_Tangsel_5);
var lyr_PDP_Tangsel_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDP_Tangsel_5, 
                style: style_PDP_Tangsel_5,
                popuplayertitle: "PDP_Tangsel",
                interactive: true,
                title: '<img src="styles/legend/PDP_Tangsel_5.png" /> PDP_Tangsel'
            });
var format_Positif_Tangsel_6 = new ol.format.GeoJSON();
var features_Positif_Tangsel_6 = format_Positif_Tangsel_6.readFeatures(json_Positif_Tangsel_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Positif_Tangsel_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Positif_Tangsel_6.addFeatures(features_Positif_Tangsel_6);
var lyr_Positif_Tangsel_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Positif_Tangsel_6, 
                style: style_Positif_Tangsel_6,
                popuplayertitle: "Positif_Tangsel",
                interactive: true,
                title: '<img src="styles/legend/Positif_Tangsel_6.png" /> Positif_Tangsel'
            });
var format_Sungai_7 = new ol.format.GeoJSON();
var features_Sungai_7 = format_Sungai_7.readFeatures(json_Sungai_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_7.addFeatures(features_Sungai_7);
var lyr_Sungai_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_7, 
                style: style_Sungai_7,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_7.png" /> Sungai'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_wilayahadm_kelurahantangsel_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_Meninggal_3.setVisible(true);lyr_ODP_Tangsel_4.setVisible(true);lyr_PDP_Tangsel_5.setVisible(true);lyr_Positif_Tangsel_6.setVisible(true);lyr_Sungai_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_wilayahadm_kelurahantangsel_1,lyr_Jalan_2,lyr_Meninggal_3,lyr_ODP_Tangsel_4,lyr_PDP_Tangsel_5,lyr_Positif_Tangsel_6,lyr_Sungai_7];
lyr_wilayahadm_kelurahantangsel_1.set('fieldAliases', {'Kelurahan': 'Kelurahan', 'Kode': 'Kode', 'Jml_Pen_lk': 'Jml_Pen_lk', 'Jml_Pen_PR': 'Jml_Pen_PR', 'Jml_PenTol': 'Jml_PenTol', 'Sex Ratio': 'Sex Ratio', });
lyr_Jalan_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_Meninggal_3.set('fieldAliases', {'Kelurahan': 'Kelurahan', 'Kode': 'Kode', 'jml_menggl': 'jml_menggl', });
lyr_ODP_Tangsel_4.set('fieldAliases', {'Kelurahan': 'Kelurahan', 'Kode': 'Kode', 'Jumlah ODP': 'Jumlah ODP', });
lyr_PDP_Tangsel_5.set('fieldAliases', {'Kelurahan': 'Kelurahan', 'Kode': 'Kode', 'jml_pdp': 'jml_pdp', });
lyr_Positif_Tangsel_6.set('fieldAliases', {'Kelurahan': 'Kelurahan', 'Kode': 'Kode', 'Jml_positi': 'Jml_positi', });
lyr_Sungai_7.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', });
lyr_wilayahadm_kelurahantangsel_1.set('fieldImages', {'Kelurahan': 'TextEdit', 'Kode': 'Range', 'Jml_Pen_lk': 'TextEdit', 'Jml_Pen_PR': 'TextEdit', 'Jml_PenTol': 'TextEdit', 'Sex Ratio': 'TextEdit', });
lyr_Jalan_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_Meninggal_3.set('fieldImages', {'Kelurahan': 'TextEdit', 'Kode': 'Range', 'jml_menggl': 'TextEdit', });
lyr_ODP_Tangsel_4.set('fieldImages', {'Kelurahan': 'TextEdit', 'Kode': 'Range', 'Jumlah ODP': 'TextEdit', });
lyr_PDP_Tangsel_5.set('fieldImages', {'Kelurahan': 'TextEdit', 'Kode': 'Range', 'jml_pdp': 'TextEdit', });
lyr_Positif_Tangsel_6.set('fieldImages', {'Kelurahan': 'TextEdit', 'Kode': 'Range', 'Jml_positi': 'TextEdit', });
lyr_Sungai_7.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'width': '', 'name': '', });
lyr_wilayahadm_kelurahantangsel_1.set('fieldLabels', {'Kelurahan': 'no label', 'Kode': 'no label', 'Jml_Pen_lk': 'no label', 'Jml_Pen_PR': 'no label', 'Jml_PenTol': 'no label', 'Sex Ratio': 'no label', });
lyr_Jalan_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_Meninggal_3.set('fieldLabels', {'Kelurahan': 'no label', 'Kode': 'no label', 'jml_menggl': 'inline label - visible with data', });
lyr_ODP_Tangsel_4.set('fieldLabels', {'Kelurahan': 'no label', 'Kode': 'no label', 'Jumlah ODP': 'inline label - visible with data', });
lyr_PDP_Tangsel_5.set('fieldLabels', {'Kelurahan': 'no label', 'Kode': 'no label', 'jml_pdp': 'inline label - visible with data', });
lyr_Positif_Tangsel_6.set('fieldLabels', {'Kelurahan': 'no label', 'Kode': 'no label', 'Jml_positi': 'inline label - visible with data', });
lyr_Sungai_7.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'width': 'no label', 'name': 'no label', });
lyr_Sungai_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});