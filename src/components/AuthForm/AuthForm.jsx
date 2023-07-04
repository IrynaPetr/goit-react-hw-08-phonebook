import { useState } from "react";
import { 
  Button,
 Form, 
 Input, 
 Label 
} from "./AuthForm.styled";


function AuthForm({ options=[], initialValue=[], onSubmit, buttonTitle }) {
  const [form, setForm] = useState(initialValue);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      {options.map(({ label, name, type, placeholder }) => (
        <Label key={name}>
          <Input
          type={type}
          name={name}
          value={form[name]}
          onChange={handleChange}
          placeholder={placeholder}
          required
          label={label}
          variant="standard"
          />
        </Label>
      ))}
      <Button type="submit">{buttonTitle}</Button>
    </Form>
  );
}

export default AuthForm;