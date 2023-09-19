const { default: axios } = require("axios");

const { Product } = require("../db");

async function productsMock() {
 
    await Product.bulkCreate([

        {
            name:"Gaseosa",
            price:227,
            description:"500mlSinAzucar",
            image:"https://www.realonline.com.py/media/catalog/product/cache/15227f334d686c2b2a7b4195f8ac0289/7/8/7840058000019.jpg",
            stock:100,
            brand:"CocaCola",
            expirationdate:"2023/12/20",
            categories:"Bebidas"
            },
        {
            name:"Agua Saborizada",
            price:412,
            description:"2.25 litros Sabor Pomelo",
            image:"https://ardiaprod.vtexassets.com/arquivos/ids/249162-800-auto?v=638181572330330000&width=800&height=auto&aspect=true",
            stock:100,
            brand:"Levité",
            expirationdate:"2023/12/20",
            categories:"Bebidas"
            } ,       
        
        {
            name:"Vino Tinto",
            price:1.099,
            description:"Malbec trapiche 750ml",
            image:"https://ardiaprod.vtexassets.com/arquivos/ids/253505-800-auto?v=638211303958930000&width=800&height=auto&aspect=true",
            stock:100,
            brand:"Origen",
            expirationdate:"2050/12/20",
            categories:"Bebidas"
            },
        {
            name:"Agua Mineral",
            price:116,
            description:"Agua mineral con gas 1.5 litros",
            image:"https://ardiaprod.vtexassets.com/arquivos/ids/257217-800-auto?v=638255448810930000&width=800&height=auto&aspect=true",
            stock:100,
            brand:"Eco de los Andes",
            expirationdate:"2050/12/20",
            categories:"Bebidas"
            },        
        {
            name:"Cerveza",
            price:515,
            description:"Ipa 473 ml",
            image:"https://ardiaprod.vtexassets.com/arquivos/ids/255198-800-auto?v=638230485958200000&width=800&height=auto&aspect=true",
            stock:150,
            brand:"Quilmes",
            expirationdate:"2024/12/20",
            categories:"Bebidas"
            },
        
        {
            name:"Aceite de Girasol",
            price:568,
            description:"Aceite 1.5 litros",
            image:"https://ardiaprod.vtexassets.com/arquivos/ids/254949-800-auto?v=638230480635400000&width=800&height=auto&aspect=true",
            stock:500,
            brand:"Cañuelas",
            expirationdate:"2023/11/25",
            categories:"Aceites y Aderezos"
            },
        
        {
            name:"Sal Fina",
            price:210,
            description:"Celusal 500gr",
            image:"https://ardiaprod.vtexassets.com/arquivos/ids/184595-800-auto?v=637427546564070000&width=800&height=auto&aspect=true",
            stock:300,
            brand:"Celusal",
            expirationdate:"2023/11/25",
            categories:"Aceites y Aderezos"
            },
        
        {
            name:"Kepchup",
            price:345,
            description:"DoyPack 250gr",
            image:"https://ardiaprod.vtexassets.com/arquivos/ids/194288-800-auto?v=637528642837700000&width=800&height=auto&aspect=true",
            stock:350,
            brand:"Hellmanns",
            expirationdate:"2023/11/25",
            categories:"Aceites y Aderezos"
            },
        
        {
            name:"Mayonesa",
            price:390,
            description:"Mayonesa 500ml",
            image:"https://ardiaprod.vtexassets.com/arquivos/ids/255623-800-auto?v=638235663680400000&width=800&height=auto&aspect=true",
            stock:200,
            brand:"Natura",
            expirationdate:"2023/12/18",
            categories:"Aceites y Aderezos"
            },
        
        {
            name:"Vinagre",
            price:345,
            description:"Vinagre de alcohol 1Litro",
            image:"https://ardiaprod.vtexassets.com/arquivos/ids/216513-800-auto?v=637722290139600000&width=800&height=auto&aspect=true",
            stock:280,
            brand:"Menoyo",
            expirationdate:"2026/11/25",
            categories:"Aceites y Aderezos"
            },
        
        {
            name:"Arroz",
            price:147,
            description:"Grano Selecto Largo Fino 500 Gr.",
            image:"https://ardiaprod.vtexassets.com/arquivos/ids/257760-800-auto?v=638260705949400000&width=800&height=auto&aspect=true",
            stock:500,
            brand:"Molinos Ala",
            expirationdate:"2030/11/25",
            categories:"Arroz y Legumbres"
            },
        
        {
            name:"Maiz",
            price:485,
            description:"Maiz pelado blanco  400gr",
            image:"https://ardiaprod.vtexassets.com/arquivos/ids/249699-800-auto?v=638185522292830000&width=800&height=auto&aspect=true",
            stock:280,
            brand:"Egran",
            expirationdate:"2024/01/25",
            categories:"Arroz y Legumbres"
            } ,       
        
        {
            name:"Arvejas",
            price:668,
            description:"Arvejas Partidas Egran 400gr",
            image:"https://ardiaprod.vtexassets.com/arquivos/ids/249694-800-auto?v=638185522187030000&width=800&height=auto&aspect=true",
            stock:374,
            brand:"Egran",
            expirationdate:"2027/12/18",
            categories:"Arroz y Legumbres"
            },
        
        {
            name:"Arroz Integral",
            price:329,
            description:"Arroz Integral Gallo 500 Gr",
            image:"https://ardiaprod.vtexassets.com/arquivos/ids/259125-800-auto?v=638279758297500000&width=800&height=auto&aspect=true",
            stock:280,
            brand:"Gallo",
            expirationdate:"2026/11/25",
            categories:"Arroz y Legumbres"
            },

        
        {
            name:"Semillas de Chia",
            price:569,
            description:"Semillas de Chía Enteras 100 Gr",
            image:"https://ardiaprod.vtexassets.com/arquivos/ids/195348-800-auto?v=637539026796370000&width=800&height=auto&aspect=true",
            stock:280,
            brand:"Conosur",
            expirationdate:"2026/01/25",
            categories:"Arroz y Legumbres"
            },
        
        {
            name:"Zanahoria",
            price:249,
            description:"Zanahoria x Kg",
            image:"https://ardiaprod.vtexassets.com/arquivos/ids/238437-800-auto?v=638079188471270000&width=800&height=auto&aspect=true",
            stock:100,
            brand:"Sin Marca",
            expirationdate:"2023/12/20",
            categories:"Frutas y Verduras"
            },
    
        
        
        {
            name:"Zapallo",
            price:219,
            description:"Zapallo x 1 Kg.",
            image:"https://ardiaprod.vtexassets.com/arquivos/ids/221046-800-auto?v=637813801798230000&width=800&height=auto&aspect=true ",
            stock:150,
            brand:"Sin Marca",
            expirationdate:"2023/09/20",
            categories:"Frutas y Verduras"
            },
        
        {
            name:"Pera",
            price:399,
            description:"Pera x 1 Kg",
            image:"https://ardiaprod.vtexassets.com/arquivos/ids/238428-800-auto?v=638079188283470000&width=800&height=auto&aspect=true",
            stock:100,
            brand:"Sin Marca",
            expirationdate:"2023/09/10",
            categories:"Frutas y Verduras"
            },
        
        {
            name:"Banana",
            price:638,
            description:"Banana x 1 Kg.",
            image:"https://ardiaprod.vtexassets.com/arquivos/ids/238425-800-auto?v=638079188208730000&width=800&height=auto&aspect=true",
            stock:150,
            brand:"Sin Marca",
            expirationdate:"2023/09/10",
            categories:"Frutas y Verduras"
            },
        
        {
            name:"Batata",
            price:469,
            description:"Batata x 1 Kg",
            image:"https://ardiaprod.vtexassets.com/arquivos/ids/238419-800-auto?v=638079188096670000&width=800&height=auto&aspect=true",
            stock:50,
            brand:"Sin Marca",
            expirationdate:"2023/09/10",
            categories:"Frutas y Verduras"
            },
        
        {
            name:"Pan Rallado",
            price:282,
            description:"Pan Rallado Mamá Cocina 1 Kg.",
            image:"https://ardiaprod.vtexassets.com/arquivos/ids/230332-800-auto?v=638018673829100000&width=800&height=auto&aspect=true",
            stock:150,
            brand:"Mamá Cocina",
            expirationdate:"2023/09/01",
            categories:"Panadería"
            },
        
        {
            name:"Pan Mignon",
            price:36,
            description:"Pan Mignon x Un.",
            image:"https://ardiaprod.vtexassets.com/arquivos/ids/187653-800-auto?v=637427610486870000&width=800&height=auto&aspect=true",
            stock:35,
            brand:"Sin Marca",
            expirationdate:"2023/08/30",
            categories:"Panadería"
            },        
        
        {
            name:"Pan Flauta",
            price:72,
            description:"Pan Flauta x Un.",
            image:"https://ardiaprod.vtexassets.com/arquivos/ids/187650-800-auto?v=637427610432600000&width=800&height=auto&aspect=true",
            stock:50,
            brand:"Sin Marca",
            expirationdate:"2023/09/10",
            categories:"Panadería"
            },
        
        {
            name:"Pan Rallado",
            price:204,
            description:"Pan Rallado DIA 500 Gr.",
            image:"https://ardiaprod.vtexassets.com/arquivos/ids/237387-800-auto?v=638074063223630000&width=800&height=auto&aspect=true",
            stock:80,
            brand:"Sin Marca",
            expirationdate:"2023/08/30",
            categories:"Panadería"
            },
        
        {
            name:"Pan Multicereal",
            price:729,
            description:"Pan Multicereal Familiar 650 Gr",
            image:"https://ardiaprod.vtexassets.com/arquivos/ids/257476-800-auto?v=638259832960770000&width=800&height=auto&aspect=true",
            stock:85,
            brand:"Sin Marca",
            expirationdate:"2023/08/30",
            categories:"Panadería"
            },
        
        
    ])
};

module.exports = async () => {
    await productsMock();
    console.log("Mock agregados a DB!");
  };