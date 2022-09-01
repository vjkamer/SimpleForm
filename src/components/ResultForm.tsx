import React from "react";
import { Formik, FormikValues } from "formik";

import { AppTabs } from "../App";
import { Configuration, Item } from "./types";

interface ResultFormProps {
  configuration: Configuration;
  setCurrentTab: React.Dispatch<React.SetStateAction<AppTabs>>;
}

export function ResultForm({ configuration, setCurrentTab }: ResultFormProps) {
  const initialValues: FormikValues = configuration.items.reduce(
    (values, item) => {
      return {
        ...values,
        [item.id]: item.initialValue,
      };
    },
    {}
  );

  const renderItemByType = (
    item: Item,
    values: FormikValues,
    handleChange: (e: React.ChangeEvent<any>) => void
  ) => {
    switch (item.type) {
      case "single string":
        return (
          <input
            type="text"
            name={item.id}
            id={item.id}
            value={values[item.id]}
            onChange={handleChange}
          />
        );
      case "multiple strings":
        return (
          <textarea
            name={item.id}
            id={item.id}
            value={values[item.id]}
            onChange={handleChange}
          />
        );
      case "numeric":
        return (
          <input
            type="number"
            name={item.id}
            id={item.id}
            value={values[item.id]}
            onChange={handleChange}
          />
        );
      case "logical":
        return item.options.map((option) => (
          <label key={option.value}>
            <input
              type="checkbox"
              name={item.id}
              id={option.value}
              value={option.value}
              onChange={handleChange}
              checked={values[item.id].some((o: string) => o === option.value)}
            />
            {option.label}
          </label>
        ));
      case "enum":
        return item.options.map((option) => (
          <label key={option.value}>
            <input
              type="radio"
              name={item.id}
              value={option.value}
              onChange={handleChange}
              checked={option.value === values[item.id]}
            />
            {option.label}
          </label>
        ));
      case "date":
        return (
          <input
            type="date"
            name={item.id}
            id={item.id}
            value={values[item.id]}
            onChange={handleChange}
          />
        );
    }
  };

  return (
    <div>
      {configuration.title && <h1>{configuration.title}</h1>}
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, "\t"));
        }}
      >
        {({ values, handleChange, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              {configuration.items.map((item) => (
                <div key={item.id}>
                  <label htmlFor={item.id}>{item.label}</label>
                  {renderItemByType(item, values, handleChange)}
                </div>
              ))}
              <button type="submit">
                {configuration.buttons.applyButtonLabel}
              </button>
              <button
                onClick={() => {
                  setCurrentTab("configurationForm");
                }}
              >
                {configuration.buttons.cancelButtonLabel}
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
