"use strict";

let steeringRot = 20;
let craneBaseRot = 0;
let wheelRot = 0;

function initCarBuffers()
{
    initCircleBuffers();
    initCubeBuffers();
}

function drawCar(elapsed)
{
    setupCamera();

    // Viser styrevinkel:
    document.getElementById("angle").innerHTML = steeringRot;

    modelMatrix.setIdentity();
    modelMatrix.translate(0, 0, 0);
    modelMatrix.scale(1,1,1);
    pushMatrix(modelMatrix);

    //*********** CHASSIS MIDTEN *******************************************************
    //Bil platformen.
    modelMatrix = peekMatrix();
    modelMatrix.translate(0,0,0);
    modelMatrix.scale(35,0.8,15);
    drawCube();

    //Ramme, midten høyre side
    modelMatrix = peekMatrix();
    modelMatrix.translate(-3.5,7.5,14.25);
    modelMatrix.scale(18.5,8,0.8);
    drawCube();

    //Ramme, midten venstre side
    modelMatrix = peekMatrix();
    modelMatrix.translate(-3.5,7.5,-14.25);
    modelMatrix.scale(18.5,8,0.8);
    drawCube();

    //Ramme, midten fremme, inne
    modelMatrix = peekMatrix();
    modelMatrix.translate(15,7.5,0);
    modelMatrix.scale(0.8,8,15);
    drawCube();

    //Ramme, midten bak, inne
    modelMatrix = peekMatrix();
    modelMatrix.translate(-22.5,7.5,0);
    modelMatrix.scale(0.8,8,15);
    drawCube();
    //*********** CHASSIS BAK *******************************************************
    //Ramme, bak høyre side
    modelMatrix = peekMatrix();
    modelMatrix.translate(-29,7.5,14.25);
    modelMatrix.scale(6,8,0.8);
    drawCube();

    //Ramme, bak venstre side
    modelMatrix = peekMatrix();
    modelMatrix.translate(-29,7.5,-14.25);
    modelMatrix.scale(6,8,0.8);
    drawCube();

    //Ramme bak bakerst
    modelMatrix = peekMatrix();
    modelMatrix.translate(-34.25,7.5,0);
    modelMatrix.scale(0.8,8,15);
    drawCube();
    //*********** CHASSIS FREMME *******************************************************
    //Ramme, fremme høyre side
    modelMatrix = peekMatrix();
    modelMatrix.translate(25.4,7.5,14.25);
    modelMatrix.scale(9.65,8,0.8);
    drawCube();

    //Ramme, fremme venstre side
    modelMatrix = peekMatrix();
    modelMatrix.translate(25.4,7.5,-14.25);
    modelMatrix.scale(9.65,8,0.8);
    drawCube();

    //Ramme, fremme fremst
    modelMatrix = peekMatrix();
    modelMatrix.translate(35,7.5,0);
    modelMatrix.scale(0.8,8,15);
    drawCube();

    //*********** SETE *********************************************************
    //sete, nedere støtte
    modelMatrix = peekMatrix();
    modelMatrix.translate(-3.5,5.5,0);
    modelMatrix.scale(2,6,2);
    drawCube();

    //sete, sete sitte del
    modelMatrix = peekMatrix();
    modelMatrix.translate(-3.5,11,0);
    modelMatrix.scale(6,1,8);
    drawCube();

    //sete, rygg del
    modelMatrix = peekMatrix();
    modelMatrix.translate(-8.5,20,0);
    modelMatrix.scale(1,8,8);
    drawCube();



    //*********** MOTOR *******************************************************
    //motor
    modelMatrix = peekMatrix();
    modelMatrix.translate(25,8,0);
    modelMatrix.scale(6,6,6);
    drawCube();

    //*********** GASS OG BREMS *******************************************************
    //brems støtte
    modelMatrix = peekMatrix();
    modelMatrix.translate(13,7.5,-6);
    modelMatrix.rotate(-45, 0, 0, 1);
    modelMatrix.scale(3,0.5,0.5);
    drawCube();

    //brems pedal
    modelMatrix = peekMatrix();
    modelMatrix.translate(11,10,-6);
    modelMatrix.rotate(45, 0, 0, 1);
    modelMatrix.scale(3,0.5,2);
    drawCube();

    //gass støtte
    modelMatrix = peekMatrix();
    modelMatrix.translate(13,7.5,6);
    modelMatrix.rotate(-45, 0, 0, 1);
    modelMatrix.scale(3,0.5,0.5);
    drawCube();

    //gass pedal
    modelMatrix = peekMatrix();
    modelMatrix.translate(11,10,6);
    modelMatrix.rotate(45, 0, 0, 1);
    modelMatrix.scale(3,0.5,2);
    drawCube();
    //*********** LYKTER *******************************************************
    //lykt fremme, høyre
    modelMatrix = peekMatrix();
    modelMatrix.translate(36,8,8);
    modelMatrix.scale(0.5,2,3.5);
    drawCube();
    //lykt fremme, venstre
    modelMatrix = peekMatrix();
    modelMatrix.translate(36,8,-8);
    modelMatrix.scale(0.5,2,3.5);
    drawCube();
    //lykt bak, venstre
    modelMatrix = peekMatrix();
    modelMatrix.translate(-36,8,-8);
    modelMatrix.scale(0.5,2,3.5);
    drawCube();
    //lykt bak, høyre
    modelMatrix = peekMatrix();
    modelMatrix.translate(-36,8,8);
    modelMatrix.scale(0.5,2,3.5);
    drawCube();
    //*********** DASHBORD *******************************************************
    //dashbord
    modelMatrix = peekMatrix();
    modelMatrix.translate(10,15,0);
    modelMatrix.scale(5,0.5,15);
    drawCube();
    //*********** PANSER OG BAGASJELUKE *****************************************************************
    //panser
    modelMatrix = peekMatrix();
    modelMatrix.translate(25,16,0);
    modelMatrix.scale(10,0.5,13.5);
    drawCube();
    //bagasjeluke
    modelMatrix = peekMatrix();
    modelMatrix.translate(-28.5,16,0);
    modelMatrix.scale(5.5,0.5,13.5);
    drawCube();
    //*********** RAMME, FØRERSETE OG TAK *****************************************************************
    //ramme fremme, høyre
    modelMatrix = peekMatrix();
    modelMatrix.translate(14.5,27.5,14.25);
    modelMatrix.scale(0.5,12.5,0.75);
    drawCube();
    //ramme fremme, venstre
    modelMatrix = peekMatrix();
    modelMatrix.translate(14.5,27.5,-14.25);
    modelMatrix.scale(0.5,12.5,0.75);
    drawCube();
    //ramme bak, høyre
    modelMatrix = peekMatrix();
    modelMatrix.translate(-22.5,27.5,14.25);
    modelMatrix.scale(0.5,12.5,0.75);
    drawCube();
    //ramme bak, venstre
    modelMatrix = peekMatrix();
    modelMatrix.translate(-22.5,27.5,-14.25);
    modelMatrix.scale(0.5,12.5,0.75);
    drawCube();
    // tak
    modelMatrix = peekMatrix();
    modelMatrix.translate(-4,40,0);
    modelMatrix.scale(19,0.5,15);
    drawCube();
    //*********** RATT OG RATTSTAMME *****************************************************************
    //rattstamme
    modelMatrix = peekMatrix();
    modelMatrix.translate(6.5,17,0);
    modelMatrix.rotate(45, 0, 0, 1);
    modelMatrix.scale(0.5,3,0.75);
    drawCube();
    // *** Aksling og hjul FORAN - med STYRING:
    modelMatrix = peekMatrix();
    modelMatrix.translate(-20.5, -1.2, 0);
    modelMatrix.rotate(steeringRot, 0, 1, 0);
    pushMatrix(modelMatrix);
    //- Aksling:
    modelMatrix = peekMatrix();
    modelMatrix.translate(0, 0, 0);
    modelMatrix.scale(0.4,0.4,15);
    drawCube();
    //- Akselbolt:
    modelMatrix = peekMatrix();
    modelMatrix.translate(0, 1, 0);
    modelMatrix.scale(0.4,1.6,0.4);
    drawCube();
    //- Venstre hjul:
    modelMatrix = peekMatrix();
    modelMatrix.translate(0, 0, 15.5);
    modelMatrix.rotate(90, 1, 0, 0);
    modelMatrix.rotate(wheelRot, 0, 1, 0);    //egen akse!!
    modelMatrix.scale(5,1,5);
    drawCircle();
    //- Høyre hjul:
    modelMatrix = peekMatrix();
    modelMatrix.translate(0, 0, -15.5);
    modelMatrix.rotate(90, 1, 0, 0);
    modelMatrix.rotate(wheelRot, 0, 1, 0);    //egen akse!!
    modelMatrix.scale(5,1,5);
    drawCircle();

    popMatrix();    // Ta utgangspunkt i "rota" igjen.

    // *** Aksling og hjul BAK:
    modelMatrix = peekMatrix();
    modelMatrix.translate(20.5, -1.2, 0);
    pushMatrix(modelMatrix);
    //- Aksling:
    modelMatrix = peekMatrix();
    modelMatrix.translate(0, 0, 0);
    modelMatrix.scale(0.4,0.4,15);
    drawCube();
    //- Akselbolt-1:
    modelMatrix = peekMatrix();
    modelMatrix.translate(0, 1, 3.5);
    modelMatrix.scale(0.4,1.6,0.4);
    drawCube();
    //- Akselbolt-2:
    modelMatrix = peekMatrix();
    modelMatrix.translate(0, 1, -3.5);
    modelMatrix.scale(0.4,1.6,0.4);
    drawCube();
    //- Venstre hjul:
    modelMatrix = peekMatrix();
    modelMatrix.translate(0, 0, 15.5);
    modelMatrix.rotate(90, 1, 0, 0);
    modelMatrix.rotate(wheelRot, 0, 1, 0);    //egen akse!!
    modelMatrix.scale(5,1,5);
    drawCircle();
    //- Høyre hjul:
    modelMatrix = peekMatrix();
    modelMatrix.translate(0, 0, -15.5);
    modelMatrix.rotate(90, 1, 0, 0);
    modelMatrix.rotate(wheelRot, 0, 1, 0);    //egen akse!!
    modelMatrix.scale(5,1,5);
    drawCircle();

    popMatrix();    // Ta utgangspunkt i "rota" igjen.
}
