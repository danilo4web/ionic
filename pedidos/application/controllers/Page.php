<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Page extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */

	function __construct()
    {
        parent::__construct();
        $this->load->model('Modelo', 'banco', TRUE);
				$this->load->helper('url');
     }
	
	public function index()
	{
		$data["artigos"] = $this->banco->get_artigos();
		$this->load->view('index',$data);
	}
	

	
	public function cadastra_restaurante(){
	
		//$msg = $_POST["name"]." senha ".$_POST["password"];
		$msg = "";
		$request = array();
		$json = file_get_contents('php://input');
    	$request = json_decode($json, true);
    	$resposta = "";
    	$resposta2 = "";
    	if(!empty($request))
    	{
    		foreach ($request as $key => $val) 
    		{
		 
		        if($key == "name"){
		        	$resposta = $val;
		        }
					  if($key == "email"){
		        	$resposta2 = $val;
		        }
		        if($key == "password"){
		        	$resposta2 = $val;
		        }
		        else{
		        	$reposta = "DEU PAU!!!";
		        }
		    }
		}
		else
		{
		    $resposta = "NULL";
		}
		
		$msg = $resposta." ".$resposta2;
		
		
		$response = array
		(
		'retorno'=>'ok',
		'erro'=> 'Nao ocorreu',
		'msg' => $msg
		);
		
		echo json_encode($response);
	}
	
	//----------------------------- IONIC ------------------------------------
	
	public function get_ionic(){
		$restaurantes = $this->banco->get_restaurantes();
		
		$response = array();
		foreach($restaurantes as $res){
			$restaurante = array();
			$restaurante["id"] = $res->id_restaurante;
			$restaurante["nome"] = $res->nome;
			$restaurante["telefone"] = $res->telefone;
			$restaurante["imgurl"] = $res->img_url;			
			array_push($response, $restaurante);
		}
		echo json_encode($response);
	}
	
	
	
	public function cadastrar_pedido_ionic_cart(){


		$msg = "";
		$request = array();
		$json = file_get_contents('php://input');


		$request = json_decode($json, true);
    	$cardapio_id = "";
		$usuario_id = "";
		$valor = "";
		$taxa_entrega = "";
		$nome = "";
    	$email = "";
		$observacao = "";

		$cardapios = "";
    	if(!empty($request))
    	{
    		foreach ($request as $key => $val) 
    		{
				if($key == "pedidos"){
					$pedidos = $val;	
				}
				else
		  	if($key == "usuario"){
		    	$usuario_id = $val;
		    }else
				if($key == "valor_total"){
		    	$valor = $val;
		    }else
				if($key == "taxa_entrega"){
		    	$taxa_entrega = $val;
		    }else
				if($key == "email"){
		    	$email = $val;
		    }else
		    if($key == "nome"){
		    	$nome = $val;
		    }else
		    if($key == "observacao"){
		    	$observacao = $val;
		    }else
				{
					$msg = "valor enviado invalido";
				}		        
		 	}
			$dados = array(
            'cardapio_id' => 1,
            'usuario_id' => $usuario_id,
						'valor' => $valor,
						'taxa_entrega' => $taxa_entrega,
						'nome' => $nome,
            'email' => $email
      );
				if($this->db->insert('pedidos', $dados)){
					$id_pedido = $this->db->insert_id();
					foreach ($pedidos as $key => $val) 
					{
						$ped_id = "";
						$ped_qnt = "";
						foreach($val as $key2 => $val2)
						{
							if($key2 == "cardapio"){
								foreach($val2 as $key3 => $val3)
								{
									if($key3 == "id"){
										$ped_id = $val3;
									}	
								}	
							}
							if($key2 == "quantidade"){
								$ped_qnt = $val2;
							}
						}
						$dados2 = array(
								'pedido_id' => $id_pedido,
								'cardapio_id' => $ped_id,
								'quantidade' => $ped_qnt
      				);
		    			$this->db->insert('cardapios_pedido', $dados2);
					}
					
					$msg = "Sucesso";
				}else{
					$msg = "Ocorreu algum erro";
				}				
		}
		else
		{
		    $msg = "Erro ao enviar os dados";
		}
		echo $msg;
		//echo json_encode($response);
	}
	public function cadastrar_pedido_ionic(){
	
		$msg = "";
		$request = array();
		$json = file_get_contents('php://input');
    $request = json_decode($json, true);
    $cardapio_id = "";
		$usuario_id = "";
		$valor = "";
		$taxa_entrega = "";
		$nome = "";
    $email = "";
		$observacao = "";
    if(!empty($request))
    {
    	foreach ($request as $key => $val) 
    	{
				if($key == "cardapioId"){
		    	$cardapio_id = $val;
		    }else
		  	if($key == "usuarioId"){
		    	$usuario_id = $val;
		    }else
				if($key == "valor"){
		    	$valor = $val;
		    }else
				if($key == "taxaEntrega"){
		    	$taxa_entrega = $val;
		    }else
				if($key == "email"){
		    	$email = $val;
		    }else
		    if($key == "nome"){
		    	$nome = $val;
		    }else
		    if($key == "observacao"){
		    	$observacao = $val;
		    }else
				{
					$msg = "valor enviado invalido";
				}		        
		 	}
			$dados = array(
            'cardapio_id' => $cardapio_id,
            'usuario_id' => $usuario_id,
						'valor' => $valor,
						'taxa_entrega' => $taxa_entrega,
						'nome' => $nome,
            'email' => $email
      );
				if($this->db->insert('pedidos', $dados)){
					$msg = "Registro gravado com sucesso";
				}else{
					$msg = "Ocorreu algum erro";
				}				
		}
		else
		{
		    $msg = "Erro ao enviar os dados";
		}
		echo $msg;
		//echo json_encode($response);
	}
	
	public function cadastrar_usuario_ionic(){
	
		$msg = "";
		$request = array();
		$json = file_get_contents('php://input');
    	$request = json_decode($json, true);
    	$nome = "";
    	$email = "";
			$password = "";
    	if(!empty($request))
    	{
    		foreach ($request as $key => $val) 
    		{
		        if($key == "nome"){
		        	$nome = $val;
		        }else
					  if($key == "email"){
		        	$email = $val;
		        }else
		        if($key == "password"){
		        	$password = $val;
		        }else{
							$msg = "valor enviado invalido";
						}		        
		    }
				$dados = array(
            'nome' => $nome,
            'email' => $email,
            'password' => $password
        );
				
				if($this->db->insert('usuarios_app', $dados)){
					$insert_id = $this->db->insert_id();
					$msg = $insert_id."|sucesso";
				}else{
					$msg = "Ocorreu algum erro";
				}				
		}
		else
		{
		    $msg = "Erro ao enviar os dados";
		}
		echo $msg;
		//echo json_encode($response);
	}
	//-------------------------------------------------------
	public function login_ionic(){
		$msg = "";
		$request = array();
		$json = file_get_contents('php://input');
    	$request = json_decode($json, true);
    	$email = "";
		$password = "";
    	if(!empty($request)) {
    		foreach ($request as $key => $val)  {
				if($key == "email"){
		        	$email = $val;
		        } else if($key == "password"){
		        	$password = $val;
		        } else{
					$msg = "valor enviado invalido";
				}		        
		    }
			$retornoLogin = $this->banco->validate_login($email, $password);


			if($retornoLogin){
				foreach($retornoLogin as $ret)
				$msg = $ret->id."|sucesso|" . $ret->nome;
			} else {
				$msg = "Email ou senha inválidos";
			}			
		}
		else
		{
		    $msg = "Erro ao enviar os dados";
		}
		echo $msg;
	}
	
	
	//----------------------------- IONIC ---------------------------
	
	public function get_restaurantes_json(){
		$restaurantes = $this->banco->get_restaurantes();
		
		$response["restaurantes"] = array();
		foreach($restaurantes as $res){
			$restaurante = array();
			$restaurante["id"] = $res->id_restaurante;
			$restaurante["nome"] = $res->nome;
			$restaurante["tipo"] = $res->tipo;
			$restaurante["endereco"] = $res->endereco;
			$restaurante["telefone"] = $res->telefone;
			$restaurante["celular"] = $res->celular;
			$restaurante["imgurl"] = $res->img_url;
			$restaurante["flag_pedido_cadastro"] = $res->flag_pedido_cadastrado;			
			$restaurante["latitude"] = $res->latitude;
			$restaurante["longitude"] = $res->longitude;
			
			array_push($response["restaurantes"], $restaurante);
		}
		echo json_encode($response);
	}
	
	public function testeListSuperNosso(){
			echo '{"CERVEJA", "ÁGUA"}'; 
			
	}
	
	
	
	public function get_pratos_json($id){
		$pratos = $this->banco->get_pratos($id);
		$response["pratos"] = array();
		foreach($pratos as $res){
			$prato = array();
			$prato["id"] = $res->id;
			$prato["nome"] = $res->nome;
			$prato["tipo"] = $res->tipo;
			$prato["arroz"] = $res->arroz;
			$prato["feijao"] = $res->feijao;
			$prato["ingredientes"] = $res->ingredientes;
			$prato["observacao"] = $res->observacao;
			$prato["img_url"] = $res->img_url;			
			array_push($response["pratos"], $prato);
		}
		echo json_encode($response);
	}	
	
	public function get_ionic_cardapio_json($id){
		$pratos = $this->banco->get_pratos($id);
		$response = array();
		foreach($pratos as $res){
			$prato = array();
			$prato["id"] = $res->id;
			$prato["nome"] = $res->nome;
			$prato["tipo"] = $res->tipo;
			$prato["ingredientes"] = $res->ingredientes;
			$prato["preco"] = "15";
			$prato["imgurl"] = $res->img_url;			
			array_push($response, $prato);
		}
		echo json_encode($response);
	}
	
	public function get_ionic_pedidos_json2($id){
		$pratos = $this->banco->get_pedidos($id);
		$response = array();
		foreach($pratos as $res){
			$prato = array();
			$prato["id"] = $res->id;
			$prato["cardapio_id"] = $res->cardapio_id;
			$prato["usuario_id"] = $res->usuario_id;
			$prato["valor"] = $res->valor;
			$prato["taxa_entrega"] = "15";		
			array_push($response, $prato);
		}
		echo json_encode($response);
	}	
		
	public function get_ionic_cart_json($id){
		$pedidos_db = $this->banco->get_pedidos($id);
		$response = array();
		
		foreach($pedidos_db as $res){
			$pedidos = array();
			$pedido = array();
			$cart = array();
			$cart["id"] = $res->id;
			
			$cart_pedidos = $this->banco->get_cart_pedidos($res->id);
				//cardapios_pedido
			foreach($cart_pedidos  as $ped){				
				$cardapios = $this->banco->get_pratos_by_id($ped->cardapio_id);
				$cardapio = array();
				
				foreach($cardapios as $car){
					$cardapio["id"] = $car->id;
					$cardapio["nome"] = $car->nome;
					$cardapio["tipo"] = $car->tipo;
					$cardapio["ingredientes"] = $car->ingredientes;						
				}
				$pedido["cardapio"] = $cardapio;
				$pedido["quantidade"] = $ped->quantidade;
 				array_push($pedidos, $pedido);
			}	
			$cart["pedidos"] = $pedidos;
			$cart["usuario"] = $res->usuario_id;
			$cart["valor"] = $res->valor;
			$cart["taxa_entrega"] = "15";
			$cart["email"] = $res->email;
			array_push($response, $cart);
		}
		echo json_encode($response);
	}			
	public function get_ionic_pedidos_json($id){
		$pedidos_db = $this->banco->get_pedidos($id);
		$response = array();
		$cardapio = array();
		foreach($pedidos_db as $res){
			$pedidos = array();
			$pedidos["id"] = $res->id;			
			$cardapios = $this->banco->get_pratos_by_id($res->cardapio_id);
			foreach($cardapios as $car){
				$cardapio["id"] = $car->id;
				$cardapio["nome"] = $car->nome;
				$cardapio["tipo"] = $car->tipo;
				$cardapio["ingredientes"] = $car->ingredientes;						
			}	
			$pedidos["cardapio"] = $cardapio;
			$pedidos["usuario"] = $res->usuario_id;
			$pedidos["valor"] = $res->valor;
			$pedidos["taxa_entrega"] = "15";
			$pedidos["email"] = $res->email;
			array_push($response, $pedidos);
			
		}
		echo json_encode($response);
	}	
 	public function get_restaurantes_json_new(){
		$restaurantes = $this->banco->get_restaurantes();
		$response["restaurantes"] = array();
		$endereco = array();
		foreach($restaurantes as $res){
			$restaurante = array();
			$restaurante["id"] = $res->id_restaurante;
			$restaurante["nome"] = $res->nome;
			$restaurante["tipo"] = $res->tipo;
			$enderecos = $this->banco->get_endereco_by_id($res->id_restaurante);
			foreach($enderecos as $end){				
				$endereco["logradouro"] = $end->endereco;
				$endereco["numero"] = $end->numero;
				if($end->complemento != ''){
					$endereco["complemento"] = $end->complemento;
				}else{
					$endereco["complemento"] = '';
				}	
				$endereco["complemento"] = $end->complemento;
				$endereco["bairro"] = $end->bairro;
				$endereco["cidade"] = $end->cidade;
				$endereco["estado"] = $end->estado;
				if($end->cep != ''){
					$endereco["cep"] = $end->cep;
				}else{
					$endereco["cep"] = '';
				}	
			}
			$restaurante["endereco"] = $endereco;
			$restaurante["telefone"] = $res->telefone;
			$restaurante["celular"] = $res->celular;
			$restaurante["imgurl"] = $res->img_url;
			$restaurante["flag_pedido_cadastro"] = $res->flag_pedido_cadastrado;			
			$restaurante["latitude"] = $res->latitude;
			$restaurante["longitude"] = $res->longitude;
			$restaurante["pedido_url"] = $res->pedido_url;	
			array_push($response["restaurantes"], $restaurante);
		}
		echo json_encode($response);
	}
}



