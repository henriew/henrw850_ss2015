// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float random (float x) { 
    // return fract(sin(dot(st.xy,
    //                      vec2(12.9898,78.233)))* 
    //     43758.5453123);

	 return fract(sin(x)*10e5);
}

float random (vec2 st) { 
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))* 
        43758.5453123);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    // st *= 10.;
     // st *=fract(st);
     st *= vec2(10., 2.);

    vec2 i_st = floor(st);
    vec2 f_st = fract(st);

    float time = floor(u_time*8.);
    float pct = random(vec2(time+i_st.x, u_time*.000000001));
   

    if(i_st.y == 1.){
    	// f_st.y = 1.-f_st.y;
        pct = random(vec2(random(-1.*time+i_st.x), u_time*.0000001));
    }

    vec3 color = vec3(step(pct, f_st.y)-step(.8, f_st.x));
    gl_FragColor = vec4(color, 1.0);

    // float rnd = random( st );

    // gl_FragColor = vec4(vec3(rnd),1.0);

    // vec3 color = vec3(sin(random(time+i_st.y+f_st.x)));//fract(sin(step(.1, ))));

    // gl_FragColor = vec4(sin(color)*3., 1.0);
}