#pragma once

#include "ofMain.h"
#include "of3dPrimitives.h"


class ofApp : public ofBaseApp{

	public:
		void setup();
		void update();
		void draw();

		void keyPressed(int key);
		void keyReleased(int key);
		void mouseMoved(int x, int y );
		void mouseDragged(int x, int y, int button);
		void mousePressed(int x, int y, int button);
		void mouseReleased(int x, int y, int button);
		void windowResized(int w, int h);
		void dragEvent(ofDragInfo dragInfo);
		void gotMessage(ofMessage msg);
    
    ofShader shader;
    ofShader shaderTwo;
    ofShader shaderThree;
    ofShader shaderFour;
    ofShader shaderFive;
    ofShader shaderSix;
    ofShader shaderSeven;
    ofSpherePrimitive sphere;
    ofEasyCam easyCam;
    ofCylinderPrimitive cylinder;
    ofConePrimitive cone;
    ofBoxPrimitive box;
    ofBoxPrimitive boxTwo;
    ofCylinderPrimitive cylTwo;
    ofSpherePrimitive sphereTwo;
		
};
