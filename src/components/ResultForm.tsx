import React from "react";
import { Formik, FormikValues } from "formik";

import {
  FormWrapper,
  Form,
  TextArea,
  Input,
  Title,
  CancelButton,
  Label,
  Box,
  Button,
} from "../theme";
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
          <Input
            type="text"
            name={item.id}
            id={item.id}
            value={values[item.id]}
            onChange={handleChange}
          />
        );
      case "multiple strings":
        return (
          <TextArea
            name={item.id}
            id={item.id}
            value={values[item.id]}
            onChange={handleChange}
          />
        );
      case "numeric":
        return (
          <Input
            type="number"
            name={item.id}
            id={item.id}
            value={values[item.id]}
            onChange={handleChange}
          />
        );
      case "logical":
        return item.options.map((option) => (
          <Label key={option.value}>
            <Input
              type="checkbox"
              name={item.id}
              id={option.value}
              value={option.value}
              onChange={handleChange}
              checked={values[item.id].some((o: string) => o === option.value)}
            />
            {option.label}
          </Label>
        ));
      case "enum":
        return item.options.map((option) => (
          <Label key={option.value}>
            <Input
              type="radio"
              name={item.id}
              value={option.value}
              onChange={handleChange}
              checked={option.value === values[item.id]}
            />
            {option.label}
          </Label>
        ));
      case "date":
        return (
          <Input
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
    <FormWrapper>
      {configuration.title && <Title>{configuration.title}</Title>}
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, "\t"));
        }}
      >
        {({ values, handleChange, handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit}>
              {configuration.items.map((item) => (
                <Box key={item.id}>
                  <Label htmlFor={item.id}>{item.label}</Label>
                  {renderItemByType(item, values, handleChange)}
                </Box>
              ))}
              <Button type="submit">
                {configuration.buttons.applyButtonLabel}
              </Button>
              <CancelButton
                onClick={() => {
                  setCurrentTab("configurationForm");
                }}
              >
                {configuration.buttons.cancelButtonLabel}
              </CancelButton>
            </Form>
          );
        }}
      </Formik>
    </FormWrapper>
  );
}
