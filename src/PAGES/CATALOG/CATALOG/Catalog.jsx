import React, { useContext, useEffect, useState } from "react";
import { CustomContext } from "../../../utils/context";
import Card from '../CARDS/Card';
import SideItem from '../SideItem/SideItem';
import './Catalog.scss'

const Catalog = () => {
  const {
    genre,
    getProducts,
    setPage,
    page,
    handleNextPage,
    handlePrevPage,
    endIndex,
    currentPage,
    setCurrentPage,
  } = useContext(CustomContext);
  const [show, setShow] = useState(true);
  const { products } = useContext(CustomContext);

  useEffect(() => {
    getProducts();
  }, [genre]);

  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog__inner">
          <div className="catalog__sideBar">
            <div
              style={{ flexDirection: `${show ? "row" : "column-reverse"}` }}
              f={`${show ? "cool" : "un"}`}
              className="catalog__sideBar-title"
            >
              <h2 className={`${show ? "" : "jarno"}`}>Жанры</h2>
              {show ? (
                <p onClick={() => setShow(!show)}>
                  все
                  <svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.92806 1.5L12 11.5L1.92806 21.5" stroke="#878787" stroke-width="3" stroke-linecap="round"/>
                  </svg>
                </p>
              ) : (
                <p onClick={() => setShow(!show)}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.875 15.5588L0.275 8.86858C0.175 8.76721 0.104 8.6574 0.0619998 8.53914C0.0206665 8.42088 0 8.29417 0 8.15901C0 8.02386 0.0206665 7.89715 0.0619998 7.77889C0.104 7.66063 0.175 7.55081 0.275 7.44945L6.875 0.759261C7.05833 0.573422 7.28733 0.476111 7.562 0.467326C7.83733 0.459216 8.075 0.556528 8.275 0.759261C8.475 0.945099 8.57933 1.17723 8.588 1.45565C8.596 1.73474 8.5 1.97566 8.3 2.17839L3.4 7.14535H14.575C14.8583 7.14535 15.096 7.24232 15.288 7.43627C15.4793 7.63089 15.575 7.87181 15.575 8.15901C15.575 8.44622 15.4793 8.68679 15.288 8.88074C15.096 9.07536 14.8583 9.17268 14.575 9.17268H3.4L8.3 14.1396C8.48333 14.3255 8.57933 14.562 8.588 14.8492C8.596 15.1364 8.5 15.3729 8.3 15.5588C8.11667 15.7615 7.88333 15.8629 7.6 15.8629C7.31667 15.8629 7.075 15.7615 6.875 15.5588V15.5588Z" fill="#878787"/>
                  </svg>
                  Назад
                </p>
              )}
            </div>
            <div className="catalog__sideBar-type">Тип</div>
            <div className="catalog__sideBar-checks">
              <SideItem value={"Манга"} text="Манга" />
              <SideItem value={"Манхва"} text="Манхва" />
              <SideItem value={"Западный комикс"} text="Комиксы" />
              <SideItem value={"Маньхуа"} text="Маньхуа" />
              {show === false && <SideItem value={"Манга"} text="Боевик" />}
              {show === false && (
                <SideItem value={"Манхва"} text="Боевые искуства" />
              )}
              {show === false && (
                <SideItem value={"Западный комикс"} text="Гарем" />
              )}
              {show === false && (
                <SideItem value={"Рукомикс"} text="Гендерная интрига" />
              )}
              {show === false && (
                <SideItem value={"Манга"} text="Героическое фентези" />
              )}
              {show === false && (
                <SideItem value={"Манхва"} text="Детектив" />
              )}
              {show === false && (
                <SideItem value={"Западный комикс"} text="Дзёсэй" />
              )}
              {show === false && (
                <SideItem value={"Рукомикс"} text="Додзинси" />
              )}
              {show === false && <SideItem value={"Манга"} text="Драмма" />}
              {show === false && <SideItem value={"Манхва"} text="Игра" />}
              {show === false && (
                <SideItem value={"Западный комикс"} text="История" />
              )}
              {show === false && (
                <SideItem value={"Рукомикс"} text="Киберпанк" />
              )}
              {show === false && <SideItem value={"Манга"} text="Кодомо" />}
            </div>
            <div className="catalog__sideBar-year">
              <input type="number" placeholder="От 0" name="" id="" />
              <span>—</span>
              <input type="number" placeholder="До 2023" name="" id="" />
            </div>
            <div className="catalog__sideBar-useBtn">
              <input
                onClick={() => setPage(page + 1)}
                type="button"
                value="Сбросить"
              />
              <input type="button" value="Применить" />
            </div>
          </div>
          <div className="catalog__inner-blocks">
            <Card key={products.id} products={products} />
          </div>
        </div>
        <div className="catalog__selectore">
          <div className="catalog__selectore-paginate">
            <button
              className="catalog__selectore-paginate_left"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            ></button>
            <span
              style={{ display: `${currentPage !== 1 ? "block" : "none"}` }}
              onClick={() => setCurrentPage(currentPage - 1)}
            >{`${currentPage !== 1 ? currentPage - 1 : ""}`}</span>
            <span className="catalog__selectore-paginate_active">
              {currentPage}
            </span>
            <span
              onClick={() => setCurrentPage(currentPage + 1)}
              style={{
                display: `${
                  endIndex >= products.data.length ? "none" : "block"
                }`,
              }}
            >
              {`${endIndex >= products.data.length ? "" : currentPage + 1}`}
            </span>
            <span
              onClick={() => setCurrentPage(currentPage + 2)}
              style={{
                display: `${
                  endIndex >= products.data.length ? "none" : "block"
                }`,
              }}
            >
              {currentPage + 2}
            </span>
            <span>...</span>
            <span>99+</span>
            <button
              className="catalog__selectore-paginate_right"
              onClick={handleNextPage}
              disabled={endIndex >= products.data.length}
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalog;
