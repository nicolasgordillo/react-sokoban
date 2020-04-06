import React, { useRef, useEffect, useState } from 'react';
import InputManager from './InputManager';
import Player from './Player';

const ReactSokoban = ({ width, height, tilesize }) => {
    const canvasRef = React.useRef(); //Hook to access an element using canvasRef.current
    const [player, setPlayer] = useState(new Player(1, 2, tilesize)); //Initialize player state, setPlayer fn update state

    let inputManager = new InputManager();

    const handleInput = (action, data) => {
        console.log(`handle input:${action}:${JSON.stringify(data)}`);
        let newPlayer = new Player();
        Object.assign(newPlayer, player); //Cannot use spread operator to make a copy here
        newPlayer.move(data.x, data.y);
        setPlayer(newPlayer);
    }

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
        player.draw(ctx);
    }); 

    return (
        <canvas
            ref={canvasRef}
            width={width * tilesize}
            height={height * tilesize}
            style={{ border: '1px solid black' }}
        ></canvas>
    )
};

export default ReactSokoban;