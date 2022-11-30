import React, { useEffect, useState } from "react";
import "../../App.css";
import Spinner from "../Spinner/index.js";

const Convertisseur = () => {
  const [searchInputValue, setSearchInputValue] = useState("0");
  const handleChange = (e) =>
    setSearchInputValue(e?.target?.value.replace(/^0+/, "") ?? "");

  const [stateDatas, setStateDatas] = useState({
    isLoading: true,
    datas: {}
  });

  const { isLoading, datas } = stateDatas;

  const checkValid = (value) => {
    var test = parseFloat(value);
    return test == value ? "valid" : "invalid";
  };

  const [selectBaseValue, setSelectBaseValue] = useState("EUR");
  const handleChangeSelectBase = (e) =>
    setSelectBaseValue(e?.target?.value ?? "");

  const [selectTargetValue, setSelectTargetValue] = useState("EUR");
  const handleChangeSelectTarget = (e) =>
    setSelectTargetValue(e?.target?.value ?? "");

  useEffect(() => {
    window.M.updateTextFields();
    const fetchDatas = async () => {
      if (searchInputValue !== 0) {
        const callApi = await fetch(
          `https://api.currencyapi.com/v3/latest?apikey=cH4XDbBnoyWde5L045pDDZHkUaz3x4WaoQzUh1e9&base_currency=${selectBaseValue}`
        );
        const { data } = await callApi.json();
        setStateDatas({ datas: data, isLoading: false });
      }
    };
    fetchDatas();
  }, [selectBaseValue]);

  return (
    <>
      <h3>Convertisseur</h3>
      <div className="col s8">
        <div className="row">
          <div className="col s6">
            <label>From</label>
            <select
              className="browser-default"
              name="inputDevises"
              id="inputDevises"
              value={selectBaseValue}
              onChange={handleChangeSelectBase}
            >
              <option value="EUR">EUR</option>
              <option value="CHF">CHF</option>
              <option value="GBP">GBP</option>
              <option value="USD">USD</option>
            </select>
          </div>
          <div className="col s6">
            <label>To</label>
            <select
              className="browser-default"
              name="outputDevises"
              id="outputDevises"
              value={selectTargetValue}
              onChange={handleChangeSelectTarget}
            >
              <option value="EUR">EUR</option>
              <option value="CHF">CHF</option>
              <option value="GBP">GBP</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="amount"
              type="text"
              className={checkValid(searchInputValue)}
              value={searchInputValue}
              onChange={handleChange}
            />
            <span
              className="helper-text"
              data-error="Erreur"
              data-success="Valide"
            ></span>
            <label htmlFor="amount">Montant</label>
          </div>
          <div className="input-field col s12">
            <h5>
              Result :{" "}
              {isLoading ? (
                <Spinner />
              ) : isNaN(searchInputValue * datas[selectTargetValue]?.value) ? (
                "0"
              ) : (
                searchInputValue * datas[selectTargetValue]?.value
              )}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Convertisseur;
