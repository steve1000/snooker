
// todo: fix balance between friction and velocity for more realistic physics

function controls()
{
	// initial white ball velocity
	friction = 0.990;
	fps = 60;
	setInterval(animate, 1000 / fps);
}