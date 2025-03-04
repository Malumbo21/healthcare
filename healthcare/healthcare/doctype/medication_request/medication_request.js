// Copyright (c) 2022, healthcare and contributors
// For license information, please see license.txt
{% include "healthcare/public/js/service_request.js" %}

frappe.ui.form.on('Medication Request', {
    refresh: function(frm) {
        frm.set_query("status", function () {
			return {
				"filters": {
					"code_system": "Medication Request Status",
				}
			};
		});
	},

})