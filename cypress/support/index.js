import cypress from 'cypress';
import './commands'
import addContext from 'mochawesome/addContext'

Cypress.on("test:after:run", (test, runnable) => {
    
   /* let videoName = Cypress.spec.name
    videoName = videoName.replace('/.js.*', '.js')
    const videoUrl = 'videos/' + videoName + '.mp4'

    addContext({ test }, videoUrl)*/

    if (test.state === 'failed') {
        const screenshot = `${Cypress.config('screenshotsFolder')}/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
        addContext({ test }, screenshot);
    }
});