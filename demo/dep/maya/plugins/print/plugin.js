/**
 * plugin.js
 *
 * Copyright, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://www.maya.com/license
 * Contributing: http://www.maya.com/contributing
 */

/*global maya:true */

maya.PluginManager.add('print', function(editor) {
	editor.addCommand('mcePrint', function() {
		editor.getWin().print();
	});

	editor.addButton('print', {
		title: 'Print',
		cmd: 'mcePrint'
	});

	editor.addShortcut('Meta+P', '', 'mcePrint');

	editor.addMenuItem('print', {
		text: 'Print',
		cmd: 'mcePrint',
		icon: 'print',
		shortcut: 'Meta+P',
		context: 'file'
	});
});