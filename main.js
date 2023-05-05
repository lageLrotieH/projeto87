var canvas=new fabric.Canvas("canvas")
// Create canvas variable
 blockY=1;
 blockX=1;

largura= 350;
altura= 430;

var imagem= "";

function newImage(getImage)
{
	// para enviar imagens
	fabric.Image.fromURL(get_image, function(Img){
imagem=Img
imagem.scaleToWidth(largura)

imagem.scaleToHeight(altura)

imagem.set({top:blockY,left:blockX})

canvas.add(imagem)
	})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // adicione os códigos adequados às teclas
	{
		// enviar ranger escarlate
		new_image("rr1.png")
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		new_image("br.png")
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		// enviar ranger amarelo
		new_image("gr.png")
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		// enviar ranger rosa
		new_image("pr.png")
	}
	if(keyPressed == '73')
	{
		blockX = 700;
	// enviar ranger índigo
	new_image("rr.png")
	}
	
}

