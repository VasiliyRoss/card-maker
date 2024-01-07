import { CardData } from '../types/content';

function saveModelToLocal(model: CardData) {
    const text = JSON.stringify(model);
    const name = 'file.json';
    const type = 'text/plain';

    const a = document.createElement('a');
    const file = new Blob([text], { type: type });
    a.href = URL.createObjectURL(file);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    console.log('Project has been saved');
}

function loadModelFromLocal(onLoad: (model: CardData) => void) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';

    input.addEventListener('change', (event) => {
        const target = event.target as HTMLInputElement;
        const file = target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (readerEvent) => {
                const content = readerEvent.target?.result as string;
                const model = JSON.parse(content);
                onLoad(model);
            };
            reader.readAsText(file);
        }
    });

    input.click();
    console.log('Project has been loaded');
}

export { saveModelToLocal, loadModelFromLocal };
