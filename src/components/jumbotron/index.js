import React from 'react';
import {
  Container,
  Item,
  Inner,
  Title,
  Left,
  Right,
  SubTitle,
  Image,
} from './styles/jumbotron';

export default function Jumbotron({
  children,
  direction = 'row',
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Left = function JumbotronContainer({ children, ...restProps }) {
  return <Left {...restProps}>{children}</Left>;
};

Jumbotron.Title = function JumbotronContainer({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronContainer({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Right = function JumbotronContainer({ children, ...restProps }) {
  return <Right {...restProps}>{children}</Right>;
};

Jumbotron.Image = function JumbotronContainer({ ...restProps }) {
  return <Image {...restProps} />;
};
