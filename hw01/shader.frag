#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;


void main() {
    
    vec2 pos = gl_FragCoord.xy/u_resolution;
	gl_FragColor = vec4(1.0);
    gl_FragColor.rg = u_mouse.xy/u_resolution;
    gl_FragColor.b = abs(cos(u_time));
}
