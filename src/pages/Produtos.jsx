//Produtos.jsx

export default function Produtos({ produtos, adicionarAoCarrinho }) {
  return (
    <main>
      <h2 className="prod-h2">Produtos</h2>
      <ul className="prod-ul">
        {produtos.map(produto => (
          <li className='prod-li' key={produto.id} style={{ marginBottom: '1rem' }}>
            {produto.nome} - R$ {produto.preco}
            <br />
            <button className="prod-btn" onClick={() => adicionarAoCarrinho(produto)}>
              Adicionar ao Carrinho
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}
