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

mat3 rotationMatrix(float a){
	return mat3(vec3(cos(a), -sin(a), 0.0),
				vec3(sin(a), cos(a), 0.0),
				vec3(0.0, 0.0, 1.0));
}

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

void main(){
	vec2 st = gl_FragCoord.xy/u_resolution.xy;

	st-=.5;

	float y = 1.-length(st)*2.;
	y = fract(y*3.);
	y = step(.05, y);

	float z = 1.-length(st)*35.;
	z = step(.1, z);



	st+=.5;


	st.x -= .3;
	st.y -= .4;
	float t = 1.-length(st)*5.;

	t=fract(t+u_time);
    t = step(.9, t);

    st.x += .3;
    st.y +=.4;


	st-=.5;

	st =rotate2d(u_time)*st;
	float x = st.x;

	float pct = plot(st, x);




	


	st += .5;





    vec3 color = vec3(1.-y+z+pct,1.-y,1.-y+t);


	gl_FragColor = vec4(color, 1.0);
}