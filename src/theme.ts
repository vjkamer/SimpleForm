import styled from "styled-components";

// Wrapper

export const FormWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 1rem;
  line-height: 1.5rem;
  max-width: 35em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5rem;
  padding: 1rem 0.75rem;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1rem;
`;

// Forms, inputs, buttons

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const Input = styled.input`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 80%;
  margin-top: 0.5rem;
  padding: 0.75rem 0.75rem;
`;

export const Button = styled.button`
  width: 50%;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
`;
export const CancelButton = styled(Button)`
  background-color: #4d4d4d;
`;

export const TextArea = styled.textarea`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5rem;
  font-style: normal;
  font-weight: 400;
  width: 80%;
  margin-top: 0.5rem;
  padding: 0.75rem 0.75rem;
`;
// Text

export const Title = styled.h1`
  color: #4d4d4d;
  font-size: 2.2em;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Text = styled.p`
  color: red;
`;
