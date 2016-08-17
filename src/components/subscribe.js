import React from 'react';
import Button from '../../../components/button';
import Grid from '../../../components/grid';
import Overlay from '../../../components/overlay';
import Form from '../../../components/form/';
import FormInput from '../../../components/form/lib/form-input';
import { element } from '../../../base';

const Centered = element();


const Subscribe = (props) => (
  <Grid>
    <Form
      colSmall='4-5'
      colMedium='2-5'
      center
    >
      <Overlay
        background
        src='./subscribe.jpg'
      >
        <Centered vertical='middle' tall='parent'>
          <h2>{`Stop! {KOLAB}orate and listen!`}</h2>
          <p>Sign up to are great newsletter for all kinds of awesome things, suff.</p>
        </Centered>
      </Overlay>

      <Grid gutter='collapse'>
        <FormInput
          colSmall='3-5'
          placeholder='Enter Your Email'
          onChange={props.onChange}
          icon='envelope'
          container={{wide: true}}
        />
        <Button
          colSmall='2-5'
          body='Sign Up'
          onClick={props.onSubmit}
        />
      </Grid>
    </Form>
  </Grid>
);


Subscribe.propTypes = {
  onChange   : React.PropTypes.func,
  onSubmit  : React.PropTypes.func
};

export default Subscribe;
