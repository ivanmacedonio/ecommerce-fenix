import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import disc from "../assets/discount.svg";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Loader } from "../components/Loader";
import useFetchData from "../hooks/FetchData";
import "../styles/detail.css";
export const Detail = () => {
  const productId = useParams();
  const { data, loading, error } = useFetchData(
    `http://127.0.0.1:9000/detail/${productId.id}/`
  );

  if (error) {
    console.log(error);
  }
  useEffect(() => {
    console.log(data);
  }, [loading]);
  return (
    <section>
      <Header></Header>
      {data === null ? (
        <Loader></Loader>
      ) : (
        <article className="detail-cnt">
          <div className="img-detail">
            <img src={`http://127.0.0.1:9000${data.image}`} alt="" />
          </div>
          <div className="detail-card">
            <h2 id="envio">Envío gratis</h2>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            {data.discount === null ? (
              <h3>{data.price} €</h3>
            ) : (
              <section>
                <h3 id="price-discounted">{data.price} €</h3>
                <label>
                  <img src={disc} alt="" />
                  <h3 id="discount">{data.price - data.discount}€</h3>
                </label>
              </section>
            )}
            {data.available === true ? <button>Añadir al carrito</button> : <button>No disponible</button> }
            
          </div>
        </article>
      )}
      <article className="related">
        <Footer></Footer>
      </article>
    </section>
  );
};
