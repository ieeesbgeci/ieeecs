$(document).on('submit', '#ieee_form', function form_post(event) {
	event.preventDefault();
	var form = $('#ieee_form');
	var form_url = form.prop('action')
	var req_type = form.prop('method')
	$.ajax({
		url: form_url,
		data: {
			id: $("#ieee_id").val()
		},
		type: req_type,
		success: function (data) {
			var data = data["reply"];
			var data_span = "";
			for (var i = 0; i < data.length; i++) {
				u_data = data[i];
				data_span += "<div class='user_details'>" + u_data + "</div>";
			}
			$("#display_data").html(data_span);
		}
	})
});