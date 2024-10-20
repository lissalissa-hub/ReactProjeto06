function Boletim(props) {
    let nota = props.notaAluno
    if (nota >= 90) {
        return <h1>Muito bom!</h1>

    }
    else if (nota > 70 && nota < 90) {
        return <h1>Bom!</h1>
    }
    else {
        return <h1>Melhorar!</h1>
    }


}

export default Boletim
