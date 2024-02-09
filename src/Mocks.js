import lemonpie from '././assets/lemonpie.png' 
import chocotorta from '././assets/chocotorta.png' 
import cafeleche from '././assets/cafeleche.png' 
import capuchino from '././assets/capuchino.png' 
import miga from '././assets/miga.png' 
import medialuna from '././assets/medialuna.png' 


const products = [
    {
        id: '1',
        name: 'Lemon pie',
        price: '5600',
        category: 'pasteleria', 
        stock:'5', 
        img: lemonpie,
        description: "Receta clásica de limón, azúcar y huevo. Con una cucharada de ralladura de limón por cada dos"
    },
    {
        id: '2',
        name: 'Chocotorta',
        price: '3800',
        category: 'pasteleria',
        stock: '7',
        img: chocotorta,
        description:  "Torta de chocolate fundido cubierta con una crema espumosa y nata montada en el centro"
    },
    {
        id: '3',
        name:'Café con leche',
        price:'1500',
        category:'café',
        stock:'12',
        img: cafeleche,
        description:"Una taza con 60% café y 40% leche acompañado de una galleta"
    },
    {
        id: '4',
        name: "Capuchino",
        price: '2000',
        category:'cafe',
        stock:'9',
        img: capuchino,
        description:'Café fuerte, con una gran cantidad de leche en polvo. Se puede agregar azúcar o canela al gusto.'
    },
    {
        id:'5',
        name: "Sandwich de miga",
        price:'2000',
        category: 'salado',
        stock: '500', //porque se lo merecen
        img: miga,
        description:"Emparedado cuyas tapas o paredes están compuestas por finas secciones del llamado pan de miga o pan de molde" //los rumores relatan que fueron creadas en el monte olimpo 
    },
    {
        id:'6',
        name: "Medialuna",
        price:'3000',
        category:'facturas',
        stock:'24',
        img: medialuna,
        description: "Bollo de masa dulce, generalmente de harina de trigo, que se hornea hasta que está dorado"
    }
];

export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products);
            },1000);
    });
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products.find(product => product.id === productId))
        }, 1000)
    })
}

export const getProductByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products.filter(product => product.category === productCategory))
        }, 1000)
    })
}

