import { GUI } from 'dat.gui';
import { variables } from './enviroment';

const rotationSettings = {
    min: -Math.PI,
    max: Math.PI,
};

const positionSettings = {
    min: -10,
    max: 10,
};

const scaleSettings = {
    min: 0,
    max: 2,
};

const defaultSettings = {
    rotation: rotationSettings,
    position: positionSettings,
    scale: scaleSettings,
};

class createControl {
    __gui: any;

    constructor() {
        if (!variables.showControls) return;
        this.__gui = new GUI();
    }

    addControls(folderName: string, model: any) {
        if (!variables.showControls) return;

        const folder = this.__gui.addFolder(folderName);

        ['rotation', 'position', 'scale'].forEach((property) => {
            ['x', 'y', 'z'].forEach((item) => {
                const config = defaultSettings[property];
                folder
                    .add(model[property], item, config.min, config.max)
                    .name(`${property}.${item}`);
            });
        });
    }
}

export { createControl, rotationSettings, positionSettings, scaleSettings };
