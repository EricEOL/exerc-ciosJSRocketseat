//ex01
var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};

function retornaEnderecoUser(enderecouser){
    console.log("O usuário mora em", enderecouser.rua,"/", enderecouser.uf, "no bairro do", 
    enderecouser.bairro, "na", enderecouser.rua, "com nº",enderecouser.numero); 
}

retornaEnderecoUser(endereco);

//ex02
function numerosParesEntre(x, y){
    console.log("Você escolheu os números", x,"e", y);
    while (y >= x){
        var number = y - x, restoDiv = number%2;

        if(restoDiv === 0){
            if(number > 0) {
                console.log(number);
            }
        }
    y--
    }
}

numerosParesEntre(1, 20);

//ex03
var skills = ['Javascript', 'React JS', 'React Native'];

var habilidade = false;

function temHabilidade (habilidades){
    if(habilidades.indexOf('Javascript') >= 0){
        habilidade = true;

        return habilidade;
    }else {
        return habilidade;
    }
}

console.log(temHabilidade(skills));

//ex04
function experiencia(anos){
    var resposta = "";
        if(anos < 1){
            resposta = "Iniciante";
        }else if(anos >= 1 && anos <=3){
            resposta = "Intermediário";
        }else if (anos >3 && anos <=6){
            resposta = "Avançado";
        }else {
            resposta = "Jedi Master";
        }
        console.log(resposta);
    }

experiencia(5);

//ex05
var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

function skillsUser(user){
    for(var userSkills of user){
        console.log("O", userSkills.nome,"possui as habilidades:",userSkills.habilidades.join(", "));
    }
}

skillsUser(usuarios);




