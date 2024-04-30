function Evento({titulo, descricao, horario, local}){
    return(
        <section className="evento">
            <div className="informacao">
                <h1>{titulo}</h1>
                <p>{local}</p>
                <p>{descricao}</p>
                <p>{horario}</p>
            </div>
            <img src="imagem1.jpg" alt="imagem" />
        </section>
    )
}
export default Evento;