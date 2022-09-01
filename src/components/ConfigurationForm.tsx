import React from "react";
import { Formik } from "formik";

import { AppTabs } from "../App";
import { Configuration } from "./types";

interface ConfigurationFormValues {
  jsonFormConfiguration: string;
}

interface ConfigurationFormProps {
  setConfiguration: React.Dispatch<React.SetStateAction<Configuration>>;
  setCurrentTab: React.Dispatch<React.SetStateAction<AppTabs>>;
}

export function ConfigurationForm({
  setConfiguration,
  setCurrentTab,
}: ConfigurationFormProps) {
  const initialValues: ConfigurationFormValues = { jsonFormConfiguration: "" };

  const handleFormSubmit = (values: ConfigurationFormValues) => {
    const parsedJsonFormConfiguration: Configuration = JSON.parse(
      values.jsonFormConfiguration
    );
    setConfiguration({
      title: parsedJsonFormConfiguration.title ?? "",
      items: parsedJsonFormConfiguration.items ?? [],
      buttons: {
        applyButtonLabel:
          parsedJsonFormConfiguration.buttons.applyButtonLabel ?? "Apply",
        cancelButtonLabel:
          parsedJsonFormConfiguration.buttons.cancelButtonLabel ?? "Cancel",
      },
    });
    setCurrentTab("resultForm");
  };

  const handleValidation = (values: ConfigurationFormValues) => {
    const errors: { jsonFormConfiguration?: string } = {};

    // TODO: improve validation
    try {
      JSON.parse(values.jsonFormConfiguration);
    } catch (error) {
      errors.jsonFormConfiguration = "Input JSON is not valid";
    } finally {
      return errors;
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validate={handleValidation}
        validateOnChange
      >
        {({ values, errors, handleChange, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <textarea
                name="jsonFormConfiguration"
                value={values.jsonFormConfiguration}
                onChange={handleChange}
              />
              {errors.jsonFormConfiguration && (
                <p>{errors.jsonFormConfiguration}</p>
              )}
              <button type="submit">Apply</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
}
