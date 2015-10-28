#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    ofSetCircleResolution(100);
    ofDisableArbTex();
    ofEnableDepthTest();
    ofDisableAlphaBlending();
    sphere.setRadius(250);
    cylinder.setHeight(300);
    cylinder.setRadius(100);
    cylinder.setResolutionRadius(100);
    cone.setRadius(300);
    cone.setHeight(500);
    cone.setResolutionRadius(100);
    box.setHeight(400);
    box.setWidth(200);
    box.setDepth(100);
    cylTwo.setHeight(500);
    cylTwo.setRadius(400);
    cylTwo.setResolutionRadius(50);
    boxTwo.setHeight(400);
    boxTwo.setWidth(400);
    boxTwo.setDepth(400);
    sphereTwo.setRadius(400);

}

//--------------------------------------------------------------
void ofApp::update(){

}

//--------------------------------------------------------------
void ofApp::draw(){
    
    shader.load("", "yellowRings.frag");
    shaderTwo.load("", "jelly.frag");
    shaderThree.load("", "boxFrag.frag");
    shaderFour.load("", "pulseGreen.frag");
    shaderFive.load("", "starCraze.frag");
    shaderSix.load("", "circleJumble.frag");
    shaderSeven.load("", "starZoom.frag");
    
    easyCam.begin();
    easyCam.setTarget(ofVec3f(500,500,0));
    
    shader.begin();
    shader.setUniform1f("u_time", ofGetElapsedTimef());
    shader.setUniform2f("u_resolution", ofGetWidth(), ofGetHeight());
    shader.setUniform2f("u_mouse", mouseX, mouseY);
    sphere.setPosition(500, 500, 0);
    sphere.draw();
    shader.end();
    
    
    shaderTwo.begin();
    shaderTwo.setUniform1f("u_time", ofGetElapsedTimef());
    shaderTwo.setUniform2f("u_resolution", ofGetWidth(), ofGetHeight());
    shaderTwo.setUniform2f("u_mouse", mouseX, mouseY);
    cylinder.setPosition(800, 500, 0);
    cylinder.draw();
    shaderTwo.end();
  
    
    shaderThree.begin();
    shaderThree.setUniform1f("u_time", ofGetElapsedTimef());
    shaderThree.setUniform2f("u_resolution", ofGetWidth(), ofGetHeight());
    shaderThree.setUniform2f("u_mouse", mouseX, mouseY);
    cone.setPosition(800, 500, -1000);
    cone.draw();
    shaderThree.end();
    
    shaderFour.begin();
    shaderFour.setUniform1f("u_time", ofGetElapsedTimef());
    shaderFour.setUniform2f("u_resolution", ofGetWidth(), ofGetHeight());
    shaderFour.setUniform2f("u_mouse", mouseX, mouseY);
    box.setPosition(800, 500, -200);
    box.draw();
    shaderFour.end();
    
    shaderFive.begin();
    shaderFive.setUniform1f("u_time", ofGetElapsedTimef());
    shaderFive.setUniform2f("u_resolution", ofGetWidth(), ofGetHeight());
    shaderFive.setUniform2f("u_mouse", mouseX, mouseY);
    cylTwo.setPosition(800, 500, 600);
    cylTwo.draw();
    shaderFive.end();
    
    shaderSix.begin();
    shaderSix.setUniform1f("u_time", ofGetElapsedTimef());
    shaderSix.setUniform2f("u_resolution", ofGetWidth(), ofGetHeight());
    shaderSix.setUniform2f("u_mouse", mouseX, mouseY);
    sphereTwo.setPosition(100, 500, -600);
    sphereTwo.draw();
    shaderSix.end();
    
    shaderSeven.begin();
    shaderSeven.setUniform1f("u_time", ofGetElapsedTimef());
    shaderSeven.setUniform2f("u_resolution", ofGetWidth(), ofGetHeight());
    shaderSeven.setUniform2f("u_mouse", mouseX, mouseY);
    boxTwo.setPosition(100, 500, 800);
    boxTwo.draw();
    shaderSeven.end();
    
    
      easyCam.end();

}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
