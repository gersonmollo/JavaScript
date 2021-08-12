class NegociacoesView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.negociacoes.map((value) => `
                        <tr>
                            <td>${DateHelper.dataParaTexto(value.data)}</td>
                            <td>${value.quantidade}</td>
                            <td>${value.valor}</td>
                            <td>${value.volume}</td>
                        </tr>
                    `).join('')}
                </tbody>
                <tfoot>
                    <td colspan="3"></td>
                    <td>
                        ${model.negociacoes.reduce((total, n) => total + n.volume, 0)}
                    </td>
                </tfoot>
            </table>
        `;
    }
}