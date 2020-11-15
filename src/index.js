import _ from 'lodash'
import './fonts.css'
import './styles.sass'
import image from './assets/oxxxy.jpg'

const component = () => {
    const element = document.createElement('div');

    element.innerHTML = _.join(['wow', 'bitches'], ' ');
    element.classList.add('element')

    const img = new Image()
    img.src = image;

    element.appendChild(img)

    return element;
}

document.body.appendChild(component());