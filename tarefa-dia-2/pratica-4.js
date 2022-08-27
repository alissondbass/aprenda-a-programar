// Se o produto for internacional aplicar 20% de impostos. E, se for nacional aplicar 12% de desconto.

let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

let impostoNacional = 1.12; //formula de acrescimo de juros
let impostoInternacional = 1.20; //formula de acrescimo de juros 


console.log(`Lista de produtos \n\n${produtoA["nome"]}; \n${produtoB["nome"]}; \n${produtoC["nome"]}.\n`);



if(produtoA.internacional == true){

    console.log(`O produto ${produtoA.nome} é um item de origem internacional, por isso o valor dele R$${produtoA.valor} acrescido ao imposto do Brasil é de R$${produtoA.valor*impostoInternacional}.`);
   
    } else {

        console.log(`O produto ${produtoA.nome} é um item de origem nacional, por isso o valor dele R$${produtoA.valor} acrescido ao imposto do Brasil é de R$${produtoA.valor*impostoNacional}.`);
        
        }

        if(produtoB.internacional == true){

            console.log(`O produto ${produtoB.nome} é um item de origem internacional, por isso o valor dele R$${produtoB.valor} acrescido ao imposto do Brasil é de R$${produtoB.valor*impostoInternacional}.`);
        } else {

            console.log(`O produto ${produtoB.nome} é um item de origem nacional, por isso o valor dele R$${produtoB.valor} acrescido ao imposto do Brasil é de R$${produtoB.valor*impostoNacional}.`);
            
            }

            if(produtoC.internacional == true){

                console.log(`O produto ${produtoC.nome} é um item de origem internacional, por isso o valor dele R$${produtoC.valor} acrescido ao imposto do Brasil é de R$${produtoC.valor*impostoInternacional}.`);
            } else {
    
                console.log(`O produto ${produtoC.nome} é um item de origem nacional, por isso o valor dele R$${produtoC.valor} acrescido ao imposto do Brasil é de R$${produtoC.valor*impostoNacional}.`);
                
                }

        
    

