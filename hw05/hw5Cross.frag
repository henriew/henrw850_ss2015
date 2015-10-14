#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
#define PI 3.14159265359



float plot(vec2 st, float pct){
  return  smoothstep( pct-0.02, pct, st.y) - 
          smoothstep( pct, pct+0.02, st.y);
}

float rect(float w, float h, vec2 origin, vec2 st){

	return (step(origin.x, st.x)-step(origin.x+w, st.x))*(step(origin.y, st.y)-step(origin.y+h, st.y));

}

mat3 rotationMatrix(float a){
	return mat3(vec3(cos(a), -sin(a), 0.0),
				vec3(sin(a), cos(a), 0.0),
				vec3(0.0, 0.0, 1.0));
}

void main() {
	
	vec2 st = gl_FragCoord.xy/u_resolution.xy;
	// float p = abs(cos(u_time));
	// float t = p-.1;
	float p = 1.-mod(u_time, 4.)/2.;
	float t = p-.1;
	// st *=5.0;
	//we multiple here to get only the space between the step equations for x and y
	//this way pixels outside each of the step areas will end up with 0*1=0
	//if we add them together it will add the two bars to make a cross
    //float y = (step(.2, st.x)-step(.8, st.x))*(step(.2, st.y)-step(.8, st.y));

    float y = (rect(.1, .04, vec2(p,t), st.xy)+rect(.04, .1, vec2(p+.03,t-.03), st.xy))+(rect(.1, .04, vec2(p-.2,t-.1), st.xy)+rect(.04, .1, vec2(p+.03-.2,t-.03-.1), st.xy))+(rect(.1, .04, vec2(p,t-.4), st.xy)+rect(.04, .1, vec2(p+.03,t-.03-.4), st.xy));

    //vec3 color = vec3(y);

    vec3 color = vec3(rotationMatrix(u_time*5.)*y);
    
    // Plot a line
    float pct = plot(st,y);
    
	gl_FragColor = vec4(color,1.0);
}