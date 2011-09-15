/*
Author: Rafael Marques
Date  : 05/05/2011
Email : rafaelomarques@gmail.com
Site  : http://rafaelomarques.wordpress.com
*/

/*
*  handleCamera.js is a script to handle the camera's zoom in
*  Unity 3D.
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

// Saves the initial zoom from the camera
private var initialZoom;

// Define the key that will do the zoom in action
var forward : String;

// Define the key that will do the zoom out action
var backward : String;

// Define the key that will move up the camera
var up : String;

// Define the key that will move down the camera
var down : String;

// Define the key that will move the camera to the left
var left : String;

// Define the key that will move the camera to the right
var right : String;

// Define the key that will restore the initial zoom
var restore : String;

// Define the speed that the camera will move
var speed : double;

// Set the first defined camera as the enabled one.
function Start () {
	initialZoom = transform.position;
} 

// verify if some of the specified keys were pressed
function Update () {

	if (forward != "" && Input.GetKey(forward)) {
		transform.Translate(0, 0, speed);
	} 
	else if (backward != "" && Input.GetKey(backward)) {
		transform.Translate(0, 0, -(speed));
	}
	else if (up != "" && Input.GetKey(up)) {
		transform.Translate(0, -(speed), 0);
	} 
	else if (down != "" && Input.GetKey(down)) {
		transform.Translate(0, speed, 0);
	}
	else if (right != "" && Input.GetKey(right)) {
		transform.Translate(-(speed), 0, 0);
	} 
	else if (left != "" && Input.GetKey(left)) {
		transform.Translate(speed, 0, 0);
	}
	else if (restore != "" && Input.GetKey(restore)) {
		transform.position = initialZoom;
	}
}