#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
#define PI 3.14159265359

//this is my shape file that has all the geometric shapes i've created

mat3 rotationMatrix(float a){
	return mat3(vec3(cos(a), -sin(a), 0.0),
				vec3(sin(a), cos(a), 0.0),
				vec3(0.0, 0.0, 1.0));
}

float box(in vec2 st, in vec2 size){
    size = vec2(0.5) - size*0.5;
    vec2 uv = smoothstep(size,
                        size+vec2(0.001),
                        st);
    uv *= smoothstep(size,
                    size+vec2(0.001),
                    vec2(1.0)-st);
    return uv.x*uv.y;
}


float rect(float w, float h, vec2 origin, vec2 st){

	return (step(origin.x, st.x)-step(origin.x+w, st.x))*(step(origin.y, st.y)-step(origin.y+h, st.y));

}



float cross ( float barL, float barW, vec2 center, vec2 st){
	//this formula requires the rect formula to work
	return rect(barL, barW, vec2(center.x-barL/2., center.y-barW/2.), st.xy)+rect(barW, barL, vec2(center.x-barW/2., center.y-barL/2.), st.xy);
}

float star (float posX, float posY, float diameter, vec2 st){
	//this formula requires the rect, cross, and rotation formulas to work

	vec3 pos = vec3(st, 1.0);
    pos.x -= posX;
    pos.y -= posY;
    pos = rotationMatrix(.75)*pos;
    pos.x += posX;
    pos.y += posY;

    return cross(diameter, diameter/10., vec2(posX, posY), st)+cross(diameter, diameter/10., vec2(posX, posY), vec2(pos.x, pos.y));
}


float circle(vec2 st, float posX, float posY, float diameter) {
  st.x -= posX;
  st.y -= posY;
  return 1.0-step(diameter, length(st)*2.);
}

float ring(float posX, float posY, float thickness, float radius, vec2 st){
	//this formula requires the circle formula to work
	return circle(st, posX, posY, radius*2.)-circle(st, posX, posY, radius*2.-thickness*2.);
}



void main() {
	
	vec2 st = gl_FragCoord.xy/u_resolution.xy;

	st *= 5.;
    
    // vec2 st_i = floor(st);

    // if (st_i.y == 1.) {
    //     st.x -= .5;
    // }
	// st *=5.0;
	//we multiple here to get only the space between the step equations for x and y
	//this way pixels outside each of the step areas will end up with 0*1=0
	//if we add them together it will add the two bars to make a cross
    //float y = (step(.2, st.x)-step(.8, st.x))*(step(.2, st.y)-step(.8, st.y));

    // float y = box(vec2 (-.1, -.2), vec2 (.5, .25));

    //float y = rect(.1, .04, vec2(.1, .2), st.xy)+rect(.04, .1, vec2(.1+.03,.2-.03), st.xy);
    // float y = rect(.1, .2, vec2(.0, .1), st.xy);

  


    //float y = cross(.5, .1, vec2(.5, .5), st)+cross(.5, .1, vec2(.5, .5), vec2(pos.x, pos.y));
    //float y = star(.35, .75, .1, st);
    vec2 st_f = fract(st);
    //float y = ring(.5, .5, .1, .3, st_f);
    float y = star(.5, .5, .5, st_f);
    vec3 color = vec3(y);
    
    // Plot a line
    // float pct = plot(st,y);
    
	gl_FragColor = vec4(color,1.0);
}