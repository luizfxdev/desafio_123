

A Jornada Espacial do Robô D4V1NCI
🌌 Em uma galáxia muito, muito distante, o robô D4V1NCI foi programado para explorar os segredos do universo. 
Sua missão é encontrar planetas habitáveis e catalogá-los, mas há um problema: ele só consegue entender coordenadas em um formato muito especial!

🛰️ As coordenadas são recebidas em uma série de strings que misturam letras e números. O que D4V1NCI precisa é da soma de todos os números presentes nas strings para poder calcular a rota correta para cada planeta. Porém, ele precisa seguir algumas regras:
Somente números inteiros não negativos são considerados.
Os números podem aparecer em sequência dentro da string.
A soma final deve ser dividida por 12, e caso seja divisível por 12, D4V1NCI considera o planeta habitável! 🌍✨

🔧 Sua tarefa é criar um programa que, dada uma lista de strings, some todos os números de cada string, divida o total por 12 e determine se o planeta é habitável.

Entrada:
Uma lista de strings, por exemplo: ["a3b4c2", "x0y1z2", "ab3cd4ef5"]

Saída esperada:
Para a lista de exemplo, o programa deve retornar: "Planeta Habitável" se a soma for divisível por 12, ou "Planeta Inóspito" caso contrário.

ATENÇÃO:

Nos meus testes, utilizei as entradas abaixo:

HABITÁVEL

a3b4c2,x0y1z2, ab3cd4ef5

a12b,x12y0z0,abc0def0ghi0

m4n8,x2x2x2x2,x4

INÓSPITO

no1numbers3here5,x1y2z3

a3b4c2,x0y1z2,ab3cd4ef6

d7e1f4,g5h3j2,k1l8m6


💡 Dica: Considere o poder da simplicidade e engenhosidade robótica para completar esta missão. Boa sorte, cadete espacial! 🚀
