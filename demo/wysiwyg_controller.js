/**
 * Created by x22a on 09.05.15.
 */
var wysiwyg = angular.module('wysiwyg', ['uiMaya']);

wysiwyg.controller('wysiwygController', function ($scope) {
    //'use strict';
    $scope.content = 'init text';

    $scope.mayaOptions = {
            language : 'ru',
            plugins : 'image blockgrid preview',
            relative_urls : false,
            force_br_newlines : true,
            force_p_newlines : false,
            convert_newlines_to_brs: true,
            toolbar: "bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | formatselect fontsizeselect | link anchor | halfDiv | soloDiv | image"
    };
});