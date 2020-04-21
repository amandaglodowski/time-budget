const budget_total = $(".total_budget span").text();

$("body").on("keyup keydown keypress change", ".task input", function (e) { //when to run the function and where
	let running_total = budget_total;

	$(".task input").each(function () { //for each input with that class, run this function that
		let user_input = $(this).val() //sets a varialbe equal to the value. user input is what the user put in

		if (user_input !== "") { //if this is empty, dont do anything
			user_input = parseFloat(user_input); //parsefloat makes something into an integer. need it whenever we want math
			running_total = running_total - user_input; //100- whatever they put in
		}
	});

	if (running_total >= 0 && running_total <= 20) { //what does it do, given those outputs?
		$(".total_budget").addClass("warning").removeClass("error")
		document.getElementById("message").innerHTML = "<span style='color:#e8d82a;font-size:32px;'>You're almost out of time!</span>";
	} else if (running_total < 0) { //over budget
		$(".total_budget").addClass("error").removeClass("warning");
		document.getElementById("message").innerHTML = "<span style='color:red;font-size:32px;'>Your day is already over! What can you neglect?</span>";
	} else { //if neither, back to normal
		$(".total_budget").removeClass("error").removeClass("warning");
		document.getElementById("message").innerHTML = "You are super woman!";
	}
	$(".total_budget span").text(running_total);
});