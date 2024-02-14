import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { useStore } from "../hooks/useCounterStore";
import "../styles/checkout.css";
export const Checkout = () => {
  const [total, setTotal] = useState(null);
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  const nav = useNavigate()
  const products = useStore((state) => state.items);
  useEffect(() => {
    if (products.length === 0){
      nav('/')
    }
    const totalPrice = products.reduce(
      (acc, product) => acc + product.price,
      0
    );
    setTotal(totalPrice);
  }, [products]);

  function submit(data) {
    console.log(data);
  }

  return (
    <section className="checkout-cnt">
      <Header></Header>
      <form className="formularios" onSubmit={handleSubmit(submit)}>
        <div className="form1">
          <h3> Facturación y envío</h3>
          <p>Nombre</p>
          <input type="text" {...register("nombre")} />
          <p>Apellido</p>
          <input type="text" {...register("apellido")} />
          <p>Teléfono </p>
          <input type="number " {...register("telefono")} />
          <p>Email</p>
          <input type="email" {...register("email")} />
          <p>Dirección</p>
          <input type="text" {...register("direccion")} />
          <p>Ciudad</p>
          <input type="text" {...register("ciudad")} />
          <p>Provincia</p>
          <input type="text" {...register("provincia")} />
          <p>Código postal</p>
          <input type="number" {...register("codigo postal")} />
        </div>
        <div className="form2">
          <div className="form2-grid">
            <h4>Producto</h4>
            <h4>Subtotal</h4>
            {products.map((product) => (
              <React.Fragment>
                <h5>{product.title}</h5>
                <h5>{product.price} €</h5>
              </React.Fragment>
            ))}
            <h5>Envío</h5>
            <h5 id="free">Gratis</h5>
            <h5>Total</h5>
            <h5>{total} €</h5>
          </div>
          <hr />
          <div className="checkout">
            <h3>Método de pago</h3>
            <label>
              <input type="checkbox" />
              <h4>Transferencia o deposito con Tarjeta</h4>
            </label>
            <label>
              <input type="checkbox" />
              <h4>Paypal</h4>
            </label>
            <button type="submit">Realizar pedido</button>
          </div>
        </div>
      </form>
    </section>
  );
};
