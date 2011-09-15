/*
Author: Rafael Marques
Date  : 04/05/2011
Email : rafaelomarques@gmail.com
Site  : http://rafaelomarques.wordpress.com
*/

/*
*  rotation.js is a script to handle with game objects rotation in 
*  Unity 3D software using keyboard and mouse.
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

// Saves the initial rotation of the GameObject to restore it when necessary
private var initialRotation;

var mouseDrag : boolean = true;

// Stores the key that will restore the initial GameObject rotation
var restoreKey : String = "m";

// Stores the key that will perform the rotation
var up : String = "w";

// Stores the key that will perform the rotation
var down : String = "s";

// Stores the key that will perform the rotation
var left : String = "a";

// Stores the key that will perform the rotation
var right : String = "d";

// Stores the key that will perform the z rotation
var performZRotation : String = "q";

// Stores the key that will perform the z rotation
var performNegativeZRotation : String = "e";

// The horizontal speed
var horizontalSpeed  : float = 4.0;

// The vertical speed
var verticalSpeed : float = 4.0;

function Start () {
	initialRotation = transform.rotation;
} 

function Update () {
	
	if (restoreKey != "" && Input.GetKey(restoreKey)) { 
		// Verify if the pre-defined restore key was pressed
		transform.rotation = initialRotation;
		
	} else if ((up != "" && down != "" && left != "" && right != "") && 
			(Input.GetKey(up) || Input.GetKey(down) || Input.GetKey(left) || Input.GetKey(right))) { 
		// Verify if the pre-defined directional keys were pressed
		var h : float = horizontalSpeed  * Input.GetAxis ("Horizontal");
	    var v : float = verticalSpeed * Input.GetAxis ("Vertical");
	    transform.Rotate (v, h, 0);
	    
	} else if (performZRotation != "" && Input.GetKey(performZRotation)) { 
		// Verify if the pre-defined perform z rotation key was pressed
		transform.Rotate(0, 0, 1 * verticalSpeed);
		
	} else if (performNegativeZRotation != "" && Input.GetKey(performNegativeZRotation)) {
		// Verify if the pre-defined perform negative z rotation key was pressed
		transform.Rotate(0, 0, -(1 * verticalSpeed));
		
	}
}

// Do the rotation of the GameObject according to the mouse drag action
function OnMouseDrag() {
	if (mouseDrag == true) {
		var h : float = horizontalSpeed  * Input.GetAxis ("Mouse X");
		var v : float = verticalSpeed * Input.GetAxis ("Mouse Y");
		transform.Rotate (v, -h, 0);
	}
}