import image from './assets/image.png'
import {TextBlock, TitleBlock, ImageBlock, ColumsBlock} from './classes/blocks'


export const model = [
    new TitleBlock( 'Constructor on pure JavaScript', {
        tag: 'h2',
        styles:{
            background: 'linear-gradient(to right, #ff009f, #493240)',
            color: '#ff1',
            padding: '1.5rem',
            'text-align': 'center'  
        }

    }),
   

    new TextBlock( 'pet-project', {
        tag: 'h5',
        styles: {
            background: 'linear-gradient(to left, #abcd12, #770020)',
            color: '#bbb',
            padding: '0.5rem',
            'text-align': 'center' 
        }
    } ),
     

new ImageBlock(image, {
    styles:{
        
        padding: '2rem 0',
        display: 'flex',
    }, 
    imageStyles: {
        margin: 'auto',
        width: '30%',
        height: 'auto'
    }, 
    alt: 'picture'
    }),

   
    new ColumsBlock( [
        'without library',
        'pure javascript',
        'constructor'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #feabbb, #fffaaa)',
            color: '#333',
            padding: '0.5rem',
            'text-align': 'center' 
        }  
    } ),




]