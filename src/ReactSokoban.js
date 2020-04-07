import React, { useRef, useEffect, useState } from 'react';
import InputManager from './InputManager';
import Player from './Player';
import World from './World';
import Statistics from './Statistics';

const ReactSokoban = ({ width, height, tilesize }) => {
    const canvasRef = React.useRef(); //Hook to access an element using canvasRef.current
    //const [player, setPlayer] = useState(new Player(1, 2, tilesize)); //Initialize player state, setPlayer fn update state
    const [world, setWorld] = useState(new World(width, height, tilesize));
    let inputManager = new InputManager();

    const handleInput = (action, data) => {
        console.log(`handle input:${action}:${JSON.stringify(data)}`);
        let newWorld = new World();
        Object.assign(newWorld, world); //Cannot use spread operator to make a copy here
        newWorld.movePlayer(data.x, data.y);
        setWorld(newWorld);
    }

    useEffect(() => {
        console.log('Create map');

        let newWorld = new World();
        Object.assign(newWorld, world); //Cannot use spread operator to make a copy here
        newWorld.loadLevel(1);

        setWorld(newWorld);
    }, []); //second parameter is for only render once this component mount

    useEffect(() => {
        console.log('Bind events');

        inputManager.bindKeys();
        inputManager.subscribe(handleInput);

        return () => {
            inputManager.unbindKeys();
            inputManager.unsubscribe(handleInput);
        } //This function declared in the return statement is called when component is closed
    });

    //useEffect is a lifecycle hook, which get called every time the DOM is changed
    useEffect(() => {
        console.log('Draw to canvas');

        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, width * tilesize, height * tilesize);
        world.draw(ctx);
    }); 

    return (
        <div>
            <canvas
                ref={canvasRef}
                width={width * tilesize}
                height={height * tilesize}
                style={{ border: '1px solid black' }}
            ></canvas>
            <Statistics width={width * tilesize} level={world.currentLevel} moves={world.stepCounter} />
        </div>
    )
};

export default ReactSokoban;