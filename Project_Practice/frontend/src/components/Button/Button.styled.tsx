import styled, { css } from "styled-components";


const StyledButton = styled.button.attrs<any>((props) => ({}))`
  ${(props) => {
    // const middle = props.theme.colors.middle;
    const use = props.use || "basic";
    const bgcolor = props.bgcolor || "#D3E0EA";
    const color = props.color || "white";
    const UseStyles: any = {
      basic: `
        background-color: ${bgcolor};
        color: ${color};

        &:hover{
          opacity:0.5;
        }

      `,

      secondary: `
        background-color:white;
        border: 2px solid ${bgcolor};
        color: #666666;
        &:hover{
          opacity:0.5;
          background-color: #dbdada;
        }
      `,

      warn: `
        background-color: #f4fd6c;
        color: #666666;
      `,

      error: `
        background-color: #ff2020c0;
        color: white;
      `,

      disable: `
        background-color: #cccccc;
        color: #666666;
        cursor: not-allowed;
      `,

      naver: `
        background-color: #04c75a;
        color: white;
      `,
    };


    return css`
      cursor: pointer;
      border: 1px solid black;
      line-height: 1;
      padding: 10px;
      width :100%;
      margin: 5px;
      ${UseStyles[use]};
      `;
  }};
`;

export { StyledButton };
