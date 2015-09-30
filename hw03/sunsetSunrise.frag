#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;


float F(float x, float peak , float width){
	return (smoothstep(peak-width*.5,peak,x)+smoothstep(peak+width*.5, peak,x))-1.0;

}

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy;
  st.y+=.5;
  vec3 color = vec3(1., 0., 0.);

  // float pct = F(st.x,abs(sin(u_time*0.5)),.1);
  //  pct *= F(st.y,abs(sin(u_time*0.5)),.1);

   vec2 p = vec2(cos(u_time*.5), sin(u_time*-.5))*.5+.5;
   float pct1 = F(st.x,p.x, 1.3);
   pct1*= F(st.y, p.y, 1.3);

  float pct = F(st.x,p.x, .3);
   pct*= F(st.y, p.y, .3);


  color = vec3(step(.99,pct1)+pct1, step(.95,pct)+pct, (1.6-pct)*(1.-sin(u_time/2.))*color+.1);
  gl_FragColor = vec4(color, 1.0);
    
}




