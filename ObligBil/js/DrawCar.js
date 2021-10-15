"use strict";

class DrawCar
{
    constructor(gl, camera)
    {
        this.gl = gl;
        this.camera = camera;
        this.stack = new Stack();

        this.chassisCube = null;

        this.steeringRot = 20;
        this.craneBaseRot = 0;
        this.wheelRot = 0;

    }

    initBuffers()
    {
        this.chassisCube = new Cube(this.gl, this.camera, {red:0.25, green:0.25, blue:0.75, alpha:1});
        this.chassisCube.initBuffers();
    }

    handleKeys(elapsed, currentlyPressedKeys)
    {

    }

    drawRoot(elapsed, modelMatrix)
    {
        this.stack.pushMatrix(modelMatrix);
        //*********** CHASSIS MIDTEN *******************************************************
        //Bil platformen.
        modelMatrix.translate(0,0,0);
        modelMatrix.scale(35,0.8,15);
        this.chassisCube.draw(elapsed, modelMatrix);

        //Ramme, midten høyre side
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(-3.5,7.5,14.25);
        modelMatrix.scale(18.5,8,0.8);
        this.chassisCube.draw(elapsed, modelMatrix);

        //Ramme, midten venstre side
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(-3.5,7.5,-14.25);
        modelMatrix.scale(18.5,8,0.8);
        this.chassisCube.draw(elapsed, modelMatrix);

        //Ramme, midten fremme, inn
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(15,7.5,0);
        modelMatrix.scale(0.8,8,15);
        this.chassisCube.draw(elapsed, modelMatrix);

        //Ramme, midten bak, inne
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(-22.5,7.5,0);
        modelMatrix.scale(0.8,8,15);
        this.chassisCube.draw(elapsed, modelMatrix);
        //*********** CHASSIS BAK *******************************************************
        //Ramme, bak høyre side
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(-29,7.5,14.25);
        modelMatrix.scale(6,8,0.8);
        this.chassisCube.draw(elapsed, modelMatrix);

        //Ramme, bak venstre side
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(-29,7.5,-14.25);
        modelMatrix.scale(6,8,0.8);
        this.chassisCube.draw(elapsed, modelMatrix);

        //Ramme bak bakerst
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(-34.25,7.5,0);
        modelMatrix.scale(0.8,8,15);
        this.chassisCube.draw(elapsed, modelMatrix);
        //*********** CHASSIS FREMME *******************************************************
        //Ramme, fremme høyre side
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(25.4,7.5,14.25);
        modelMatrix.scale(9.65,8,0.8);
        this.chassisCube.draw(elapsed, modelMatrix);

        //Ramme, fremme venstre side
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(25.4,7.5,-14.25);
        modelMatrix.scale(9.65,8,0.8);
        this.chassisCube.draw(elapsed, modelMatrix);

        //Ramme, fremme fremst
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(35,7.5,0);
        modelMatrix.scale(0.8,8,15);
        this.chassisCube.draw(elapsed, modelMatrix);

        //*********** SETE *********************************************************
        //sete, nedere støtte
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(-3.5,5.5,0);
        modelMatrix.scale(2,6,2);
        this.chassisCube.draw(elapsed, modelMatrix);

        //sete, sete sitte del
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(-3.5,11,0);
        modelMatrix.scale(6,1,8);
        this.chassisCube.draw(elapsed, modelMatrix);

        //sete, rygg del
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(-8.5,20,0);
        modelMatrix.scale(1,8,8);
        this.chassisCube.draw(elapsed, modelMatrix);



        //*********** MOTOR *******************************************************
        //motor
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(25,8,0);
        modelMatrix.scale(6,6,6);
        this.chassisCube.draw(elapsed, modelMatrix);

        //*********** GASS OG BREMS *******************************************************
        //brems støtte
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(13,7.5,-6);
        modelMatrix.rotate(-45, 0, 0, 1);
        modelMatrix.scale(3,0.5,0.5);
        this.chassisCube.draw(elapsed, modelMatrix);

        //brems pedal
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(11,10,-6);
        modelMatrix.rotate(45, 0, 0, 1);
        modelMatrix.scale(3,0.5,2);
        this.chassisCube.draw(elapsed, modelMatrix);

        //gass støtte
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(13,7.5,6);
        modelMatrix.rotate(-45, 0, 0, 1);
        modelMatrix.scale(3,0.5,0.5);
        this.chassisCube.draw(elapsed, modelMatrix);

        //gass pedal
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(11,10,6);
        modelMatrix.rotate(45, 0, 0, 1);
        modelMatrix.scale(3,0.5,2);
        this.chassisCube.draw(elapsed, modelMatrix);
        //*********** LYKTER *******************************************************
        //lykt fremme, høyre
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(36,8,8);
        modelMatrix.scale(0.5,2,3.5);
        this.chassisCube.draw(elapsed, modelMatrix);
        //lykt fremme, venstre
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(36,8,-8);
        modelMatrix.scale(0.5,2,3.5);
        this.chassisCube.draw(elapsed, modelMatrix);
        //lykt bak, venstre
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(-36,8,-8);
        modelMatrix.scale(0.5,2,3.5);
        this.chassisCube.draw(elapsed, modelMatrix);
        //lykt bak, høyre
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(-36,8,8);
        modelMatrix.scale(0.5,2,3.5);
        this.chassisCube.draw(elapsed, modelMatrix);
        //*********** DASHBORD *******************************************************
        //dashbord
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(10,15,0);
        modelMatrix.scale(5,0.5,15);
        this.chassisCube.draw(elapsed, modelMatrix);
        //*********** PANSER OG BAGASJELUKE *****************************************************************
        //panser
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(25,16,0);
        modelMatrix.scale(10,0.5,13.5);
        this.chassisCube.draw(elapsed, modelMatrix);
        //bagasjeluke
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(-28.5,16,0);
        modelMatrix.scale(5.5,0.5,13.5);
        this.chassisCube.draw(elapsed, modelMatrix);
        //*********** RAMME, FØRERSETE OG TAK *****************************************************************
        //ramme fremme, høyre
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(14.5,27.5,14.25);
        modelMatrix.scale(0.5,12.5,0.75);
        this.chassisCube.draw(elapsed, modelMatrix);
        //ramme fremme, venstre
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(14.5,27.5,-14.25);
        modelMatrix.scale(0.5,12.5,0.75);
        this.chassisCube.draw(elapsed, modelMatrix);
        //ramme bak, høyre
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(-22.5,27.5,14.25);
        modelMatrix.scale(0.5,12.5,0.75);
        this.chassisCube.draw(elapsed, modelMatrix);
        //ramme bak, venstre
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(-22.5,27.5,-14.25);
        modelMatrix.scale(0.5,12.5,0.75);
        this.chassisCube.draw(elapsed, modelMatrix);
        // tak
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(-4,40,0);
        modelMatrix.scale(19,0.5,15);
        this.chassisCube.draw(elapsed, modelMatrix);
        //*********** RATT OG RATTSTAMME *****************************************************************
        //rattstamme
        modelMatrix = this.stack.peekMatrix();
        modelMatrix.translate(6.5,17,0);
        modelMatrix.rotate(45, 0, 0, 1);
        modelMatrix.scale(0.5,3,0.75);
        this.chassisCube.draw(elapsed, modelMatrix);
        // // *** Aksling og hjul FORAN - med STYRING:
        // modelMatrix = peekMatrix();
        // modelMatrix.translate(-20.5, -1.2, 0);
        // modelMatrix.rotate(steeringRot, 0, 1, 0);
        // pushMatrix(modelMatrix);
        // //- Aksling:
        // modelMatrix = peekMatrix();
        // modelMatrix.translate(0, 0, 0);
        // modelMatrix.scale(0.4,0.4,15);
        // drawCube();
        // //- Akselbolt:
        // modelMatrix = peekMatrix();
        // modelMatrix.translate(0, 1, 0);
        // modelMatrix.scale(0.4,1.6,0.4);
        // drawCube();
        // //- Venstre hjul:
        // modelMatrix = peekMatrix();
        // modelMatrix.translate(0, 0, 15.5);
        // modelMatrix.rotate(90, 1, 0, 0);
        // modelMatrix.rotate(wheelRot, 0, 1, 0);    //egen akse!!
        // modelMatrix.scale(5,1,5);
        // drawCircle();
        // //- Høyre hjul:
        // modelMatrix = peekMatrix();
        // modelMatrix.translate(0, 0, -15.5);
        // modelMatrix.rotate(90, 1, 0, 0);
        // modelMatrix.rotate(wheelRot, 0, 1, 0);    //egen akse!!
        // modelMatrix.scale(5,1,5);
        // drawCircle();
        //
        // popMatrix();    // Ta utgangspunkt i "rota" igjen.
        //
        // // *** Aksling og hjul BAK:
        // modelMatrix = peekMatrix();
        // modelMatrix.translate(20.5, -1.2, 0);
        // pushMatrix(modelMatrix);
        // //- Aksling:
        // modelMatrix = peekMatrix();
        // modelMatrix.translate(0, 0, 0);
        // modelMatrix.scale(0.4,0.4,15);
        // drawCube();
        // //- Akselbolt-1:
        // modelMatrix = peekMatrix();
        // modelMatrix.translate(0, 1, 3.5);
        // modelMatrix.scale(0.4,1.6,0.4);
        // drawCube();
        // //- Akselbolt-2:
        // modelMatrix = peekMatrix();
        // modelMatrix.translate(0, 1, -3.5);
        // modelMatrix.scale(0.4,1.6,0.4);
        // drawCube();
        // //- Venstre hjul:
        // modelMatrix = peekMatrix();
        // modelMatrix.translate(0, 0, 15.5);
        // modelMatrix.rotate(90, 1, 0, 0);
        // modelMatrix.rotate(wheelRot, 0, 1, 0);    //egen akse!!
        // modelMatrix.scale(5,1,5);
        // drawCircle();
        // //- Høyre hjul:
        // modelMatrix = peekMatrix();
        // modelMatrix.translate(0, 0, -15.5);
        // modelMatrix.rotate(90, 1, 0, 0);
        // modelMatrix.rotate(wheelRot, 0, 1, 0);    //egen akse!!
        // modelMatrix.scale(5,1,5);
        // drawCircle();

        this.stack.empty();
    }

    draw(elapsed, modelMatrix)
    {
        this.drawRoot(elapsed, modelMatrix);
    }
}

