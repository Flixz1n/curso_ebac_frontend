// Array de objetos com nome e nota de alunos
const alunos = [
    { nome: 'João', nota: 7 },
    { nome: 'Maria', nota: 5.5 },
    { nome: 'Pedro', nota: 8 },
    { nome: 'Ana', nota: 6 },
    { nome: 'Lucas', nota: 4 }
];

// Função que retorna alunos com nota >= 6
const alunosAprovados = (alunos) => {
    return alunos.filter(aluno => aluno.nota >= 6);
};

// Exibindo os alunos aprovados
const aprovados = alunosAprovados(alunos);
console.log(aprovados);
