import ProdutoModel from "../models/model.porduto.js";


class ProdutoController {

static getAllProdutos(req, res) {
    try {
        ProdutoModel.getAllProdutos(function(err, result){
            if (err) {
                console.error(err);
                return res.status(500).json( {error: "Ocorreu um erro ao buscar os produtos."} );
            }

            return res.status(200).json(result);
        });

    } catch (error) {
        console.error(error);
        res.status(500).json( { error: "Error interno no servidor."} );
    }
}

}

export default ProdutoController;