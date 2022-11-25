# react-interactive-list
> An interactive, dynamic list of components with add / remove actions.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-interactive-list
```

## usage
1. import css
  ```scss
  @import "~@jswork/react-interactive-list/dist/style.css";

  // or use sass
  @import "~@jswork/react-interactive-list/dist/style.scss";

  // customize your styles:
  $react-interactive-list-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactInteractiveList from '@jswork/react-interactive-list';
  import styled from 'styled-components';

  const Container = styled.div`
    width: 80%;
    margin: 30px auto 0;
  `;

  export default (props: any) => {
    return (
      <Container>
        <ReactInteractiveList />
      </Container>
    );
  };

  ```

## preview
- https://afeiship.github.io/react-interactive-list/

## license
Code released under [the MIT license](https://github.com/afeiship/react-interactive-list/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-interactive-list
[version-url]: https://npmjs.org/package/@jswork/react-interactive-list

[license-image]: https://img.shields.io/npm/l/@jswork/react-interactive-list
[license-url]: https://github.com/afeiship/react-interactive-list/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-interactive-list
[size-url]: https://github.com/afeiship/react-interactive-list/blob/master/dist/react-interactive-list.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-interactive-list
[download-url]: https://www.npmjs.com/package/@jswork/react-interactive-list
