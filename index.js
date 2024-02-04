import * as PIXI from 'pixi.js';
import {Graphics} from "pixi.js";

let app = new PIXI.Application({background: 'black',resizeTo: window });
document.body.appendChild(app.view);


let container = new PIXI.Container();
// Add text
let text = new PIXI.Text(
    '5 Hidden Dogs\n\n' +
    'Can you spot them?',
    {
        fontSize: 44,
        fill: 'white',
        wordWrap: false,
        wordWrapWidth: 10,
        fontWeight:600
    }
);
text.anchor.set(0.5)
text.x = app.screen.width / 2;
text.y = app.screen.height / 2;
// Add doggy
const doggy = PIXI.Sprite.from('assets/doggy.png')
doggy.anchor.set(0.5)
doggy.width = 75
doggy.height = 95
doggy.x = text.x + 150;
doggy.y = text.y - 30;

const doggy1 = PIXI.Sprite.from('assets/doggy.png')
doggy1.anchor.set(0.5)
doggy1.width = 75
doggy1.height = 95
doggy1.x = text.x + 150;
doggy1.y = text.y - 30;

//Add play button
const playButton = PIXI.Sprite.from('assets/btn.png')
const playground = new PIXI.Container()


const room = PIXI.Sprite.from('assets/back_five_dogs.jpg')
room.width = app.screen.width;
playground.addChild(room)
playground.width = app.screen.width


// container.addChild(room)
playButton.eventMode = 'static';
playButton.anchor.set(0.5)
playButton.width = 300
playButton.height =150
playButton.x = app.screen.width/2;
playButton.y =  app.screen.height-100;
const playText = new PIXI.Text("Play Now", { fill: "#dedea3", fontSize: 24, fontWeight:700});
playText.anchor.set(0.5);
playText.position.set(0, 0);
playButton.addChild(playText)
app.stage.addChild(playButton)
container.addChild(doggy)
container.addChild(text)
app.stage.addChild(container);


const frames = []
function addDogs(){
        playground.addChild(doggy)
}
function changeScene(){
        setTimeout(()=>{
                app.stage.removeChild(container);
                app.stage.addChild(playground)
                app.stage.addChild(playButton)
                playButton.on('pointerdown', ()=>{
                        window.location = 'https://www.g5.com/'
                })
                addDogs()
        },2000)
}

changeScene();
