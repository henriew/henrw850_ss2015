#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
#define PI 3.14159265359



void main() {
	
	vec2 st = gl_FragCoord.xy/u_resolution.xy;

	st = st*2.-1.;

	float y = 1.-length(st)*5.;

	y=fract(y*7.+u_time*5.);
    y = step(.5, y);

    float x = length(st)*5.;
    x = fract(x+u_time);
    x = step(.5, x);

    vec3 color = vec3(0., y, x);

        gl_FragColor = vec4(color, 1.0); 
}