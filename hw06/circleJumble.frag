#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float random (vec2 st) { 
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))* 
        43758.5453123);
}

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

float stripes(vec2 st) {
    return step(st.y,st.x);
}
 

vec2 tile(vec2 st) {
    return floor(st);
}
vec2 brick(vec2 st){
    vec2 st_i = floor(st);
    if (mod(st_i.y,2.) == 1.) {
        st.x += .5;
    }
    return st;
}

vec2 truchet(vec2 st){
    vec2 st_i = floor(st);
    if (mod(st_i.y,2.) == 1.) {
        st.x = 1.-st.x;
    }
    if (mod(st_i.x,2.) == 1.) {
        st.y = 1.-st.y;
    }
    return st;
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;
    vec3 color = vec3(0.);
    
    float d = 1.-distance(st,vec2(.5));
    d = sin(d*3.14*5.-cos(u_time)*3.);

    st *= 10.;
        st = truchet(st*3.);
    st = brick(st*u_time*.01);
    // vec2 st_i = floor(st);
    // if (mod(st_i.y,2.) == 1.) {
    //     st.x += .5;
    // }
    vec2 st_f = fract(st);

    st_f *= random(st_f);
    
    float pct = ring(.5, .5, d*.5, d, st_f);
    color.g += pct;
    color.b += 2.*pct;
    
    
    gl_FragColor = vec4(color,1.0);
}