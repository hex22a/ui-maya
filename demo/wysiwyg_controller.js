/**
 * Created by x22a on 09.05.15.
 */
var wysiwyg = angular.module('wysiwyg', ['wysMaya']);

wysiwyg.controller('wysiwygController', function ($scope) {
    //'use strict';
    $scope.mayaOptions = {
            language : 'ru',
            plugins : 'image blockgrid preview',
            relative_urls : false,
            force_br_newlines : true,
            force_p_newlines : false,
            convert_newlines_to_brs: true,
            file_picker_callback: function(callback, value, meta) {
                if (meta.filetype == 'image') {
                    $('#temp_img_form input').click();
                }
            },
            toolbar: "bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | formatselect fontsizeselect | link anchor | halfDiv | soloDiv | image"
    };
});