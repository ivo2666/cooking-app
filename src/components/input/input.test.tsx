import { fireEvent , render, screen } from "@testing-library/react";
import Input, { InputProps } from ".";

describe('Input component', () => { 

  const setup = (props: InputProps) => {
    render(<Input {...props}/>)
    const input: HTMLInputElement = screen.getByLabelText(props.label)
    return input
  }
  test('should value prop to be equal to input value', () => { 
    const value = "test"
    const input = setup({value, label: "lable", handleChange: () => {}})
    expect(input.value).toBe(value)
   })
 })

// test("Input components", async () => {
//   let testHandleChange = "";
//   let testOnFocus = "";
//   const label = "test-input";
  
//   const valueAfterChange = "testHandleChange"; 
//   render(
//     <Input
//       label={label}
//       value={value}
//       onFocus={() => {
//         testOnFocus = "focus"
//       }}
//       handleChange={() => {
//         testHandleChange = valueAfterChange;
//       }}
//     />
//   );
  
//   const input: HTMLInputElement = screen.getByDisplayValue(value); 

//   fireEvent.focus(input);
//   expect(testOnFocus).toBe("focus");
  
//   expect(input).toBeInTheDocument();
//   expect(screen.getByText(label)).toBeInTheDocument();

//   fireEvent.change(input, {target: {value: valueAfterChange}})
  
//   expect(testHandleChange).toBe(valueAfterChange);
// });


// test('Input Component should have #f60257 border and text on error', () => { 
//   render(<Input
//     label="label"
//     value="test"
//     onFocus={() => {
      
//     }}
//     handleChange={() => {
      
//     }}
//     error={true}
//   />)

//   expect(screen.getByText("label")).toHaveClass('text-[#f60257]')
//  })