import * as React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import { theme } from '../src/components/MUITheme';
import { GraphQLVoyager } from '../src';


import schema from './schema/schema';


export default class Viz extends React.Component {
  state = {
    schema,
  };

  public render() {
    const { schema } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <GraphQLVoyager introspection={schema} />
      </MuiThemeProvider>
    );
  }
}

render(<Viz />, document.getElementById('panel_root'));
