var canvas = new fabric.Canvas('myCanvas');

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image,function(Img){
		block_image_object = Img;
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({

		})
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		new_image("rr1.png");
		console.log("R key pressed");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		console.log("G key pressed");
		new_image("gr.png");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		console.log("Y key pressed");
		new_image("yr.png");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		console.log("P key pressed");
		new_image("pr.png");
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		console.log("B key pressed");
		new_image("br.png");
	}
	
}

