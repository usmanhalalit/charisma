// DATA_TEMPLATE: empty_table
oTest.fnStart( "fnInitComplete" );

/* Fairly boring function compared to the others! */

$(document).ready( function () {
	/* Check the default */
	var oTable = $('#example').dataTable( {
		"sAjaxSource": "../../../examples/ajax/sources/objects.txt",
		"aoColumns": [
			{ "mData": "engine" },
			{ "mData": "browser" },
			{ "mData": "platform" },
			{ "mData": "version" },
			{ "mData": "grade" }
		]
	} );
	var oSettings = oTable.fnSettings();
	var mPass;
	
	oTest.fnWaitTest( 
		"Default should be null",
		null,
		function () { return oSettings.fnInitComplete == null; }
	);
	
	
	oTest.fnWaitTest( 
		"Two arguments passed (for Ajax!)",
		function () {
			oSession.fnRestore();
			
			mPass = -1;
			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/objects.txt",
				"aoColumnDefs": [
					{ "mData": "engine", "aTargets": [0] },
					{ "mData": "browser", "aTargets": [1] },
					{ "mData": "platform", "aTargets": [2] },
					{ "mData": "version", "aTargets": [3] },
					{ "mData": "grade", "aTargets": [4] }
				],
				"fnInitComplete": function ( ) {
					mPass = arguments.length;
				}
			} );
		},
		function () { return mPass == 2; }
	);
	
	
	oTest.fnWaitTest( 
		"That one argument is the settings object",
		function () {
			oSession.fnRestore();
			
			oTable = $('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/objects.txt",
				"aoColumnDefs": [
					{ "mData": "engine", "aTargets": [0] },
					{ "mData": "browser", "aTargets": [1] },
					{ "mData": "platform", "aTargets": [2] },
					{ "mData": "version", "aTargets": [3] },
					{ "mData": "grade", "aTargets": [4] }
				],
				"fnInitComplete": function ( oSettings ) {
					mPass = oSettings;
				}
			} );
		},
		function () { return oTable.fnSettings() == mPass; }
	);
	
	
	oTest.fnWaitTest( 
		"fnInitComplete called once on first draw",
		function () {
			oSession.fnRestore();
			
			mPass = 0;
			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/objects.txt",
				"aoColumnDefs": [
					{ "mData": "engine", "aTargets": [0] },
					{ "mData": "browser", "aTargets": [1] },
					{ "mData": "platform", "aTargets": [2] },
					{ "mData": "version", "aTargets": [3] },
					{ "mData": "grade", "aTargets": [4] }
				],
				"fnInitComplete": function ( ) {
					mPass++;
				}
			} );
		},
		function () { return mPass == 1; }
	);
	
	oTest.fnWaitTest( 
		"fnInitComplete never called there after",
		function () {
			$('#example_next').click();
			$('#example_next').click();
			$('#example_next').click();
		},
		function () { return mPass == 1; }
	);
	
	
	oTest.fnWaitTest( 
		"10 rows in the table on complete",
		function () {
			oSession.fnRestore();
			
			mPass = 0;
			$('#example').dataTable( {
				"sAjaxSource": "../../../examples/ajax/sources/objects.txt",
				"aoColumnDefs": [
					{ "mData": "engine", "aTargets": [0] },
					{ "mData": "browser", "aTargets": [1] },
					{ "mData": "platform", "aTargets": [2] },
					{ "mData": "version", "aTargets": [3] },
					{ "mData": "grade", "aTargets": [4] }
				],
				"fnInitComplete": function ( ) {
					mPass = $('#example tbody tr').length;
				}
			} );
		},
		function () { return mPass == 10; }
	);
	
	
	
	oTest.fnComplete();
} );