const app = Vue.createApp({
    data(){
        return{
            nomeProduto: "Notebook TechBook",
            preco: 3500,
            estoque: 5,
            quantidade: 1,
            descontoAtivo: false,
            mensagemCompra: ""
        }
    },
    computed: {
        total() {
                let valor = this.preco * this.quantidade
                if (this.descontoAtivo) {
                valor = valor * 0.90
            }
            return valor
        }, 
        precoFormatado() {
            return this.preco.toLocaleString(
                "pt-BR",
                {
                    style: "currency",
                    currency: "BRL"
                }
            )
        },
        totalFormatado() {
           return this.total.toLocaleString(
                "pt-BR",
                {
                    style: "currency",
                    currency: "BRL"
                }
            )
        }
    },
    methods: {
            aplicarDesconto(){
                this.descontoAtivo =
                !this.descontoAtivo
            },
        
        
            compraProduto(){
            if (
                this.quantidade > 0 &&
                this.quantidade <= this.estoque
            ) {
                this.mensagemCompra = 
                "Compra realizada com sucesso!"
            } else {
                this.mensagemCompra =
                "Quantidade indisponível em estoque."
            }
        }
    }
})
app.mount("#app")