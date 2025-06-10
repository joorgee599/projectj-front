
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import { getProductsByIdController, updateProductController } from "../../controllers/products/ProductController";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const FormEditProducts = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {
    getProductsById();        
  }, []);
    
    const getProductsById = async () => {
      const response = await getProductsByIdController(id);
      
      if(response.success){
        setCategories(response.data.categories);
        setBrands(response.data.brands);
        setFormValues({
          id: response.data.product.id,
          name: response.data.product.name,
          description: response.data.product.description,
          code: response.data.product.code,
          price: response.data.product.price,
          category_id: response.data.product.category_id,
          brand_id: response.data.product.brand_id,
          image: 1,
        });
      }else{
        alert(response.message || "Error al obtener el producto");
      } 
     
    }
    const {value, handleChange,resetForm,setFormValues} = useForm({
        id: "",
        name: "",
        description: "",
        code: "",
        price: "",
        category_id: "",
        brand_id: "",
        image: "",
    })

    const handleSubmit = async (e) => {

      e.preventDefault();
      const response= await updateProductController(value);
      if(response.success){
        navigate("/product/products");
        resetForm();
        alert(response.message || "Producto actualizado correctamente");  
      } else{
        alert(response.message || "Error al actualizar el producto");
      }
  }
    
  return (
    <Container>
        <Form className="border p-3" onSubmit={handleSubmit}>
          <Row>
            <Col className="d-flex justify-content-end gap-2">
              <Button className="btn btn-primary btn-sm" type="submit">
                Actualizar
              </Button>
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                autoComplete="off"
                name="name"
                value={value.name}
              
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                autoComplete="off"
                name="description"
                value={value.description}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Codigo</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="text"
                autoComplete="off"
                name="code"
                value={value.code}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Precio</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="number"
                autoComplete="off"
                name="price"
                value={value.price}
              />
            </Form.Group>

            
          </Row>
          <Row className="mb-3">
            
            <Form.Group as={Col}>
              <Form.Label>Categoria</Form.Label>
              <Form.Select onChange={handleChange} name="category_id" value={value.category_id}>
                <option value="">Seleccione</option>
                {
                  categories &&
                  categories.map(({id, name}) => (
                    <option key={id} value={id}>{name}</option>
                  ))
                }
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Marca</Form.Label>
              <Form.Select onChange={handleChange} name="brand_id" value={value.brand_id}>
                <option value="">Seleccione</option>
                {
                  brands &&
                  brands.map(({id, name}) => (
                    <option key={id} value={id}>{name}</option>
                  ))
                }
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">

            
            <Form.Group as={Col}>
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                onChange={handleChange}
                type="number"
                autoComplete="off"
                name="image"
                value={value.image}
              />
            </Form.Group>
          </Row>
        </Form>
      </Container>
  )
}

export default FormEditProducts