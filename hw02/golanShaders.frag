#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float tHold = 0.0;
float expHold = .5;

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.02, pct, st.y) - 
          smoothstep( pct, pct+0.02, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;

    // if(u_time>tHold+4000.){
    //   tHold = u_time;
      //expHold = expHold + 0.5;

    //}
    // if(expHold > 3.5){

    //   expHold = 0.5;
    // }
    //Kynd eq#1
    //float y = 1.-pow(abs(st.x-.5),0.5);

    //Kynd eq#2
    //float y = 1.-pow(abs(st.x-.5), 1.);

    //Kynd eq#3
    //float y = 1.-pow(abs(st.x-.5),1.5);

    //Kynd eq#4
    //float y = 1.-pow(abs(st.x-.5),2.0);

    //Kynd eq#5
    //float y = 1.-pow(abs(st.x-.5),2.5);

    //Kynd eq#6
    //float y = 1.-pow(abs(st.x-.5), 3.0);

    //Kynd eq#7
    //float y = 1.-pow(abs(st.x-.5),3.5);

    //Kynd eq#8
    //float y = pow(cos(PI*(st.x-.5)/2.0), .5);

    //Kynd eq#9
    //float y = pow(cos(PI*(st.x-.5)/2.0), 1.0);

    //Kynd eq#10
    //float y = pow(cos(PI*(st.x-.5)/2.0), 1.5);

    //Kynd eq#11
    //float y = pow(cos(PI*(st.x-.5)/2.0), 2.0);

    //Kynd eq#12
    //float y = pow(cos(PI*(st.x-.5)/2.0), 2.5);

    //Kynd eq#13
    //float y = pow(cos(PI*(st.x-.5)/2.0), 3.0);

    //kynd eq#14
    //float y = pow(cos(PI*(st.x-.5)/2.0), 3.5);

    //Kynd eq#15
    //float y = 1.0-pow(abs(sin(PI*(st.x-.5)/2.0)), 0.5);

    //Kynd eq#16
    //float y = 1.0-pow(abs(sin(PI*(st.x-.5)/2.0)), 1.0);

    //Kynd eq#17
    //float y = 1.0-pow(abs(sin(PI*(st.x-.5)/2.0)), 1.5);

    //Kynd eq#18
    //float y = 1.0-pow(abs(sin(PI*(st.x-.5)/2.0)), 2.0);

    //Kynd eq#19
    //float y = 1.0-pow(abs(sin(PI*(st.x-.5)/2.0)), 2.5);

    //Kynd eq#20
    //float y = 1.0-pow(abs(sin(PI*(st.x-.5)/2.0)), 3.0);

    //Kynd eq#21
    //float y = 1.0-pow(abs(sin(PI*(st.x-.5)/2.0)), 3.5);

    //Kynd eq#22
    //float y = pow(min(cos(PI*(st.x-0.5)/2.0), 1.0-abs(st.x-0.5)),0.5);

    //Kynd eq#23
    //float y = pow(min(cos(PI*(st.x-0.5)/2.0), 1.0-abs(st.x-0.5)),1.0);

    //Kynd eq#24
    //float y = pow(min(cos(PI*(st.x-0.5)/2.0), 1.0-abs(st.x-0.5)),1.5);

    //Kynd eq#25
    //float y = pow(min(cos(PI*(st.x-0.5)/2.0), 1.0-abs(st.x-0.5)),2.0);

    //Kynd eq#26
    //float y = pow(min(cos(PI*(st.x-0.5)/2.0), 1.0-abs(st.x-0.5)),2.5);

    //Kynd eq#27
    //float y = pow(min(cos(PI*(st.x-0.5)/2.0), 1.0-abs(st.x-0.5)),3.0);

    //Kynd eq#28
    //float y = pow(min(cos(PI*(st.x-0.5)/2.0), 1.0-abs(st.x-0.5)),3.5);

    //Kynd eq#29
    //float y = 1.0-pow(max(0.0, abs(st.x-0.5)*2.0-1.0),0.5);

    //Kynd eq#30
    //float y = 1.0-pow(max(0.0, abs(st.x-0.5)*2.0-1.0),1.0);

    //Kynd eq#31
    //float y = 1.0-pow(max(0.0, abs(st.x-0.5)*2.0-1.0),1.5);

    //Kynd eq#32
    //float y = 1.0-pow(max(0.0, abs(st.x-0.5)*2.0-1.0),2.0);

    //Kynd eq#33
    //float y = 1.0-pow(max(0.0, abs(st.x-0.5)*2.0-1.0),2.5);

    //Kynd eq#34
    //float y = 1.0-pow(max(0.0, abs(st.x-0.5)*2.0-1.0),3.0);

    //Kynd eq#35
    //float y = 1.0-pow(max(0.0, abs(st.x-0.5)*2.0-1.0),3.5);

    //Golan shaping function

    float y = (4./9.)*pow(st.x-0.5, 6.)-(17./9.)*pow(st.x-0.5, 4.)+(22./9.)*pow(st.x-0.5, 2.);


    vec3 color = vec3(y);

    float pct = plot(st,y);
    color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);
    
    gl_FragColor = vec4(color,1.0);
}