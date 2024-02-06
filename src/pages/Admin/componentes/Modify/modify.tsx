import React, {
    useState,
    useEffect,
    ChangeEvent
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import './modify.css';
import ListagemService from '../../../../services/ListagemService';
import NavBar from '../../../../componentes/NavBar/navbar';
import UsuarioService from '../../../../services/UsuarioService';
import { Carro, Marca } from '../../../../utils/objects';
import { Utils } from '../../../../utils/Utils';

const listagemService = new ListagemService();

export default function Modify({ isUpdate = false }) {
    const [carro, setCarro] = useState<string>();
    const [preco, setPreco] = useState<number>();
    const [ano, setAno] = useState<number>();
    const [km, setKm] = useState<number>();
    const [marcaId, setMarcaId] = useState<number>(1);
    const [cor, setCor] = useState<string>('Vermelho');
    const [tipo, setTipo] = useState<string>('Suv');
    const [reservado, setReservado] = useState<boolean>(false);
    const [urlImg, setUrlImg] = useState<string>('');
    const [modelo, setModelo] = useState<string>('');
    let [obj, setObj] = useState({});
    let tituloPagina, tituloBtn = '';
    let obrigatorio = '';
    const { carroId } = useParams();
    const navigate = useNavigate();

    const marcas = [
        { id: 1, marca: "Audi" }, { id: 2, marca: "Nissan" }, { id: 3, marca: "Bmw" }, { id: 4, marca: "Chery" },
        { id: 5, marca: "Chevrolet" }, { id: 6, marca: "Citroen" }, { id: 7, marca: "Dodge" },];

    if (isUpdate) { tituloPagina = 'Atualizar ' + carro; tituloBtn = 'Atualizar'; }
    else { tituloPagina = 'Salvar Carro'; obrigatorio = '*'; tituloBtn = 'Salvar' };

    useEffect(() => {
        if (new UsuarioService().estaAutenticado() === false) navigate("/login");

        if (isUpdate) {
            listagemService.carregaCardPorId(Number(carroId))
                .then(response => {
                    const carroDoBanco = response.data.data;

                    console.log(carroDoBanco)

                    setCarro(carroDoBanco.nome);
                    setAno(carroDoBanco.ano ? parseInt(carroDoBanco.ano) : 0);
                    setKm(carroDoBanco.km ? parseInt(carroDoBanco.km) : 0);
                    setMarcaId(carroDoBanco.marca?.id || 0);
                    setCor(carroDoBanco.cor);
                    setUrlImg(carroDoBanco.urlImagem);
                    setPreco(carroDoBanco.preco ? parseFloat(carroDoBanco.preco) : 0);
                    setTipo(carroDoBanco.tipo);
                    setReservado(carroDoBanco.reservado);
                    setModelo(carroDoBanco.modelo);
                });
        }
    }, []);

    const SubmitEv = (e: any) => {
        e.preventDefault();

        const corpoRequisicao = new Carro(0, carro!, Number(preco), urlImg, Number(ano), cor, Number(km), tipo, new Marca(marcaId, ''), modelo, reservado!);

        if (typeof (carroId) === 'undefined') {
            console.log(corpoRequisicao)
            listagemService.criarCard(corpoRequisicao)
                .then(() => {
                    toast.success('Carro salvo com sucesso!');
                    navigate("/administracao")
                })
                .catch(error => {
                    let erros = error.response.data;
                    for (let stacktrace in erros) toast.error(erros[stacktrace].error);
                });

        } else if (Number.isInteger(Number(carroId))) {
            listagemService.atualizarCard(Number(carroId), corpoRequisicao)
                .then(() => toast.success('Carro atualizado com sucesso!'))
                .catch((error) => { console.log(error) }); //toast.info('Você não informou nada.')); 
        }
    };

    return (
        <>
            <NavBar />

            <section className='modify-container'>
                <div className='modify-title'><h3>{tituloPagina}</h3></div>
                <form onSubmit={SubmitEv} className='modify-form-container'>
                    <div className="container modify-form-content">

                        <div className='modify-form-content-inputs'>
                            <div>
                                <div className='modify-form-content-input-item'>
                                    <label className='modify-form-content-input-text'>Carro {obrigatorio}</label>
                                    <input className="form-input" onChange={e => setCarro(e.target.value)} type="text" value={carro} />
                                </div>

                                <div className='modify-form-content-input-item'>
                                    <label className='modify-form-content-input-text'>Preço {obrigatorio}</label>
                                    <input className="form-input" onChange={e => setPreco(Number(e.target.value.replace(/[^0-9]/g, '')))} type="text" value={preco} />
                                </div>

                                <div className='modify-form-content-input-item'>
                                    <label className='modify-form-content-input-text'>Ano {obrigatorio}</label>
                                    <input className="form-input" onChange={e => setAno(Number(e.target.value.replace(/[^0-9]/g, '')))} type="text" value={ano} />
                                </div>
                            </div>

                            <div>
                                <div className='modify-form-content-input-item'>
                                    <label className='modify-form-content-input-text'>Km {obrigatorio}</label>
                                    <input className="form-input" onChange={e => setKm(Number(e.target.value.replace(/[^0-9]/g, '')))} type="text" value={km} />
                                </div>

                                <div className='modify-form-content-input-item'>
                                    <label className='modify-form-content-input-text'>Imagem {obrigatorio}</label>

                                    <input
                                        className="form-control form-input-image"
                                        onChange={async (e) => {
                                            const base64Image = await Utils.handleUpload(e);
                                            setUrlImg(base64Image || '');
                                        }}
                                        type="file"
                                        accept="image/png, image/jpeg" />

                                </div>

                                <div className='modify-form-content-input-item'>
                                    <label className='modify-form-content-input-text'>Modelo {obrigatorio}</label>
                                    <input className="form-input" onChange={e => setModelo(e.target.value)} type="text" value={modelo} />
                                </div>
                            </div>
                        </div>

                        <div className='flex-selects-checks'>
                            <div className='modify-form-content-selects'>

                                <div className='modify-form-content-select-item'>
                                    <i className="bi bi-caret-down-fill"></i>
                                    <select className="form-select form-select-tipo"
                                        onChange={e => setTipo(e.target.value)}>
                                        <option disabled>Tipo</option>
                                        <option value="Suv">SUV</option>
                                        <option value="Van">Van</option>
                                        <option value="Sedan">Sedan</option>
                                        <option value="Pickup">Pickup</option>
                                        <option value="Hatchback">Hatchback</option>
                                        <option value="Coupe">Coupe</option>
                                        <option value="Convertible">Convertible</option>
                                    </select>
                                </div>

                                <div className='modify-form-content-select-item'>
                                    <i className="bi bi-caret-down-fill"></i>
                                    <select className="form-select" aria-label="Default select example"
                                        onChange={e => setCor(e.target.value)}>
                                        <option disabled>Cor</option>
                                        <option value="Vermelho">Vermelho</option>
                                        <option value="Amarelo">Amarelo</option>
                                        <option value="Prata">Prata</option>
                                        <option value="Azul">Azul</option>
                                        <option value="Preto">Preto</option>
                                        <option value="Dourado">Dourado</option>
                                        <option value="Branco">Branco</option>
                                        <option value="Cinza">Cinza</option>
                                        <option value="Outros">Outros</option>
                                    </select>
                                </div>

                                <div className='modify-form-content-select-item'>
                                    <i className="bi bi-caret-down-fill"></i>
                                    <select value={marcaId} className="form-select" aria-label=".form-select-lg example"
                                        onChange={e => setMarcaId(Number(e.target.value))}>
                                        {marcas.map(item => (<option key={item.id} value={item.id}>{item.marca}</option>))}
                                    </select>
                                </div>

                            </div>

                            <div className="form-check form-switch mb-2">

                                <div className='form-check-item mb-1'>
                                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked"><strong>Indisponível</strong></label>
                                    <input className="form-check-input" onChange={e => setReservado(false)} type="checkbox" id="flexSwitchCheckChecked" checked={reservado ? false : true} />
                                </div>

                                <div className='form-check-item'>
                                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked"
                                        style={{ marginRight: '11px' }}><strong>Disponível</strong></label>
                                    <input className="form-check-input" onChange={e => setReservado(true)} type="checkbox" id="flexSwitchCheckChecked" checked={reservado ? true : false} />
                                </div>

                            </div>

                        </div>

                        <div className="modify-form-content-button container d-flex align-items-center ">
                            <button className='btn btn-primary btn-md form-update-btn mb-2'>{tituloBtn}</button>
                        </div>
                    </div>
                </form>
            </section >
        </>
    )
};