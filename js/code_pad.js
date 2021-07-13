AFRAME.registerComponent('keyboard-functions', {
	
	init: function()
	{
		// for referencing issues
		let self = this;

		// set up event listeners

		// input event triggered when user presses enter
		this.el.addEventListener('superkeyboardinput', function(event)
		{
			let text = event.detail.value;
			
			// text also accessible via: self.el.getAttribute("super-keyboard")["value"]
			
			console.log("Input: " + text);
			
			// clear the input bar (since keyboard is not disappearing)
			self.el.setAttribute( "super-keyboard", "value", "" );

			// change the color of the sphere
			//document.getElementById("sphere").setAttribute("color", text);
		});

		// dismiss event triggered when user closes keyboard
		this.el.addEventListener('superkeyboarddismiss', function(event)
		{
			// repurpose close functionality to clear all input text without submitting
			console.log("Input cleared.");
			self.el.setAttribute( "super-keyboard", "value", "" );
		});
	},
	
	
});