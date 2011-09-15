/*
Author: Rafael Marques
Date  : 04/05/2011
Email : rafaelomarques@gmail.com
Site  : http://rafaelomarques.wordpress.com
*/

/*
*  handleCamera.js is a script to handle the cameras in Unity 3D.
*  Copyright (C) 2011 Rafael Marques <rafaelomarques@gmail.com>
*
*  This program is free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2, or (at your option)
*  any later version.
*
*  This program is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  You should have received a copy of the GNU General Public License
*  along with this program; if not, write to the Free Software
*  Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
*
*/

/*
***********************************************
*  **          Key specification           ** *
***********************************************
*  **     Key name     **     Key value    ** *
*  ****************************************** *
*  **  ESC             **     escape       ** *
*  **  Backspace       **     backspace    ** *
*  **  Delete/Del      **     delete       ** *
*  **  Tab             **     tab          ** *
*  **  Space           **     space        ** *
*  **  Left Arrow      **     left         ** *
*  **  Up Arrow        **     up           ** *
*  **  Right Arrow     **     right        ** *
*  **  Down Arrow      **     down         ** *
*  **  Enter           **     enter        ** *
*  **  Insert          **     insert       ** *
*  **  Page up         **     page up      ** *
*  **  Page Down       **     page down    ** *
*  **  Home            **     home         ** *
*  **  End             **     end          ** *
*  **  Key pad 1       **     [1]          ** *
*  **  Key pad 2       **     [2]          ** *
*  **  Key pad 3       **     [3]          ** *
*  **  Key pad 4       **     [4]          ** *
*  **  Key pad 5       **     [5]          ** *
*  **  Key pad 6       **     [6]          ** *
*  **  Key pad 7       **     [7]          ** *
*  **  Key pad 8       **     [8]          ** *
*  **  Key pad 9       **     [9]          ** *
*  **  Key pad 0       **     [0]          ** *
*  **  1               **     1            ** *
*  **  2               **     2            ** *
*  **  3               **     3            ** *
*  **  4               **     4            ** *
*  **  5               **     5            ** *
*  **  6               **     6            ** *
*  **  7               **     7            ** *
*  **  8               **     8            ** *
*  **  9               **     9            ** *
*  **  0               **     0            ** *
*  **  a               **     a            ** *
*  **  b               **     b            ** *
*  **  c               **     c            ** *
*  **  d               **     d            ** *
*  **  e               **     e            ** *
*  **  f               **     f            ** *
*  **  g               **     g            ** *
*  **  h               **     h            ** *
*  **  i               **     i            ** *
*  **  j               **     j            ** *
*  **  k               **     k            ** *
*  **  l               **     l            ** *
*  **  m               **     m            ** *
*  **  n               **     n            ** *
*  **  o               **     o            ** *
*  **  p               **     p            ** *
*  **  q               **     q            ** *
*  **  r               **     r            ** *
*  **  s               **     s            ** *
*  **  t               **     t            ** *
*  **  u               **     u            ** *
*  **  v               **     v            ** *
*  **  x               **     x            ** *
*  **  y               **     y            ** *
*  **  w               **     w            ** *
*  **  z               **     z            ** *
***********************************************
***********************************************
*/

// A small class that wich handles the camera and the specified key to
// enable and/or disable it.
class HandleCamera {
	var camera : Camera;
	var key : String;
}

// The array that have all the cameras specified
var cameras : HandleCamera[];

// Set the first defined camera as the enabled one.
function Start () {
	if (cameras.length > 0) {
		cameras[0].camera.enabled = true;
		for (var i = 1; i < cameras.length; i++) {
			cameras[i].camera.enabled = false;	
		}
	}
} 

// Check if a camera key was pressed
function Update () {
	for (var i = 0; i < cameras.length; i++) {
		if (cameras[i].key != "" && Input.GetKey(cameras[i].key)) {
			handleCameras(i);
		}
	}
}

// Receives the index of the camera that will be enabled.
private function handleCameras(cameraId) {
	for (var i = 0; i < cameras.length; i++) {
		if (i == cameraId) {
			cameras[i].camera.enabled = true;
		} else {
			cameras[i].camera.enabled = false;
		}
	}
}